
class ProductDetailsApi {
  getProducts = async (page?: number, size?: number) => {
    const response = await fetch(`http://localhost:1234/products?page=${page || ''}&size=${size || ''}`)
    return await response.json();
  }
}

export default ProductDetailsApi;
