import { Component } from '@angular/core';
import {Paciente} from '../interface/interface';
import {Dependente} from '../interface/interface'


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent {

  paciente: Paciente = {
    nome: '',
    idade: 0,
    dependentes: []
  }

  dependente: Dependente = {
    nome: '',
    idade: 0,
  }

  pacientes: Paciente[] = [];

  addDependente(){
    this.paciente.dependentes.push(this.dependente)
    this.dependente = { nome: '', idade: 0 };  
  }

  salvar() {
    this.pacientes.push({ ...this.paciente });
    this.paciente = {
      nome: '',
      idade: 0,
      dependentes: []
    };
  }

  camposPreenchidos(): boolean {
    return !!this.paciente.nome && !!this.paciente.idade;
  }

  excluirDependente(index: number) {
    this.paciente.dependentes.splice(index, 1);
  }
  
  excluirPaciente(paciente: any) {
    const index = this.pacientes.indexOf(paciente);
    this.pacientes.splice(index, 1);
  }

}
