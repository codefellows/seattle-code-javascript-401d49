import { connect } from 'react-redux';
import { Card } from '@mui/material';

const Products = ({ products, activeCategory }) => {
  return (
    <>
    {activeCategory && products.map((product, index) => (
      <Card key={`product-${index}`} variant="outlined">{product.name}</Card>
    ))}
    </>
  )
};


const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    activeCategory: products.activeCategory
  }
};

export default connect(mapStateToProps)(Products);

