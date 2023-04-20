import { createFeature, createReducer } from '@ngrx/store';
import { ShortLinkDetailsDto } from './links.models';
import { ShortLinkActions } from './links.actions';
import { shortLinksReducer } from './links.reducer';

export interface IShortLinksState {
  selectedShortLink?: ShortLinkDetailsDto;
  isLoading: boolean;
  errorMessage?: string;
}

export interface IShortLinksCollectionState {
  shortLinks: ReadonlyArray<ShortLinkDetailsDto>;
  isLoading: boolean;
  errorMessage?: string;
}

export const initialShortLinksState: IShortLinksState = {
  isLoading: false,
};

export const initialShortLinksCollectionState: IShortLinksCollectionState = {
  shortLinks: [],
  isLoading: false,
};
