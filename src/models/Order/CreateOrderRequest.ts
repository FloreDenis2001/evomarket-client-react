import OrderDetails from "../OrderDetails/OrderDetails";
import ProductBag from "../Product/ProductBag";

export default interface CreateOrderRequest{
   products:ProductBag[];
   userId:number;
}