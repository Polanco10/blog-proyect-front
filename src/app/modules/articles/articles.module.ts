import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleNewComponent } from './pages/article-new/article-new.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    ArticleNewComponent,
    ArticleEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticlesRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ]
})
export class ArticlesModule { }
