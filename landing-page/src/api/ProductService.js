import request from "./request";

const API_ENDPOINT = {
  LIST_PRODUCT: "/api/products",
  SEARCH_PRODUCT: "/api/products",
};
class ProductService {
  constructor() {
    if (ProductService._instance) {
      return ProductService._instance;
    }
    ProductService._instance = this;
  }
  getList(pageNumber, pageSize) {
    return request.get(API_ENDPOINT.LIST_PRODUCT + `?page=${pageNumber}&size=${pageSize}`);
  }
  getSearch(pageNumber, pageSize, text){
    return request.get(API_ENDPOINT.LIST_PRODUCT + `?page=${pageNumber}&size=${pageSize}&name=${text}`);
  }
}

const Service = new ProductService();

export default Service;
