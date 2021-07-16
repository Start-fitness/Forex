import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FooterComponent} from './footer/footer.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {MainSidebarComponent} from './main-sidebar/main-sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, MainNavbarComponent, MainSidebarComponent],
  exports: [FooterComponent, MainNavbarComponent, MainSidebarComponent]
})
export class ComponentsModule {}
