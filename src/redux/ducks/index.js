import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { resettableReducer } from "reduxsauce";
// import { reducer as home } from "./home.Ducks";
import { reducer as products } from "./products.Ducks";

// listen for the action type of 'RESET', you can change this.
const resettable = resettableReducer("RESET_STATE");

export default (history) => combineReducers({
  router: connectRouter(history),
  // home: resettable(home),
  products: resettable(products)
})