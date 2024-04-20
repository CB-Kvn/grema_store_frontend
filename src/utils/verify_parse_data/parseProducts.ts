import { APIResponseProducts, ArrayParseProducts, Datum } from "../../interfaces/products_interface_gre_sto";



export const parseProducts = (data: APIResponseProducts) => {

    const products: ArrayParseProducts[] = data.data.map((element: Datum) => {
        return {
            id: element.id,
            name: element.name,
            material: element.material,
            imageSrc: ["https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.36 PM.jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.42 PM (1).jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-01-12 at 2.02.39 PM (1).jpeg", "https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg"],
            imageAlt: element.category.name + " " + element.name + " " + element.description,
            price: element.price,
            quantyInv: element.quantyInv || 40,
            descPorcen: element.descPorcen || 0,
            color: element.color,
            shape: element.shape,
            category: element.category.name,
            description: element.description || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolore, iusto inventore vitae ullam recusandae facilis culpa id magni perspiciatis corporis error, aut qui odit atque quasi ipsa animi soluta!"
        }
    })

    return products

}
