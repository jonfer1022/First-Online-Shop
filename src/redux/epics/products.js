import { combineEpics, ofType } from "redux-observable";
import productsAction from '../reducer/products.reducer';
import { catchError, flatMap, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from "rxjs-compat";
import axios from 'axios';
import routes from '../../config/routes';
import { push } from "connected-react-router";

const endpoint = routes.endpoints;

export const getAllProducts = ($action) =>
  $action.pipe(
    ofType("GET_ALL_PRODUCTS"),
    flatMap(({gender, category, sortBy, size, priceMin, priceMax}) =>{
      return Observable.from(axios.get(
        `${endpoint.getAllProducts.url}?gender=${gender}&category=${category}&sortBy=${sortBy}&size=${size}&priceMin=${priceMin}&priceMax=${priceMax}`,
        { withCredentials: true }
        ))
      .pipe(
      flatMap((res)=>{
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
        axios.get(`${endpoint.getProductById.url}?product_id=${product_id}`, { withCredentials: true })
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

export const addProductById = ($action) =>
  $action.pipe(
    ofType("ADD_PRODUCT_BY_ID"),
    flatMap(({product_id, amount, size}) =>{
      return Observable.from(axios.post(
        `${endpoint.addProductById.url}`,{ product_id, amount, size }
        ))
      .pipe(
      flatMap((res)=>{
        return Observable.of(
          productsAction.addProductByIdSuccess(res.data),
          startGetAddedProduct()
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const startGetAddedProduct = () => ({
  type: "GET_ADDED_PRODUCT"
})

export const getAddedProduct = ($action) =>
  $action.pipe(
    ofType("GET_ADDED_PRODUCT"),
    flatMap(() =>{
      return Observable.from(axios.get(`${endpoint.getAddedProduct.url}`))
      .pipe(
      flatMap((res)=>{
        return Observable.concat(
          Observable.of(productsAction.getAddedProductSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const startGetDetailAddedProducts = () => ({
  type: "GET_DETAIL_ADDED_PRODUCTS"
})

export const getDetailAddedProducts = ($action) =>
  $action.pipe(
    ofType("GET_DETAIL_ADDED_PRODUCTS"),
    flatMap(() =>{
      return Observable.from(axios.get(`${endpoint.getDetailAddedProducts.url}`))
      .pipe(
      flatMap((res)=>{
        return Observable.concat(
          Observable.of(productsAction.getDetailAddedProductsSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const submitDeleteSizeProduct = ($action) =>
  $action.pipe(
    ofType("SUBMIT_DELETE_SIZE_PRODUCT"),
    flatMap(({product_id, size}) =>{
      return Observable.from(axios.delete(
        `${endpoint.submitDeleteSizeProduct.url}?product_id=${product_id}&size=${size}`
        ))
      .pipe(
      flatMap((res)=>{
        return Observable.of(
          productsAction.deleteSizeProductSuccess(res.data),
          startGetDetailAddedProducts(),
          startGetAddedProduct()
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const submitUpdateSizeProduct = ($action) =>
  $action.pipe(
    ofType("SUBMIT_UPDATE_SIZE_PRODUCT"),
    flatMap(({product_id, size, amount}) =>{
      return Observable.from(axios.put(
        `${endpoint.submitUpdateSizeProduct.url}`,
        { product_id, size, amount }
        ))
      .pipe(
      flatMap((res)=>{
        return Observable.of(
          productsAction.deleteSizeProductSuccess(res.data),
          startGetDetailAddedProducts(),
          startGetAddedProduct()
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const submitUpdateAllProduct = ($action) =>
  $action.pipe(
    ofType("SUBMIT_UPDATE_ALL_PRODUCT"),
    flatMap(({ newProducts }) =>{
      return Observable.from(axios.put(
        `${endpoint.submitUpdateAllProduct.url}`,
        { newProducts }
        ))
      .pipe(
      flatMap((res)=>{
        return Observable.of(
          productsAction.deleteSizeProductSuccess(res.data),
          startGetDetailAddedProducts(),
          startGetAddedProduct()
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export default combineEpics(
  getAllProducts,
  getProductById,
  saveProductId,
  saveCategoryAndGender,
  addProductById,
  getAddedProduct,
  getDetailAddedProducts,
  submitDeleteSizeProduct,
  submitUpdateSizeProduct,
  submitUpdateAllProduct
);