import { useContext } from 'react';
import Main from './Components/Main';
import { SettingsContext } from './Context/Settings';

const App = () => {

  const { title, email } = useContext(SettingsContext);
  return (
    <>
      <h1>{title}</h1>
      <h2>Email us at: {email}</h2>
      <Main />
      {/* <Main /> */}
    </>
  )
}

export default App;
