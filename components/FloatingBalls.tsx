import React, { useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";

interface Ball {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  baseRadius: number; // original target radius (doesn't shrink with fade)
  baseColor: [number, number, number];
  life: number; // 0-1, starts at 1, fades to 0 for spawned balls
  maxLife: number; // total lifetime in frames
  age: number; // frames alive
  isOriginal: boolean; // seed balls never die
}

// --- Tuning ---
const SEED_COUNT = 5; // starting balls
const MAX_BALLS = 14; // hard cap
const SPAWN_PER_COLLISION = 2; // child balls per collision
const CHILD_LIFETIME_MIN = 400; // frames (~6.7s at 60fps)
const CHILD_LIFETIME_MAX = 900; // frames (~15s)
const MIN_RADIUS = 10;
const MAX_RADIUS = 50;
const CHILD_RADIUS_MIN = 10;
const CHILD_RADIUS_MAX = 26;
const MAX_SPEED = 3.2;
const MIN_SPEED = 1.2;
const CHILD_BURST_SPEED = 3.5; // initial burst speed for spawned balls
const Z_SPEED = 0.004;
const MIN_Z = 0.2;
const MAX_Z = 1;
const SPAWN_COOLDOWN = 30; // min frames between spawns from same collision pair

const LIGHT_PALETTE: [number, number, number][] = [
  [220, 65, 62],
  [260, 55, 65],
  [200, 60, 60],
  [280, 45, 63],
  [180, 50, 58],
  [320, 45, 65],
  [240, 55, 68],
  [160, 45, 58],
  [300, 40, 63],
];

const DARK_PALETTE: [number, number, number][] = [
  [220, 75, 58],
  [260, 65, 60],
  [200, 70, 55],
  [280, 60, 58],
  [180, 60, 50],
  [320, 55, 58],
  [240, 65, 62],
  [160, 55, 52],
  [300, 50, 58],
];

function randomSpeed(): number {
  const s = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
  return Math.random() < 0.5 ? s : -s;
}

function createSeedBall(
  canvasW: number,
  canvasH: number,
  palette: [number, number, number][]
): Ball {
  const z = 0.5 + Math.random() * 0.5; // seeds are bigger / closer
  const baseRadius =
    (30 + Math.random() * (MAX_RADIUS - 30)) * (0.5 + 0.5 * z);
  return {
    x: baseRadius + Math.random() * (canvasW - 2 * baseRadius),
    y: baseRadius + Math.random() * (canvasH - 2 * baseRadius),
    z,
    vx: randomSpeed(),
    vy: randomSpeed(),
    vz: (Math.random() - 0.5) * Z_SPEED * 2,
    radius: baseRadius,
    baseRadius,
    baseColor: palette[Math.floor(Math.random() * palette.length)],
    life: 1,
    maxLife: Infinity,
    age: 0,
    isOriginal: true,
  };
}

function spawnChild(
  parentA: Ball,
  parentB: Ball,
  palette: [number, number, number][]
): Ball {
  const cx = (parentA.x + parentB.x) / 2;
  const cy = (parentA.y + parentB.y) / 2;
  const cz = (parentA.z + parentB.z) / 2;

  // Random burst direction
  const angle = Math.random() * Math.PI * 2;
  const speed = CHILD_BURST_SPEED * (0.6 + Math.random() * 0.4);

  const baseRadius =
    CHILD_RADIUS_MIN + Math.random() * (CHILD_RADIUS_MAX - CHILD_RADIUS_MIN);
  const maxLife =
    CHILD_LIFETIME_MIN +
    Math.random() * (CHILD_LIFETIME_MAX - CHILD_LIFETIME_MIN);

  // Mix parent colors: pick one parent's hue randomly, shift slightly
  const parentColor =
    Math.random() < 0.5 ? parentA.baseColor : parentB.baseColor;
  const hueShift = (Math.random() - 0.5) * 40;
  const newColor: [number, number, number] = [
    (parentColor[0] + hueShift + 360) % 360,
    parentColor[1] + (Math.random() - 0.5) * 10,
    parentColor[2] + (Math.random() - 0.5) * 8,
  ];

  // Occasionally pick a fresh palette color instead
  if (Math.random() < 0.3) {
    const fresh = palette[Math.floor(Math.random() * palette.length)];
    newColor[0] = fresh[0];
    newColor[1] = fresh[1];
    newColor[2] = fresh[2];
  }

  return {
    x: cx + (Math.random() - 0.5) * 10,
    y: cy + (Math.random() - 0.5) * 10,
    z: Math.max(MIN_Z, Math.min(MAX_Z, cz + (Math.random() - 0.5) * 0.3)),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    vz: (Math.random() - 0.5) * Z_SPEED * 3,
    radius: baseRadius * 0.3, // start tiny, will grow
    baseRadius,
    baseColor: newColor,
    life: 1,
    maxLife,
    age: 0,
    isOriginal: false,
  };
}

/** Draw a single 3D-looking sphere */
function drawSphere(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  h: number,
  s: number,
  l: number,
  alpha: number,
  isDark: boolean
) {
  if (r < 0.5 || alpha < 0.01) return;

  ctx.save();
  ctx.translate(x, y);

  const lightX = -r * 0.38;
  const lightY = -r * 0.38;
  const body = ctx.createRadialGradient(lightX, lightY, r * 0.04, 0, 0, r);

  if (isDark) {
    body.addColorStop(0, `hsla(${h}, ${s + 5}%, ${l + 28}%, ${alpha})`);
    body.addColorStop(0.25, `hsla(${h}, ${s}%, ${l + 12}%, ${alpha})`);
    body.addColorStop(0.55, `hsla(${h}, ${s}%, ${l}%, ${alpha})`);
    body.addColorStop(0.8, `hsla(${h}, ${s + 5}%, ${l - 14}%, ${alpha})`);
    body.addColorStop(1, `hsla(${h}, ${s + 8}%, ${l - 25}%, ${alpha * 0.7})`);
  } else {
    body.addColorStop(
      0,
      `hsla(${h}, ${s}%, ${Math.min(l + 30, 97)}%, ${alpha})`
    );
    body.addColorStop(
      0.25,
      `hsla(${h}, ${s}%, ${Math.min(l + 15, 92)}%, ${alpha})`
    );
    body.addColorStop(0.55, `hsla(${h}, ${s}%, ${l}%, ${alpha})`);
    body.addColorStop(0.8, `hsla(${h}, ${s + 5}%, ${l - 12}%, ${alpha})`);
    body.addColorStop(
      1,
      `hsla(${h}, ${s + 10}%, ${l - 22}%, ${alpha * 0.65})`
    );
  }

  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = body;
  ctx.fill();

  // Specular highlight
  const specX = -r * 0.32;
  const specY = -r * 0.32;
  const spec = ctx.createRadialGradient(specX, specY, 0, specX, specY, r * 0.38);
  const specAlpha = isDark ? 0.45 : 0.6;
  spec.addColorStop(0, `hsla(0, 0%, 100%, ${specAlpha * alpha})`);
  spec.addColorStop(0.4, `hsla(0, 0%, 100%, ${specAlpha * 0.35 * alpha})`);
  spec.addColorStop(1, `hsla(0, 0%, 100%, 0)`);
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = spec;
  ctx.fill();

  // Secondary soft light
  const sec = ctx.createRadialGradient(-r * 0.15, -r * 0.15, r * 0.1, 0, 0, r * 0.75);
  sec.addColorStop(0, `hsla(${h}, ${s}%, 95%, ${alpha * 0.18})`);
  sec.addColorStop(1, `hsla(${h}, ${s}%, 95%, 0)`);
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = sec;
  ctx.fill();

  // Rim light
  const rim = ctx.createRadialGradient(r * 0.28, r * 0.3, r * 0.05, r * 0.15, r * 0.15, r * 0.7);
  const rimAlpha = isDark ? 0.12 : 0.08;
  rim.addColorStop(0, `hsla(${(h + 40) % 360}, ${s}%, ${l + 20}%, ${rimAlpha * alpha})`);
  rim.addColorStop(1, `hsla(${(h + 40) % 360}, ${s}%, ${l + 20}%, 0)`);
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = rim;
  ctx.fill();

  // Drop shadow
  ctx.save();
  ctx.translate(r * 0.08, r * 0.12);
  const shadow = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, r * 1.05);
  shadow.addColorStop(0, `hsla(${h}, ${s}%, ${isDark ? 8 : 20}%, ${alpha * 0.18})`);
  shadow.addColorStop(0.7, `hsla(${h}, ${s}%, ${isDark ? 8 : 20}%, ${alpha * 0.05})`);
  shadow.addColorStop(1, `hsla(${h}, ${s}%, ${isDark ? 8 : 20}%, 0)`);
  ctx.beginPath();
  ctx.arc(0, 0, r * 1.05, 0, Math.PI * 2);
  ctx.fillStyle = shadow;
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

export const FloatingBalls: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const animRef = useRef<number>(0);
  const lastSpawnRef = useRef<Map<string, number>>(new Map()); // cooldown tracker
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  const getPalette = useCallback(
    () => (themeRef.current === "dark" ? DARK_PALETTE : LIGHT_PALETTE),
    []
  );

  // Initialize with only seed balls
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const palette = getPalette();
    ballsRef.current = Array.from({ length: SEED_COUNT }, () =>
      createSeedBall(canvas.width, canvas.height, palette)
    );

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [getPalette]);

  // Recolor on theme change
  useEffect(() => {
    const palette = resolvedTheme === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
    ballsRef.current.forEach((ball) => {
      ball.baseColor = palette[Math.floor(Math.random() * palette.length)];
    });
  }, [resolvedTheme]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;

    const animate = () => {
      frameCount++;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      let balls = ballsRef.current;
      const isDark = themeRef.current === "dark";
      const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;
      const newBalls: Ball[] = [];

      // --- Physics ---
      for (const b of balls) {
        b.x += b.vx;
        b.y += b.vy;
        b.z += b.vz;
        b.age++;

        // Lifetime fade for non-original balls
        if (!b.isOriginal) {
          const lifeRatio = b.age / b.maxLife;
          // Smooth fade: full opacity until 60% of life, then fade out
          if (lifeRatio < 0.6) {
            b.life = 1;
          } else {
            b.life = 1 - (lifeRatio - 0.6) / 0.4;
          }
          // Grow-in effect: expand from small to baseRadius over first 20 frames
          if (b.age < 20) {
            b.radius = b.baseRadius * (0.3 + 0.7 * (b.age / 20));
          }
        }

        // Z bounds
        if (b.z <= MIN_Z) {
          b.z = MIN_Z;
          b.vz = Math.abs(b.vz);
        } else if (b.z >= MAX_Z) {
          b.z = MAX_Z;
          b.vz = -Math.abs(b.vz);
        }

        // Scale visual radius with depth (for originals)
        if (b.isOriginal) {
          const zNorm = (b.z - MIN_Z) / (MAX_Z - MIN_Z);
          b.radius =
            (MIN_RADIUS + (MAX_RADIUS - MIN_RADIUS) * zNorm) *
            (0.5 + 0.5 * b.z);
          b.baseRadius = b.radius;
        }

        // Wall bounce
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx = Math.abs(b.vx);
        } else if (b.x + b.radius > W) {
          b.x = W - b.radius;
          b.vx = -Math.abs(b.vx);
        }
        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy = Math.abs(b.vy);
        } else if (b.y + b.radius > H) {
          b.y = H - b.radius;
          b.vy = -Math.abs(b.vy);
        }
      }

      // Ball-to-ball collisions + spawning
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i];
          const b = balls[j];
          if (Math.abs(a.z - b.z) > 0.4) continue;

          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.radius + b.radius;

          if (dist < minDist && dist > 0.01) {
            const nx = dx / dist;
            const ny = dy / dist;
            const dvx = a.vx - b.vx;
            const dvy = a.vy - b.vy;
            const dvn = dvx * nx + dvy * ny;

            if (dvn > 0) {
              const ma = a.radius * a.radius;
              const mb = b.radius * b.radius;
              const total = ma + mb;
              const imp = (2 * dvn) / total;

              a.vx -= imp * mb * nx;
              a.vy -= imp * mb * ny;
              b.vx += imp * ma * nx;
              b.vy += imp * ma * ny;

              a.vz += (Math.random() - 0.5) * 0.003;
              b.vz += (Math.random() - 0.5) * 0.003;

              // --- Atom-split spawning ---
              const pairKey = i < j ? `${i}-${j}` : `${j}-${i}`;
              const lastSpawn = lastSpawnRef.current.get(pairKey) || 0;

              if (
                frameCount - lastSpawn > SPAWN_COOLDOWN &&
                balls.length + newBalls.length < MAX_BALLS
              ) {
                lastSpawnRef.current.set(pairKey, frameCount);
                const count = Math.min(
                  SPAWN_PER_COLLISION,
                  MAX_BALLS - balls.length - newBalls.length
                );
                for (let k = 0; k < count; k++) {
                  newBalls.push(spawnChild(a, b, palette));
                }
              }
            }

            // Separate
            const overlap = minDist - dist;
            a.x -= (overlap / 2) * nx;
            a.y -= (overlap / 2) * ny;
            b.x += (overlap / 2) * nx;
            b.y += (overlap / 2) * ny;
          }
        }
      }

      // Add new spawns
      if (newBalls.length > 0) {
        balls.push(...newBalls);
      }

      // Remove dead balls (life <= 0)
      ballsRef.current = balls.filter((b) => b.isOriginal || b.life > 0);
      balls = ballsRef.current;

      // Speed management
      for (const b of balls) {
        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        const maxS = MAX_SPEED * (0.6 + 0.4 * b.z);
        if (speed > maxS) {
          b.vx = (b.vx / speed) * maxS;
          b.vy = (b.vy / speed) * maxS;
        }
        if (speed < MIN_SPEED * 0.5) {
          const angle = Math.random() * Math.PI * 2;
          b.vx += Math.cos(angle) * 0.6;
          b.vy += Math.sin(angle) * 0.6;
        }
        // Dampen child balls slightly over time for natural deceleration
        if (!b.isOriginal && b.age > 10) {
          b.vx *= 0.998;
          b.vy *= 0.998;
        }
        // Tiny random drift
        b.vx += (Math.random() - 0.5) * 0.04;
        b.vy += (Math.random() - 0.5) * 0.04;
      }

      // Depth sort (far first)
      balls.sort((a, b) => a.z - b.z);

      // --- Draw ---
      for (const b of balls) {
        const [h, s, l] = b.baseColor;
        const baseAlpha = 0.3 + 0.45 * b.z;
        const alpha = baseAlpha * b.life; // fade with lifetime
        drawSphere(ctx, b.x, b.y, b.radius, h, s, l, alpha, isDark);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};
