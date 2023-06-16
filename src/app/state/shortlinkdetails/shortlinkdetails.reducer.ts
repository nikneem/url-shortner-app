import { createFeature, createReducer, on } from '@ngrx/store';

import {
  ShortLinkActions,
  ShortLinkApiActions,
} from './shortlinkdetails.actions';
import { initialShortLinkDetailsState } from './shortlinkdetails.state';

export const shortLinksReducer = createReducer(
  initialShortLinkDetailsState,
  on(ShortLinkActions.receive, (state, { id }) => ({
    ...state,
    isLoading: true,
    shortLink: undefined,
  })),
  on(ShortLinkActions.add, (state, { endpointUrl }) => ({
    ...state,
    isLoading: true,
  })),
  on(ShortLinkApiActions.added, (state, { shortLink }) => ({
    ...state,
    isLoading: false,
    shortLink: shortLink,
  })),
  on(ShortLinkApiActions.received, (state, { shortLink }) => ({
    ...state,
    isLoading: false,
    shortLink: shortLink,
  }))
);
