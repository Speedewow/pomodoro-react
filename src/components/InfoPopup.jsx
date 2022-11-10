import { INFO } from '../constants';
import '../styles/InfoPopup.css';

export const InfoPopup = ({ isOpen }) => {
  return (
    <div className={`popup ${isOpen && 'popup-open'}`}>
      <p className="popup-text">{INFO}</p>
    </div>
  );
};
