import { Product } from '../store/reducers/productDetailsReducer';
import { call, fork, put, takeLatest } from 'redux-saga/effects'
import ProductDetailsApi from '../api/productDetailsApi'
import ProductDetailsAction from '../store/actions/productDetailsAction';

interface IResponse {
  products: Product[];
  page?: number;
  nextPage?: boolean;
  productsCount: number;
}

function* workerFetchProductDetailSaga() {
  const productDetailsApi = new ProductDetailsApi();
  const productDetailsAction = new ProductDetailsAction();

  try {
    const response: IResponse = yield call(productDetailsApi.getProducts);
    yield put(productDetailsAction.set(response))
  } catch (error) {
    console.log(error);
  }
}

function* watchProductDetailsSaga() {
  yield takeLatest(ProductDetailsAction.FETCH_PRODUCTS_DETAILS, workerFetchProductDetailSaga)
}


const fxSagas = [fork(watchProductDetailsSaga)];
export default fxSagas;
