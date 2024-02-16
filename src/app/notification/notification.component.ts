import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',

  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}"> <!-- Using ngClass we can add a CSS class dynamically to a web page element-->
                                              <!-- [hidden]="displayNotification" -->
  <!-- I have binded this 'displayNotification' property to this hidden attribute of this DIV element -->
              <p>This website uses cookies to provide better user expirience.</p>
              <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: ["div{margin: 10px 0px; padding: 0px 20px; text-align:center;}",
          "p{font-size: 14px; margin-top: 15px}", ".close{float: right; margin-top: -45px;}",
          ".fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s,opacity 2s linear;}"]
})

export class NotificationComponent {
  displayNotification:boolean = false;  //Property Binding

  closeNotification(){
    this.displayNotification = true;
  }
}
        //different bootstrap classes
//template: `<div class="alert alert-success">
//template: `<div class="alert alert-danger">
//template: `<div class="alert alert-warning">


// [hidden]="displayNotification"
