import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSpecificsComponent } from './components/movie-specifics/movie-specifics.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieSpecificsComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
