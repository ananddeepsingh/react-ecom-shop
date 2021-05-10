import './App.css';
import './Normalize.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import AllProductsPage from './pages/AllProductsPage';
import HomePage from './pages/HomePage';
import { ROUTE } from './constants/route';
import HeaderNavigation from './components/HeaderNavigation';
import CheckoutPage from './pages/CheckoutPage';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import ProductDetailsAction from './store/actions/productDetailsAction';
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

store.dispatch({ type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS });
(window as any).amrigurbani = store;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderNavigation />
        <Switch>
          <Route exact component={CheckoutPage} path={ROUTE.CHECKOUT} />
          <Route exact component={AllProductsPage} path={ROUTE.ALL_PRODUCTS} />
          <Route exact component={HomePage} path={ROUTE.HOME} />
          <Redirect to={ROUTE.HOME} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
