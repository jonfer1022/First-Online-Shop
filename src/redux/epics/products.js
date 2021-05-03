import { combineEpics, ofType } from "redux-observable";
import productsAction from '../reducer/products.reducer';
import { catchError, flatMap, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from "rxjs-compat"
import axios from 'axios';
import routes from '../../config/routes';
import { push } from "connected-react-router";

const endpoint = routes.endpoints;

export const getAllProducts = ($action) =>
  $action.pipe(
    ofType("GET_ALL_PRODUCTS"),
    flatMap(({gender, category, sortBy, size, priceMin, priceMax}) =>{
      return Observable.from(axios.get(
        `${endpoint.getAllProducts.url}?gender=${gender}&category=${category}&sortBy=${sortBy}&size=${size}&priceMin=${priceMin}&priceMax=${priceMax}`
        ))
      .pipe(
      flatMap((res)=>{
        // console.log("res.data",res.data)
        return Observable.concat(
          Observable.of(productsAction.getAllProductsSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const getProductById = ($action) =>
  $action.pipe(
    ofType("GET_PRODUCT_BY_ID"),
    flatMap(({product_id}) =>{
      return Observable.from(
        axios.get(`${endpoint.getProductById.url}?product_id=${product_id}`)
        )
      .pipe(
      flatMap((res)=>{
        return Observable.concat(
          Observable.of(productsAction.getProductByIdSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const saveProductId = ($action) =>
  $action.pipe(
    ofType("SAVE_PRODUCT_ID"),
    flatMap(({product_id, size_id}) => {
      return Observable.of(
        productsAction.saveProductIdSuccess(product_id),
        push("/clothing-detail", {product_id, size_id})
      )
  })
)

export const saveCategoryAndGender = ($action) =>
  $action.pipe(
    ofType("SAVE_CATEGORY_AND_GENDER"),
    flatMap(({category, gender}) => {
      return Observable.of(
        productsAction.saveCategoryAndGenderSuccess({category, gender}),
        push("/products", {category, gender})
      )
  })
)

export default combineEpics(
  getAllProducts,
  getProductById,
  saveProductId,
  saveCategoryAndGender
);