import { Component, OnInit } from '@angular/core';
import { IPlayer } from './player';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { PlayerService } from './player.service';

@Component({
    selector: 'bm-players', 
    templateUrl:
     './player-list.component.html',
     styleUrls:['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
    pageTitle: string= "Player List";
    imageWidth:number=50;
    imageMargin: number=2;
    showImage: boolean=false;
    errorMessage: string;
 
    filteredPlayers: IPlayer[];
   // players: IPlayer[] = [];


    _listFilter:string;
    get listFilter():string{
        return  this._listFilter;
    }    
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredPlayers=this.listFilter ? this.performFilter(this.listFilter): this.players;
    }
    players: IPlayer[] = [];
       

     constructor(private _playerService: PlayerService){
           // this.listFilter='l';
    }
    performFilter(filterBy: string): IPlayer[]{
     filterBy = filterBy.toLocaleLowerCase();
        return this.players.filter((player:IPlayer)=>
            player.playerName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }

    toggleImage():void {
        this.showImage =!this.showImage;
    }
    ngOnInit():void{
         this._playerService.getPlayers()
            .subscribe(players => this.players = players,
                error => this.errorMessage = <any>error);


        this.filteredPlayers=this.players;

    }


}

