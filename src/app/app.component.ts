import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  themetoggle: boolean = false;

  changeTheme(){
    this.themetoggle = !this.themetoggle;
  }
}
