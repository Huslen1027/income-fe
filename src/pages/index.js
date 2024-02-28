import Sign from "@/components/Sign";
import Header from "@/components/Header";
import Layout from "@/components/layout";
export default function Home() {
  return (
    <div className="max-w-[1420px] m-auto bg-[#F3F4F6]">
      <Sign />
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
