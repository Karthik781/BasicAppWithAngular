import { Component } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent{
    rating: number=5;

    starwidth:number;

    ngOnChanges():void{
        this.starwidth=this.rating*86/5;
    }

}