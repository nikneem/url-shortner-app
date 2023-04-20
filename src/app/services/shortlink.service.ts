import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortLinkDetailsDto } from '../state/links/links.models';

@Injectable({
  providedIn: 'root',
})
export class ShortlinkService {
  private serviceUrl: string = 'https://localhost:7098';
  constructor(private http: HttpClient) {}

  public createShortlink(endpoint: string): Observable<ShortLinkDetailsDto> {
    let dto = {
      endpoint: endpoint,
    };
    let url = `${this.serviceUrl}/api/shortlinks`;
    return this.http.post<ShortLinkDetailsDto>(url, dto);
  }
}
