import { APIResponseProducts, ArrayParseProducts,Inventory } from "../../interfaces/products_interface_gre_sto";



export const parseProducts = (data: APIResponseProducts) => {

    const products: ArrayParseProducts[] = data.data.product.map((element: Inventory) => {
        return {


            id: element.product.id,
            quantity:element.quantity || 40,
            name: element.product.name,
            material: element.product.material,
            imageSrc: ["https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg"],
            imageAlt: element.product.category.name + " " + element.product.name + " " + element.product.description,
            price: element.price,
            desc: element.desc || 0,
            typeDesc:element.typeDesc || "",
            color: element.product.color,
            shape: element.product.shape,
            category: element.product.category.name,
            description: element.product.description || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolore, iusto inventore vitae ullam recusandae facilis culpa id magni perspiciatis corporis error, aut qui odit atque quasi ipsa animi soluta!"
        }
    })

    return products

}
