import HttpResponse from "../models/HttpResponse";
import Product from "../models/Product/Product";
import ApiServer from "../util/ApiServer";

class ServiceProduct extends ApiServer {
  getAllProducts = async (): Promise<Product[]> => {
    const data = await this.api<null, Product[]>(
      "/product/all",
      "GET",
      null,
      ""
    );
    if (data.status === 200) {
      const products = await data.json();
      return products;
    } else {
      return Promise.reject([]);
    }
  };

  getProductBySKU = async (sku: string): Promise<Product> => {
    const data = await this.api<null, Product>(
      `/product/sku/${sku}`,
      "GET",
      null,
      ""
    );
    if (data.status === 200) {
      const product = await data.json();
      return product;
    } else {
      return Promise.reject([]);
    }
  };

  addProduct = async (product: Product): Promise<Product> => {
    const data = await this.api<Product, Product>(
      `/product/add`,
      "POST",
      product,
      ""
    );
    if (data.status === 200) {
      const product = await data.json();
      return product;
    } else {
      return Promise.reject([]);
    }
  };
}

export default ServiceProduct;
