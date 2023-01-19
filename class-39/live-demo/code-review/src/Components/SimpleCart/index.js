// import { Button } from '@mui/material';
// import { makeStyles } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../store/actions';
import { When } from 'react-if';
import './styles.scss'

// const useStyles = makeStyles((theme) => ({
//   remove: {
//     "cursor": "pointer",
//     color: "#eee",
//     width: "15px",
//     height: "15px",
//     background: "#800",
//     lineHeight: "13px",
//     borderRadius: "50%",
//     padding: "0 4px",
//     fontSize: "15px",
//   }
// }
//   ))

const Cart = () => {
  // const classes = useStyles()
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);
  return (
    <>
      <When condition={cart.length > 0}>
        <div className="simple-cart">
          <ul>
            {cart.map((product, index) => (
              <li key={`cart-${index}`}>{product.name}
                <span onClick={() => dispatch(removeItem(product))}>x</span>
              </li>
            ))}
          </ul>
        </div>
      </When>
    </>
  )
};

export default Cart;
