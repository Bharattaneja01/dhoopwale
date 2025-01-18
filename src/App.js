
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import HomePage from './customers/pages/HomePage/HomePage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';
import ProductDetails from './customers/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
