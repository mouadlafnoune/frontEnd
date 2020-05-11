import { LoginComponent } from './component/login/login.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCharacterComponent } from './component/create-character/create-character.component';
import { UpdateCharacterComponent } from './component/update-character/update-character.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'createcharacter',
    component: CreateCharacterComponent
  },
  {
    path: 'update/:id',
    component: UpdateCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
