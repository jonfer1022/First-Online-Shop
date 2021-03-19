import { combineEpics, ofType } from "redux-observable";
import homeAction from '../ducks/home.Ducks';
import { catchError, flatMap, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from "rxjs-compat"
import axios from 'axios';
import routes from '../../routes/routes';

export const getCategories = ($action) =>
  $action.pipe(
    ofType("GET_CATEGORIES"),
    flatMap(() =>{
      return Observable.from(axios.get(routes.endpoints.getCategories.url))
      .pipe(
      flatMap((res)=>{
        return Observable.concat(
          Observable.of(homeAction.getCategoriesSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const getDiscountsClothes = ($action) =>
  $action.pipe(
    ofType("GET_DISCOUNTS_CLOTHES"),
    flatMap(() =>{
      return Observable.from(axios.get(routes.endpoints.getDiscountClothes.url))
      .pipe(
      flatMap((res)=>{
        return Observable.concat(
          Observable.of(homeAction.getDiscountsClothesSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const getLastestCollection = ($action) =>
  $action.pipe(
    ofType("GET_LASTEST_COLLECTION"),
    flatMap(({amount}) =>{
      return Observable.from(axios.get(`${routes.endpoints.getLastestCollection.url}?amount=${amount}`))
      .pipe(
      flatMap((res)=>{
        return Observable.concat(
          Observable.of(homeAction.getLastestCollectionSuccess(res.data))
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
  getCategories,
  getDiscountsClothes,
  getLastestCollection
);