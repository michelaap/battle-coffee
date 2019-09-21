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

const randomNumber = () => {
  const min = 0;
  const max = 3;
  return Math.floor(Math.random() * (max - min) + min);
}

const handleJokenpo = (value) => {
  if (value === 0) {
    return <FaHandPaper color='#ffdd67' />
  }

  if (value === 1) {
    return <FaHandRock color='#ffdd67' />
  }

  if (value === 2) {
    return <FaHandScissors color='#ffdd67' />
  }
}

function App() {
  const [firstUser, setFirstUser] = useState(null);
  const [secondUser, setSecondUser] = useState(null);
  const [thirdUser, setThirdUser] = useState(null);

  const fnJokenpo = () => {
    setFirstUser(() =>  randomNumber());
    setSecondUser(() => randomNumber())
    setThirdUser(() => randomNumber())
  }

  return (
    <React.Fragment>
      <h1>Battle Coffe <FaCoffee /></h1>
      <h2>const {`{`}<FaHandPaper color='#ffdd67' />, <FaHandRock color='#ffdd67' />, <FaHandScissors color='#ffdd67' />} = Jokenpô;</h2>
      <button onClick={() => fnJokenpo()}>Jokenpo</button>

      <FaUserNinja size={30} /> { firstUser !== null && handleJokenpo(firstUser)}
      <FaUserAstronaut size={30} /> { secondUser !== null && handleJokenpo(secondUser) }
      <FaUserSecret size={30} /> { thirdUser !== null && handleJokenpo(thirdUser) }
    </React.Fragment>
  );
}

export default App;
