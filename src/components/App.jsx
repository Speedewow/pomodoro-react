import { useState } from 'react';
import { InfoPopup } from './InfoPopup';
import { Header } from './Header';
import { Timer } from './Timer';
import { Input } from './Input';
import { TomatoRain } from './TomatoRain';
import { SESSION, BREAK } from '../constants';
import '../styles/App.css';

export const App = () => {
  const [isRed, setIsRed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null);
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const handleSessionIncrement = () => {
    sessionTime < 45 && setSessionTime(sessionTime + 5);
  };
  const handleSessionDecrement = () => {
    sessionTime > 15 && setSessionTime(sessionTime - 5);
  };
  const handleBreakIncrement = () => {
    breakTime < 15 && setBreakTime(breakTime + 1);
  };
  const handleBreakDecrement = () => {
    breakTime > 3 && setBreakTime(breakTime - 1);
  };

  return (
    <div className={`main ${isRed && 'main-colored'}`}>
      <InfoPopup isOpen={isOpen} />
      <Header
        onInfo={() => setIsOpen(!isOpen)}
        onTheme={() => setIsRed(!isRed)}
        theme={isRed}
        mode={mode}
      />
      <Timer
        sessionTime={sessionTime * 60}
        breakTime={breakTime * 60}
        mode={mode}
        onChangeMode={mode => setMode(mode)}
        theme={isRed}
      />
      <div
        className={`inputs-container ${isRed && 'inputs-container-colored'} 
        ${mode && 'inputs-container-hidden'}`}
      >
        <Input
          name={SESSION}
          value={sessionTime}
          handleIncrement={handleSessionIncrement}
          handleDecrement={handleSessionDecrement}
          theme={isRed}
        />
        <Input
          name={BREAK}
          value={breakTime}
          handleIncrement={handleBreakIncrement}
          handleDecrement={handleBreakDecrement}
          theme={isRed}
        />
      </div>
      {mode && <TomatoRain />}
    </div>
  );
};
