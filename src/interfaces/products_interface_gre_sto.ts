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
    material: string
    imageSrc: string
    imageAlt: string
    price: string
    color: string
    shape: string
    category: string
  }

export interface reducerInitialProducts{
    data: ArrayParseProducts[]
}
