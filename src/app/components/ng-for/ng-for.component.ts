import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

arrayFotos: any = [
  {
    url: "https://cdn.ome.lt/UnzXwZHzhVjdD0fKyLTMX96pYl4=/1200x630/smart/extras/conteudos/mufasa_2.png",
    description:"Leão, o segundo maior felino do mundo e conhecido como rei da selva."
  },
  {
    url: "https://i0.wp.com/faculdade.pioxii-es.com.br/wp-content/uploads/2014/08/tigre.jpeg",
    description:"O tigre é o maior felino do mundo e apresenta pescoço curto e grosso, ombros largos, grandes membros e longas garras."
  },
  {
    url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/1209C/production/_120248837_jaguar19spl.jpg",
    description:"A onça-pintada é considerada o maior felino das Américas, sendo também o maior carnívoro da América do Sul."
  },
  {
    url: "https://t.ctcdn.com.br/RXRRvNKMRrZFm2XbUl9D7zzrPvI=/512x288/smart/filters:format(webp)/i298923.jpeg",
    description:"O guepardo ou chita é um animal da família dos felídeos, ainda que de comportamento atípico, se comparado com outros da mesma família."
  },
  {
    url: "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2017/08/27788/image770x420cropped.jpg",
    description:"O leopardo-das-neves (Panthera uncia) é um felino do gênero Panthera que habita as grandes altitudes da Ásia central.."
  }
]

}
