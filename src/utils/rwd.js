/* eslint-disable sort-keys */

export const breakpoints = {
  huge: 1650,
  xxl: 1450,
  xl: 1300,
  l: 1100,
  m: 920,
  s: 800,
  xs: 680,
  xxs: 400,
  tiny: 360,
};

const mediaQueries = {
  landscape: '(orientation: landscape)',
  nonTouch: '(pointer: fine)',
  touch: '(hover: none) and (pointer: coarse)',
  portrait: '(orientation: portrait)',
};

/* eslint-enable sort-keys */

const mfQueries = {
  ...mediaQueries,
};

Object.keys(breakpoints).forEach(size => {
  mediaQueries[size] = `(max-width: ${breakpoints[size]}px)`;
});

Object.keys(breakpoints).forEach(size => {
  mfQueries[size] = `(min-width: ${breakpoints[size]}px)`;
});

export {
  mediaQueries,
  mfQueries,
};
