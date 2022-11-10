import { useState, useEffect } from 'react';
import { BREAK, SESSION } from '../constants';
import pause from '../content/pause.png';
import finish from '../content/finish.mp3';
import '../styles/Timer.css';

export const Timer = ({ sessionTime, breakTime, mode, onChangeMode, theme }) => {
  const [timeLeft, setTimeLeft] = useState(sessionTime);
  const [isStart, setIsStart] = useState(false);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, '0');
  const sound = () => {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = finish;
    audio.play();
  };

  useEffect(() => setTimeLeft(sessionTime), [sessionTime]);
  useEffect(() => {
    if (timeLeft == 0 && mode === BREAK) {
      sound();
      return;
    } else if (timeLeft == 0) {
      sound();
      onChangeMode(BREAK);
      setTimeLeft(breakTime);
    }
    const sessionTimer =
      isStart &&
      setInterval(() => {
        setTimeLeft(timeLeft => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }, 1000);
    return () => clearInterval(sessionTimer);
  }, [timeLeft, isStart]);

  const handleReset = () => {
    onChangeMode(null);
    setIsStart(false);
    setTimeLeft(sessionTime);
  };
  const handleStart = () => {
    onChangeMode(SESSION);
    setIsStart(true);
  };

  return (
    <>
      <div className="timer-container">
        <h1 className="title">{mode === BREAK ? BREAK : SESSION}</h1>
        <div className={`timer ${theme && 'timer-colored'}`}>
          <p className="time">
            {minutes.toString().padStart(2, '0')}:{seconds}
          </p>
        </div>

        <img
          src={pause}
          alt="pause"
          className={`pause ${mode && 'pause-visible'} ${!isStart && 'pause-active'}`}
          onClick={() => setIsStart(!isStart)}
        />
      </div>
      <div className="button-container">
        <button className={`button ${mode && 'button-disable'}`} onClick={handleStart}>
          Start
        </button>
        <button className={`button ${!mode && 'button-disable'}`} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};
