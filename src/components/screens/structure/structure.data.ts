export interface IStrucure {
   id: string | number;
   club_id: string;
   fullname: string;
   role: string;
   image: string;
}

export const structureData: IStrucure[] = [
   {
      id: 1,
      club_id: "tkd",
      fullname: "Батталов Артур",
      role: "Основатель",
      image: "/coach.jpg",
   },
   {
      id: 1,
      club_id: "tkd",
      fullname: "Батталов Артур",
      role: "Тренер",
      image: "/coach.jpg",
   },
];
