import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercicios-semana11';

  testePipe = 'george';
  texto: string = '';
  
  page: string = '';

  
}
