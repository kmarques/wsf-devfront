import React, { useState, useMemo } from "react";
import { ProductProvider } from "./contexts/ProductContext";
import ProductGallery from "./components/Product/Gallery";
import CartProvider from "./contexts/CartContext";
import Cart from "./components/Cart/Cart";
import { Container } from "@material-ui/core";
import UserList from "./components/User/List";

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
      <div className="App">
        <Container>
          <UserList />
        </Container>
      </div>
    ),
    [theme, displayList]
  );
}

export default App;
