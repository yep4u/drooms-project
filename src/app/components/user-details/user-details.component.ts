import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  data: User = {} as User;

  constructor( private _activatedRoute: ActivatedRoute, private _userService: UserService ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      console.log( `GitHub Username: ${ params.username }` );

      this._userService.getUser( params.username ).subscribe(
        userData => this.data = Object.assign( {}, userData ),
        error => console.log( error )
      );
    } );
  }
}
