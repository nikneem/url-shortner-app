import { createFeature, createReducer, on } from '@ngrx/store';

import { ShortLinkActions } from './links.actions';
import { initialShortLinksState } from './links.state';

export const shortLinksReducer = createReducer(
  initialShortLinksState,
  on(ShortLinkActions.add, (state, { endpointUrl }) => ({
    ...state,
    isLoading: true,
  }))
);
