import { useState } from 'react';
import './Main.css';
import Dropdown from '../Dropdown/Dropdown';
import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';
import CatchphraseList from '../CatchphraseList/CatchphraseList';

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
            name="Bottom"
            selection={pantsSelection}
            options={dropdownOptions[2]}
            setSelection={setPantsSelection}
            setCount={setPantsCount}
          />

          <Catchphrase
            label=" Add a catch phrase "
            inputText={inputText}
            buttonText="Add"
            catchphraseList={catchphraseList}
            setInputText={setInputText}
            setCatchphraseList={setCatchphraseList}
          />
        </div>
        {catchphraseList.length > 0 ? (
          <CatchphraseList {...{ headCount, midCount, pantsCount, catchphraseList }} />
        ) : null}
      </div>
      <div className="right">
        <div className="character">
          <Display selection={headSelection} feature="head" />
          <Display selection={midSelection} feature="middle" />
          <Display selection={pantsSelection} feature="pants" />
        </div>
      </div>
    </main>
  );
}
