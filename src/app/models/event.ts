export class Event {
  _id: string;
  name: string;
  category:string;
  address: {
    street: string;
    post_code: string;
    city: string;
    country: string;
  };
  capacity: number;
  current: number;
  date: Date;
  price: number;
  activate: boolean;
  id_Promoter: string;
}