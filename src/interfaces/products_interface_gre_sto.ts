export interface APIResponseProducts {
    success: string;
    status:  number;
    msg:     string;
    data:    Datum[];
}

export interface Datum {
    id:              number;
    name:            string;
    description:     string;
    material:        string;
    size:            string;
    shape:           string;
    quantyInv:       number
    descPorcen:      number
    categoryId:      number;
    price:           string;
    status:          boolean;
    color:           string;
    createAtProfile: null;
    updateAtProfile: null;
    category:        Category;
}

export interface Category {
    name: string;
}

export interface ArrayParseProducts{
    id: number
    name: string
    description:string
    material: string
    imageSrc: string[]
    imageAlt: string
    price: string
    quantyInv:number
    descPorcen: number
    color: string
    shape: string
    category: string
  }

export interface reducerInitialProducts{
    dataProducts: ArrayParseProducts[]
    dataSelected: ProductSelect | null
}

export interface ProductSelect {
    id: string,
    nombre:string,
    precio:number,
    quantyInv:number,
    desc:number
    description:string
    images:string[]
    quantyOrder?:number
  
  }