import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PrimaryButtonProps {}

const StyledPrimaryButton = styled.button`
  color: pink;
`;

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <StyledPrimaryButton>
      Button
    </StyledPrimaryButton>
  );
}

export default PrimaryButton;
