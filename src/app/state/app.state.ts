import { shortLinksReducer } from './links/links.reducer';
import { IShortLinksState, initialShortLinksState } from './links/links.state';

export interface IAppState {
  shortLinks: IShortLinksState;
}

export const INITIAL_APPSTATE: IAppState = {
  shortLinks: initialShortLinksState,
};

export const reducers = {
  shortLinks: shortLinksReducer,
};
