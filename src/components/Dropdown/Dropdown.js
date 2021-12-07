import './Dropdown.css';

export default function Dropdown({ name, selection, options, setSelection }) {
  //   const defaultOption = options.find((item) => item === []);

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
