import { createReducer, on } from '@ngrx/store';
import { initialShortLinksListState } from './shortlinklist.state';
import {
  ShortLinkActions,
  ShortLinkApiActions,
} from '../shortlinkdetails/shortlinkdetails.actions';
import { ShortLinkListActions } from './shortlinklist.actions';

export const shortLinksApiReducer = createReducer(
  initialShortLinksListState,
  on(ShortLinkListActions.list, (state, { query }) => ({
    ...state,
    isLoading: true,
  })),
  on(ShortLinkApiActions.listreceived, (state, { list }) => ({
    ...state,
    isLoading: false,
    shortLinks: list,
  }))
);
