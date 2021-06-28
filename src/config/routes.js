const url = /*process.env.REACT_APP_DOMAIN_BACKEND ||*/ "http://localhost:3001";

const routes = {
  endpoints: {
    defaultPath:{
      method: "get",
      url: `${url}/`
    },
    getCategories:{
      method: "get",
      url: `${url}/home/categories`
    },
    getDiscountClothes:{
      method: "get",
      url: `${url}/home/discountClothes`
    },
    getLastestCollection:{
      method: "get",
      url: `${url}/home/lastestCollection`
    },
    getAllProducts:{
      method: "get",
      url: `${url}/products/allProducts`
    },
    getProductById:{
      method: "get",
      url: `${url}/products/getProductById`
    },
    addProductById:{
      method: "post",
      url: `${url}/products/addProductById`
    },
    getAddedProduct:{
      method: "get",
      url: `${url}/products/getAddedProduct`
    },
    getDetailAddedProducts:{
      method: "get",
      url: `${url}/products/getDetailAddedProducts`
    },
    submitDeleteSizeProduct:{
      method: "delete",
      url: `${url}/products/submitDeleteSizeProduct`
    },
    submitUpdateSizeProduct:{
      method: "put",
      url: `${url}/products/submitUpdateSizeProduct`
    },
    submitUpdateAllProduct:{
      method: "put",
      url: `${url}/products/submitUpdateAllProduct`
    }
  }
}
export default routes 