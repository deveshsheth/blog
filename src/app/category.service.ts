import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  addcategory(model: any):Observable<any>{
    return this.http.post(`${environment.Base_Url}addcategory`,model);
  }
  listcategory(): Promise<any> {
    return this.http.get(`${environment.Base_Url}listcategory`).toPromise();
  }
  editcategory(id: any):Promise<any>{
    return this.http.get(`${environment.Base_Url}getcategoryById/${id}`).toPromise();
  }
  updatecategory(model: any): Observable<any> {
    return this.http.put(`${environment.Base_Url}updatecategory`,model);
  }
  deletecategory(cid: number): Observable<any> {
    return this.http.delete(`${environment.Base_Url}deletecategory/${cid}`);
  }
}