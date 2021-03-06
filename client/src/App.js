import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {

    const userSignin= useSelector(state => state.userSignin);
    const {userInfo}= userSignin;
  const openMenu = () =>
  {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>
  {
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
      <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/"><img className="brand-image" src="/images/Mini-Market.jpg" alt="Mini Market"></img></Link>
                </div>
                <div className="header-links">
                    <Link to="/cart">Cart</Link>
                    {
                        userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                        <Link to="/signin">Sign In</Link>
                    }
                    
                    
                </div>
            </header>
            <aside className="sidebar">
                <h3 className="sidebar-heading">
                    SHOP BY CATEGORY
                </h3>
                <button onClick={closeMenu} className="sidebar-close-button">x</button>
                <ul>
                    <li onClick="/product/3">
                    <div className="sidebar-Links">
                    <Link to="/product/3">Fruits & vegetables</Link>
                    </div>
                    </li>
                    <li onClick="/product/5">
                    <div className="sidebar-Links">
                    <Link to="/product/5">Foodgrains, Oil & Masala</Link>
                    </div>
                    </li>
                    <li onClick="/product/7">
                    <div className="sidebar-Links">
                    <Link to="/product/7">Bakery, Cakes & Dairy</Link>
                    </div>
                    </li>
                    <li onClick="/product/8">
                    <div className="sidebar-Links">
                    <Link to="/product/8">Beverages</Link>
                    </div>
                    </li>
                    <li onClick="/">
                    <Link to="/">Cleaning & Household</Link>
                        
                    </li>
                    <li onClick="/">
                    <Link to="/">Kitchen and Dining Needs</Link>
                       
                    </li>
                    <li onClick="/">
                    <Link to="/">Eggs, Meat, Fish & Frozen</Link>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    {/* <Route path="/products" component={ProductsScreen} /> */}
                    <Route path="/product/:id" component={ProductScreen}/>
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/" exact={true} component={HomeScreen}/>
                    
                </div>
            </main>
            {/* <footer> */}
        </div>
        </BrowserRouter>
  );
}

export default App;
