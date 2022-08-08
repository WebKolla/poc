import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TestStoryProps {}

const StyledTestStory = styled.div`
  color: pink;
`;

export function TestStory(props: TestStoryProps) {
  return (
    <StyledTestStory>
      <h1>Welcome to TestStory!</h1>
    </StyledTestStory>
  );
}

export default TestStory;
