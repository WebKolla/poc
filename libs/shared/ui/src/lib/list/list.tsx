import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ListProps {}

const StyledList = styled.div`
  color: pink;
`;

export function List(props: ListProps) {
  return (
    <StyledList>
      <h1>Welcome to List!</h1>
    </StyledList>
  );
}

export default List;
