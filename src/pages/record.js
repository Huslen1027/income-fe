import Records from "@/components/Records";
import Layout from "@/components/layout";
export default function Record() {
  return (
    <div className=" max-w-[1420px] m-auto ">
      <Records />
    </div>
  );
}
Record.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
