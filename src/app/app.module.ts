import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { PhotoListComponent } from './components/photo-list.component';
import { SidePanelComponent } from './components/side-panel.component';
import { NavBarComponent } from './components/nav-bar.component';
import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';
import { ImageDetailComponent } from './components/image-detail.component';
import { AddPhotoComponent } from './components/add-photo.component';
import { MyAlbumComponent } from './components/my-album.component';
import { PhotoRowComponent } from './components/photo-row.component';

import { PhotoService } from './services/photo.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { AddPhotoService } from './services/addphoto.service';
import { UploadPhotoService } from './services/uploadphoto.service';


@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
      PhotoListComponent,
       SidePanelComponent,
        NavBarComponent,
         RegisterComponent,
         LoginComponent,
          AddPhotoComponent,
            ImageDetailComponent,
              MyAlbumComponent,
              PhotoRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  
  providers: [
    PhotoService, 
    RegisterService, 
    LoginService,
    UserService,
    AddPhotoService,
    UploadPhotoService
    
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
