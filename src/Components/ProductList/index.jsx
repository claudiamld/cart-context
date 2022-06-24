import Button from '../Button'
import { useContext } from 'react'
import { CatalogContext } from '../../Providers/Catalog'
import { CartContext } from '../../Providers/Cart'
import {List, Product } from './styles'

const ProductList = ({type}) => {
    const {catalog} = useContext(CatalogContext)
    const {cart} = useContext(CartContext)

    return(
        <List>
            {type === "catalog" && catalog.map((item, index) => (
                <Product key={index}>
                    {item.name} <Button type={type} item={item} />
                </Product>
            ))}

            {type === "cart" && cart.map((item, index) => (
                <Product key={index}>
                    {item.name} <Button type={type} item={item} />
                </Product>
            ))}
        </List>
    )
}
export default ProductList