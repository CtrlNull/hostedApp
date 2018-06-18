import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  hero: Hero = {
  id: 1,
  name: 'WindStorm'
  };

  constructor() { }

  ngOnInit() {  }

}
