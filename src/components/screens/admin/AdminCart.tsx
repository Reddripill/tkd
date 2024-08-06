import {
   List,
   Datagrid,
   TextField,
   EditButton,
   SimpleForm,
   TextInput,
   Edit,
   Create,
   ListProps,
   EditProps,
   CreateProps,
} from "react-admin";

export const CartList = (
   props: React.JSX.IntrinsicAttributes & ListProps<any>
) => {
   return (
      <List {...props}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="image" />
            <TextField source="date" />
            <TextField source="title" />
            <TextField source="text" />
            <TextField source="alt" />
            <EditButton />
         </Datagrid>
      </List>
   );
};

export const CartEdit = (
   props: React.JSX.IntrinsicAttributes & EditProps<any, Error>
) => {
   return (
      <Edit {...props}>
         <SimpleForm>
            <TextInput source="image" />
            <TextInput source="date" />
            <TextInput source="title" />
            <TextInput source="text" />
            <TextInput source="alt" />
         </SimpleForm>
      </Edit>
   );
};

export const CartCreate = (
   props: React.JSX.IntrinsicAttributes & CreateProps<any, Error, any>
) => {
   return (
      <Create {...props}>
         <SimpleForm>
            <TextInput source="image" />
            <TextInput source="date" />
            <TextInput source="title" />
            <TextInput source="text" />
            <TextInput source="alt" />
         </SimpleForm>
      </Create>
   );
};
