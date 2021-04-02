import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data:{'title': "Krok za krokem"} }, 
  { path: 'list', loadChildren: () => import('./article-list/article-list.module').then(m => m.ArticleListModule), data:{'title': "Seznam článků"} }, 
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule), data:{'title': "blog"} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
