import { Component } from '@angular/core';
import { Category } from './_models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'online-courses-dashboard';
  CategoryArray: Category[] = [
    {
      id: 1,
      img: '../../assets/images/faces-clipart/pic-1.png',
      name: 'web development',
    },
    {
      id: 2,
      img: '../../assets/images/faces-clipart/pic-1.png',
      name: 'design development',
    },
  ];
}
