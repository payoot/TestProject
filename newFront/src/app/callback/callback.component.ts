import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  name = 'Angular 5';
  data: any;
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.http.get(`http://localhost:3000/callback?code=${params['code']}`).subscribe((ress) => {
        console.log('res to front',ress);
        this._saveData(ress);
      });
    });
  }

  _saveData(_value: any) {
    let body = new HttpParams();
    body = body.set('groupline_name', _value.value.target);
    body = body.set('groupline_key_notify', _value.token);
    this.http
      .post<any>(`https://liff.at-mybot.me//grouplines`, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).subscribe((data) => { console.log(data); });
  }



}
