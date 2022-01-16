export default function Catchphrase({
  label,
  inputText,
  buttonText,
  setInputText,
  setCatchphraseList,
}) {
  const clickHandler = () => {
    setCatchphraseList((prevState) => [...prevState, inputText]);
    setInputText('');
  };

  return (
    <label>
      {label}
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={clickHandler}>{buttonText}</button>
    </label>
  );
}
