import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IPlayer } from "./player";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PlayerService {

    private _playerUrl= './api/players/players.json';

    constructor(private _http: HttpClient){ } 

    getPlayers(): Observable<IPlayer[]>{
        return this._http.get<IPlayer[]>(this._playerUrl)
       .do(data => console.log('ALL: '+ JSON.stringify(data)))
        .catch(this.handleError);
    
    }

    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}