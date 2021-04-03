import { createActions, createReducer } from "reduxsauce"

//Creación de acciones types y creators
export const { Types, Creators } = createActions({
  getAllProducts: ["gender","category","sortBy","size","priceMin","priceMax"],
  getAllProductsSuccess: ["products"],
  getProductById: ["product_id"],
  getProductByIdSuccess: ["infoProduct"]
});

export const productsTypes = Types;
export default Creators;

//Creación reducer handlers
export const INITIAL_STATE = {
  products: [],
  gender: null,
  category: null,
  infoProduct: []
}

const getAllProducts = (state = INITIAL_STATE) => ({
  ...state
})

const getAllProductsSuccess = (state = INITIAL_STATE, data) => ({
  ...state, products: data.products
})

const getProductById = (state = INITIAL_STATE) => ({
  ...state, infoProduct: []
})

const getProductByIdSuccess = (state = INITIAL_STATE, data) => ({
  ...state, infoProduct: data.infoProduct
})

export const reducer =  createReducer(INITIAL_STATE,{
  [Types.GET_ALL_PRODUCTS]: getAllProducts,
  [Types.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess,
  [Types.GET_PRODUCT_BY_ID]: getProductById,
  [Types.GET_PRODUCT_BY_ID_SUCCESS]: getProductByIdSuccess
});