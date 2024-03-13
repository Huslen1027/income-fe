import { useEffect } from "react";
import Header from "./Header";

export default function Layout({ children }) {
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
