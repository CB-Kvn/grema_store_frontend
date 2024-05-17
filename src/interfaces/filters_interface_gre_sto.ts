export interface APIResponseFilters {
    success: string;
    status:  number;
    msg:     string;
    data:    Filters;
}

export interface Filters {
    color:    Color[];
    shape:    Shape[];
    size:     Size[];
    material: Material[];
    category: Category[];
}

export interface Category {
    name: string;
}

export interface Color {
    color: string;
}

export interface Material {
    material: string;
}

export interface Shape {
    shape: string;
}

export interface Size {
    size: string;
}


export interface FiltersFront {
    filters: propsFilters[]
}

export interface propsFilters{
    id:      string;
    name:    string;
    options: Option[];
}

export interface Option {
    value:   string;
    label:   string;
    checked: boolean;
}

export interface FiltersToApi {
    dataFilter:{
        color:     string[];
        tam:       string[];
        forma:     string[];
        material:  string[];
        categoria: string[];
    },
    dataSearch:{
        color:     string[];
        tam:       string[];
        forma:     string[];
        material:  string[];
        categoria: string[];
    }


    
}
export interface Filter {
    value: string;
    checked: boolean;
  }

