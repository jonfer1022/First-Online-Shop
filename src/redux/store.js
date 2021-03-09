import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import rootReducer from "../redux/ducks"
import epics from "../redux/epics";

// import homeReducer from './ducks/home.Ducks';
// import productsReducer from './ducks/products.Ducks';

export const history = createBrowserHistory();

// const rootReducer = (history) => combineReducers({
//   router: connectRouter(history),
//   home: homeReducer,
//   products: productsReducer
// })

// Constante para configurar la extensión DevRedux Tools de google Chrome 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
  const epicMiddleware = createEpicMiddleware()
  
  const store = createStore( 
    rootReducer(history), 
    composeEnhancers( 
      applyMiddleware(
        thunk, 
        routerMiddleware(history),
        epicMiddleware
      )
    )
  );

  epicMiddleware.run(epics)

  return store;
}