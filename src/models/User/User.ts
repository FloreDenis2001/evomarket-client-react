import Order from "../Order/Order";

export default interface User{
    firstName:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    password:string,
    active:boolean,
    orderSet:Order[],
}