import React from "react";
import {
   List,
   Datagrid,
   TextField,
   ReferenceField,
   EditButton,
   ListProps,
} from "react-admin";

export const PostList: React.FC<ListProps> = (props) => {
   return (
      <List {...props}>
         <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
               <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
         </Datagrid>
      </List>
   );
};
