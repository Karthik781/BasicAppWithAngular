import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'bm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;

    starwidth:number;

    ngOnChanges():void{
        this.starwidth= this.rating * 86/5;
    }

}