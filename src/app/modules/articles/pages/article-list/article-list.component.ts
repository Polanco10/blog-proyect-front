import { Component, OnInit } from '@angular/core';
import { IArticle } from './../../models/article.model'
import { ArticlesService } from './../../services/articles.service'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: IArticle[] = [];

  constructor(private articlesService: ArticlesService) { }
  ngOnInit(): void {
    this.articlesService.getArticles().subscribe(
      res => this.articles = res
    )
  }

}
