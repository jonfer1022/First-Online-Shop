// import { createBrowserHistory } from 'history';
// import { applyMiddleware, compose, createStore } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
// import rootReducer from '../redux/store';

// export const history = createBrowserHistory();

// export default function configureStore(){
//   const store = createStore(
//     rootReducer(history), // root reducer with router state
//     preloadedState,
//     compose(
//       applyMiddleware(
//         routerMiddleware(history), // for dispatching history actions
//         // ... other middlewares ...
//       ),
//     ),
//   )

//   return store;
// }