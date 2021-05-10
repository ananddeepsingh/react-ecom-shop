import { RouteComponentProps } from "react-router";
import { ProductDetails } from "../../store/reducers/productDetailsReducer";

export interface IAllProductStateProps {
  productDetails: ProductDetails
}

export interface IAllProductsOwnProps extends RouteComponentProps { };
export type IAllProductsPageProps = IAllProductStateProps & IAllProductsOwnProps;
