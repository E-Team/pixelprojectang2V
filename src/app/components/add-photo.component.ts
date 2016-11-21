import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo';
import { User } from '../models/user';

import { UploadPhotoService } from '../services/uploadphoto.service';
import { AddPhotoService } from '../services/addphoto.service';
import { UserService } from '../services/user.service'

@Component({
    selector: 'add-photo',
    templateUrl: 'addphoto.component.html'
})
export class AddPhotoComponent {

    newPhoto: Photo = new Photo();
    photoAdded: boolean = false;
    user: User;


    constructor(private _addPhotoServ: AddPhotoService,
        private _uploadPhotoServ: UploadPhotoService, private _userServ: UserService) { }


    onSubmit() {
        this._userServ.getUserByName(localStorage.getItem("currentUserName")).subscribe(
            data => {
                this.user = JSON.parse(JSON.parse(JSON.stringify(data || null))._body);
                console.log(this.user);

                this.newPhoto.user = this.user;
                this._addPhotoServ.sendPhoto(this.newPhoto).subscribe(
                    data => {
                        this.photoAdded = true;
                        this.newPhoto = new Photo();
                    }, error => console.log(error)
                );
            }, error => console.log(error)

        );
    }
}