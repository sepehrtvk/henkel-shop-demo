import React , {useState , useEffect} from 'react';

//API
import { productsAPI } from '../services/api';

export const ProductsContext = React.createContext();

const ProductsContextProvider = ({children}) => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await productsAPI());
        }
        fetchAPI();
    },[])
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;