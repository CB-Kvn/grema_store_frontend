import { Filter, valuesFilters } from "../../interfaces/filters_interface_gre_sto"


export const parseFiltersToApi = (selectedFilters: Filter) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const selectedValues = {
        color: getCheckedValues(selectedFilters.color),
        tam: getCheckedValues(selectedFilters.tam),
        forma: getCheckedValues(selectedFilters.forma),
        material: getCheckedValues(selectedFilters.material),
        categoria: getCheckedValues(selectedFilters.categoria),
        descuento: getCheckedValues(selectedFilters.descuento)
      };
    return selectedValues
}
export const getCheckedValues = (category: valuesFilters[]): string[] => {
    return category
      .filter(item => item.checked)
      .map(item => item.value);
  }