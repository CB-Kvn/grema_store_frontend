export interface LoveProduct {
    id : string
    productId:string
    image: string[]
    name:string
} 

export interface reducerInitialLove{
    data: LoveProduct[]
    user:string
}

export interface AddLove {
    payload: {
        data: LoveProduct
        user:string
    }
}

export interface RemoveLove {
    payload: {
        id:string
    }
}

export interface APIResponseFavorities {
    success: string;
    status:  number;
    msg:     string;
    data:    Favorites_Carts
}

export interface Favorites_Carts {
    id?: string
    userId: string
    productId: string
    type: string
    quantity: number
    status?: boolean
    image?:string[]
    name?:string
    price?:number
  }