import { useDispatch, useSelector,  } from 'react-redux';
import { Button, Card } from '@mui/material';
import { addItem, adjustInventory, getProducts } from '../../store/actions';
import { useEffect } from 'react';

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.category);

  useEffect(() => {
    dispatch(getProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = products.filter(product => product.category === activeCategory)
  // console.log('products component', renderList);

  const handler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  }

  return (
    <>
      {activeCategory && renderList.map((product, index) => (
        <Card data-testid={`product-${index}`} key={`product-${index}`} variant="outlined">
          {product.name}
          <Button variant="text" onClick={() => handler(product)}>Add Item</Button>
        </Card>
      ))}
    </>
  )
};

export default Products;

