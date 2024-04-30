import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  id = 1;

  constructor() { }

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return of(pessoa)
    .pipe(
      tap((p) => localStorage.setItem('pessoa' + this.id, JSON.stringify(pessoa)))
    )

  }

  buscar(id: string):Pessoa{
    const pessoa = localStorage.getItem('pessoa'+ id)

    return JSON.parse(pessoa ? pessoa: "{}")

  }

  editar(pessoa: Pessoa) {
    const pessoaJson = JSON.stringify(pessoa)
    localStorage.setItem('pessoa' + pessoa.id,pessoaJson)
  }
}
