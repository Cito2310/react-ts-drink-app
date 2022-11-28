import { checkSizeUnit } from './checkSizeUnit';
interface IFormNewProduct {
    brand: string,
    category: string,
    flavor: string,
    location: number,
    size: string,
}

type TFormState = { status: TStatusAvailable , msg: string }
type TStatusAvailable = "loading" | "error" | "none" | "okey";

export const checkModifyProduct = ( 
        formModifyProduct : IFormNewProduct, 
        setFormState: React.Dispatch<React.SetStateAction<TFormState>>,
        oldProduct : IFormNewProduct,

    ): boolean => {
        
        const { brand, category, flavor, location, size } = formModifyProduct
        // checks brand
            // not empty
            if (brand.length === 0) {
                setFormState({msg: "La marca es requerida", status: "error"})
                return true
            }
            // length - min 2
            if (brand.length <= 2) {
                setFormState({msg: "La marca debe tener mas de 2 caracteres", status: "error"})
                return true
            }
            // length - max 20
            if (brand.length > 20) {
                setFormState({msg: "La marca debe tener menos de 20 caracteres", status: "error"})
                return true
            }


        // checks category
            // not empty
            if (category.length === 0) {
                setFormState({msg: "La categoria es requerida", status: "error"})
                return true
            }
            // length - min 2
            if (category.length <= 2) {
                setFormState({msg: "La categoria debe tener mas de 2 caracteres", status: "error"})
                return true
            }
            // length - max 20
            if (category.length > 20) {
                setFormState({msg: "La categoria debe tener menos de 20 caracteres", status: "error"})
                return true
            }


        // checks flavor
            // not empty
            if (flavor.length === 0) {
                setFormState({msg: "El sabor es requerido", status: "error"})
                return true
            }
            // length - min 2
            if (flavor.length <= 2) {
                setFormState({msg: "El sabor debe tener mas de 2 caracteres", status: "error"})
                return true
            }
            // length - max 20
            if (flavor.length > 20) {
                setFormState({msg: "El sabor debe tener menos de 20 caracteres", status: "error"})
                return true
            }


        // checks size
            // not empty
            if (size.length === 0) {
                setFormState({msg: "El tamaño es requerido", status: "error"})
                return true
            }
            // length - min 2
            if (size.length < 1) {
                setFormState({msg: "El tamaño debe tener mas de 1 caracteres", status: "error"})
                return true
            }
            // length - max 20
            if (size.length > 20) {
                setFormState({msg: "El tamaño debe tener menos de 20 caracteres", status: "error"})
                return true
            }
            // unit detect
            if (!checkSizeUnit(size)) {
                setFormState({msg: "La unidad introducida no es valida - ML|L|OZ|CC", status: "error"})
                return true
            }


        // checks location
            // not empty
            if (!Number(location)) {
                setFormState({msg: "La ubicacion debe ser un numero", status: "error"})
                return true
            }
            // min 0
            if (location < 1) {
                setFormState({msg: "La ubicacion debe ser mayor a 1", status: "error"})
                return true
            }
            //  max 99
            if (location > 50) {
                setFormState({msg: "La ubicacion debe ser menor a 50", status: "error"})
                return true
            }


        // checks not repeat
            if (oldProduct.brand === brand && 
                oldProduct.category === category &&
                oldProduct.flavor === flavor &&
                oldProduct.location === location &&
                oldProduct.size === size
            ) {
                setFormState({msg: "El producto no se modifico", status: "error"})
                return true
            }


        setFormState({msg: "", status: "none"})
        return false
}