import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
redirectUrl:String;
  getadmin(model:any):Observable <any> {
    return this.http.post(`${environment.Base_Url}getadmin`,model);
  }
  isLoggedIn()
  {
    if(sessionStorage.getItem('islogin')) {
      return true;
    }
    return false;
  }
}
