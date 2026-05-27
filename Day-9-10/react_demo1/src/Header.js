import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
        <header class="header">
            <div class="container">
                <div class="logo">
                </div>

                <nav class="navbar">
                <ul>
                    <li><Link to="/" class="active">HOME</Link></li>
                    <li><Link to="/women">WOMEN’S</Link></li>
                    <li><Link to="/men">MEN’S</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
                </nav>  

                <div class="header-icons">
                <Link to="/login" class="login">Login / Register</Link>

                <div class="icon">
                    <a href="search.html">🔍</a>
                </div>

                <div class="icon cart">
                    <a href="#">❤</a>
                </div>

                <div class="icon cart">
                    <Link to="/cart">🛒</Link>
                </div>
                </div>

            </div>
        </header>
</>
    );
}

export default Header;