import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#282c34",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2 style={{ margin: 0 }}>🛒 Ecomm React</h2>

      <nav>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart
        </Link>
      </nav>
    </header>
  );
}

export default Header;
