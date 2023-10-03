import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFaceUserService {

constructor( private http: HttpClient ) { }

headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': environment.authorization,
});

registerUser(id:string){
  
}
sendImgUser(img: string, userId:string = 'QTAzO6qXt4JpsvO92x9SZa-lJQ'){
  
  const data = {
    "data": img,
    "type": "Face",
    "format": "JPG"
  };

  return this.http.post(`/bhd-test/IdentityXServices/rest/v1/users/${userId}/face/samples`, data, { headers: this.headers })
    .pipe(
      tap( (value)=>{
        console.log('XXXXXXX_X_X__X_X_X__X_X_X__X_X_X',value);
      })
    )
  }

}
