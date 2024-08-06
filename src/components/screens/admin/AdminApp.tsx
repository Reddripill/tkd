"use client";
import { Admin, Resource } from "react-admin";
import authProvider from "@/providers/authProvider";
import dataProvider from "@/providers/dataProvider";
import { CartCreate, CartEdit, CartList } from "./AdminCart";
const AdminPanel: React.FC = () => {
   return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
         <Resource
            name="cart"
            list={CartList}
            edit={CartEdit}
            create={CartCreate}
         />
      </Admin>
   );
};

export default AdminPanel;
