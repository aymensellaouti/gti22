import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MES_ROUTES} from "../../config/routing.config";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private toaster: ToastrService,
    public translateService: TranslateService
  ) {
    translateService.setDefaultLang('fr');
    translateService.addLangs(['en', 'fr']);
    const browserLang = translateService.getBrowserLang() ?? '';
    const langToUse = browserLang.match(/en|fr/) ? browserLang : 'fr'
    translateService.use(langToUse);
  }
  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.toaster.info(`A la prochaine`);
    this.router.navigate([MES_ROUTES.login]);
  }
  translate(newLang: string) {
    this.translateService.use(newLang);
  }

}
