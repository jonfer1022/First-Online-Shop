import { createActions, createReducer } from "reduxsauce"

//Creación de acciones types y creators
export const { Types, Creators } = createActions({
  getAllProducts: ["gender","category","sortBy","size","priceMin","priceMax"],
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
  [Types.GET_ALL_PRODUCTS]: getAllProducts,
  [Types.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess
});