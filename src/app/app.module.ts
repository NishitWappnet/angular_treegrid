import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule, TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { FreezeService, PageService, SortService, FilterService, EditService, ToolbarService,  InfiniteScrollService } from '@syncfusion/ej2-angular-treegrid';
import { ResizeService, ColumnMenuService,RowDDService, ReorderService , ContextMenuService, ColumnChooserService  } from '@syncfusion/ej2-angular-treegrid';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    ContextMenuModule,
    DialogModule,
    FormsModule,
    CommonModule,
    DropDownListAllModule,
    TreeGridAllModule,
    ReactiveFormsModule,
    ButtonModule
    
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    EditService,
    ToolbarService,
    InfiniteScrollService,
    ResizeService,
    ContextMenuService,
    ReorderService,
    FreezeService,
    RowDDService,
    ColumnMenuService,
    ColumnChooserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
