import React, { useState, useMemo } from "react";
import { ProductProvider } from "./contexts/ProductContext";
import ProductGallery from "./components/Product/Gallery";
import CartProvider from "./contexts/CartContext";
import Cart from "./components/Cart/Cart";
import { Container } from "@material-ui/core";
import UserTable from "./components/User/Table";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [theme, setTheme] = useState({
    name: "Light",
  });

  const [displayList, setDisplayList] = useState(true);

  const toggleTheme = () => {
    if (theme.name === "Dark") setTheme({ name: "Light" });
    else setTheme({ name: "Dark" });
  };

  return useMemo(
    () => (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Body />
        </div>
      </BrowserRouter>
    ),
    [theme, displayList]
  );
}

export default App;
