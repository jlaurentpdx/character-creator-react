import { useState } from 'react';
import './Main.css';
import Dropdown from '../Dropdown/Dropdown';
import Catchphrase from '../Catchphrase/Catchphrase';

export default function Main() {
  const dropdownOptions = [
    ['bird', 'dog', 'duck', 'horse'],
    ['blue', 'dress', 'pink', 'red'],
    ['blue', 'dog', 'leg', 'white'],
  ];

  // Phrase list
  const [catchphraseList, setCatchphraseList] = useState([]);

  const [headSelection, setHeadSelection] = useState('bird');
  const [midSelection, setMidSelection] = useState('blue');
  const [pantsSelection, setPantsSelection] = useState('blue');
  const [inputText, setInputText] = useState('');

  return (
    <main>
      <div className="left">
        <div className="picker">
          <Dropdown
            name="Head"
            selection={headSelection}
            options={dropdownOptions[0]}
            setSelection={setHeadSelection}
          />
          <Dropdown
            name="Middle"
            selection={midSelection}
            options={dropdownOptions[1]}
            setSelection={setMidSelection}
          />
          <Dropdown
            name="Pants"
            selection={pantsSelection}
            options={dropdownOptions[2]}
            setSelection={setPantsSelection}
          />

          <Catchphrase
            label="Add a catch phrase"
            inputText={inputText}
            buttonText="Add"
            catchphraseList={catchphraseList}
            setInputText={setInputText}
            setCatchphraseList={setCatchphraseList}
          />
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
