import React, { useState }from 'react';

import { Container, Space } from './styles';
import Copyright from '../../../components/Copyright';
import Calculator from '../../../components/Utilitie/Calculator';
import Stopwatch from '../../../components/Utilitie/Stopwatch';


const Utilities: React.FC = () => {
  const [isOpenCalculator, setIsOpenCalculator] = useState(false);

  const toggleCalculator = () => {
    setIsOpenCalculator(!isOpenCalculator);
  }

  const [isOpenStopwatch, setIsOpenStopwatch] = useState(false);

  const toggleStopwatch = () => {
    setIsOpenStopwatch(!isOpenStopwatch);
  }


  return (
    <Container>
        <h1>Utilities</h1>
        <div>
          <button onClick={toggleCalculator}>Calculator</button>
          {isOpenCalculator ? <Calculator /> : null}
        </div>

        <div>
          <button onClick={toggleStopwatch}>Stopwatch</button>
          {isOpenStopwatch ? <Stopwatch /> : null}
        </div>



        <Space />
        <Copyright />
    </Container>
  );
}

export default Utilities;
