import { css } from 'styled-components';

// defines breakpoints to be used
const BREAKPOINTS = {
  upToLarge: { width: 1600 },
  upToDesktop: { width: 1200 },
  upToLaptop: { width: 992 },
  upToTablet: { width: 768 },
  upToPhone: { width: 576 },
};

// constructs an object of media query templates, where each item in the object can accept css code and generate the appropriate media query at the appropriate breakpoint.
const Media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label].width}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default Media;
