import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return of(pessoa)
    .pipe(
      tap((p) => localStorage.setItem('pessoa', JSON.stringify(pessoa)))
    )

  }
}
