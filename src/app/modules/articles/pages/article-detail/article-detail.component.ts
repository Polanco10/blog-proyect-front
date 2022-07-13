import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { IArticle } from './../../models/article.model'
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article!: IArticle;
  id: string;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {

    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.articlesService.getArticle(this.id)
      .subscribe(
        res => {
          this.article = res[0]
        })
  }


}
