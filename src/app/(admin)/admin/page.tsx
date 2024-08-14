import { NextPage } from "next";
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("@/components/screens/admin/AdminApp"), {
   ssr: false,
});

const Admin: NextPage = () => <AdminApp />;

export default Admin;
