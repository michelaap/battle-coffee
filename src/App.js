import React, { useState } from 'react';
import {
  FaCoffee,
  FaHandPaper,
  FaHandRock,
  FaHandScissors,
  FaUserNinja,
  FaUserAstronaut,
  FaUserSecret
} from 'react-icons/fa';
import './App.css';

const randomNumber = () => {
  const min = 0;
  const max = 3;
  return Math.floor(Math.random() * (max - min) + min);
}

const handleJokenpo = (value) => {
  if (value === 0) {
    return <FaHandPaper color='#ffbc00' />
  }

  if (value === 1) {
    return <FaHandRock color='#ffbc00' />
  }

  if (value === 2) {
    return <FaHandScissors color='#ffbc00' />
  }
}

function App() {
  const [firstUser, setFirstUser] = useState(null);
  const [secondUser, setSecondUser] = useState(null);
  const [thirdUser, setThirdUser] = useState(null);

  const fnJokenpo = () => {
    setFirstUser(() => randomNumber());
    setSecondUser(() => randomNumber())
    setThirdUser(() => randomNumber())
  }

  const reset = () => {
    setFirstUser(null);
    setSecondUser(null);
    setThirdUser(null);
  }

  return (
    <React.Fragment>
      <div className='container'>
        <h1>Battle Coffee <FaCoffee /></h1>
        <h2>const {`{ `} <FaHandPaper color='#ffbc00' />, <FaHandRock color='#ffbc00' />, <FaHandScissors color='#ffbc00' /> } = Jokenpô;</h2>
        
      </div>
      <div className='container-players'>
        <div className='player'>
          <FaUserNinja size={30} /> { firstUser !== null && handleJokenpo(firstUser)}
        </div>
        <div className='player'>
          <FaUserAstronaut size={30} /> { secondUser !== null && handleJokenpo(secondUser) }
        </div>
        <div className='player'>
          <FaUserSecret size={30} /> { thirdUser !== null && handleJokenpo(thirdUser) }
        </div>
      </div>
      <div className='container-btn'>
        <button className='btn btn-tomato' onClick={() => fnJokenpo()}>Joookeeeenpô</button>
        <button className='btn btn-gray' onClick={() => reset()}>Reset</button>
      </div>

      <p style={{ textAlign: "center", fontSize: 9 }}>Version 0.1.0 &copy; Michel</p>

    </React.Fragment>
  );
}

export default App;
