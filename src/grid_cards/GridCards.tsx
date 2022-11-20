import { IProduct } from '../interfaces/IResProduct';
import { Cards } from './Cards';

import "./grid-cards-products.scss"

interface props {
    products: IProduct[]
}

export const GridCards = ({ products } : props) => {
    return (
        <section id='grid-cards-products'>
            { products.map(product => <Cards key={product._id} product={product}/>) }
        </section>
    )
}