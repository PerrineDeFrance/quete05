import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {}

  onSubmit() {
    console.log('formulaire submitted');

    // envoie des données au serveur

    // réinitialisation du formulaire
    // ou changement de page
  }
}
