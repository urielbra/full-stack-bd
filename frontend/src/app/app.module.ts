import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './views/login-component/login-component.component';
import { InputComponent } from './commom/input/input.component';
import { ButtonComponent } from './commom/button/button.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SignUpComponent } from './views/sign-up/sign-up.component'
import {HttpService} from './services/http.service'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
// import { UtilsService } from './services/utils.service';
import { ConfirmComponent } from './views/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    InputComponent,
    ButtonComponent,
    DashboardComponent,
    SignUpComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'button buttonspecActive',
      cancelButtonClass: 'btn'
    })
  ],
  providers: [HttpService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
