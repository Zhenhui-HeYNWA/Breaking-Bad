import { useEffect, useState } from 'react';

import './App.css';
import breakify from './Breakify';
import BreakingLogo from './logo';
function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [first, setFirst] = useState(['', '', '']);
  const [last, setLast] = useState(['', '', '']);
  useEffect(() => {
    setFirst(breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setLast(breakify(lastName));
  }, [lastName]);

  return (
    <>
      <div className='app'>
        <div className='content'>
          <div className='name'>
            <BreakingLogo result={first} className='firstname' />
            <BreakingLogo result={last} className='lastname' />
          </div>
          <div className='row'>
            <div className='col'>
              <label>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className='col'>
              <label>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
          <button className='btn'>Breakify</button>
        </div>
      </div>
    </>
  );
}

export default App;
