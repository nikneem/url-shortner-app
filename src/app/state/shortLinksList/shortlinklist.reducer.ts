import { createReducer, on } from '@ngrx/store';
import {
  IShortLinkListState,
  initialShortLinksListState,
} from './shortlinklist.state';
import {
  ShortLinkActions,
  ShortLinkApiActions,
} from '../shortlinkdetails/shortlinkdetails.actions';
import { ShortLinkListActions } from './shortlinklist.actions';
import { IShortLinkDetailsDto } from '../shortlinkdetails/shortlinkdetails.models';

export const shortLinksApiReducer = createReducer(
  initialShortLinksListState,
  on(ShortLinkListActions.list, (state, { query }) => ({
    ...state,
    isLoading: true,
  })),
  on(ShortLinkApiActions.listReceived, (state, { list }) => ({
    ...state,
    isLoading: false,
    shortLinks: list,
  })),
  on(ShortLinkApiActions.updated, (state, { shortLink }) =>
    shortLinkUpdatedHandler(state, shortLink)
  )
);

function shortLinkUpdatedHandler(
  state: IShortLinkListState,
  payload: IShortLinkDetailsDto
): IShortLinkListState {
  const copyState: IShortLinkListState = Object.assign({}, state);
  if (copyState.shortLinks) {
    let shortLinks = Object.assign({}, copyState.shortLinks);
    let shortLinkList = shortLinks.shortLinks
      ? new Array<IShortLinkDetailsDto>(...shortLinks.shortLinks)
      : new Array<IShortLinkDetailsDto>();

    const newListItem: IShortLinkDetailsDto = {
      id: payload.id,
      shortCode: payload.shortCode,
      targetUrl: payload.targetUrl,
      createdOn: payload.createdOn,
      expiresOn: payload.expiresOn,
    };
    const pollIndex = shortLinkList.findIndex((p) => p.id == payload.id);
    if (pollIndex >= 0) {
      shortLinkList.splice(pollIndex, 1, newListItem);
    } else {
      shortLinkList.push(newListItem);
    }
    shortLinks.shortLinks = shortLinkList;
    copyState.shortLinks = shortLinks;
  }
  return copyState;
}
