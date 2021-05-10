import { ProductDetails } from '../reducers/productDetailsReducer';

export type ProductDetailsReducerAction = IProductDetailsSetAction | IProductDetailsFetchAction;

export interface IProductDetailsSetAction {
  type: typeof ProductDetailsAction.SET_PRODUCT_DETAILS,
  productDetails: ProductDetails
}

export interface IProductDetailsFetchAction {
  type: typeof ProductDetailsAction.FETCH_PRODUCTS_DETAILS
}


class ProductDetailsAction {
  static readonly FETCH_PRODUCTS_DETAILS = "FETCH_PRODUCTS_DETAILS";
  static readonly SET_PRODUCT_DETAILS = "SET_PRODUCT_DETAILS";

  fetch = (): IProductDetailsFetchAction => {
    return {
      type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS
    }
  }

  set = (productDetails: ProductDetails): IProductDetailsSetAction => {
    return {
      type: ProductDetailsAction.SET_PRODUCT_DETAILS,
      productDetails
    }
  }
}

export default ProductDetailsAction;
