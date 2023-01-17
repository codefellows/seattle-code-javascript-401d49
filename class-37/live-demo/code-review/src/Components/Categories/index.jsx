import { connect } from 'react-redux';
import { selectCategory } from '../../store/reducer';
import { ButtonGroup, Button } from '@mui/material';

const Categories = (props) => {
  const { categories, selectCategory } = props;

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button key={`categories-${index}`} onClick={() => selectCategory(category.name)}>{category.displayName}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};

const mapStateToProps = ({ products }) => {
  return {
    categories: products.categories,
  }
};

const mapDispatchToProps = {
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
