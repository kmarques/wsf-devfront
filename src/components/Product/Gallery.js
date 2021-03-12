import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useMemo } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import AddCartForm from "../Cart/AddCartForm";
import ProductItem from "./ProductItem";

export default function ProductGallery() {
  const { selectors } = useContext(ProductContext);
  const { actions } = useContext(CartContext);
  const [filter, setFilter] = useState("");
  const products = selectors.getProducts(),
    isReceived = selectors.isReceived();

  const productFiltered = useMemo(
    () => products.filter((product) => product.name.startsWith(filter)),
    [products, filter]
  );

  return (
    <>
      <h1>Gallery</h1>
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      {!isReceived && "Chargement en cours..."}
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {isReceived &&
          productFiltered.map((product) => (
            <Grid item>
              <Card>
                <CardMedia
                  image={product.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <AddCartForm
                    onSubmit={(quantity) =>
                      actions.addToCart(product, quantity)
                    }
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
