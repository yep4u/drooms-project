import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Drooms Project';
  showLoader: boolean;

  constructor( private _router: Router ) {
    this.showLoader = true;
  }

  ngAfterViewInit() {
    // TODO: Loader works only on initialization of the application. Should be revised and fixed!
    this._router.events.subscribe( event => {
      if ( event instanceof NavigationStart ) {
        this.showLoader = true;
      } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError ) {
        this.showLoader = false;
      }
    } );
  }
}
