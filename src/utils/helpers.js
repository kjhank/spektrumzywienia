import { mediaQueries } from '@utils/rwd';

const isBrowser = () => typeof window !== 'undefined';

const isMobile = () => isBrowser && window.matchMedia(mediaQueries.xs).matches;

export {
  isBrowser,
  isMobile,
};
