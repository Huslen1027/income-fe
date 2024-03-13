import Dashboard from "./dashboard";
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <div className=" bg-[#F3F4F6]">
      <Dashboard />
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
