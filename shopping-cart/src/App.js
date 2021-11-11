import logo from './logo.svg';
import './App.css';
import { ShoppingCartProvider, ShoppingCart } from './components/ShoppingCart';


function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
          <ShoppingCart />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
