import { render, screen } from '@testing-library/react';
import Catchphrase from './Catchphrase';

test('Catchphrase should render a label, input, and button', () => {
  const { container } = render(
    <Catchphrase label="Add a catch phrase" inputText="in dog we trust" buttonText="Add" />
  );
  screen.getByText('Add a catch phrase');
  screen.getByDisplayValue('in dog we trust');
  screen.getByText('Add');

  expect(container).toMatchSnapshot();
});
