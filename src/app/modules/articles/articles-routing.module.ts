import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { ArticleNewComponent } from './pages/article-new/article-new.component';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'new', component: ArticleNewComponent },
  { path: ':id', component: ArticleDetailComponent },
  { path: ':id/edit', component: ArticleEditComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
