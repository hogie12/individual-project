import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="pt-3 pb-5">
      <h4 className="text-light">
        <Link to="/" className="text-decoration-none text-light">
          {"<"} Back To<span className="text-danger"> Home</span>
        </Link>
      </h4>
    </div>
  );
}
