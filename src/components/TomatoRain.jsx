import '../styles/TomatoRain.css';
import tomato from '../content/tomato.svg';

export const TomatoRain = () => {
  let tomatoArray = [];
  for (let i = 0; i < 20; i++) {
    tomatoArray.push(tomato);
  }

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const getRndFloat = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(1);
  };

  return (
    <div className="tomatos tomatos-start">
      {tomatoArray.map(tomato => {
        return (
          <div
            className="tomato"
            style={{
              width: getRndFloat(12, 24) + 'px',
              animationDuration: getRndInteger(10, 20) + 's',
              animationDelay: getRndInteger(-1, tomato.length / 1) + 's',
            }}
          >
            <img src={tomato} className="tomato-image" />
          </div>
        );
      })}
    </div>
  );
};
