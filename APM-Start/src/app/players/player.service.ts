import { Injectable } from "@angular/core";
import { IPlayer } from "./player";

@Injectable()
export class PlayerService {

    getPlayers():IPlayer[]{
        return [
            {
                "playerName": "Leo Messi",
                "playerNo":10,
                "playerPos":"Right wing",
                "playerVal":5000000,
                "playerRating":5,
                "contractDate":"june 2022",
               // "imageUrl": "https://png.pngtree.com/element_origin_min_pic/16/10/17/195804bbfb5a069.jpg"
    
            },
            {
                "playerName": "Luis Suarez",
                "playerNo":9,
                "playerPos":"Striker",
                "playerVal":3000000,
                "playerRating":4.7,
                "contractDate":"june 2021",
              // "imageUrl":"https://png.pngtree.com/element_origin_min_pic/16/11/12/378ee6327e18ea1c8d066efcf9301522.jpg "
            },
            {
                "playerName": "Phil Countinho",
                "playerNo":14,
                "playerPos":"Mid feilder",
                "playerVal":4000000,
                "playerRating":4,
                "contractDate":"june 2022",
                //
            }
    
        ];
    
    }
}