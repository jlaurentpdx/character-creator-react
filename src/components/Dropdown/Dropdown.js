import './Dropdown.css';

export default function Dropdown({ name, selection, options, setSelection, setCount }) {
  //   const defaultOption = options.find((item) => item === []);

  function changeHandler(e) {
    setSelection(e.target.value);
    setCount((count) => ++count);
  }

  return (
    <label>
      {name}
      <select value={selection} onChange={changeHandler}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
