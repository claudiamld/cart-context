import { CartProvider } from "./Cart";
import { CatalogProvider } from "./Catalog";

const Providers = ({children}) => {
    return(
        <CatalogProvider>s
            <CartProvider>
                {children}
            </CartProvider>
        </CatalogProvider>
    )
}
export default Providers