import "./App.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge"; // Corrected import

// styleComponents
import { Wrapper, StyledButton } from './App.style';
import Item from "./Item/Item";

// types
export type cardItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProduct = async (): Promise<cardItemType[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data as cardItemType[];
};

function App() {
  const { data, error, isError, isLoading } = useQuery<cardItemType[]>(
    "products",
    getProduct
  );

  console.log(data, "data");
  if (isLoading) {
    return <LinearProgress />;
  }

  const getTotalItems = () => null;
  const handleAddToCart = (clickItem: cardItemType) => null;
  const handleRemoveFromCart = () => null;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
