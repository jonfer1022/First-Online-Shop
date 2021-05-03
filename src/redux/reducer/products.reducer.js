import { createActions, createReducer } from "reduxsauce";

//Creación de acciones types y creators
export const { Types, Creators } = createActions({
  getAllProducts: ["gender","category","sortBy","size","priceMin","priceMax"],
  getAllProductsSuccess: ["products"],
  getProductById: ["product_id"],
  getProductByIdSuccess: ["infoProduct"],
  saveProductId: ["product_id","size_id"],
  saveProductIdSuccess: ["product_id"],
  saveCategoryAndGender: ["category", "gender"],
  saveCategoryAndGenderSuccess: ["category", "gender"]
});

export const productsTypes = Types;
export default Creators;

//Creación reducer handlers
export const INITIAL_STATE = {
  products: [],
  gender: null,
  category: null,
  infoProduct: [],
  product_id: null
}

const getAllProducts = (state = INITIAL_STATE) => ({
  ...state
})

const getAllProductsSuccess = (state = INITIAL_STATE, data) => ({
  ...state, products: data.products
})

const getProductById = (state = INITIAL_STATE, { product_id }) => ({
  ...state, infoProduct: [], product_id : product_id
})

const getProductByIdSuccess = (state = INITIAL_STATE, data) => ({
  ...state, infoProduct: data.infoProduct
})

const saveProductId = (state = INITIAL_STATE, { product_id }) =>({
  ...state, product_id: product_id
})

const saveProductIdSuccess = (state = INITIAL_STATE, {product_id}) =>({
  ...state, product_id: product_id
})

const saveCategoryAndGender = (state = INITIAL_STATE, { category, gender }) =>({
  ...state, category, gender
})

const saveCategoryAndGenderSuccess = (state = INITIAL_STATE, { category, gender }) =>({
  ...state, category, gender
})


export const reducer =  createReducer(INITIAL_STATE,{
  [Types.GET_ALL_PRODUCTS]: getAllProducts,
  [Types.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess,
  [Types.GET_PRODUCT_BY_ID]: getProductById,
  [Types.GET_PRODUCT_BY_ID_SUCCESS]: getProductByIdSuccess,
  [Types.SAVE_PRODUCT_ID]: saveProductId,
  [Types.SAVE_PRODUCT_ID_SUCCESS]: saveProductIdSuccess,
  [Types.SAVE_CATEGORY_AND_GENDER]: saveCategoryAndGender,
  [Types.SAVE_CATEGORY_AND_GENDER_SUCCESS]: saveCategoryAndGenderSuccess
});