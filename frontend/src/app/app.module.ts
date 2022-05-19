import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import{ReactiveFormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component'



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    ProfileComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
