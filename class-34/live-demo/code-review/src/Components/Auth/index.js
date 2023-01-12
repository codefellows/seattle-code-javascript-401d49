import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { When } from 'react-if';

const Auth = ({capability, children}) => {
  const { can, isLoggedIn} = useContext(AuthContext);

  return(
    <When condition={isLoggedIn && can(capability)}>
      { children }
    </When>
  )
};

export default Auth;
