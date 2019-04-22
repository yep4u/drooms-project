import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private _usersPerPage: number = 20;

  dataSource: any = new MatTableDataSource( [] );
  displayedColumns: string[] = [ "avatar", "username", "type", "details", "profile_btn" ];

  constructor( private _userService: UserService ) { }

  ngOnInit() {
    this._userService.getUsers( this._usersPerPage ).subscribe( usersData => {
      console.log( "User data received from Observable: ", usersData );
      this.dataSource.data = usersData;
    } );
  }

  filterData( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
