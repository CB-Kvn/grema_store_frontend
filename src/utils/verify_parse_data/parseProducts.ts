import { APIResponseProducts, ArrayParseProducts, Datum } from "../../interfaces/products_interface_gre_sto";



export const parseProducts = (data:APIResponseProducts) => {

    const products:ArrayParseProducts[] = data.data.map((element:Datum)=>{
        return {
            id: element.id,
            name: element.name,
            material: element.material,
            imageSrc:"https://grema-store-frontend.vercel.app/images/WhatsApp Image 2024-02-01 at 1.28.10 PM.jpeg",
            imageAlt: element.category.name+" "+element.name+" "+element.description,
            price: "$"+element.price,
            color: element.color,
            shape: element.shape,
            category: element.category.name,
            description: element.description
          }
    })

    return products

}
