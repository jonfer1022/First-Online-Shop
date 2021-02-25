import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './ducks/home.Ducks';
import productsReducer from './ducks/products.Ducks'

const rootReducer = combineReducers({
  home: homeReducer,
  products: productsReducer
})

// Constante para configurar la extensión DevRedux Tools de google Chrome 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ));
  return store;
}