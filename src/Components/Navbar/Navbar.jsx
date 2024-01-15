import React, { useContext, useState } from 'react' 
import { Link } from 'react-router-dom';
import'./Navbar.css'
import logo from '../Assets/logo.png'
import Cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu, setmenu] = useState("shop");
    const {getTotalCartItems} =useContext(ShopContext);
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src ={logo} alt = " "/>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:"none"}} to ='/'>Shop</Link>{menu === 'shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:"none"}} to ='/mens'>Men</Link>{menu === 'mens'?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:"none"}} to ='/womens'>Women</Link>{menu ==='womens'?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:"none"}} to ='/kids'>Kids</Link>{menu ==='kids'?<hr/>:<></>}</li>
            </ul>
            <div className= "login-cart">
                <Link to ='/login'><button>Login</button></Link>
               <Link to = '/cart'><img src ={Cart_icon} alt = ""/></Link> 
                <div className='cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar