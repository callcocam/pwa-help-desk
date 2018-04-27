import { ResourcesService } from './../../services/resources.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShareService } from '../../services/share.service';
@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient,
     private resources: ResourcesService, 
    private shared:ShareService) {}
 
  pushFileToStorage(file: File,rota,parent, assets,empresa): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('empresa', empresa);
    formdata.append('parent', parent);
    formdata.append('assets', assets);
    formdata.append('tipo', 'upload');
    formdata.append('file', file);
    console.log(file)
   
    const req = new HttpRequest('POST', `${this.shared.API.url}${rota}`, formdata, {
      reportProgress: true
    });
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<string[]> {
    return this.http.get<string[]>('/getallfiles')
  }

}
