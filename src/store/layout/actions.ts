import { LayoutActionTypes } from './types';

export const ToggleMenu = () => ({
    type: LayoutActionTypes.TOGGLE_MENU
});

export const WindowResize = () => ({
    type: LayoutActionTypes.WINDOW_RESIZE
})