import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartScreen } from './components/CartScreen/CartScreen';
import { ItemCount } from './components/ItemCount/ItemCount';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';
import { Checkout } from './components/Checkout/Checkout';

function App() {  
  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/counter' element={<ItemCount />} />

            {/* agregamos ruta del checkout */}
            <Route exact path='/checkout' element={<Checkout/>}/>
            <Route exact path='/cart' element={<CartScreen/>} />
            <Route exact path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </div>
      </CartProvider>
    // </CartContext.Provider>
  );
}

export default App;
