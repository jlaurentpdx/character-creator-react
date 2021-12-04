import './Feature.css';

export default function Feature({ name, selection, options, setSelection }) {
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
