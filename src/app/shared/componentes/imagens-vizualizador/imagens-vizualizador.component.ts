import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagens-vizualizador',
  templateUrl: './imagens-vizualizador.component.html',
  styleUrls: ['./imagens-vizualizador.component.scss']
})
export class ImagensVizualizadorComponent implements OnInit {

  @Input() imagens;

  constructor() { }

  ngOnInit() {
    
  }

}
