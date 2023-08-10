import { NavLink } from "react-router-dom";
import './navbar.css'
import { useState } from "react";
import { useEffect } from "react";
function Navbar(props) {

    const { cartLength, total } = props;
    return (
        <nav className="navbar">
            <div className="container">
                <div className="the-brand">
                    <NavLink className="navbar-brand d-flex" to="/">
                        <div>
                            <i class="fa-brands fa-opencart"></i>
                        </div>
                        <div>
                            <p>متجر</p>
                            <p>سلة</p>
                        </div>
                    </NavLink>
                </div>
                <div className="nav-input-div">
                    <input type="text" placeholder="ابحث عما تريد" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="d-flex navlanks align-items-center">
                    <NavLink className=" navbar-brand align-items-center">
                        <div className="d-flex nav-cont">
                            <div>
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div className="brand-text text-prof">
                                <p>مرحبا بك</p>
                                <p>تسجيل دخول؟</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className=" navbar-brand" to="/cart">
                        <div className="d-flex nav-cont">
                            <div>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="brand-text">
                                <p> ({cartLength})سلة المشتريات</p>
                                <p>{total} ج.م</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div>
                    {/* <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link cart" to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://mahmoudtamer0.github.io/Masr.market_Management_System/">Edit_on_Products</a>
                        </li>

                    </ul> */}

                </div>
            </div>
            <div className="nav-input-div mobil-search">
                <input type="text" placeholder="ابحث عما تريد" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav >
    )
}

export default Navbar;