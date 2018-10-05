import { ILayoutState } from './layout/types';
import { combineReducers } from 'redux/';
import { layoutReducer } from './layout/reducer';

export interface IApplicationState {
    layout: ILayoutState
}

export const rootReducer = combineReducers<IApplicationState>({
    layout: layoutReducer
})