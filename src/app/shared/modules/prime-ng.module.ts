import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import {InputMaskModule} from 'primeng/inputmask';
import { MessagesModule } from 'primeng/components/messages/messages';
import { TableModule } from 'primeng/components/table/table';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FileUploadModule} from 'primeng/fileupload';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {OrderListModule} from 'primeng/orderlist';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    FieldsetModule,
    InputMaskModule,
    MessagesModule,
    CheckboxModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    CalendarModule,
    TabViewModule,
    ToggleButtonModule,
    ScrollPanelModule,
    FileUploadModule,
    DynamicDialogModule,
    SidebarModule,
    OrderListModule,
    CardModule,
    TooltipModule,
    MenuModule
  ],
  exports: [
    ButtonModule,
    FieldsetModule,
    InputMaskModule,
    MessagesModule,
    CheckboxModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    CalendarModule,
    TabViewModule,
    ToggleButtonModule,
    ScrollPanelModule,
    FileUploadModule,
    DynamicDialogModule,
    SidebarModule,
    OrderListModule,
    CardModule,
    TooltipModule,
    MenuModule
  ]
})
export class PrimeNGModule { }
