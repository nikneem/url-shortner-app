import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IShortLinkDetailsDto,
  IShortLinksListDto,
} from '../state/shortlinkdetails/shortlinkdetails.models';

@Injectable({
  providedIn: 'root',
})
export class ShortlinkService {
  private serviceUrl: string = 'https://api.tinylnk.nl';
  constructor(private http: HttpClient) {}

  public list(query?: string): Observable<IShortLinksListDto> {
    let url = `${this.serviceUrl}/api/shortlinks`;
    if (query) {
      url += `?query=${query}`;
    }
    return this.http.get<IShortLinksListDto>(url);
  }

  public receive(id: string): Observable<IShortLinkDetailsDto> {
    let url = `${this.serviceUrl}/api/shortlinks/${id}`;
    return this.http.get<IShortLinkDetailsDto>(url);
  }

  public add(endpoint: string): Observable<IShortLinkDetailsDto> {
    let dto = {
      endpoint: endpoint,
    };
    let url = `${this.serviceUrl}/api/shortlinks`;
    return this.http.post<IShortLinkDetailsDto>(url, dto);
  }

  public update(
    id: string,
    dto: IShortLinkDetailsDto
  ): Observable<IShortLinkDetailsDto> {
    let url = `${this.serviceUrl}/api/shortlinks/${id}`;
    return this.http.put<IShortLinkDetailsDto>(url, dto);
  }

  public delete(id: string): Observable<boolean> {
    let url = `${this.serviceUrl}/api/shortlinks/${id}`;
    return this.http.delete<boolean>(url);
  }
}
