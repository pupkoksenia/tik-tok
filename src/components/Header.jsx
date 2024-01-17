
import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./Search";
import "../styles/Header.css"

function Header() {
    return (
    <header className="header">
        <Link to="/" className="logo" style={{color: "white"}}>Tik Tok</Link>
        <SearchComponent />
    </header>
    );
  }
  
  export default Header;
