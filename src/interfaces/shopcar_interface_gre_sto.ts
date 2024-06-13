import { ProductSelect } from "./products_interface_gre_sto"


export interface reducerInitialProductSelect{
    data: ProductSelect[]
    suma:number
    total: number
    envio_type: string,
    envio_price:number
}

export interface AddProductSelect {
    payload: {
        data: ProductSelect
    }
}

export interface AddProductSelect {
    payload: {
        data: ProductSelect
    }
}

export interface RemoveProductSelect {
    payload: {
        id:string
    }
}

export interface UpdateQuantyProductSelect {
    id:string
    counter:number
}