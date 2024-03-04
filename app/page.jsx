import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Home Page</h1>

      <Link
        className="text-2xl text-blue-400"
        href="/properties">
        <h2 className="text-center">Go to Properties</h2>
      </Link>
    </div>
  );
};

export default HomePage;
