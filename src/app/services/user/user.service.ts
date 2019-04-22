import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { User } from '../../interfaces/user/user.interface';

const apiHost = 'https://api.github.com';
const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type': 'application/json' } )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userCache = new Map();

  constructor( private _httpClient: HttpClient ) { }

  getUsers( recordsPerPage: number = 10 ): Observable<User[]> {
    const getUsersURL = `${ apiHost }/users`;
    const cachedUsers = this._userCache.get( getUsersURL );
    if ( cachedUsers ) {
      return of( cachedUsers );
    }

    const apiResponse = this._httpClient.get<User[]>( `${ getUsersURL }?per_page=${ recordsPerPage }`, httpOptions );
    apiResponse.subscribe(
      users => this._userCache.set( getUsersURL, users ),
      error => console.log( error )
    );

    return apiResponse;
  }

  getUser( username: string ): Observable<User> {
    return this._httpClient.get<User>( `${ apiHost }/users/${ username }`, httpOptions );
  }
}
