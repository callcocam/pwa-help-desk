import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "inicio",
        component: HomeComponent,
        children: [
          {
            path: "",
            component: LoginComponent
          },
          {
            path: "cadastre-se",
            component: CadastroComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
