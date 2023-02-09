import React, { useState } from "react";

import { Container, Digits, Buttons } from './styles';


const Stopwatch: any = () => {
const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
const [interv, setInterv] = useState<any>();



const start = () => {
  run();
  setInterv(setInterval(run, 10));
};

let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

const run = () => {
  if(updatedM === 60){
    updatedH++;
    updatedM = 0;
  }
  if(updatedS === 60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedMs = 100) {
    updatedS++;
    updatedMs= 0
  }
  updatedMs ++;
  return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
}

const stop = () => {
  clearInterval(interv);
};

const clear = () => {
  clearInterval(interv);
  setTime({ms:0, s:0, m:0, h:0});
}



  return (
    <Container>
      <Digits>
        <input type="number" value={time.h >= 0 ? time.h : "0" + time.h} disabled/>:
        <input type="number" value={time.m >= 0 ? time.m : "0" + time.m} disabled/>:
        <input type="number" value={time.s >= 0 ? time.s : "0" + time.s} disabled/>:
        <input type="number" value={time.ms >= 0 ? time.ms : "0" + time.ms} disabled/>
      </Digits>
      <Buttons>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={clear}>Reset</button>
      </Buttons>

    </Container>
    );
}

export default Stopwatch;
