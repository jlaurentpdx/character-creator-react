import './Dropdown.css';
import { useState } from 'react';

export default function Feature({ name, options }) {
  const defaultOption = options.find((item) => item === []);
  const [selection, setSelection] = useState(defaultOption);

  return (
    <label>
      {name}
      <select value={selection} onChange={(e) => setSelection(e.target.value)}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
