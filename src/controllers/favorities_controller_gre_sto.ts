import { LoginInit } from "../interfaces/login_interface_gre_sto";
import { Favorites_Carts, LoveProduct } from "../interfaces/lovin_interface_gre_sto";
import { add_products_love, remove_products_love } from "../redux/reducers_slices/love_gre_sto_slice";

import { v4 as uuidv4 } from 'uuid';
import { addFavoritiesService, removeFavoritiesService } from "../services/favorities_service_gre_sto";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addFavorities = async (dispatch:any,info:Favorites_Carts,login:LoginInit) =>{
    
    try {
        const data:LoveProduct ={
            id : uuidv4(),
            image: info.image!,
            name: info.name!,
            productId: info.productId
        }
    
       
    const body:Favorites_Carts = {
            id : data.id,
            userId: info.userId,
            productId: info.productId,
            type: "Fav",
            quantity: 0
      
        }
    
         dispatch(add_products_love({ data , user: login.userId.toString() }));
    
        if(login.type !== "inscript"){
            return
        }
    
        await addFavoritiesService(body,login.token)
    
       
    } catch (error) {
        console.log(error)
    }
 

}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeFavorities = async (dispatch:any,data: string ,login:LoginInit,love:LoveProduct[]) =>{

    try {
        dispatch(remove_products_love({ id: data }));

        if(login.type !== "inscript"){
            return
        }
        
        const idLove = love.find((element:LoveProduct)=>{
            
            if(data === element.productId){
                return element
            }
            
             
        })

        if(idLove === undefined) return

        await removeFavoritiesService(idLove.id,login.token)
        
        

    } catch (error) {
        console.log(error)
    }
    
}

// export const getFavorities = () =>{
    
// }