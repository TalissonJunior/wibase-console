import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService){
    this.translateService.addLangs(['en', 'pt-br']);
    this.translateService.setDefaultLang('en');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|pt-br/) ? browserLang : 'pt-br');
  }
}
