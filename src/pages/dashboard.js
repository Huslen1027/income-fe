import Dashboardd from "@/components/Dashboardd";
import Layout from "@/components/layout";
export default function Dashboard() {
  return (
    <div>
      <Dashboardd />
    </div>
  );
}
Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
