import styled, { css } from 'styled-components';

// Font Family
const quicksandFont = css`
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
`;

const bungeeFont = css`
  font-family: 'Bungee', cursive;
`;

// Typography texts
const MainHeading = styled.h2`
  ${bungeeFont}
  font-size: 10rem;
`;

const TertiaryHeading = styled.h6`
  ${quicksandFont}
  font-size: 1.8rem;
`;

export { MainHeading, TertiaryHeading };
