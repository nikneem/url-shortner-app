import { IShortLinksListDto } from './shortlinklist.models';

export interface IShortLinkListState {
  shortLinks?: IShortLinksListDto;
  isLoading: boolean;
  errorMessage?: string;
}

export const initialShortLinksListState: IShortLinkListState = {
  isLoading: false,
};
