import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-gray-100 text-3xl">Rishikesh Shinde</h1>
      </main>

      <footer className={styles.footer}>
        <small className="text-gray-500">
          Built with ❤️ by Rishikesh Shinde
        </small>
      </footer>
    </div>
  );
};

export default Home;
