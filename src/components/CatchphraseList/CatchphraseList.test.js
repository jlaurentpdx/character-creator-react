import { render, screen } from '@testing-library/react';
import CatchphraseList from './CatchphraseList';

test('should render stats and a list of catchphrases', () => {
  const { container } = render(
    <CatchphraseList
      headCount={1}
      midCount={2}
      pantsCount={0}
      catchphraseList={['oh gee', 'testing is a hoot']}
    />
  );
  screen.getByText(
    `You have changed the head 1 times, the body 2 times, and the pants 0 times. And nobody can forget your character's classic catchphrases:`
  );
  screen.getByText('oh gee');
  screen.getByText('testing is a hoot');

  expect(container).toMatchSnapshot();
});
