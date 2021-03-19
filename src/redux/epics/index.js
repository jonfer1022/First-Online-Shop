import { combineEpics } from "redux-observable";
import home from "./home";
import products from "./products";

export default combineEpics(
  home,
  products
)