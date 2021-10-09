import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getimages() {
    return this.http.get('http://eslam002-001-site1.itempurl.com/api/client/viewall')
  }

  
}
