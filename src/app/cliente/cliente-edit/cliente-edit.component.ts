import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  public id: string;
  public cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private service: ClienteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getCliente(this.id)
      .subscribe(dados => {
        this.cliente = dados;
        this.loadForm();
      });
  }

  loadForm() {
    const id = <HTMLInputElement>document.getElementById("codigo");
    const nome = <HTMLInputElement>document.getElementById("nome");
    id.value = this.cliente.id.toString();
    nome.value = this.cliente.nome;
  }

}
