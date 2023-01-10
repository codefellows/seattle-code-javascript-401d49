import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { When } from 'react-if';

const Header = () => {

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [show, setShow] = useState(true);


  const { title, email, setEmail, staff, addStaff } = useContext(SettingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStaff({ name, position });
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>Email us at: {email}</h2>
      <label>Change Email:
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
      </When>


    </>
  )
}

export default Header;
