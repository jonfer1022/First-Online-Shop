export default {
  endpoints: {
    getProducts:{
      method: "get",
      url: "http://localhost:3001/home/categories"
    },
    getDiscountClothes:{
      method: "get",
      url: "http://localhost:3001/home/discountClothes"
    },
  }
}