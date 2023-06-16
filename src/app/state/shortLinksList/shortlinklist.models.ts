export interface IShortLinksListDto {
  page: number;
  pageSize: number;
  totalEntries: number;
  totalPages: number;
  shortLinks: Array<IShortLinkListItemDto>;
}

export interface IShortLinkListItemDto {
  id: string;
  shortCode: string;
  targetUrl: string;
  createdOn: Date;
  expiresOn?: Date;
}
