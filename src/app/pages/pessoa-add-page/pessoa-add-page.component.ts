import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../model/pessoa.model';

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

  constructor(private formBuilder:FormBuilder, private service: PessoaService){}

  salvar(){
    if(this.formGroup.valid){
    console.log("salvando");
    this.service.salvar(this.formToValue(this.formGroup))
    .subscribe(p => {
      alert("pessoa salva com sucesso!")
    })
    }else{
      alert("formulario invalido!!")
    }
  }
  isError(control: 'email'| 'nome' | 'hoble',validor:string){
    return this.formGroup.controls[control].getError(validor) ? true:false
  }

  formToValue(form: typeof this.formGroup): Pessoa{
      return {
        nome: form.value.nome!,
        email: form.value.email!,
        hoble: form.value.hoble!
      }
  }

}
