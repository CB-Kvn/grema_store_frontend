import { DataFilter, Filter, valuesFilters } from "../../interfaces/filters_interface_gre_sto"


export const parseFiltersToApi = (filters: DataFilter, selectedFilters: Filter) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const selectedValues = {
        color: getCheckedValues(selectedFilters.color),
        tam: getCheckedValues(selectedFilters.tam),
        forma: getCheckedValues(selectedFilters.forma),
        material: getCheckedValues(selectedFilters.material),
        categoria: getCheckedValues(selectedFilters.categoria)
      };

   
    const requestToApi = {
        categoria: selectedValues.categoria.length === 0 ? filters.categoria : selectedValues.categoria,
        color: selectedValues.color.length === 0 ? filters.color : selectedValues.color,
        tam: selectedValues.tam.length === 0  ? filters.tam : selectedValues.tam,
        forma: selectedValues.forma.length === 0  ? filters.forma : selectedValues.forma,
        material: selectedValues.material.length === 0  ? filters.material : selectedValues.material
    }

    return requestToApi
}

export const getCheckedValues = (category: valuesFilters[]): string[] => {
    return category
      .filter(item => item.checked)
      .map(item => item.value);
  }