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
    listFilter: string='messi';
    
    players: any[] = [
        {
            "playerName": "Leo Messi",
            "playerNo":10,
            "playerPos":"Right wing",
            "playerVal":5000000,
            "playerRating":5,
            "contractDate":"june 2022",
            "imageUrl":"https://png.pngtree.com/element_origin_min_pic/16/10/17/195804bbfb5a069.jpg"   

        },
        {
            "playerName": "Luis Suarez",
            "playerNo":9,
            "playerPos":"Striker",
            "playerVal":3000000,
            "playerRating":4.7,
            "imageUrl": " "
        }


    ];

    toggleImage():void {
        this.showImage =!this.showImage;
    }
    ngOnInit():void{
        console.log('In onInit');
    }

}

