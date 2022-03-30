import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angularTest';
  user = { name: 'whap', loginDate: new Date(), results: [100, 1002, 1] };
  user2?: any;

  userChanged: boolean = false;

  constructor(){
    
  }

  ngOnInit(): void {
    // //sessionStorage.setItem('session', 'wowee');
    // localStorage.setItem('local', JSON.stringify(this.user));
    // if (localStorage.getItem('local')) {
    //   this.user2 = JSON.parse(localStorage.getItem('local') as any);
    // }
    // const key = 'name';
    // const value = 'gasp';
    // const date = new Date();
    // date.setFullYear(date.getFullYear() + 1);
    // const cookie = key + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
    // console.log(cookie);
    // document.cookie = cookie
    // const cookie2 = key + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
    // document.cookie = cookie2
  }

  saveLocalData(){
    localStorage.setItem('local', JSON.stringify(this.user));
    this.userChanged = true
  }


}
