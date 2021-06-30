import { combineEpics, ofType } from "redux-observable";
import homeAction from '../reducer/home.reducer';
import { catchError, flatMap, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from "rxjs-compat"
import axios from 'axios';
import routes from '../../config/routes';

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001"
})

export const defaultPath = ($action) =>
  $action.pipe(
    ofType("DEFAULT_PATH"),
    flatMap(() =>{
      return Observable.from(instanceAxios.get(routes.endpoints.defaultPath.url, {
        withCredentials: true
      }))
      .pipe(
      flatMap((res)=>{
        return Observable.concat(
          Observable.of(homeAction.defaultPathSuccess(res.data))
        );
      }),
      catchError((e)=>{
        console.log(e)
        return throwError(e)
      })
    )
  })
)

export const getCategories = ($action) =>
  $action.pipe(
    ofType("GET_CATEGORIES"),
    flatMap(() =>{
      return Observable.from(instanceAxios.get(routes.endpoints.getCategories.url, {
        withCredentials: true
      }))
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
      return Observable.from(instanceAxios.get(routes.endpoints.getDiscountClothes.url, {
        withCredentials: true
      }))
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
      return Observable.from(instanceAxios.get(`${routes.endpoints.getLastestCollection.url}?amount=${amount}`, {
        withCredentials: true
      }))
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
  defaultPath,
  getCategories,
  getDiscountsClothes,
  getLastestCollection
);