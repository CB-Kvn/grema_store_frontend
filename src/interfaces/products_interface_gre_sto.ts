/* eslint-disable @typescript-eslint/no-explicit-any */
export interface APIResponseProducts {
    success: string;
    status:  number;
    msg:     string;
    data:    newApiData;
}

export interface newApiData {
    product: Inventory[]
    total:number
}

export interface Inventory {
    id:                       string;
    productId:                string;
    quantity:                 number;
    image:                    string[];
    price:                    string;
    status:                   boolean;
    typeDesc:                 string;
    desc:                     number;
    createAtProductInventory: Date;
    updateAtProductInventory: Date;
    product:                  Product;
}

export interface Product {
    id:          string;
    productId?:  string;
    name:        string;
    description: string;
    material:    string;
    size:        string;
    shape:       string;
    color:       string;
    categoryId:  number;
    category:    Category;
}

export interface Category {
    name: string;
}


export interface ArrayParseProducts{
    id: string
    quantity: number
    name: string
    description:string
    material: string
    imageSrc: string[]
    imageAlt: string
    price: string
    color: string
    shape: string
    desc: number
    typeDesc:string
    category: string
  }

export interface reducerInitialProducts{
    dataProducts: ArrayParseProducts[]
    dataSelected: ProductSelect | null
    dataShowProducts: any
}

export interface ProductSelect {
    id:string
    userId?:string
    inventoryId?: string,
    nombre:string,
    precio:number,
    quantyInv:number,
    desc:number
    description:string
    images:string[]
    quantyOrder?:number
    type?:string
    color?: string
    shape?: string
    category?: string
    material?:  string
    tam?:string
  
  }

  export interface ShowProduct {
    id:                       string;
    productId:                string;
    quantity:                 number;
    image:                    string[];
    price:                    string;
    status:                   boolean;
    typeDesc:                 string;
    desc:                     number;
    createAtProductInventory: Date;
    updateAtProductInventory: Date;
    product:                  Product;
}

export interface Product {
    color:       string;
    name:        string;
    description: string;
    material:    string;
    shape:       string;
    size:        string;
}