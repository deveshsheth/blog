import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  addblog(model: any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addblog`,model);
  }
  listblog():Promise<any>{
    return this.http.get(`${environment.Base_Url}listblog`).toPromise();
  }
  editblog(id: any):Promise<any>{
    return this.http.get(`${environment.Base_Url}getblogById/${id}`).toPromise();
  }
  updateblog(model: any): Observable<any> {
    return this.http.put(`${environment.Base_Url}updateblog`,model);
  }
  deleteblog(bid: number): Observable<any> {
    return this.http.delete(`${environment.Base_Url}deleteblog/${bid}`);
  }

  getblogfeatured():Promise<any>{
    return this.http.get(`${environment.Base_Url}getBlogFeature`).toPromise();
  }
  getblogactive():Promise<any>{
    return this.http.get(`${environment.Base_Url}getBlogActive`).toPromise();
  }

  postFile(fileToUpload:File):Observable<any> {
    const endpoint = environment.Base_Url + 'upload';
    const formData: FormData = new FormData();
    formData.append('image',fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData)
    .pipe(map(i =>{ return i }));
  }

  blogupdate(model: any):Observable<any>{
    return this.http.put(`${environment.Base_Url}blogupdate`,model());
  }

  countblog():Promise<any> {
    return this.http.get(`${environment.Base_Url}countblogs`).toPromise();
  }

  countactiveblog():Promise<any> {
    return this.http.get(`${environment.Base_Url}countactive`).toPromise();
  }

  countfeaturedblog():Promise<any> {
    return this.http.get(`${environment.Base_Url}countfeatured`).toPromise();
  }
}
