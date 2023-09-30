import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFaceUserService {

constructor( private http: HttpClient ) { }

  sendImgUser(img: string, userId:string){

    //console.log("----------------------", img);
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const data = {
      "data": img,
      "type": "Face",
      "format": "JPG"
    };

    return this.http.post(`https://api.identityx-cloud.com/bhd-test/IdentityXServices/rest/v1/users/QTAzO6qXt4JpsvO92x9SZa-lJQ/face/samples`, data, { headers: headers })
   
  }
}
