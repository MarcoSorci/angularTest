import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent implements OnChanges {
  user?: any;

  // @Input() set userChanged(value:boolean){
  //   if (value) {
  //     if (localStorage.getItem('local') !== null) {
  //       this.user = JSON.parse(localStorage.getItem('local') as any);
  //     }
  //   }
  // };

  @Input() userChanged: boolean = false;

  constructor() {}

  ngOnChanges(): void {  //checks if input values change in any way, then calls its content
    this.displayData();
  }

  displayData() {
    if (this.userChanged) {
      if (localStorage.getItem('local') !== null) {
        this.user = JSON.parse(localStorage.getItem('local') as any);
        console.log(this.user);
        
      }
    }
  }
}
