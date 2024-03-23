import { Category, Color, Filter, Filters, FiltersFront, Material, propsFilters, Shape, Size } from '../../interfaces/filters_interface_gre_sto'

export const parseFilters = (data: Filters) => {

    const color = data.color.map((element: Color) => {
        return {
            value: element.color,
            label: element.color,
            checked: false
        }
    })
    const size = data.size.map((element: Size) => {

        return {
            value: element.size,
            label: element.size,
            checked: false
        }
    })
    const material = data.material.map((element: Material) => {

        return {
            value: element.material,
            label: element.material,
            checked: false
        }
    })
    const shape = data.shape.map((element: Shape) => {

        return {
            value: element.shape,
            label: element.shape,
            checked: false
        }
    })
    const category = data.category.map((element: Category) => {

        return {
            value: element.name,
            label: element.name,
            checked: false
        }
    })

    const response: FiltersFront = {
        filters: [
            {
                id: "Color",
                name: "Color",
                options: color,
            },
            {
                id: "Size",
                name: "Size",
                options: size,
            },
            {
                id: "Forma",
                name: "Forma",
                options: shape,
            },
            {
                id: "Material",
                name: "Material",
                options: material,
            },
            {
                id: "Categoria",
                name: "Categoria",
                options: category,
            }

        ]
    }
    return response
}

export const parseFiltersToApi = (filters: propsFilters[], selectedFilters: Filter[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filtersTemp: any[] = []

    let paramToApi = {}

    const selected = selectedFilters.map(element => {return element.value} )

    filters.forEach((filter) => {
        const filt = filter.name
        const arrayFilt: string[] = []

        filter.options.forEach((option) => {
            arrayFilt.push(option.value)
        })

        filtersTemp.push({ name: filt, array: arrayFilt })
    })

    filtersTemp.forEach((element) => {
        const head = element.name.toLowerCase()
        const params: string[] = []
        // const params: string[] = []
        selected.forEach((filter) => {
            if (element.array.includes(filter)) {
                params.push(filter)
            }
        })
        paramToApi = {...paramToApi, [head === "size" ? 'tam' : head]: params.length > 0 ? params : element.array }


    })

    return (paramToApi)


}

