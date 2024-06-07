/* eslint-disable @typescript-eslint/no-explicit-any */

import { Filter } from "../interfaces/filters_interface_gre_sto";
import { reset_pagination } from "../redux/reducers_slices/pagination_gre_sto";

export const filter = (source: string,filtersUrl:Filter,dispatch:any,pagination:number,navigate:any) => {
      const searchParams = new URLSearchParams();
      
  
      switch (source) {
        case "page": {
          filtersUrl.categoria.forEach((categoria) => {
            if (categoria.checked) {
              searchParams.append("categoria", categoria.value);
            }
          });
          filtersUrl.color.forEach((color) => {
            if (color.checked) {
              searchParams.append("color", color.value);
            }
          });
          filtersUrl.forma.forEach((forma) => {
            if (forma.checked) {
              searchParams.append("forma", forma.value);
            }
          });
          filtersUrl.material.forEach((material) => {
            if (material.checked) {
              searchParams.append("material", material.value);
            }
          });
          filtersUrl.tam.forEach((tam) => {
            if (tam.checked) {
              searchParams.append("tam", tam.value);
            }
          });
          filtersUrl.descuento.forEach((descuento) => {
            if (descuento.checked) {
              searchParams.append("descuento", descuento.value);
            }
          });
          
          navigate(`/store/${pagination}?${searchParams.toString()}`, {
            replace: false,
          });
          break;
        }
  
        case "filter": {
          dispatch(reset_pagination({ value: 1 }));
          filtersUrl.categoria.forEach((categoria) => {
            if (categoria.checked) {
              searchParams.append("categoria", categoria.value);
            }
          });
          filtersUrl.color.forEach((color) => {
            if (color.checked) {
              searchParams.append("color", color.value);
            }
          });
          filtersUrl.forma.forEach((forma) => {
            if (forma.checked) {
              searchParams.append("forma", forma.value);
            }
          });
          filtersUrl.material.forEach((material) => {
            if (material.checked) {
              searchParams.append("material", material.value);
            }
          });
          filtersUrl.tam.forEach((tam) => {
            if (tam.checked) {
              searchParams.append("tam", tam.value);
            }
          });
          filtersUrl.descuento.forEach((descuento) => {
            if (descuento.checked) {
              searchParams.append("descuento", descuento.value);
            }
          });
          navigate(`/store/1?${searchParams.toString()}`, {
            replace: false,
          });
          break;
        }
  
        default:
          break;
      }
    };