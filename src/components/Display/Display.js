import './Display.css';

export default function Display({ selection, feature }) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `/char_images/${selection}-${feature}.png`} />
    </div>
  );
}
