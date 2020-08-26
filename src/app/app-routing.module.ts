import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { PrivateComponent } from './components/private/private.component';
import { CallbackComponent } from './components/callback/callback.component'
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'private', component: PrivateComponent, canActivate: [AuthGuard]},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'routePath', component: HomeComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
