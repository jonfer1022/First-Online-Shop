import { combineEpics, ofType } from "redux-observable";
import productsAction from '../ducks/products.Ducks';
import { catchError, flatMap, map, mergeMap } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
import { Observable } from "rxjs-compat"
import axios from 'axios';
import routes from '../../routes/routes';
// import { push } from "connected-react-router";

export const getAllProducts = ($action) =>
  $action.pipe(
    ofType("GET_ALL_PRODUCTS"),
    flatMap(({gender, category, sortBy}) =>{
      return Observable.from(axios.get(
        `${routes.endpoints.getAllProducts.url}?gender=${gender}&category=${category}&sortBy=${sortBy}`
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

export default combineEpics(
  getAllProducts
);

// export const getAllProducts = action$ =>
//   action$.pipe(
//     ofType("GET_ALL_PRODUCTS"),
//     flatMap(action =>{
//       return Observable.from(axios.get(routes.endpoints.getAllProducts.url))
//       .pipe(
//       flatMap((res)=>{
//         console.log("res.data",res.data)
//         return Observable.concat(
//           Observable.of(productsAction.getAllProductsSuccess(res.data))
//         )
//       }),
//       catchError((e)=>{
//         console.log(e)
//         return throwError(e)
//       })
//     )
//   })
// )