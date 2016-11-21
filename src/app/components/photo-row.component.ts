import { Component, OnInit } from '@angular/core';

import { Photo } from '../models/photo';
import { PhotoService } from '../services/photo.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
    selector: 'photo-row',
    templateUrl: 'photo-row.component.html'
})
export class PhotoRowComponent {

    photoList: Photo[];
    photoListSorted: Photo[];
    photoListRanked: Photo[];
    
    
    constructor(private _photoService: PhotoService) {

        this._photoService.getPhotos().subscribe(
            data=>{
                this.photoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                this.photoListSorted = this.photoList.sort((a,b)=>b.likes-a.likes);

                this.photoListRanked=[];

                for(let index in this.photoListSorted){
                    if(Number(index)<3){
                        this.photoListRanked.push(this.photoListSorted[index]);

                    }else{
                        break;
                    }
                }
            }, error=>console.log(error)
        );
     }


}