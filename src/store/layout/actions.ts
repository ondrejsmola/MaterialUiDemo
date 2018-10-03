import { LayoutActionTypes } from './types';

export const ToggleMenu = () => ({
    type: LayoutActionTypes.TOGGLE_MENU
});

export const ChangeFormFactor = (isMobile: boolean) => ({
    type: LayoutActionTypes.CHANGE_FORM_FACTOR,
    isMobile
})