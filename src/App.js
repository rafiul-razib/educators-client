
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllCourses from './components/AllCourses/AllCourses';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound'
import { createContext, useState } from 'react';

export const cartContext = createContext('cart')


function App() {

  const[cart, setCart] = useState([]);

    const handleAddToCart = product=>{
        const newCart = [...cart, product];
        setCart(newCart)
    }

  return (
    <cartContext.Provider value = {cart}>
      <div className="App">
      <BrowserRouter>
      <Header cart ={cart}></Header>
      <Switch>
        <Route exact path = "/">
          <Home handleAddToCart={handleAddToCart}></Home>
        </Route>
        <Route path = "/services">
          <AllCourses handleAddToCart={handleAddToCart}></AllCourses>
        </Route>
        <Route path = "/about">
          <About></About>
        </Route>
        <Route path = "/cart">
          <Cart></Cart>
        </Route>
        <Route path = "*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
    </cartContext.Provider>
  );
}

export default App;
