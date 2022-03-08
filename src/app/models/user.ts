export class User{
  _id:string;
  fname: string;
  lname: string;
  gender: string;
  password: string;
  email: string;
  permission: number;
  nCancel: number;
  timeStamp: Date;
  events: Array<String>;
}