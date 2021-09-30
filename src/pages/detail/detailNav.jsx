import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";

export default function DetailNav() {
  return (
    <div className="pt-3 pb-5">
      <Link to="/" className="text-decoration-none">
        <h4 className="text-light">
          {"<"} Back To<span className="text-danger"> Home</span>
        </h4>
      </Link>
    </div>
  );
}
