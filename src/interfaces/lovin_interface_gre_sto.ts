export interface LoveProduct {
    id : number
    img: string
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
        id:number
    }
}