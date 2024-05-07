import { Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import { InfinitySpin } from "react-loader-spinner";

export function Layout({ children }) {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <Navigation />
      <Suspense fallback={<InfinitySpin />}>{children}</Suspense>
    </div>
  );
}
