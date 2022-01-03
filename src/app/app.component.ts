import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  getin: boolean = false;
  showUserInfo: boolean = false;
  showUserInfo2: boolean = false;
  getInside() {
    this.getin = true;
  }
  submit(event: any) {
    if(event.target.value=="12345"){
    this.getInside();
    }

   
  }
  getout() {
    this.getin = false;
  }
  showPage() {
    this.hidePage();
    this.showUserInfo = true;
  }
  showPage2() {
    this.hidePage();
    this.showUserInfo2 = true;
  }
  hidePage() {
    this.showUserInfo = false;
    this.showUserInfo2 = false;
  }

  title = 'Zepings project';
}
