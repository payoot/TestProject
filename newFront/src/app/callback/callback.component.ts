import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import { notifySDK } from '../../../node_modules/line-notify-sdk';

// const notifySDK from '../';

// import notifySDK from "line-notify-sdk";
// import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  // _data: any;
  // _header: any;
  name = 'Angular 5';
  data: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    // private serve: ServicesService
  ) {
    this.route.queryParams.subscribe((params) => {
      // console.log("hello world");

      // var xhr = new XMLHttpRequest();
      // var self = this;
      // xhr.onreadystatechange = function () {
      //   if (this.readyState == 4 && this.status == 200) {
      //     console.log(this.responseText);
      //     self.data = JSON.parse(this.responseText);
      //   }
      // };

      // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

      // xhr.send();
      

      var data = "grant_type=authorization_code&code="+`${params['code']}`+"&redirect_uri=http://localhost:4200/callback&client_id=RrVsMV8tnyA2JVlaJPmKmM&client_secret=qDxQdhauQQGr3isIElpMS9CUW0rDPxPAkHL5GuYTccW";
      // console.log(data);
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open("POST", "https://notify-bot.line.me/oauth/token");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.setRequestHeader("postman-token", "160ca9f3-295e-067a-4300-775c70b47e8e");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://notify-bot.line.me/oauth/token');
      xhr.setRequestHeader("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      xhr.setRequestHeader("Access-Control-Allow-Headers", 'X-Requested-With,content-type');
      xhr.setRequestHeader("Access-Control-Allow-Credentials", 'true');
      xhr.send(data);












    });
  }

  ngOnInit() {
    // this.route.queryParams.subscribe((params) => {
    //   // console.log(params['code']);
    //   // this._data = {
    //   //   grant_type: 'authorization_code',
    //   //   code: params['code'],
    //   //   redirect_uri: 'http://localhost:4200/callback',
    //   //   client_id: 'RrVsMV8tnyA2JVlaJPmKmM',
    //   //   client_secret: 'qDxQdhauQQGr3isIElpMS9CUW0rDPxPAkHL5GuYTccW' 
    //   // };
    //   // this._header= { 
    //   //   'content-type': 'application/x-www-form-urlencoded',
    //   //   'postman-token': '27baf12a-1936-95e1-84a3-c1e4819152a0',
    //   //   'cache-control': 'no-cache' 
    //   // };


    //   // this.http.post(`https://notify-bot.line.me/oauth/token`, {form: this._data} ,{headers: this._header}).subscribe(async (res) => {
    //   //   console.log(await res);
    //   // });

    //   // this.serve.getTEst(params['code']).subscribe((res: any) => {
    //   //   console.log(res);
    //   // });
    // });
  }



}
