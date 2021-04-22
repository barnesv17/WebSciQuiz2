import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'songs', component: SongsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
