import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() count = 5;
  @Input() rating = 0;
  stars:boolean[] = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= this.count; i++) {
      let b = (i > this.rating) ? true : false;
      this.stars.push(b);
    }
  }

}
