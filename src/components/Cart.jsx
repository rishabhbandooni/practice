// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/actions/cartActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "20px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButton: {
    minWidth: "30px",
  },
});

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Grid container spacing={3}>
          {cartItems
            .filter((item) => item.quantity > 0) // Remove items with quantity 0
            .map((item) => (
              <Grid item key={item.id}>
                <Card className={classes.root}>
                  <CardMedia
                    className="CardImage"
                    component="img"
                    alt="green iguana"
                    image={item.image}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">${item.price}</Typography>
                    <div className={classes.quantityContainer}>
                      <Button
                        className={classes.quantityButton}
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </Button>
                      <Typography variant="body1">{item.quantity}</Typography>
                      <Button
                        className={classes.quantityButton}
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </Button>
                      <Button
                        className={classes.quantityButton}
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
}

export default Cart;
