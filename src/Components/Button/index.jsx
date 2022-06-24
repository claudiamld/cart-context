import { useContext } from "react"
import { CartContext } from "../../Providers/Cart"
import { CatalogContext } from "../../Providers/Catalog"
import { Container, Content } from "./style"

const Button = ({type, item}) => {
    const {cart, addToCart, removeFromCart} = useContext(CartContext)
    const {catalog, addToCatalog, removeFromCatalog} = useContext(CatalogContext)

    const text = type === "catalog" ? "add to cart" : "remove from cart"

    const handleClick = () => {
        if(type === "catalog"){
            removeFromCatalog(item)
            addToCart(item)
        } else {
            removeFromCart(item)
            addToCatalog(item)
        }
    }

    return(
        <Container>
            <Content onClick={handleClick}>{text}</Content>
        </Container>
    )
}
export default Button