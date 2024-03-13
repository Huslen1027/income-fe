import Records from "@/components/Records";

const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });
export default function Record() {
  return (
    <Layout>
      <div className=" max-w-[1440px] m-auto ">
        <Records />
      </div>
    </Layout>
  );
}
