import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
  showModal: boolean = false;

  mudaValor() {
    this.showModal = !this.showModal
  }
}
