import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { ButtonGroup, Button } from '@mui/material';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.category)

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button data-testid={`category-${index}`} key={`category-${index}`} onClick={() => dispatch(selectCategory(category.name))}>{category.displayName}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};

export default Categories;
