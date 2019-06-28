import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Auth } from 'aws-amplify';
import Swal from 'sweetalert2';
// import { AmplifyService }  from 'aws-amplify-angular';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  userEmail: string;
  userPassword: string;
  isAuthenticating: boolean;
  isPendingVerification: boolean;
  errorMessage: string;
  constructor(private readonly router:Router, 
              ) { }

  ngOnInit() {
  }

  getEmail(e){
    this.userEmail = e;
  }

  getPassword(e){
    this.userPassword = e;
  }

  fulled(){
    if(this.userEmail===undefined || this.userPassword===undefined 
      || this.userEmail==='' || this.userPassword==='' ){
        return false;
      }
    return true;  
  }
  login(){
    if(true){
      this.router.navigate(['/main']);
      localStorage.setItem("loggedIn","true");
    } else{
      Swal.fire({
        type: 'error',
        title: 'Erro',
        width: '50%',
        confirmButtonColor: '#f27474',
        confirmButtonText: 'Tentar Novamente',
        text: 'Usuário ou senha incorretos!',
      })
    }
  }


    
  

}
