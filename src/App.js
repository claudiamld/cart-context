import ProductList from './Components/ProductList';
import Providers from './Providers';

function App() {
  return (
      <Providers>
        <ProductList type="catalog" />
        <ProductList type="cart" />
      </Providers>
  );
}

export default App;
