import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Grid, Stack, Rating, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartAction";


export default function ProductCard({ data, addToCart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cart, setCart] = useState(false);
  const { adding } = useSelector((state) => state.cart);

  // const addToCart = () => {
  //   dispatch(addItemToCart(id, count));
  //   setCart(true);
  // };

  data.price = parseFloat(data.price)

  return (
    <Grid item sx={{ margin: "0px !important" }}>
      <Card sx={{ width: { md: 300, sm: 200, xs: 300 } }} component="div">
        <CardMedia
          component="img"
          alt={data.title}
          height="150"
          image={data.img_1}
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography gutterBottom sx={{ fontWeight: "600" }}>
              {data.title}
            </Typography>
            <Typography sx={{ fontWeight: "600" }}>
              <span>&#8358;</span>
              {data.price}
            </Typography>
          </Stack>
          {/* <Typography variant="body2" color="text.secondary">
            hello
          </Typography> */}
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
            background: "rgb(24, 104, 183)",
          }}
          component="div"
        >
          <Button
            size="small"
            sx={{ color: "white" }}
            onClick={() => navigate(`/product/${data.id}`)}
          >
            View details
          </Button>
          {/* <LoadingButton
                        loading={adding ? true : false}
                        variant="outlined"
                        sx={{ "&:focus": { outline: "none" },color: "white"  }}
                        onClick={addToCart}
                        disabled={book?.book?.stock === 0}
                      >
                        <Typography variant="h5">Add to cart</Typography>
                      </LoadingButton> */}
          <Button
            size="small"
            sx={{ color: "white" }}
            onClick={() => addToCart(data.id)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
