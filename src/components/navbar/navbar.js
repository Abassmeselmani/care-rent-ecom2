import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useWindowSize from "../../utils/useWindowsize";
import MobileMenu from "./mobile-menu";
import DropdownMenu from "../../dropdownmenu";
import { useAuth } from "../../context";

import './navbar.css';

function Navbar() {
    const [isMenuOpened, setIsOpenedMenu] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { width } = useWindowSize();
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    const { user, logout } = useAuth(); 

    const openMenu = () => setIsOpenedMenu(true);
    const closeMenu = () => setIsOpenedMenu(false);

    useEffect(() => {
        if (width > 800) {
            closeMenu();
        }
    }, [width]);

    const handleSelect = (path) => {
        setSelected(path);
        closeMenu();
    };

    return (
        <div className="navbar">
            <h1 className="navbar__right">
                <span className="navbar_span">Car</span> Rental
            </h1>
            {width <= 800 ? (
                <div className="menu-icon">
                    <RxHamburgerMenu size={30} onClick={openMenu} />
                </div>
            ) : (
                <div className="navbar__left">
                    <Link to="/" onClick={() => handleSelect("/")} className={selected === "/" ? "selected" : ""}>
                        Home
                    </Link>
                    <Link to="/rent" onClick={() => handleSelect("/rent")} className={selected === "/rent" ? "selected" : ""}>
                        Rent
                    </Link>
                    <Link to="/gold" onClick={() => handleSelect("/gold")} className={selected === "/gold" ? "selected" : ""}>
                        Gold Rewards
                    </Link>
                    <Link to="/about" onClick={() => handleSelect("/about")} className={selected === "/about" ? "selected" : ""}>
                        About
                    </Link>
                    <div className="dropdown-wrapper"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <Link to="/pages" className={selected === "/pages" ? "selected" : ""}>
                            Pages
                        </Link>
                        {isDropdownOpen && <DropdownMenu />}
                    </div>
                    <Link to="/contact" onClick={() => handleSelect("/contact")} className={selected === "/contact" ? "selected" : ""}>
                        Contact
                    </Link>

                    <Link to="/cart" onClick={() => handleSelect("/cart")} className={selected === "/cart" ? "selected" : ""}>
                        Cart
                    </Link>

                    {!user ? (
                        <Link to="/login" onClick={() => handleSelect("/login")} className={selected === "/login" ? "selected" : ""}>
                            Login
                        </Link>
                    ) : (
                        <button onClick={logout} className="logout-btn">
                            Logout
                        </button>
                    )}
                </div>
            )}
            {isMenuOpened && width <= 800 && (
                <MobileMenu closeMenu={closeMenu} selected={selected} handleSelect={handleSelect} />
            )}
        </div>
    );
}

export default Navbar;
