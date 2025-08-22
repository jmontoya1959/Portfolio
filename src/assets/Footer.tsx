import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#000046] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm md:text-base">
        <div className="space-y-2">
          <p>© 2025</p>
          <p>Created with FIGMA.</p>
          <p>Coded by: Jacob Montoya</p>
        </div>
        <div className="space-y-2 text-center md:text-right">
          <div>
            <strong>CALL</strong>
            <br />210-843-7706
          </div>
          <div>
            <strong>E-MAIL</strong>
            <br />Jmontoya1993@yahoo.com
          </div>
        </div>
      </div>
    </footer>
  );
}
