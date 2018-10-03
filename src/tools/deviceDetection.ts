import { isMobile, isTablet } from 'react-device-detect';

const mobile = () => isMobile || isTablet || window.innerWidth <= 800;

export { mobile as isMobile }