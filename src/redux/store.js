import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from "../redux/ducks"
import epics from "../redux/epics";

export const history = createBrowserHistory();

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