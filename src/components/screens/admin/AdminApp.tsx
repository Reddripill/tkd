"use client";
import { Admin, Resource } from "react-admin";
import authProvider from "@/providers/authProvider";
import dataProvider from "@/providers/dataProvider";
import { CartCreate, CartEdit, CartList } from "./AdminCart";
import { PostList } from "./AdminPost";
const AdminPanel: React.FC = () => {
   return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
         <Resource
            name="carts"
            list={CartList}
            edit={CartEdit}
            create={CartCreate}
         />
         <Resource name="posts" list={PostList} />
      </Admin>
   );
};

export default AdminPanel;
