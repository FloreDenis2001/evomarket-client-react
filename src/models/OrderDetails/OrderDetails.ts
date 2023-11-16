import Order from "../Order/Order";
import Product from "../Product/Product";

export default interface OrderDetails{
    order:Order,
    product:Product,
    quantity:number,
    price:number,
    SKU:string,
}