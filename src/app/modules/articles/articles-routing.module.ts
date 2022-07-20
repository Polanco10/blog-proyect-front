import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { ArticleNewComponent } from './pages/article-new/article-new.component';
import { ArticlesComponent } from './articles.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'new', canActivate: [AuthGuard], component: ArticleNewComponent },
  { path: ':id', component: ArticleDetailComponent },
  { path: ':id/edit', canActivate: [AuthGuard], component: ArticleEditComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
