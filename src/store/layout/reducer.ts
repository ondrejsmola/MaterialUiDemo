import { ILayoutState, LayoutActionTypes } from './types';
import { Reducer } from 'redux';
import { isMobile } from '../../tools/deviceDetection';

const initialState: ILayoutState = {
    menuOpen: !isMobile(),
    mobileVersion: isMobile()
}

const reducer: Reducer<ILayoutState> = (state = initialState, action) => {
    switch (action.type) {
        case LayoutActionTypes.TOGGLE_MENU: {
            return { ...state, menuOpen: !state.menuOpen }
        }
        case LayoutActionTypes.WINDOW_RESIZE: {
            return { ...state, mobileVersion: isMobile() }
        }
        default:
            return state;
    }
}

export { reducer as layoutReducer }