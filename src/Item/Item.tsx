import Button from "@material-ui/core/Button";
// Types
import { cardItemType } from "../App";
// Styles
import { Wrapper } from "./Item.style";

type Props = {
  item: cardItemType;
  handleAddToCart: (clickedItem: cardItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
