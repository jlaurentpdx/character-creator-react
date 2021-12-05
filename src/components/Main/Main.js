import './Main.css';
import Dropdown from '../Dropdown/Dropdown';

export default function Main() {
  const dropdownOptions = [
    ['bird', 'dog', 'duck', 'horse'],
    ['blue', 'dress', 'pink', 'red'],
    ['blue', 'dog', 'leg', 'white'],
  ];

  return (
    <main>
      <div className="left">
        <div className="picker">
          <Dropdown name="Head" options={dropdownOptions[0]} />
          <Dropdown name="Middle" options={dropdownOptions[1]} />
          <Dropdown name="Pants" options={dropdownOptions[2]} />

          {/* Phrase */}
          {/* Display : Phrases */}
        </div>
        <div className="stats">{/* Display: Stats */}</div>
      </div>
      <div className="right">
        <div className="character">
          {/* Display : Feature : Head */}
          {/* Display : Feature : Middle */}
          {/* Display : Feature : Body */}
        </div>
      </div>
    </main>
  );
}
