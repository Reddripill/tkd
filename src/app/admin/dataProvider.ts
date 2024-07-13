// src/app/admin/dataProvider.ts
import { DataProvider, GetListResult, GetManyReferenceParams, GetManyReferenceResult, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult } from 'react-admin';
import { cartData, ICartData } from '../../components/screens/home/cart/cart.data';

let cartItems: ICartData[] = [...cartData];

const dataProvider: DataProvider = {
    getList: <RecordType extends RaRecord>(resource: string, params: any): Promise<GetListResult<RecordType>> => {
        return Promise.resolve({
            data: cartItems.map(item => ({ ...item, id: item.id })) as unknown as RecordType[],
            total: cartItems.length,
        });
    },
    getOne: <RecordType extends RaRecord>(resource: string, params: any) => {
        const item = cartItems.find(item => item.id === params.id);
        return item ? Promise.resolve({ data: item as unknown as RecordType }) : Promise.reject(new Error('Item not found'));
    },
    getMany: <RecordType extends RaRecord>(resource: string, params: any) => {
        const items = cartItems.filter(item => params.ids.includes(item.id));
        return Promise.resolve({ data: items as unknown as RecordType[] });
    },
    create: <RecordType extends RaRecord>(resource: string, params: any) => {
        const newItem: ICartData = { ...params.data, id: cartItems.length ? cartItems[cartItems.length - 1].id + 1 : 1 };
        cartItems.push(newItem);
        return Promise.resolve({ data: newItem as unknown as RecordType });
    },
    update: <RecordType extends RaRecord>(resource: string, params: any) => {
        const index = cartItems.findIndex(item => item.id === params.id);
        if (index === -1) {
            return Promise.reject(new Error('Item not found'));
        }
        cartItems[index] = { ...params.data, id: params.id };
        return Promise.resolve({ data: cartItems[index] as unknown as RecordType });
    },
    delete: <RecordType extends RaRecord>(resource: string, params: any) => {
        const index = cartItems.findIndex(item => item.id === params.id);
        if (index === -1) {
            return Promise.reject(new Error('Item not found'));
        }
        const [deletedItem] = cartItems.splice(index, 1);
        return Promise.resolve({ data: deletedItem as unknown as RecordType });
    },
    deleteMany: <RecordType extends RaRecord>(resource: string, params: any) => {
        const itemsToDelete = params.ids;
        cartItems = cartItems.filter(item => !itemsToDelete.includes(item.id));
        return Promise.resolve({ data: itemsToDelete });
    },
    getManyReference: function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    }
};

export default dataProvider;
