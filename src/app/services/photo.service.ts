import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import { Photo  } from '../models/photo';
import { User  } from '../models/user';

@Injectable()
export class PhotoService {
 url = "http://localhost:8080/photo/allPhotos";
  constructor(private _http : Http) {

  }
  getPhotos(){
    return  this._http.get(this.url);
  }
  getPhotoById (photoId: number) {
    let tokenUrl1 = "http://localhost:8080/rest/photo/photoId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorisation': 'Bearer '+localStorage.getItem("token")});
    return this._http.post(tokenUrl1, JSON.stringify(photoId), {headers: headers1});
  }

  getPhotosByUser (user: User) {
    let tokenUrl1 = "http://localhost:8080/rest/photo/user";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authosization': 'Bearer '+localStorage.getItem("token")});
    return this._http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }

  updatePhoto(photo: Photo) {
    let tokenUrl1 = "http://localhost:8080/rest/photo/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authosization': 'Bearer '+localStorage.getItem("token")});
    return this._http.post(tokenUrl1, JSON.stringify(photo), {headers: headers1});
  }
}
