import { createActions, createReducer } from "reduxsauce"

//Creación de acciones types y creators
export const { Types, Creators } = createActions({
  resetValues: [],
  getAllProducts: ["gender","category","sortBy"],
  getAllProductsSuccess: ["products"]
});

export const productsTypes = Types;
export default Creators;

//Creación reducer handlers
export const INITIAL_STATE = {
  products: [],
  gender: null,
  category: null
}

const getAllProducts = (state = INITIAL_STATE, action) => ({
  ...state
})

const getAllProductsSuccess = (state = INITIAL_STATE, data) => ({
  ...state, products: data.products
})

export const reducer =  createReducer(INITIAL_STATE,{
  // [Types.RESET_VALUES]: resetValues,
  [Types.GET_ALL_PRODUCTS]: getAllProducts,
  [Types.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess
});


/*
// Types
const GET_DATA_INITIAL = "GET_DATA_INITIAL";
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_DISCOUNTS_CLOTHES = "GET_DISCOUNTS_CLOTHES";
const GET_LASTEST_COLLECTION = "GET_LASTEST_COLLECTION";

//reducer
export default function productsReducer(state = dataInicial, action){
  switch (action.type) {
    case GET_DATA_INITIAL:
      return {...state}
    case GET_ALL_PRODUCTS:
      return {...state, products: action.payload.products}
    case GET_DISCOUNTS_CLOTHES:
      return {...state, discountClothes: action.payload}
    case GET_LASTEST_COLLECTION:
      return {...state, lastestCollection: action.payload}
    default:
      return state
  }
};

//acciones
export const getDataInitial = () => async (dispatch, getState) => {
  dispatch({
    type: GET_DATA_INITIAL,
    // payload: getState().home
  })
}

export const getAllProductsAction = (side) => async (dispatch, getState) => {
  try {
    const res = await axios.get(routes.endpoints.getAllProducts.url)
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: {
        products: res.data,
        side
      }
    })
  } catch (error) {
    console.error(error);
  }
}

export const getDiscountClothesAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(routes.endpoints.getDiscountClothes.url)
    dispatch({
      type: GET_DISCOUNTS_CLOTHES,
      payload: res.data
    })
  } catch (error) {
    console.error(error);
  }
}

export const getLastestCollectionAction = ({amount}) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${routes.endpoints.getLastestCollection.url}?amount=${amount}`)
    dispatch({
      type: GET_LASTEST_COLLECTION,
      payload: res.data
    })
  } catch (error) {
    console.error(error);
  }
}

// export const getProductsReducerByIdAccion = (id) => async (dispatch, getState) => {
//   try {
//     // const res = await axios.get(`${routes.endpoints.getProducts.url}/${id}`);
//     const res = await axios({
//       method: routes.endpoints.getProducts.method,
//       url: `${routes.endpoints.getProducts.url}/${id}`
//     });
//     dispatch({
//       type: GET_PRODUCTS_BY_ID,
//       payload: res.data
//     })
//   } catch (error) {
//     console.error(error);
//   }
// }

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

*/