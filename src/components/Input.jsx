import '../styles/Input.css';

export const Input = ({ name, value, handleIncrement, handleDecrement, theme }) => {
  return (
    <div className="input-container">
      <h2 className="input-title">{name}</h2>
      <div className={`count ${theme && 'count-colored'}`}>
        <span className={`prev ${theme && 'prev-colored'}`} onClick={handleDecrement}></span>
        <span className={`next ${theme && 'next-colored'}`} onClick={handleIncrement}></span>
        <input className="input" value={value} name={name} readOnly />
      </div>
    </div>
  );
};
