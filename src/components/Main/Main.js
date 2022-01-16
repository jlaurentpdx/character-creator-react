import { useState } from 'react';
import './Main.css';
import Dropdown from '../Dropdown/Dropdown';
import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';

export default function Main() {
  const dropdownOptions = [
    ['bird', 'dog', 'duck', 'horse'],
    ['blue', 'dress', 'pink', 'red'],
    ['blue', 'dog', 'leg', 'white'],
  ];

  const [catchphraseList, setCatchphraseList] = useState([]);
  const [headSelection, setHeadSelection] = useState('bird');
  const [midSelection, setMidSelection] = useState('blue');
  const [pantsSelection, setPantsSelection] = useState('blue');
  const [headCount, setHeadCount] = useState(0);
  const [midCount, setMidCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
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
            setCount={setHeadCount}
          />
          <Dropdown
            name="Middle"
            selection={midSelection}
            options={dropdownOptions[1]}
            setSelection={setMidSelection}
            setCount={setMidCount}
          />
          <Dropdown
            name="Pants"
            selection={pantsSelection}
            options={dropdownOptions[2]}
            setSelection={setPantsSelection}
            setCount={setPantsCount}
          />

          {console.log(headSelection)}

          <Catchphrase
            label="Add a catch phrase"
            inputText={inputText}
            buttonText="Add"
            catchphraseList={catchphraseList}
            setInputText={setInputText}
            setCatchphraseList={setCatchphraseList}
          />
        </div>
        <div className="stats">
          <p className="display-stats hidden">
            You have changed the head {headCount} times, the body {midCount} times, and the pants{' '}
            {pantsCount} times. And nobody can forget your character&apos;s classic catchphrases:
          </p>
          {catchphraseList.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="character">
          <Display selection={headSelection} feature="head" />
          {/* Display : Feature : Middle */}
          {/* Display : Feature : Body */}
        </div>
      </div>
    </main>
  );
}
