import React from "react";
import { Link } from "react-router-dom";

function Logo({ bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand text-decoration-none" to="/">
<h2 className="text-dark my-0">mynul islam</h2>
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/" className="text-decoration-none">
<h2 className="text-dark  my-0">mynul islam</h2>
      </Link>
    </div>
  );
}

export default Logo;
