"use client"; // Converts Server Components to Client
import React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParam = useSearchParams();
  const name = searchParam.get("name");
  const pathname = usePathname();
  console.log("Hello");
  return (
    <div>
      <h1>Property Page</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-cyan-400 rounded-full px-4 text-xl font-bold">
        Go to Home {pathname}
      </button>
    </div>
  );
};

export default PropertyPage;
