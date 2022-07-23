import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // _url = 'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=jGoREF5Y5mgX9DSLnBEOAz&redirect_uri=http://localhost:4200/callback&scope=notify&state=test2';
  _url = 'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=jSjjh1k9G1NRcnBunJCu1n&redirect_uri=http://localhost:4200/callback&scope=notify&state=test4';
  title = 'newFront';
}
