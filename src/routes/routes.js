const domain = {
  local: "http://localhost:3001",
  remote: "https://firts-online-shop-backend.herokuapp.com"
}

const url = domain.remote;

const routes = {
  endpoints: {
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
    }
  }
}
export default routes 