import { Component } from '@angular/core';
import {Paciente} from '../interface/interface';
import {Dependente} from '../interface/interface'
import { Input } from '@angular/core';


@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.component.html',
  styleUrls: ['./dependentes.component.scss']
})
export class DependentesComponent {
  @Input() dependente = {
    name: '',
    age: 0
  };
}



