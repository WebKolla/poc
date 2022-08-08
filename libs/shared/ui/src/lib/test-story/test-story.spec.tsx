import { render } from '@testing-library/react';

import TestStory from './test-story';

describe('TestStory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestStory />);
    expect(baseElement).toBeTruthy();
  });
});
