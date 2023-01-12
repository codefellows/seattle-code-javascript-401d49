import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { When } from 'react-if';
import { AuthContext } from '../../Context/Auth';

const Header = () => {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, logout, user } = useContext(AuthContext)
  console.log('user', user);
  const { title, 
    email, 
    setEmail, 
    staff, 
    addStaff 
  } = useContext(SettingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStaff({ name, position });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>Email us at: {email}</h2>
    
    <form onSubmit={handleLogin}>
      <label>Username
        <input onChange={(e) => setUsername(e.target.value)}/>
      </label>

      <label>Password
        <input onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <button type="submit">Login</button>
    </form>

    <button onClick={logout}>Logout</button>
  
  
  
      {/* <label>Change Email:
        <input onChange={(e) => setEmail(e.target.value)} />
      </label>
      <ul>
        {staff.map((person, index) => (
          <li key={`header-${index}`}>{person.name}, {person.position}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Position:
          <input onChange={(e) => setPosition(e.target.value)} />
        </label>
        <button type="submit">Add Staff Member</button>
      </form>

      <button onClick={() => setShow(!show)}>Show words</button>

      <When condition={show}>
        <h3>WORDS WORDS WORDS</h3>
      </When> */}


    </>
  )
}

export default Header;
