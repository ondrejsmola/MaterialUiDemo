import { isMobile } from 'react-device-detect';

const mobile = () => isMobile || window.innerWidth <= 800;

export { mobile as isMobile }