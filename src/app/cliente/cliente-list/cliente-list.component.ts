import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public clientes: Cliente[];
  public id: string;

  constructor(
    private service:ClienteService,
    private router: Router) {
    this.id = "";
  }

  ngOnInit(): void {
      this.carregaList();
  }

  carregaList() {
    this.service.getClientes()
    .subscribe(dados => this.clientes = dados);
  }

  editar(idCliente: string) {
    let teste = confirm("Deseja editar?");
    if(teste) {
      this.router.navigate(['clientes/', idCliente]);
    }
  }

  remover(idCliente: string) {
    let teste = confirm("Deseja remover?");
    if(teste) {
      this.service.deleteCliente(idCliente).subscribe(dados => {
        console.log('DADOS',dados);     
      });
      //this.router.navigate(['home']);
    }
  }

}
