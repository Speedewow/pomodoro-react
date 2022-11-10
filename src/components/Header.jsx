import { POMODORO, TECHNIQUE } from '../constants';
import logo from '../content/main.png';
import '../styles/Header.css';

export const Header = ({ onInfo, onTheme, theme, mode }) => {
  return (
    <header className={`header ${theme && 'header-colored'} ${mode && 'header-hidden'}`}>
      <span className={theme ? 'info-icon-red' : 'info-icon'} onClick={onInfo} />
      <div className="logo-container">
        <p className="logo-title">{POMODORO}</p>
        <img src={logo} alt="logo" className="logo" />
        <p className="logo-title">{TECHNIQUE}</p>
      </div>
      <span className={theme ? 'theme-icon-red' : 'theme-icon'} onClick={onTheme} />
    </header>
  );
};
