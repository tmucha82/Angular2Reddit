import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.votes = 0;
    this.title = 'Title';
    this.link = 'Link';
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
