import Records from "@/components/Records";
import Layout from "@/components/Layout";
export default function Record() {
  // const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });
  return (
    <Layout>
      <div className=" max-w-[1440px] m-auto ">
        <Records />
      </div>
    </Layout>
  );
}
