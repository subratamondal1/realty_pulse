import React from "react";
import Link from "next/link";

const PropertiesPage = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Hello Properties</h1>
      <Link
        className="text-2xl text-blue-400"
        href="/">
        <h2 className="text-2xl text-center text-blue-400">Go to Home</h2>
      </Link>
    </div>
  );
};

export default PropertiesPage;
