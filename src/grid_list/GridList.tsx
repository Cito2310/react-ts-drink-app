import { IProduct } from '../interfaces/IResProduct';
import { ListItem } from './ListItem';

interface props {
    products: IProduct[]
}

export const GridList = ({ products } : props) => {
    return (
        <section id='grid-list-products'>
            { products.map(product => <ListItem key={product._id} product={product}/>) }
        </section>
    )
}