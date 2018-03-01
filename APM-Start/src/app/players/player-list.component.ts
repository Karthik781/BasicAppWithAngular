import { Component, OnInit } from '@angular/core';
import { IPlayer } from './player';

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

    _listFilter:string;
    get listFilter():string{
        return  this._listFilter;
    }    
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredPlayers=this.listFilter ? this.performFilter(this.listFilter): this.players;
    }
    filteredPlayers: IPlayer[];
    players: IPlayer[] = [
        {
            "playerName": "Leo Messi",
            "playerNo":10,
            "playerPos":"Right wing",
            "playerVal":5000000,
            "playerRating":5,
            "contractDate":"june 2022",
           //"imageUrl":"https://png.pngtree.com/element_origin_min_pic/16/10/17/195804bbfb5a069.jpg"   

        },
        {
            "playerName": "Luis Suarez",
            "playerNo":9,
            "playerPos":"Striker",
            "playerVal":3000000,
            "playerRating":4.7,
            "contractDate":"june 2021",
          // "imageUrl": "https://jjnihb.jpg "
        }


    ];

     constructor(){
         this.filteredPlayers=this.players;
            this.listFilter='l';
    }
    performFilter(filterBy: string): IPlayer[]{
     filterBy = filterBy;
        return this.players.filter((player:any)=>
            player.playerName.indexOf(filterBy)!==-1);
    }

    toggleImage():void {
        this.showImage =!this.showImage;
    }
    ngOnInit():void{
        console.log('In onInit');
    }


}

