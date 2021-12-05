import './SubmitInput.css';

export default function SubmitInput({ label, buttonText }) {
  return (
    <label>
      {label}
      <input type="text" />
      <button>{buttonText}</button>
    </label>
  );
}
