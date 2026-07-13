import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Website. All Rights Reserved.</p>

      <div>
        <a href="#">Facebook</a> |{" "}
        <a href="#">Instagram</a> |{" "}
        <a href="#">LinkedIn</a>
      </div>

      <p>Thank you for visiting our website.</p>
    </footer>
  );
}

export default Footer;