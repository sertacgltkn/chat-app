import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const handleClick = () => {
    window.location.href = "https://www.linkedin.com/in/sertacgultekin/";
  };
  return (
    <div style={{ backgroundColor: "#a7bcff" }}>
      <footer style={{ borderLeft: "none", borderRight: "none" }}>
        <p style={{ textDecoration: "none", color: "#fff" }}>
          &copy; {currentYear} All rights reserved -{" "}
          <a
            href="https://www.linkedin.com/in/sertacgultekin/"
            onClick={handleClick}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Sertaç Gültekin
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
