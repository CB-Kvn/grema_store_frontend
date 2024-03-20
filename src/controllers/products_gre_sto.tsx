import { getAllProducts } from "../services/products_service_gre_sto"
// import { parseProduct } from "../utils/productsStoreFilters"


export const getAll = () => {
    try {
        const data =  getAllProducts()
        // parseProduct(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}