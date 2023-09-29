import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFaceUserService {

constructor( private http: HttpClient ) { }

  setImgUser(img: string, userId:string){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body ={
      "format": "JPG",
      "data": img
    }

    const data = {
      "data": img,
      "type": "Face",
      "format": "JPG"
    };
    console.log('-------------------------------------------------------------------------');

    return this.http.post(`https://api.identityx-cloud.com/bhd-test/IdentityXServices/rest/v1/users/${userId}}/face/samples`, data, { headers: headers })
    .pipe(
      tap(value => console.log('----------------x-x-x-x-x-x-x-x-x-xx-x-',value))
    );
  }


}
