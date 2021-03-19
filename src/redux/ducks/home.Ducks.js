import { createActions, createReducer } from "reduxsauce";

//Creación de acciones types y creators
export const { Types, Creators } = createActions({
  getCategories: [],
  getCategoriesSuccess: ["categories"],
  getDiscountsClothes: [],
  getDiscountsClothesSuccess: ["discountClothes"],
  getLastestCollection: ["amount"],
  getLastestCollectionSuccess: ["lastestCollection"]
});

export const homeTypes = Types;
export default Creators;

//Creación reducer handlers
export const INITIAL_STATE = {
  categories: [],
  discountClothes: [],
  lastestCollection: []
}

// const getDataInitial = (state = INITIAL_STATE) => ({
//   ...state
// })

const getCategories = (state = INITIAL_STATE) => ({
  ...state, categories: []
})

const getDiscountsClothes = (state = INITIAL_STATE) => ({
  ...state, discountClothes: []
})

const getLastestCollection = (state = INITIAL_STATE) => ({
  ...state, lastestCollection: []
})

const getCategoriesSuccess = (state = INITIAL_STATE, data) => ({
  ...state, categories: data.categories
})

const getDiscountsClothesSuccess = (state = INITIAL_STATE, data) => ({
  ...state, discountClothes: data.discountClothes
})

const getLastestCollectionSuccess = (state = INITIAL_STATE, data) => ({
  ...state, lastestCollection: data.lastestCollection
})

export const reducer = createReducer(INITIAL_STATE,{
  [Types.GET_CATEGORIES]: getCategories,
  [Types.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [Types.GET_DISCOUNTS_CLOTHES]: getDiscountsClothes,
  [Types.GET_DISCOUNTS_CLOTHES_SUCCESS]: getDiscountsClothesSuccess,
  [Types.GET_LASTEST_COLLECTION]: getLastestCollection,
  [Types.GET_LASTEST_COLLECTION_SUCCESS]: getLastestCollectionSuccess
});


// export const putProductsReducerByIdAccion = (id, marca, descripcion) => async (dispatch, getState) => {
//   try {
//     const data = { marca, descripcion }
//     // const instance = axios.create({
//     //   baseURL: 'http://localhost:8080',
//     //   timeout: 1000,
//     //   // headers: {'X-Custom-Header': 'foobar'}
//     //   headers: { 
//     //     "Access-Control-Allow-Origin": "*",
//     //     "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET, OPTIONS",
//     //     "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, X-Requested-With"
//     //     }
//     // });
//     console.log(data);
//     const res = await axios.put(`${routes.endpoints.putProducts.url}/${id}`, data,
//     { headers: { 
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "DELETE, POST, PUT, GET",
//       "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, X-Requested-With",
//       'Content-Type': 'application/json'
//       } 
//     }
//     );
//     // const res = await axios({
//     //   method: "put",
//     //   url: `${routes.endpoints.getProducts.url}`,
//     //   data:{data},
//     //   { headers: { "Access-Control-Allow-Origin": "*", } }
//     // });
//     // const res = instance["put"]('/',data).then( res => { console.log(res); return res})
//     console.log(res.data);
//     dispatch({
//       type: UPDATE_PRODUCTS_BY_ID,
//       payload: res.data
//     })
//   } catch (error) {
//     console.error(error);
//   }
// }