import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ComumModule } from '../shared/modules/comum.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    ComumModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }
