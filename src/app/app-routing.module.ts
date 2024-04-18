import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { PessoaAddPageComponent } from './pages/pessoa-add-page/pessoa-add-page.component';

const routes: Routes = [
  {path: 'pessoas',component:PessoaComponent},
  {path: 'pessoas/cadastro',component:PessoaAddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
