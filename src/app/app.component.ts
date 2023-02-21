import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exapi';

  constructor() { }

  ngOnInit(): void { }
   
  imgCollection: Array<object> = [
      {
        image: './assets/Screenshot_2022-09-09_200618-removebg-preview 1.png',
        thumbImage: './assets/Screenshot_2022-09-09_200618-removebg-preview 1.png',
        title: 'burger'
      }, {
        
        image: './assets/Screenshot_2022-09-09_200547-removebg-preview 1.png',
        thumbImage: './assets/Screenshot_2022-09-09_200547-removebg-preview 1.png',
        title: 'rolls'
      }, {
        
        image: './assets/Screenshot_2022-09-09_200558-removebg-preview 1.png',
        thumbImage: './assets/Screenshot_2022-09-09_200558-removebg-preview 1.png',
        title: 'momo'
      }, {
        
        image: './assets/Screenshot_2022-09-09_201220-removebg-preview 1.png',
        thumbImage: './assets/Screenshot_2022-09-09_201220-removebg-preview 1.png',
        title: 'pizza'
      }, {
        
        image: './assets/Screenshot_2022-09-09_201533-removebg-preview 1.png',
        thumbImage: './assets/Screenshot_2022-09-09_201533-removebg-preview 1.png',
        title: 'biryani'
      }
      , {
                image: './assets/Screenshot_2022-09-09_201756-removebg-preview 1.png',
        thumbImage: '/assets/Screenshot_2022-09-09_201756-removebg-preview 1.png',
        title: 'thali'
      }

      
  ];
}
