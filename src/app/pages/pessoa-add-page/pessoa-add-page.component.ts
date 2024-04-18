import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa-add-page',
  templateUrl: './pessoa-add-page.component.html',
  styleUrl: './pessoa-add-page.component.css'
})
export class PessoaAddPageComponent {

  pessoa: any = {

  }

  hobles = [
    "Dançar",
    "Jogar",
    "Ler",
    "Escrever"
  ]

  salvar(){
    if(this.pessoa.nome === null || this.pessoa.nome === ""){
      alert("formulario invalido!!")
    }else{
      console.log("salvando");
      console.log(this.pessoa);
    }
  }

}
