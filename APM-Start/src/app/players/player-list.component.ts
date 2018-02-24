import { Component } from '@angular/core';

@Component({
    selector: 'bm-players', 
    templateUrl:
     './player-list.component.html'
})
export class PlayerListComponent {
    pageTitle: string= "Player List";
    players: any[]=[
        {
            "playerName": "Leo Messi",
            "playerNo":10,
            "playerPos":"Right wing",
            "playerVal":5000000,
            "playerRating":5

        },
        {
            "playerName": "Luis",
            "playerNo":9,
            "playerPos":"Striker",
            "playerVal":3000000,
            "playerRating":4.7

        }


    ];
}