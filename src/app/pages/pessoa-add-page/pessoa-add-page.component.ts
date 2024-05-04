import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../model/pessoa.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-add-page',
  templateUrl: './pessoa-add-page.component.html',
  styleUrl: './pessoa-add-page.component.css'
})
export class PessoaAddPageComponent implements OnInit{

  hobles = [
    "Dançar",
    "Jogar",
    "Ler",
    "Escrever"
  ]

  formGroup = this.formBuilder.group({
    id : this.formBuilder.control<number|null>(null),
    nome : ['',Validators.required],
    email : ['',Validators.compose([Validators.email,Validators.required])],
    hoble : ['']
  })

  constructor(private formBuilder:FormBuilder, private service: PessoaService, private activeRouter: ActivatedRoute){}

  ngOnInit(): void {
      const id = this.activeRouter.snapshot.paramMap.get('id')
      if(id){
        this.formGroup.patchValue(this.service.buscar(id))
      }
  }

  salvar(){
    if(this.formGroup.valid){
      if(this.formGroup.value.id){
        this.service.editar(this.formToValue(this.formGroup))
        console.log("editou!")
      }else{
        this.service.salvar(this.formToValue(this.formGroup))
        .subscribe(p => {
        alert("pessoa salva com sucesso!")
        console.log("salvou")
    })
      }
    }
    else{
      alert("formulario invalido!!")
    }
  }

  isError(control: 'email'| 'nome' | 'hoble',validor:string){
    return this.formGroup.controls[control].getError(validor) ? true:false
  }

  formToValue(form: typeof this.formGroup): Pessoa{
      return {
        id: form.value.id!,
        nome: form.value.nome!,
        email: form.value.email!,
        hoble: form.value.hoble!
      }
  }

}
