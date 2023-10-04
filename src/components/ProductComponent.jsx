import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { addToCart } from "../store/actions/cartActions"; // Import your addToCart action creator

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card className="Card" sx={{ maxWidth: 300 }}>
        <Link to={`/product/${id}`}>
          <CardMedia
            className="CardImage"
            component="img"
            alt="green iguana"
            image={image}
          />

          <CardContent className="CardContent">
            <Typography
              className="Header"
              gutterBottom
              variant="h6"
              component="div"
            >
              {title}
            </Typography>
            <Typography className="CardContentData">
              <Typography
                className="HeaderContent"
                component={"span"}
                variant="body2"
                color="text.secondary"
              >
                {category}
              </Typography>
              <Typography
                className="HeaderContent"
                component={"span"}
                variant="body2"
                color="text.secondary"
              >
                $ {price}
              </Typography>
              <Typography
                className="HeaderContent"
                component={"span"}
                variant="body2"
                color="text.secondary"
              >
                <VisibilityIcon />
              </Typography>
            </Typography>
          </CardContent>
        </Link>
        <CardActions className="cardActions">
          <Button
            className="button1"
            variant="outlined"
            size="small"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
