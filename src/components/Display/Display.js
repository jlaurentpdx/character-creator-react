import './Display.css';

export default function Display({ selection, feature }) {
  return (
    <div
      className={`bg ${feature}`}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + `/char_images/${selection}-${feature}.png`
        })`,
      }}
    >
      {' '}
    </div>
  );
}
