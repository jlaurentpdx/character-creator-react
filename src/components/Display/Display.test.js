import { render, screen } from '@testing-library/react';
import Display from './Display';

test('Display should render a div with image information', () => {
  const { container } = render(<Display selection="bird" feature="head" />);
  const image = screen.getByRole('img');
  expect(image.style.backgroundImage).toContain('/char_images/bird-head.png');

  expect(container).toMatchSnapshot();
});
