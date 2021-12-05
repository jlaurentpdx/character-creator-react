import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders a Feature called Head', () => {
  const options = ['bird', 'dog', 'duck', 'horse'];
  const container = render(<Dropdown name="head" options={options} />);
  expect(container).toMatchSnapshot();
});
