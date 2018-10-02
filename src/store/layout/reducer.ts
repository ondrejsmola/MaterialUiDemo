import { ILayout, LayoutActionTypes } from './types';
import { Reducer } from 'redux';

const initialState: ILayout = {
    menuOpen: false
}

const reducer: Reducer<ILayout> = (state = initialState, action) => {
    switch (action.type) {
        case LayoutActionTypes.TOGGLE_MENU: {
            return { ...state, menuOpen: !state.menuOpen }
        }
        default:
            return state;
    }
}

export { reducer as layoutReducer }