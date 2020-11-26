import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';


@Component({
  selector: 'app-lista-imagens',
  templateUrl: './lista-imagens.component.html',
  styleUrls: ['./lista-imagens.component.scss']
})
export class ListaImagensComponent implements OnInit {

  imagens;

  constructor(public ref: DynamicDialogRef,
              private config: DynamicDialogConfig) { }

  ngOnInit() {
    console.log('ref e config:', this.ref, this.config);
    this.imagens = this.config.data.imagens;
    console.log('LISTA IMAGES INICIAL: ', this.imagens);
  }

  reordenarLista() {
    console.log('onReorder: ', this.imagens);
  }

  fecharDialog(): void {
    console.log('fecharDialog');
    this.ref.close(this.imagens);
  }

}
