import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  tarefa: string = '';

  listagem: Array<string> = [];

  addItem() {
    this.listagem.push(this.tarefa)
    this.tarefa = '';
  }
}
