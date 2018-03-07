import { Component } from '@angular/core';
import { PlayerService } from './players/player.service';

@Component({
  selector: 'bm-root', 
  template: `
   <div><h1>{{pageTitle}}</h1>
      <bm-players> </bm-players>
   </div>
    `,
    providers:[ PlayerService ]
})

export class AppComponent{
  pageTitle: string ="Barcelona Team Sheet";
}