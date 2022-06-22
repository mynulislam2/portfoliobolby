import React from "react";

function Footer() {
  return (
    <footer  className="footer mt-5">
        <span className="copyright">
          &copy; {new Date().getFullYear()} Mynul Islam.
        </span>
    </footer>
  );
}

export default Footer;
