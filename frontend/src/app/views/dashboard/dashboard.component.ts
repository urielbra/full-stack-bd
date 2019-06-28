import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../services/http.service'
import Swal from 'sweetalert2'
import { userInfo } from 'os';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  nomeUser : string;
  lembretes : any ;
  userId : string ;

  newPostTitle : string;
  newPostText : string;

  editPostTitle : string;
  editPostText : string;
  editPostId: string;



  agora = new Date();
  diaSemana;
  diaMes;
  valorAno;
  valorMes;
  valorHora;
  valorMinuto;
  valorSegundo;
  dataFormatada;
  horaFormatada;
  diaFormatado;

  constructor(private readonly router: Router, private readonly http: HttpService) { 
    setInterval(() => {
      this.agora = new Date();
      this.valorMes = this.agora.getMonth() + 1 ;
      this.valorHora = this.agora.getHours();
      this.valorMinuto = this.agora.getMinutes();
      this.valorSegundo = this.agora.getSeconds();
      this.diaMes = this.agora.getDate();
      this.valorAno = this.agora.getFullYear();
      this.diaSemana = this.agora.getDay();

      this.dataFormatada = this.format2Digits(this.diaMes) + '/' + this.format2Digits(this.valorMes) +  '/' +  this.valorAno;
      this.horaFormatada = this.format2Digits(this.valorHora) + ':' + this.format2Digits(this.valorMinuto) + ':' + this.format2Digits(this.valorSegundo);
      this.diaFormatado = this.traduzir(this.diaSemana);
    }, 1);
  }

  ngOnInit() {

    /*Backend para preencher nome do usuário e os lembretes*/ 


  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }
  traduzir(n){
    if(n===1){
      return "Segunda-Feira";
    } else if(n===2){
      return "Terça-Feira";
    } else if(n===3){
      return "Quarta-Feira";
    } else if(n===4){
      return "Quinta-Feira";
    } else if(n===5){
      return "Sexta-Feira";
    } else if(n===6){
      return "Sábado";
    } else if(n===0){
      return "Domingo";
    }
  }
  format2Digits(myNumber){
    return ("0" + myNumber).slice(-2);
  }
  deletePost(which){
    
  Swal.fire({
  title: 'Tem certeza?',
  text: "Assim fica fácil pra você esquecer as coisas...",
  type: 'warning',
  showCloseButton: true,
  width: '50%',
  confirmButtonColor: '#f27474',
  confirmButtonText: 'Deletar'
  }).then((result) => {
    /* BACKEND PARA DELETAR IMAGENS */
  })
  


  }
  createPost(){
    const lnew = {
      title: this.newPostTitle,
      text: this.newPostText,
      userId: 'user_' + this.userId,
    }
    this.http.genericPost('create',lnew,null).subscribe((response) => {
      this.ngOnInit();
    })
    
    this.newPostTitle = ''; 
    this.newPostText  = ''; 

    
  }
  editData(witch){
    console.log(witch)
    this.editPostTitle = witch.Title;
    this.editPostText = witch.Text;
    this.editPostId = witch.NoteId
  }
  editPost(){
    const lnew = {
      title: this.editPostTitle,
      text: this.editPostText,
      userId: 'user_' + this.userId,
      noteId:  this.editPostId
    }
    this.http.genericPut('update',lnew).subscribe((response) => {
      this.ngOnInit();
    });

    
  }
  fulled(){
    return false;
  }

}
