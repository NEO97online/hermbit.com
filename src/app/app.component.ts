import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  links = [
    {
      name: 'soundcloud',
      icon: 'soundcloud',
      url: 'soundcloud.com/hermbit'
    },
    {
      name: 'twitter',
      icon: 'twitter',
      url: 'twitter.com/hermbit'
    },
    {
      name: 'facebook',
      icon: 'facebook',
      url: 'facebook.com/audererm'
    },
    {
      name: 'github',
      icon: 'github',
      url: 'github.com/hermbit'
    },
    {
      name: 'custom web design',
      icon: 'handshake-o',
      url: 'silverstone.io'
    }
  ]
}
