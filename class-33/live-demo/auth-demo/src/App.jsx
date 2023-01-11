// import { useContext } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Auth from './Components/Auth';
// import { SettingsContext } from './Context/Settings';

const App = () => {

  // const { title, email } = useContext(SettingsContext);
  return (
    <>
      <Header />
      <Main />
      {/* <Main /> */}

      <Auth capability="read">
        <p>I can read!</p>
      </Auth>
      <Auth capability="create">
        <p>I can create!</p>
      </Auth>
      <Auth capability="update">
        <p>I can update!</p>
      </Auth>
      <Auth capability="delete">
        <p>I can delete!</p>
      </Auth>
    </>
  )
}

export default App;
