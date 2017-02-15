import {Component} from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article("Title 1", "http://article1.com", 3),
      new Article("Title 2", "http://article2.com", 2),
      new Article("Title 3", "http://article3.com", 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Add link ${title.value} and ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';

    return true
  };
}
