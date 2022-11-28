import { Component, OnInit } from '@angular/core';
import { ColorSchemeService } from './services/color-scheme.service';

@Component({
  styleUrls: ['./page.component.css'],
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  constructor(private readonly colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.load();
  }

  ngOnInit() {
    const prefers = this.colorSchemeService.currentActive();
    console.log(prefers);
    this.colorSchemeService.update(prefers);
  }
}
