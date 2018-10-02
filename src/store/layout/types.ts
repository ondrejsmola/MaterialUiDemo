export const enum LayoutActionTypes {
    TOGGLE_MENU = '@@layout/TOGGLE_MENU'
}

export interface ILayoutState {
    menuOpen: boolean
}