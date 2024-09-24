export interface IClub {
   id: string | number;
   name: string;
   adress: string;
   coords: number[];
   contacts: {
      email: string;
      phone: string;
   };
   schedule?: any;
}

export const clubList: IClub[] = [
   {
      id: 1,
      name: "TKD",
      adress: "ул. Баки Урманче, 5",
      coords: [55.732096, 49.177112],
      contacts: {
         email: "test@mail.ru",
         phone: "+7(843)557-74-37",
      },
   },
   {
      id: 2,
      name: "TKD num 2",
      adress: "улю Ямашева, 61",
      coords: [55.825821, 49.129177],
      contacts: {
         email: "test@mail.ru",
         phone: "+7(843)557-74-37",
      },
   },
];
