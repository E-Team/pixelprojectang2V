import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './components/home.component';
import { RegisterComponent} from './components/register.component';
import { LoginComponent} from './components/login.component';
import { PhotoListComponent} from './components/photo-list.component';
import { ImageDetailComponent} from './components/image-detail.component';
import { AddPhotoComponent} from './components/add-photo.component';
import { MyAlbumComponent} from './components/my-album.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/register', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
  	path: 'register',
  	component: RegisterComponent, 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-album',
    component: MyAlbumComponent

  },{
    path: 'add-photo',
    component: AddPhotoComponent
  },
  {
    path: 'image-detail/:id',
    component: ImageDetailComponent
  }
  
  
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);