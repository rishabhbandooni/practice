import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../store/actions/productActions.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="uigridcontainer">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="uiplaceholder segment">
          <Card sx={{ maxWidth: 300 }} className="cardDetails">
            <CardMedia
              component="img"
              alt="green iguana"
              // height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add To Cart</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
