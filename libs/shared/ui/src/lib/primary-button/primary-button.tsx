import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PrimaryButtonProps {}

const StyledPrimaryButton = styled.div`
  color: pink;
`;

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <StyledPrimaryButton>
      <h1>Welcome to PrimaryButton!</h1>
    </StyledPrimaryButton>
  );
}

export default PrimaryButton;
