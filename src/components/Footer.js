import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const handleClick = () => {
    window.location.href = "https://www.linkedin.com/in/sertacgultekin/";
  };
  return (
    <div>
      <footer
        style={{
          borderLeft: "none",
          borderRight: "none",
          background:
            "-webkit-linear-gradient(to left, #f5af19, #f12711)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to left, #f5af19, #f12711)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      >
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
