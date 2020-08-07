import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { ArtistComponent } from './pages/artist/artist.component'
import { SearchComponent } from './pages/search/search.component'

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true})