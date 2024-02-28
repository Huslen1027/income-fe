import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="max-w-[1420px] m-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
}
