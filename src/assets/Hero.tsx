import React, { useState } from "react";


export default function Hero(): React.JSX.Element {
    const [showCard, setShowCard] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShowCard(false);
  };

  return (
    <section className="flex flex-col md:flex-row items-start gap-12 py-16">
      {/* Profile Card */}
      <div className="bg-[#2cc377] rounded-2xl shadow-lg text-center p-11 w-[300px]">
        <img
          src="/Images/Me.jpg"
          alt="Jacob Montoya"
          className="rounded-full w-48 h-48 mx-auto object-cover mb-4"
        />
        <h2 className="text-xl font-bold text-[#000046]">Jacob Montoya</h2>
        <p className="text-black mt-1 font-medium">
          From wireframe to web — I craft it all.
        </p>
        <div className="mt-4 flex justify-center items-center gap-2">
          <span className="text-sm font-medium">Follow On</span>
          <a
            href="https://www.linkedin.com/in/jacob-montoya-812204219/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      {/* Headline and Actions */}
      <div className="mt-10 md:mt-0 md:ml-50 max-w-xl" >
        <h1 className="text-4xl font-bold text-[#000046] mb-4">
          UI/UX Engineer & Frontend Developer
        </h1>
        <p className="text-2xl text-black mb-6">Here's Who I am & What I do.</p>

        <div className="flex gap-4 mb-6">
          <a 
            href="/Resume.pdf" target="_blank" rel="noopener noreferrer" 
            className="bg-[#000046] hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold flex items-center justify-center no-underline" style={{ textDecoration: "none" }}>
            RESUME
          </a>
          <a 
            className="bg-[#2cc377] hover:bg-green-400 text-[#000046] px-6 py-2 rounded-full font-bold flex items-center justify-center no-underline" 
            style={{ textDecoration: "none" }} 
            onClick={() => setShowCard(true)}
          >
            CONTACT
          </a>
        </div>

        {showCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 relative min-w-[300px] max-w-xs text-center">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setShowCard(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-[#000046]">Jacob Montoya</h2>
            <p className="mb-4 text-black">UI/UX Engineer & Frontend Developer</p>
            <a href="tel:2108437706" className="block text-[#2cc377] font-semibold mb-2 hover:underline">
              210-843-7706
            </a>
            <a href="mailto:jmontoya1959@gmail.com" className="block text-[#2c2cc3] font-semibold hover:underline">
              jmontoya1959@gmail.com
            </a>
          </div>
        </div>
        )}
        <div className="bg-white shadow-md border border-black p-4 rounded-lg">
          <p className="text-base leading-relaxed">
            I’m a self-taught <span className="text-[#2c2cc3] font-medium">UI/UX Engineer and Frontend Developer</span> passionate about designing and building intuitive digital experiences.
            I’m currently working as a freelancer, collaborating with startups and clients to turn ideas into elegant, <span className="text-[#2c2cc3] font-medium">user-centered interfaces</span>.
            I’m also open to joining a cross-functional team where I can contribute my design and development skills to build meaningful products.
            <br />Let’s connect and craft your next idea together!
          </p>
        </div>
      </div>
    </section>
  );
}
