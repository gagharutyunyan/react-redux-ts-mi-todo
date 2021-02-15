import { css } from 'styled-components';

const breakpoints = {
  xs: '420px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const useMediaQuery: any = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
