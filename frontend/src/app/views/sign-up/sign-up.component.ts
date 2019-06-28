import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
  canLogin : boolean;
  isCreating: boolean;
  isCreated: boolean;
  errorMessage: string;
  constructor(private readonly router:Router) { }

  ngOnInit() {
  }

  getEmail(e){
    this.userEmail = e;
  }

  getPassword(e){
    this.userPassword = e;
  }
  getPassword2(e){
    this.userPasswordConfirm = e;
  }

  fulled(){
    if(this.userEmail===undefined || this.userPassword===undefined || this.userPasswordConfirm===undefined
      || this.userEmail==='' || this.userPassword==='' || this.userPasswordConfirm==='' ){
        return false;
      }
    return true;  
  }
  login(){
    if (this.userPassword !== this.userPasswordConfirm) {
      this.canLogin = false;
      Swal.fire({
        type: 'error',
        title: 'Erro',
        width: '50%',
        confirmButtonColor: '#f27474',
        confirmButtonText: 'Tentar Novamente',
        text: 'As senhas não são iguais',
      })
    } else {
      this.canLogin = true;
      this.signUpCognito(this.userEmail,this.userPassword)

    }
    
  }

  private async signUpCognito(username: string, password: string) {

    if(true) {
        this.isCreated = true;
        Swal.fire({
          type: 'success',
          title: 'Cadastro com Sucesso!',
          width: '50%',
          text: ' Seja bem vindo ao Lembre-se!',
          confirmButtonColor: '#02820d',
          confirmButtonText: 'Entrar',
        }).then(() => {
          this.router.navigate(['/main']);
          localStorage.setItem("loggedIn","false");
        });
    } else{
      Swal.fire({
        type: 'error',
        title: 'Erro',
        width: '50%',
        confirmButtonColor: '#f27474',
        confirmButtonText: 'Tentar Novamente',
        text: 'Preencha os dados corretamente!',
      })
    }
    this.isCreating = false;

}

}
