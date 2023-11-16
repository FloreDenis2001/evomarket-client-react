import OrderDetails from "../OrderDetails/OrderDetails";

export default interface Order{
    id:number,
    userId:number,
    ammount:number,
    shippingAddress:string,
    orderAddress:string,
    orderEmail:string,
    orderPhone:string,
    orderStatus:string,
    orderDetailsSet:OrderDetails[];
}