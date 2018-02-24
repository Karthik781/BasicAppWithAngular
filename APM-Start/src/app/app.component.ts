import { Component } from '@angular/core';

@Component({
  selector: 'bm-root', 
  template: `
   <div><h1>{{pageTitle}}</h1>
      <bm-players> </bm-players>
   </div>
    `
})

export class AppComponent{
  pageTitle: string ="Barcelona Team Sheet";
}