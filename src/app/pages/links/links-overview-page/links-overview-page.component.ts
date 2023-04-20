import { Component } from '@angular/core';
import { ShortLinkDetailsDto } from 'src/app/state/links/links.models';

@Component({
  selector: 'app-links-overview-page',
  templateUrl: './links-overview-page.component.html',
  styleUrls: ['./links-overview-page.component.scss'],
})
export class LinksOverviewPageComponent {
  public dataSource: Array<ShortLinkDetailsDto>;

  constructor() {
    this.dataSource = new Array<ShortLinkDetailsDto>();

    this.dataSource.push({
      id: '123',
      shortCode: 'abcdef',
      targetUrl: 'https://www.google.com',
      createdOn: new Date(),
      expiresOn: new Date(),
    });
  }
}
