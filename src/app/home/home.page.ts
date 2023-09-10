import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private navCtrl: NavController) { }

  login() {
    const dataToPass = {
      username: this.username,
    };

   const navigationExtras: NavigationExtras = {
    state: {
      formData: dataToPass
    }
  };
  this.router.navigate(['/inicio'], navigationExtras);
}
}

