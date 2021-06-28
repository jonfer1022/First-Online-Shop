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
  saveCategoryAndGenderSuccess: ["category", "gender"],
  addProductById: ["product_id", "amount", "size"],
  addProductByIdSuccess: ["response"],
  getAddedProduct: [],
  getAddedProductSuccess: ["total_added_products"],
  eraseInfo: [""],
  getDetailAddedProducts: [],
  getDetailAddedProductsSuccess: ["productsAdded"],
  submitDeleteSizeProduct: ["product_id","size"],
  deleteSizeProductSuccess: ["response"],
  submitUpdateSizeProduct: ["product_id","size","amount"],
  submitUpdateAllProduct: ["newProducts"]
});

export const productsTypes = Types;
export default Creators;

//Creación reducer handlers
export const INITIAL_STATE = {
  products: [],
  gender: null,
  category: null,
  infoProduct: [],
  product_id: null,
  total_added_products: null,
  response: null,
  productsAdded: null
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

const addProductById = (state = INITIAL_STATE) =>({
  ...state, response:  ""
})

const addProductByIdSuccess = (state = INITIAL_STATE, { response } ) =>{
  return({ ...state, message: response.message })
}

const getAddedProduct = (state = INITIAL_STATE) =>({
  ...state
})

const getAddedProductSuccess = (state = INITIAL_STATE, data) =>({
  ...state, total_added_products: data.total_added_products
})

const eraseInfo = (state = INITIAL_STATE) =>({
  ...state, message: ""
})

const getDetailAddedProducts = (state = INITIAL_STATE) =>({
  ...state
})

const getDetailAddedProductsSuccess = (state = INITIAL_STATE, {productsAdded}) =>({
  ...state, productsAdded, productsAddedOrig : productsAdded
})

const submitDeleteSizeProduct = (state = INITIAL_STATE) =>({
  ...state
})

const deleteSizeProductSuccess = (state = INITIAL_STATE, { response }) =>({
  ...state, message: response.message
})

const submitUpdateSizeProduct = (state = INITIAL_STATE) =>({
  ...state
})

const submitUpdateAllProduct = (state = INITIAL_STATE) =>({
  ...state
})

export const reducer = createReducer(INITIAL_STATE,{
  [Types.GET_ALL_PRODUCTS]: getAllProducts,
  [Types.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess,
  [Types.GET_PRODUCT_BY_ID]: getProductById,
  [Types.GET_PRODUCT_BY_ID_SUCCESS]: getProductByIdSuccess,
  [Types.SAVE_PRODUCT_ID]: saveProductId,
  [Types.SAVE_PRODUCT_ID_SUCCESS]: saveProductIdSuccess,
  [Types.SAVE_CATEGORY_AND_GENDER]: saveCategoryAndGender,
  [Types.SAVE_CATEGORY_AND_GENDER_SUCCESS]: saveCategoryAndGenderSuccess,
  [Types.ADD_PRODUCT_BY_ID]: addProductById,
  [Types.ADD_PRODUCT_BY_ID_SUCCESS]: addProductByIdSuccess,
  [Types.GET_ADDED_PRODUCT]: getAddedProduct,
  [Types.GET_ADDED_PRODUCT_SUCCESS]: getAddedProductSuccess,
  [Types.ERASE_INFO]: eraseInfo,
  [Types.GET_DETAIL_ADDED_PRODUCTS]: getDetailAddedProducts,
  [Types.GET_DETAIL_ADDED_PRODUCTS_SUCCESS]: getDetailAddedProductsSuccess,
  [Types.SUBMIT_DELETE_SIZE_PRODUCT]: submitDeleteSizeProduct,
  [Types.DELETE_SIZE_PRODUCT_SUCCESS]: deleteSizeProductSuccess,
  [Types.SUBMIT_UPDATE_SIZE_PRODUCT]: submitUpdateSizeProduct,
  [Types.SUBMIT_UPDATE_ALL_PRODUCT]: submitUpdateAllProduct
});