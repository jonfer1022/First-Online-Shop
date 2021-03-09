import { combineEpics } from "redux-observable";
import products from "./products"

export default combineEpics(
  products
)