import { Categoria } from './categoria.model';

export class Produto {
    id: number;
    nome: string;
    descricao: string;
    peso?: number;
    preco?: number;
    promocao: boolean;
    maisVendidos: boolean;
    quantidadeMinimaVenda?: number;
    quantidadeEstoque: number;
    categoria: Categoria;
    imagens: any;

    dataCriacao: Date;
    dataAlteracao: Date;
}