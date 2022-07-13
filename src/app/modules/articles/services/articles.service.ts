import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IArticle } from '../models/article.model';

import { Observable } from 'rxjs';
import { filter, find, findIndex, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpService: HttpClient) { }
  getArticles(): Observable<IArticle[]> {
    return this.httpService.get<IArticle[]>('./../../assets/static/article.json');
  }
  getArticle(_id: string): Observable<IArticle[]> {
    return this.httpService.get<IArticle[]>('./../../assets/static/article.json').pipe(
      map((articles) => articles.filter(article => article.id === _id))
    )
  }
}
