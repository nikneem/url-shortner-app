import { IShortLinkDetailsDto } from './shortlinkdetails.models';

export interface IShortLinkDetailsState {
  shortLink?: IShortLinkDetailsDto;
  isLoading: boolean;
  errorMessage?: string;
}

export const initialShortLinkDetailsState: IShortLinkDetailsState = {
  isLoading: false,
};
