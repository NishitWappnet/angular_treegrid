import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { PageSettingsModel, SortSettingsModel, TreeGridComponent, ColumnMenuService, SelectionService, ContextMenuService, Freeze, TreeGrid } from '@syncfusion/ej2-angular-treegrid';
import { SelectionSettingsModel } from '@syncfusion/ej2-treegrid';
import { sampleData } from 'src/data-source';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ClickEventArgs } from '@syncfusion/ej2-navigations'; 
declare var $: any;
import { EditSettingsModel } from '@syncfusion/ej2-treegrid';
import { leftRight, QueryCellInfoEventArgs, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';
import { DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';
import { Dialog } from '@syncfusion/ej2-popups';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ContextMenuClickEventArgs } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { SortEventArgs } from '@syncfusion/ej2-grids';
import { freezeDirection, Column } from '@syncfusion/ej2-grids';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ColumnMenuService, SelectionService, ContextMenuService ],
})


export class AppComponent implements OnInit {
  public data: Object[] = [];
  public editOptions: Object;
  public formatOptions: Object;
  public sortSettings: Object;
  public pageSettings: PageSettingsModel;
  public contextMenuItems: Object[];
  public selectionOptions: Object;
  public selectitem : string[];
  public numericParams: Object;
  public editSettings: Object;
  public filterSettings: Object;
  public toolbar: Object[];
  public alertHeader: string = 'Copy with Header';
  public hidden: Boolean = false;
  public target: string = 'control-section';
  public alertWidth: string = '300px';
  public alertContent: string = 'Atleast one row should be selected to copy with header';
  public alertDlgBtnClick = () => {this.alertDialog.hide();}
  public alertDlgButtons: Object[] = [{ click: this.alertDlgBtnClick.bind(this), buttonModel: { content: 'OK', isPrimary: true } }];
  public showCloseIcon: Boolean = false;
  public animationSettings: Object = { effect: 'None' };
  public showColumnChooser: true
  public rowIndex: number;
  public cellIndex: number;
  public form: FormGroup;
  public isModal: boolean = true;
  public position1: object={ Y: 120 };
  public isStyleModalOpen: boolean = false;
  

  @ViewChild('alertDialog')
  public alertDialog: DialogComponent;
  @ViewChild('treegrid')
  public treeGridObj: TreeGridComponent;
  @ViewChild('insertColDialog')
  public insertColDialog: DialogComponent;
  @ViewChild('controlsection1', { read: ElementRef, static: true }) controlsection1: ElementRef;
  public targetElement: HTMLElement;

  public Submit(): void {
    this.onFormSubmit();
    console.log(this.form.value);
    
  }

  public toggleStyleModal(): void {
    this.isStyleModalOpen = !this.isStyleModalOpen;
  }
  

  public Cancel(): void {
    this.insertColDialog.hide();
    this.form.reset();
  }

  public onFormSubmit(): void {
      this.form.value;
      this.insertColDialog.hide();
      this.form.reset();
    
  }

  
  constructor(@Inject(FormBuilder) public formBuilder: FormBuilder) {  
  }

  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.controlsection1.nativeElement.parentElement;
  }

  ngOnInit(): void {  
    this.data = sampleData;
    this.initilaizeTarget();
    this.contextMenuItems = [
      {text: 'Style', target: '.e-gridheader', 
      items:[{text: 'Change Color',id: 'changeColor'},
      {text: 'Change Font',id: 'changeFont'}]},
      {text: 'Column', target: '.e-gridheader', 
      items:[{text: 'Add', id: 'insertCol'},
      {text: 'Rename', id: 'renameCol'},
      {text: 'Delete', id: 'deleteCol'}]}, 
      {text: 'Show', target: '.e-gridheader',
      items:[{text: 'Columns',id: 'ColumnChooser',}]}, 
      {text: 'Freeze', target: '.e-gridheader',
      items: [{ text: 'ON', id: 'freezeOn'
      },{ text: 'OFF', id: 'freezeOff' }]},
      {text: 'Filter', target: '.e-gridheader',
      items: [{ text: 'ON', id: 'filterOn'},
      { text: 'OFF', id: 'filterOff' }]}, 
      {text: 'Multi Sort', target: '.e-gridheader',
      items: [{ text: 'ON', id: 'multiSortON'
      },{ text: 'OFF', id: 'multiSortOf' }]},
      

      {text: 'Add Record', target: '.e-content', id: 'AddRow'},
      'Edit','Delete','Save','Cancel',
      {text: 'Copy', target: '.e-content', id: 'customCopy'},
      //{ text: 'Paste', target: '.e-content', id: 'customPaste' },
      
    ];
    this.editOptions = { params: { format: 'y/M/d' } };
    this.formatOptions = { format: 'y/M/d', type: 'date' };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Row',
      showDeleteConfirmDialog: true,
    };
    this.filterSettings = { hierarchyMode: 'Parent' };
    this.selectionOptions = { type: 'Multiple' };
    this.numericParams = { params: { format: 'n'}};
    // this.toolbar = [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy', classToggled: 'classToggled' },
    // { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }];
    // this.sortSettings =  { 
    //   columns: [{ field: 'taskName', direction: 'Ascending'  },
    //             { field: 'duration', direction: 'Ascending'  },
    //             { field: 'progress', direction: 'Ascending'  },]
    // }
    this.form = this.formBuilder.group({
      field:[''],
      headerText:[''],
      editType: [''],
      width: [''],
      textAlignment: [''],
    });
    
  }

  contextMenuOpen(args): void {
   // debugger;
   console.log('contextMenuOpen', args.column.field);
    this.rowIndex = args.rowInfo.rowIndex;
    this.cellIndex = args.rowInfo.cellIndex;
  }

  contextMenuClick(args?: MenuEventArgs): void {
    console.log('contextMenuClick', args);
    
   // debugger;
    if (args.item.id === 'AddRow') {
        this.treeGridObj.addRecord();
    } 
    if (args.item.id === 'filterOn') {
      this.treeGridObj.filterByColumn("taskName","startswith","p");
      //this.treeGridObj.grid.removeFilteredColsByField('taskName', true);
       
    }
    if (args.item.id === 'filterOff') {
      //this.treeGridObj.filterByColumn("taskName","startswith","contains");
      this.treeGridObj.grid.removeFilteredColsByField('taskName', true);
      this.treeGridObj.clearFiltering();
      this.treeGridObj.refresh();
       
    }
    if (args.item.id === 'freezeOn') {
      this.treeGridObj.freezeModule;       
    }
    if (args.item.id === 'freezeOff') {
      this.treeGridObj.grid.frozenColumns;
       
    }
    if (args.item.id === 'multiSortON') {
      this.treeGridObj.sortByColumn('duration', 'Ascending', true);
      //this.treeGridObj.grid.sortColumn('duration', 'Ascending', true);
     // this.treeGridObj.sortByColumn('progress', 'Ascending', true);
      //this.treeGridObj.sortModule.sortColumn('taskName', 'Ascending', true);
    }
    if (args.item.id === 'multiSortOf') {
      this.treeGridObj.grid.removeSortColumn('taskName');
      this.treeGridObj.grid.removeSortColumn('duration');
      this.treeGridObj.grid.removeSortColumn('progress');
    }
    if (args.item.id === 'insertCol') {
      this.toggleStyleModal();
      this.insertColDialog.show();
    }
    if (args.item.id === 'deleteCol') {
      this.treeGridObj.getColumnByField('taskName');

    }
    if (args.item.id === 'ColumnChooser') {
        this.treeGridObj.columnChooserModule.openColumnChooser();   
    }
    if (args.item.id === 'customCopy') {
      this.treeGridObj.copy();
      //args.row.style.background="#336c12"
    }
    else if (args.item.id === 'customPaste') {
        var rowIndex = this.rowIndex;   
        var cellIndex = this.cellIndex;
        //var copyContent = this.treeGridObj.clipboardModule.copyContent;
        //this.treeGridObj.paste(copyContent, rowIndex, cellIndex);
    }
  }          

  clickHandler(args: ClickEventArgs): void {
    if(this.treeGridObj.getSelectedRecords().length>0) {
        let withHeader: boolean = false;
        if (args.item.id === 'copyHeader') {
            withHeader = true;
        }
        this.treeGridObj.copy(withHeader);
    } else {
        this.alertDialog.show();
    }
  }

   
  
  // bgColor = '';
  // changeColor(){
  //   this.bgColor = 'pink';
  //   console.log(this.changeColor);
    
  // }

}
