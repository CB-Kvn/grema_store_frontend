export interface LoveProduct {
    id : number
    img: string
    name:string
} 

export interface reducerInitialLove{
    data: LoveProduct[]
}

export interface AddLove {
    payload: {
        data: LoveProduct
    }
}

export interface RemoveLove {
    payload: {
        id:number
    }
}