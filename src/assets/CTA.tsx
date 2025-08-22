import React from "react";

export default function CTA(): React.JSX.Element {
  return (
    <section className="bg-[#fff9ed] py-10 px-8 text-center">
      <h2 className="text-4xl font-bold text-[#000046] mb-6">
        Let&apos;s Craft something together
      </h2>
      <p className="text-2xl text-black max-w-3xl mx-auto mb-10">
        I&apos;m currently open to freelance projects and full-time opportunities.
        If you&apos;re looking for someone who can design and build thoughtful,
        user-focused digital experiences — let&apos;s talk.
      </p>
      <section className="mb-4 max-w-full mx-auto flex justify-center items-center gap-4 bg-gradient-to-b from-[#fff9ed] to-[#5dd886] py-1 rounded-xl">
             <form className="space-y-4 max-w-lg mx-auto" action="https://formspree.io/f/xeogbvrj" method="POST">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-800 text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-800 text-white"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-800 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 my-2 bg-[#000046] hover:bg-blue-700 text-white rounded"
                >
                 Send Message
                </button>
              </form>
          </section>
    </section>
  );
}
