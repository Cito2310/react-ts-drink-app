import { IRespProduct } from '../interfaces/IResProduct';

import { GridCards } from '../grid_cards/GridCards';
import { GridList } from '../grid_list/GridList';

interface props {
    respProduct: IRespProduct,
    typeProduct: "card" | "list",
}

export const ProductSection = ({respProduct, typeProduct}: props) => (
    (respProduct.status) 
    ? (typeProduct === "card") ? <GridCards products={respProduct.data}/> : <GridList products={respProduct.data}/>
    : <p>Cargando...</p>
)