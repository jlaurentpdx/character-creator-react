import { render, screen } from '@testing-library/react';
import Feature from './Dropdown';

test('renders a Feature called Head', () => {
  const options = ['bird', 'dog', 'duck', 'horse'];
  const container = render(<Feature name="head" selection="bird" options={options} />);
  expect(container).toMatchSnapshot();
});
