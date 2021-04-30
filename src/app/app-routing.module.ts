import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListPageComponent } from './article-list/article-list-page/article-list-page.component';
import { FinCalcsPageComponent } from './fin-calcs/fin-calcs-page/fin-calcs-page.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data:{'title': "Krok za krokem"} }, 
  // { path: 'list', loadChildren: () => import('./article-list/article-list.module').then(m => m.ArticleListModule), data:{'title': "Seznam článků"} }, 
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule), data:{'title': "blog"} },
  { path: 'list', component: ArticleListPageComponent, data:{'title': "Seznam článků"} },
  { path: 'financni-kalkulacky', component: FinCalcsPageComponent, data:{'title': "Finanční kalkulačky"} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
