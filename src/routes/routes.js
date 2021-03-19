const routes = {
  endpoints: {
    getCategories:{
      method: "get",
      url: "http://localhost:3001/home/categories"
    },
    getDiscountClothes:{
      method: "get",
      url: "http://localhost:3001/home/discountClothes"
    },
    getLastestCollection:{
      method: "get",
      url: "http://localhost:3001/home/lastestCollection"
    },
    getAllProducts:{
      method: "get",
      url: "http://localhost:3001/products/allProducts"
    }
  }
}
export default routes 