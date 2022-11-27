import { checkSizeUnit } from './checkSizeUnit';
interface IFormNewProduct {
    brand: string,
    category: string,
    flavor: string,
    location: number,
    size: string,
}

export const checkCreateProduct = ( 
        formNewProduct : IFormNewProduct, 
        setStatusError: React.Dispatch<React.SetStateAction<{ status: boolean; msg: string;}>>
    ): boolean => {
        const { brand, category, flavor, location, size } = formNewProduct
        // checks brand
            // not empty
            if (brand.length === 0) {
                setStatusError({msg: "La marca es requerida", status: true})
                return true
            }
            // length - min 2
            if (brand.length <= 2) {
                setStatusError({msg: "La marca debe tener mas de 2 caracteres", status: true})
                return true
            }
            // length - max 20
            if (brand.length > 20) {
                setStatusError({msg: "La marca debe tener menos de 20 caracteres", status: true})
                return true
            }


        // checks category
            // not empty
            if (category.length === 0) {
                setStatusError({msg: "La categoria es requerida", status: true})
                return true
            }
            // length - min 2
            if (category.length <= 2) {
                setStatusError({msg: "La categoria debe tener mas de 2 caracteres", status: true})
                return true
            }
            // length - max 20
            if (category.length > 20) {
                setStatusError({msg: "La categoria debe tener menos de 20 caracteres", status: true})
                return true
            }


        // checks flavor
            // not empty
            if (flavor.length === 0) {
                setStatusError({msg: "El sabor es requerido", status: true})
                return true
            }
            // length - min 2
            if (flavor.length <= 2) {
                setStatusError({msg: "El sabor debe tener mas de 2 caracteres", status: true})
                return true
            }
            // length - max 20
            if (flavor.length > 20) {
                setStatusError({msg: "El sabor debe tener menos de 20 caracteres", status: true})
                return true
            }


        // checks size
            // not empty
            if (size.length === 0) {
                setStatusError({msg: "El tamaño es requerido", status: true})
                return true
            }
            // length - min 2
            if (size.length <= 2) {
                setStatusError({msg: "El tamaño debe tener mas de 2 caracteres", status: true})
                return true
            }
            // length - max 20
            if (size.length > 20) {
                setStatusError({msg: "El tamaño debe tener menos de 20 caracteres", status: true})
                return true
            }
            // unit detect
            if (!checkSizeUnit(size)) {
                setStatusError({msg: "La unidad introducida no es valida - ML|L|OZ|CC", status: true})
                return true
            }


        // checks location
            // not empty
            if (!Number(location)) {
                setStatusError({msg: "La ubicacion debe ser un numero", status: true})
                return true
            }
            // min 0
            if (location < 1) {
                setStatusError({msg: "La ubicacion debe ser mayor a 1", status: true})
                return true
            }
            //  max 99
            if (location > 50) {
                setStatusError({msg: "La ubicacion debe ser menor a 50", status: true})
                return true
            }


        setStatusError({msg: "", status: false})
        return false
}