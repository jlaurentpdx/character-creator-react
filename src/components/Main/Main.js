import { useState } from 'react';
import './Main.css';
import Feature from '../Feature/Feature';

export default function Main() {
  const [selection, setSelection] = useState('bird');

  const headOptions = ['bird', 'dog', 'duck', 'horse'];

  return (
    <main>
      <div className="left">
        <div className="picker">
          <Feature
            name="Head"
            selection={selection}
            options={headOptions}
            setSelection={setSelection}
          />

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
