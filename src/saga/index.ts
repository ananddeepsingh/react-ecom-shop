import { all } from '@redux-saga/core/effects';
import productDetailsSaga from './productDetailsSaga';

export default function* rootSaga() {
  yield all([
    ...productDetailsSaga
  ])
}
