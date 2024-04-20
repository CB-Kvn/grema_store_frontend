import { ProductSelect } from "./products_interface_gre_sto"


export interface reducerInitialProductSelect{
    data: ProductSelect[]
    suma:number
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
        id:number
    }
}

export interface UpdateQuantyProductSelect {
    payload: {
        id:number,
        quanty: number
    }
}