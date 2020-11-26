import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';

@Component({
  selector: 'app-imagem-detalhes',
  templateUrl: './imagem-detalhes.component.html',
  styleUrls: ['./imagem-detalhes.component.scss']
})
export class ImagemDetalhesComponent implements OnInit {

  imagem;

  constructor(public ref: DynamicDialogRef,
              private config: DynamicDialogConfig) { }

  ngOnInit() {
    this.imagem = this.config.data.imagem;
  }

}
