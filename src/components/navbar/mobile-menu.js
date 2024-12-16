import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function MobileMenu({ closeMenu, selected, handleSelect }) {
    return (
        <div className="mobile-menu">
            <AiOutlineClose size={30} onClick={closeMenu} className="close-icon" />
            <div className="mobile-menu-links">
                <Link
                    to="/"
                    onClick={() => handleSelect("/")}
                    className={selected === "/" ? "selected" : ""}
                >
                    Home
                </Link>
                <Link
                    to="/rent"
                    onClick={() => handleSelect("/rent")}
                    className={selected === "/rent" ? "selected" : ""}
                >
                    Rent
                </Link>
                <Link
                    to="/gold"
                    onClick={() => handleSelect("/gold")}
                    className={selected === "/gold" ? "selected" : ""}
                >
                    Gold Rewards
                </Link>
                <Link
                    to="/about"
                    onClick={() => handleSelect("/about")}
                    className={selected === "/about" ? "selected" : ""}
                >
                    About
                </Link>
                <Link
                    to="/pages"
                    onClick={() => handleSelect("/pages")}
                    className={selected === "/pages" ? "selected" : ""}
                >
                    Pages
                </Link>
                <Link
                    to="/contact"
                    onClick={() => handleSelect("/contact")}
                    className={selected === "/contact" ? "selected" : ""}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default MobileMenu;
