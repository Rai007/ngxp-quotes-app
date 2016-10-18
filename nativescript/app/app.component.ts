import { Component } from '@angular/core';

import { SwissArmyKnife } from 'nativescript-swiss-army-knife';

@Component({
  selector: 'my-app',
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent {
  constructor() {
    SwissArmyKnife.setAndroidStatusBarColor('#01579B');

    // Setting StatusBarStyle to UIBarStyleBlack for iOS.
    SwissArmyKnife.actionBarSetStatusBarStyle(1);
  }
}
