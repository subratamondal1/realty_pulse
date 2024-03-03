import React from "react";
import "@/assets/styles/global.css";

export const metadata = {
  title: "RealtyPulse | Find the perfect property at the best price",
  description: "Find your dream property at the best price",
  keywords: "rental, find rentals, find properties",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
