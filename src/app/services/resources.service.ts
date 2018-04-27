import { LocalStorageService } from './local-storage.service';
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
    private shared: ShareService,
    private localStorage:LocalStorageService
  ) {
    this.BASE_URL = this.shared.API.url;
  }
 
  merge(queryString?:any) {
    if(this.localStorage.get(this.localStorage.USER_KEY)){
      queryString.empresa = this.localStorage.getObject(this.localStorage.USER_KEY).empresa
    }
    if(this.localStorage.get(this.localStorage.ADMIN_KEY)){
      queryString.empresa = this.localStorage.getObject(this.localStorage.ADMIN_KEY).empresa
    }
    this.httpOptions = {
          params: queryString
        }
     return this.httpOptions;
  }
  getItem(id?: any): Observable<any> {
    return this.http.get(`${this.BASE_URL}${this.path}/${id}`);
  }

  getList(criteria?: any): Observable<any> {
    if(criteria){
      return this.http.get(`${this.BASE_URL}${this.path}`, this.merge(criteria));
    }
    return this.http.get(`${this.BASE_URL}${this.path}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${this.BASE_URL}${this.path}`, data);
  }

  update(data, params?): Observable<any> {
    return this.http.put(
      `${this.BASE_URL}${this.path}/${params}`,
      data
    );
  }
  updateStatus(data, params?,criteria?): Observable<any> {
    return this.http.put(
      `${this.BASE_URL}${this.path}?action=status`,
      data,
      this.merge(criteria)
    );
  }
  delete(id: number, params?): Observable<any> {
    let criteria = new SearchCriteria();
    Object.assign(criteria, params);
    return this.http.delete(
      `${this.BASE_URL}${this.path}/${id}`
    );
  }

}
export class SearchCriteria {
  public zfTableItemPerPage: number = 10;
  public zfTableOrder: string = "asc";
  public zfTableColumn;
  public zfTablePage: number = 1;
  public rowAction: string = "";
  public zfTableQuickSearch: string = "";
  public zfTableStatus;
  public start_date: string = "";
  public end_date: string = "";
  public empresa;  
}

