// src/app/admin/AdminPanel.tsx
"use client";

import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, EditButton, SimpleForm, TextInput, DateInput, Edit, Create, ListProps, EditProps, CreateProps } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';

const CartList = (props: React.JSX.IntrinsicAttributes & ListProps<any>) => (
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

const CartEdit = (props: React.JSX.IntrinsicAttributes & EditProps<any, Error>) => (
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

const CartCreate = (props: React.JSX.IntrinsicAttributes & CreateProps<any, Error, any>) => (
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

const AdminPanel: React.FC = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="cart" list={CartList} edit={CartEdit} create={CartCreate} />
    </Admin>
);

export default AdminPanel;
