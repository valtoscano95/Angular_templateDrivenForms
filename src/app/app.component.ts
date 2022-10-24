import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex6-TemplateDrivenForms';

  user ={
    email : '',
    subscription: '',
    password: ''
  }

  onSubmit(form){
    console.log(form.value);
    this.user.email = form.value.email;
    this.user.subscription = form.value.subscription;
    this.user.password = form.value.email;
  }
}
