import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  formGroup = this.formBuilder.group({
    nome : [''],
    email : [''],
    hoble : ['']
  })

  constructor(private formBuilder:FormBuilder){}

  salvar(){
    if(this.formGroup.valid){
    console.log("salvando");
    console.log(this.formGroup.value);
    }else{
      alert("formulario invalido!!")
    }
  }

}
