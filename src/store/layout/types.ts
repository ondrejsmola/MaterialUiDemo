export const enum LayoutActionTypes {
    TOGGLE_MENU = '@@layout/TOGGLE_MENU',
    WINDOW_RESIZE = '@@layout/WINDOW_RESIZE'
}

export interface ILayoutState {
    menuOpen: boolean,
    mobileVersion: boolean
}