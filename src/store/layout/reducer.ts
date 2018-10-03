import { ILayoutState, LayoutActionTypes } from './types';
import { Reducer } from 'redux';
import { isMobile } from '../../tools/deviceDetection';

const initialState: ILayoutState = {
    menuOpen: !isMobile()
}

const reducer: Reducer<ILayoutState> = (state = initialState, action) => {
    switch (action.type) {
        case LayoutActionTypes.TOGGLE_MENU: {
            return { ...state, menuOpen: !state.menuOpen }
        }
        default:
            return state;
    }
}

export { reducer as layoutReducer }