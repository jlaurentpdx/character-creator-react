export default function CatchphraseList({ headCount, midCount, pantsCount, catchphraseList }) {
  return (
    <div className="stats">
      <p className="display-stats hidden">
        You have changed the head {headCount} times, the body {midCount} times, and the pants{' '}
        {pantsCount} times. And nobody can forget your character&apos;s classic catchphrases:
      </p>
      {catchphraseList.map((item) => (
        <p key={item} className="catchphrase">
          {item}
        </p>
      ))}
    </div>
  );
}
