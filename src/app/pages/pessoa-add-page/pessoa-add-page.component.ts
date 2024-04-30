import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-add-page',
  templateUrl: './pessoa-add-page.component.html',
  styleUrl: './pessoa-add-page.component.css'
})
export class PessoaAddPageComponent {

  hobles = [
    "Dançar",
    "Jogar",
    "Ler",
    "Escrever"
  ]

  formGroup = this.formBuilder.group({
    nome : ['',Validators.required],
    email : ['',Validators.compose([Validators.email,Validators.required])],
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
  isError(control: 'email'| 'nome' | 'hoble',validor:string){
    return this.formGroup.controls[control].getError(validor) ? true:false
  }

}
