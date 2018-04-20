import { Observable } from 'rxjs/Observable';
import { MEAT_API } from './../api';
import { ShareService } from './share.service';
import { JwtTokenService } from './../cliente/login/services/jwt-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ResourcesService {
  public BASE_URL = "http://localhost:8585/";
  public path = "";
  public httpOptions;
  constructor(
    private http: HttpClient,
    private jwtToken: JwtTokenService,
    private shared: ShareService
  ) {
    this.BASE_URL = this.shared.API.url;
  }
 
  merge(queryString?:any) {
      this.httpOptions = {
          params: queryString
        }
     return this.httpOptions;
  }
  getItem(id?: any): Observable<any> {
    let criteria = new SearchCriteria();
    return this.http.get(`${this.BASE_URL}${this.path}/${id}`, this.merge(criteria));
  }

  getList(params?: any): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.path}`, this.merge(params));
  }

  create(data) {
    let criteria = new SearchCriteria();
    return this.http.post(`${this.BASE_URL}${this.path}`, data, this.merge(criteria));
  }

  update(data, params?) {
    let criteria = new SearchCriteria();
    Object.assign(criteria, params);
    return this.http.put(
      `${this.BASE_URL}${this.path}`,
      data,
      this.merge(criteria)
    );
  }
  updateStatus(data, params?) {
    let criteria = new SearchCriteria();
    Object.assign(criteria, params);
    return this.http.put(
      `${this.BASE_URL}${this.path}?action=status`,
      data,
      this.merge(criteria)
    );
  }
  delete(id: number, params?) {
    let criteria = new SearchCriteria();
    Object.assign(criteria, params);
    return this.http.delete(
      `${this.BASE_URL}${this.path}/${id}`,
      this.merge(criteria)
    );
  }

}
export class SearchCriteria {
  public zfTableItemPerPage: number = 10;
  public zfTableOrder: string = "asc";
  public zfTableColumn: string = "id";
  public zfTablePage: number = 1;
  public rowAction: string = "";
  public zfTableQuickSearch: string = "";
  public valuesState: string = "";
  public start_date: string = "";
  public end_date: string = "";
}

