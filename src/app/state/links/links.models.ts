export interface ShortLinkDetailsDto {
  id: string;
  shortCode: string;
  targetUrl: string;
  createdOn: Date;
  expiresOn?: Date;
}

export interface CreateShortlinkDto {
  endpoint: string;
}
