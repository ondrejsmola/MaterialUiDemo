export const enum LayoutActionTypes {
    TOGGLE_MENU = '@@layout/TOGGLE_MENU',
    CHANGE_FORM_FACTOR = '@@layout/CHANGE_FORM_FACTOR'
}

export interface ILayoutState {
    menuOpen: boolean,
    mobileVersion: boolean
}