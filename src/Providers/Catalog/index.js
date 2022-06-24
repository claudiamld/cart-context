import { createContext, useState } from "react";

//criando o context
export const CatalogContext = createContext([]);

//criando o provider
export const CatalogProvider = ({children}) => {
    const [catalog, setCatalog] = useState([
        {name: 'Book', price: 20},
        {name: 'T-shirt', price: 50},
        {name: 'Banana', price: 3},
    ])

    //criando a lógica para adicionar
    const addToCatalog = (item) => {
        setCatalog([...catalog, item])
    }

    //criando a lógica para remover
    const removeFromCatalog = (item) => {
        const newCatalog = catalog.filter(
            (itemOnCatalog) => itemOnCatalog.name !== item.name
        )
        setCatalog(newCatalog)
    }

    return(
        <CatalogContext.Provider value={{catalog, addToCatalog, removeFromCatalog}}>
            {children}
        </CatalogContext.Provider>
    )
}