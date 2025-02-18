import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {currentYear} GIRIRAJ DIGITAL. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
