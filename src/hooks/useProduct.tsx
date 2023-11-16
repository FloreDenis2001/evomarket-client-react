import { useState } from "react";
import Product from "../models/Product/Product"


type UseProductHook = (product:Product) => [
    product: Product,
    actions: {
        ratingValue: () => number;
        stockLimit: () => boolean;
    }
];




const useProduct: UseProductHook = (product: Product) => {
    const [productValue, setProduct] = useState<Product>(product);
    const stockLimit = () => {
       return  product.quantity > 0
    }
    const ratingValue = () => {
        return product.rating;
    }

    return [productValue, { stockLimit, ratingValue }];

};
export default useProduct