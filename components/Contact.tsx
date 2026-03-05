import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

export const Contact = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (formData) {
      window.location.href = `mailto:${pageInfo?.email || "rdshinde2000@gmail.com"}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-heading">Let&apos;s Connect</p>
          <h2
            className="text-display font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Get in Touch
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            {pageInfo?.phoneNumber && (
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "var(--bg-secondary)" }}
              >
                <PhoneIcon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--text-tertiary)" }}
                />
                <p
                  className="text-caption truncate"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {pageInfo.phoneNumber}
                </p>
              </div>
            )}
            {pageInfo?.email && (
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "var(--bg-secondary)" }}
              >
                <EnvelopeIcon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--text-tertiary)" }}
                />
                <p
                  className="text-caption truncate"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {pageInfo.email}
                </p>
              </div>
            )}
            {pageInfo?.address && (
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "var(--bg-secondary)" }}
              >
                <MapPinIcon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--text-tertiary)" }}
                />
                <p
                  className="text-caption truncate"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {pageInfo.address}
                </p>
              </div>
            )}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="contact-input"
                required
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="contact-input"
                required
              />
            </div>
            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              className="contact-input"
              required
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              rows={5}
              className="contact-input resize-none"
              required
            />
            <div className="flex justify-center pt-2">
              <button type="submit" className="btn-primary px-12 py-4">
                Send Message
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
