import { Funcionario } from './funcionario.model';

export class Departamento {
    id: number;
    nome: string;
    telefone?: string;

    dataCriacao: Date;
    dataAlteracao: Date
}