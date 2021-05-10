import ProductDetailsAction, { ProductDetailsReducerAction } from '../actions/productDetailsAction';
import { Reducer } from "redux";

export interface ProductDetails {
  products: Product[];
  page?: number;
  nextPage?: boolean;
  productsCount: number;
}

export interface ProductVariant {
  id: string,
  size: string,
  color: string,
  price: string,
  stock: number,
  discount?: string,
  image: string
}

export interface Product {
  id: string,
  category: string[],
  title: string,
  isBestSeller?: boolean,
  variants: ProductVariant[]
}

const productDetailsInitialState: ProductDetails = {
  products: [],
  productsCount: 0
}

const productDetailsReducer: Reducer<ProductDetails, ProductDetailsReducerAction> = (state = productDetailsInitialState, action) => {
  switch (action.type) {
    case ProductDetailsAction.SET_PRODUCT_DETAILS:
      return action.productDetails
    default:
      return state
  }
};

export default productDetailsReducer;
