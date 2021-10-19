(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wappnet-17/workspace/tree-greed/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ "4SUy");
/* harmony import */ var _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-treegrid */ "QUNt");
/* harmony import */ var src_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data-source */ "yqmP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "Pk9d");









const _c0 = ["alertDialog"];
const _c1 = ["treegrid"];
const _c2 = ["insertColDialog"];
const _c3 = ["controlsection1"];
Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__["enableRipple"])(true);
class AppComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.data = [];
        this.alertHeader = 'Copy with Header';
        this.hidden = false;
        this.target = 'control-section';
        this.alertWidth = '300px';
        this.alertContent = 'Atleast one row should be selected to copy with header';
        this.alertDlgBtnClick = () => { this.alertDialog.hide(); };
        this.alertDlgButtons = [{ click: this.alertDlgBtnClick.bind(this), buttonModel: { content: 'OK', isPrimary: true } }];
        this.showCloseIcon = false;
        this.animationSettings = { effect: 'None' };
        this.isModal = true;
        this.position1 = { Y: 120 };
        this.isStyleModalOpen = false;
        this.initilaizeTarget = () => {
            this.targetElement = this.controlsection1.nativeElement.parentElement;
        };
    }
    Submit() {
        this.onFormSubmit();
        console.log(this.form.value);
    }
    toggleStyleModal() {
        this.isStyleModalOpen = !this.isStyleModalOpen;
    }
    Cancel() {
        this.insertColDialog.hide();
        this.form.reset();
    }
    onFormSubmit() {
        this.form.value;
        this.insertColDialog.hide();
        this.form.reset();
    }
    ngOnInit() {
        this.data = src_data_source__WEBPACK_IMPORTED_MODULE_3__["sampleData"];
        this.initilaizeTarget();
        this.contextMenuItems = [
            { text: 'Style', target: '.e-gridheader',
                items: [{ text: 'Change Color', id: 'changeColor' },
                    { text: 'Change Font', id: 'changeFont' }] },
            { text: 'Column', target: '.e-gridheader',
                items: [{ text: 'Add', id: 'insertCol' },
                    { text: 'Rename', id: 'renameCol' },
                    { text: 'Delete', id: 'deleteCol' }] },
            { text: 'Show', target: '.e-gridheader',
                items: [{ text: 'Columns', id: 'ColumnChooser', }] },
            { text: 'Freeze', target: '.e-gridheader',
                items: [{ text: 'ON', id: 'freezeOn'
                    }, { text: 'OFF', id: 'freezeOff' }] },
            { text: 'Filter', target: '.e-gridheader',
                items: [{ text: 'ON', id: 'filterOn' },
                    { text: 'OFF', id: 'filterOff' }] },
            { text: 'Multi Sort', target: '.e-gridheader',
                items: [{ text: 'ON', id: 'multiSortON'
                    }, { text: 'OFF', id: 'multiSortOf' }] },
            { text: 'Add Record', target: '.e-content', id: 'AddRow' },
            'Edit', 'Delete', 'Save', 'Cancel',
            { text: 'Copy', target: '.e-content', id: 'customCopy' },
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
        this.numericParams = { params: { format: 'n' } };
        // this.toolbar = [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy', classToggled: 'classToggled' },
        // { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }];
        // this.sortSettings =  { 
        //   columns: [{ field: 'taskName', direction: 'Ascending'  },
        //             { field: 'duration', direction: 'Ascending'  },
        //             { field: 'progress', direction: 'Ascending'  },]
        // }
        this.form = this.formBuilder.group({
            field: [''],
            headerText: [''],
            editType: [''],
            width: [''],
            textAlignment: [''],
        });
    }
    contextMenuOpen(args) {
        // debugger;
        console.log('contextMenuOpen', args.column.field);
        this.rowIndex = args.rowInfo.rowIndex;
        this.cellIndex = args.rowInfo.cellIndex;
    }
    contextMenuClick(args) {
        console.log('contextMenuClick', args);
        // debugger;
        if (args.item.id === 'AddRow') {
            this.treeGridObj.addRecord();
        }
        if (args.item.id === 'filterOn') {
            this.treeGridObj.filterByColumn("taskName", "startswith", "p");
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
    clickHandler(args) {
        if (this.treeGridObj.getSelectedRecords().length > 0) {
            let withHeader = false;
            if (args.item.id === 'copyHeader') {
                withHeader = true;
            }
            this.treeGridObj.copy(withHeader);
        }
        else {
            this.alertDialog.show();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alertDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeGridObj = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.insertColDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controlsection1 = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["ColumnMenuService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["SelectionService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"]])], decls: 12, vars: 29, consts: [[1, "control-section1"], ["controlsection1", ""], [1, "content-wrapper"], ["IsResponsive", "true", "idMapping", "TaskID", "parentIdMapping", "parentID", "childMapping", "subtasks", "GridPasteOption", "PasteData,ExcludeFirstLine", "showColumnChooser", "true", "height", "auto", "width", "auto", "allowTextWrap", "true", "rowHeight", "40", "enableHover", "true", 3, "dataSource", "editSettings", "selectionSettings", "treeColumnIndex", "allowFiltering", "allowResizing", "allowReordering", "allowSorting", "allowMultiSorting", "allowRowDragAndDrop", "sortSettings", "enableInfiniteScrolling", "pageSettings", "contextMenuItems", "toolbar", "filterSettings", "contextMenuClick", "contextMenuOpen", "toolbarClick"], ["treegrid", ""], ["field", "taskID", "columnName", "taskID", "headerText", "ID", "textAlign", "Left", "width", "100px", "editType", "numericedit", 3, "isPrimaryKey", "edit"], ["field", "taskName", "columnName", "taskName", "headerText", "Name", "textAlign", "Left", "width", "180px", "editType", "defaultedit"], ["field", "duration", "columnName", "duration", "headerText", "Duration", "textAlign", "Left", "width", "140px", "editType", "numericedit", 3, "edit"], ["field", "progress", "columnName", "progress", "headerText", "Progress", "textAlign", "Left", "width", "140px", "editType", "numericedit", 3, "edit"], [3, "buttons", "position", "visible", "header", "target", "animationSettings", "content", "showCloseIcon", "width"], ["alertDialog", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ejs-treegrid", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextMenuClick", function AppComponent_Template_ejs_treegrid_contextMenuClick_3_listener($event) { return ctx.contextMenuClick($event); })("contextMenuOpen", function AppComponent_Template_ejs_treegrid_contextMenuOpen_3_listener($event) { return ctx.contextMenuOpen($event); })("toolbarClick", function AppComponent_Template_ejs_treegrid_toolbarClick_3_listener($event) { return ctx.clickHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "e-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "e-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "e-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "e-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ejs-dialog", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.data)("editSettings", ctx.editSettings)("selectionSettings", ctx.selectionOptions)("treeColumnIndex", 1)("allowFiltering", true)("allowResizing", true)("allowReordering", true)("allowSorting", true)("allowMultiSorting", true)("allowRowDragAndDrop", true)("sortSettings", ctx.sortSettings)("enableInfiniteScrolling", true)("pageSettings", ctx.pageSettings)("contextMenuItems", ctx.contextMenuItems)("toolbar", ctx.toolbar)("filterSettings", ctx.filterSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isPrimaryKey", true)("edit", ctx.numericParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("edit", ctx.numericParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("edit", ctx.numericParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", ctx.alertDlgButtons)("position", ctx.position1)("visible", ctx.hidden)("header", ctx.alertHeader)("target", ctx.targetElement)("animationSettings", ctx.animationSettings)("content", ctx.alertContent)("showCloseIcon", ctx.showCloseIcon)("width", ctx.alertWidth);
    } }, directives: [_syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["TreeGridComponent"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["ColumnsDirective"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["AggregateColumnsDirective"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["ColumnDirective"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_2__["AggregateColumnDirective"], _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]], styles: [".control-section1 {\r\n  margin: 20px;\r\n}\r\n\r\n.e-treegrid .e-selectionbackground { \r\n  background-color: rgb(241, 147, 163);\r\n}\r\n\r\n.e-treegrid .e-altrow {\r\n  background-color: #fafafa;\r\n}\r\n\r\n.e-contextmenu-wrapper ul .e-menu-item .e-menu-icon::before {\r\n  content: \"\";\r\n}\r\n\r\n/* span  {\r\n  display: none !important;\r\n} */\r\n\r\n.e-contextmenu-wrapper {\r\n  text-align: left;\r\n}\r\n\r\n.toggled {\r\n  background: red;\r\n}\r\n\r\n/* Insert Column Dialog */\r\n\r\n.form-row {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\nlabel {\r\n  margin-bottom: 10px;\r\n  \r\n}\r\n\r\n.form-control {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n  border-radius: 0;\r\n}\r\n\r\n.control_wrapper {\r\n  max-width: 500px;\r\n  min-width: 245px;\r\n  margin: auto;\r\n}\r\n\r\n/* .control-section {\r\n  width: 700px;\r\n  height: 700px;\r\n  position: relative;\r\n  margin: auto;\r\n} */\r\n\r\n/* #control_wrapper {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  } */\r\n\r\n/* @media (min-width: 250px) and (max-width: 500px) {\r\n    #control_wrapper.control_wrapper {\r\n      padding: 1% 4% 12%;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 300px) {\r\n    #control_wrapper.control_wrapper {\r\n      padding: 1% 4% 15%;\r\n    }\r\n  } */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFJQSx5QkFBeUI7O0FBRXpCO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usd0JBQXdCO0VBR3hCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTs7Ozs7R0FLRzs7QUFDSDs7O0tBR0s7O0FBRUg7Ozs7Ozs7Ozs7S0FVRyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sLXNlY3Rpb24xIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5lLXRyZWVncmlkIC5lLXNlbGVjdGlvbmJhY2tncm91bmQgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxNDcsIDE2Myk7XHJcbn0gXHJcblxyXG4uZS10cmVlZ3JpZCAuZS1hbHRyb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5lLWNvbnRleHRtZW51LXdyYXBwZXIgdWwgLmUtbWVudS1pdGVtIC5lLW1lbnUtaWNvbjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4vKiBzcGFuICB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4uZS1jb250ZXh0bWVudS13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udG9nZ2xlZCB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEluc2VydCBDb2x1bW4gRGlhbG9nICovXHJcblxyXG4uZm9ybS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5jb250cm9sX3dyYXBwZXIge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAyNDVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qIC5jb250cm9sLXNlY3Rpb24ge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn0gKi9cclxuLyogI2NvbnRyb2xfd3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgfSAqL1xyXG5cclxuICAvKiBAbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgI2NvbnRyb2xfd3JhcHBlci5jb250cm9sX3dyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAxJSA0JSAxMiU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgICNjb250cm9sX3dyYXBwZXIuY29udHJvbF93cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMSUgNCUgMTUlO1xyXG4gICAgfVxyXG4gIH0gKi9cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-treegrid */ "QUNt");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "hXFv");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "Pk9d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "jcQU");
/* harmony import */ var _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-buttons */ "SRvG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["PageService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["SortService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["FilterService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["EditService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["InfiniteScrollService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ResizeService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ReorderService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["FreezeService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["RowDDService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ColumnMenuService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ColumnChooserService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["TreeGridModule"],
            _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_2__["ContextMenuModule"],
            _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListAllModule"],
            _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["TreeGridAllModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["TreeGridModule"],
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_2__["ContextMenuModule"],
        _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["DropDownListAllModule"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["TreeGridAllModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _syncfusion_ej2_angular_buttons__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yqmP":
/*!****************************!*\
  !*** ./src/data-source.ts ***!
  \****************************/
/*! exports provided: sampleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleData", function() { return sampleData; });
let sampleData = [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 2,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 3,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 4,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 5,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 7,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 8,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 9,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 10,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 11,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 14,
                        taskName: 'Implementation Module 1',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'Normal',
                        duration: 11,
                        approved: false,
                        subtasks: [
                            {
                                taskID: 15,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 16,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Low',
                                approved: true,
                            },
                            {
                                taskID: 17,
                                taskName: 'Testing',
                                startDate: new Date('02/20/2017'),
                                endDate: new Date('02/21/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 18,
                                taskName: 'Bug fix',
                                startDate: new Date('02/24/2017'),
                                endDate: new Date('02/25/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: false,
                            },
                            {
                                taskID: 19,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/26/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 20,
                                taskName: 'Phase 1 complete',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 0,
                                priority: 'Low',
                                approved: true,
                            },
                        ],
                    },
                ],
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [
                    {
                        taskID: 22,
                        taskName: 'Implementation Module 2',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/28/2017'),
                        priority: 'Critical',
                        approved: false,
                        duration: 12,
                        subtasks: [
                            {
                                taskID: 23,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/20/2017'),
                                duration: 4,
                                progress: '50',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 24,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/20/2017'),
                                duration: 4,
                                progress: '50',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 25,
                                taskName: 'Testing',
                                startDate: new Date('02/21/2017'),
                                endDate: new Date('02/24/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 26,
                                taskName: 'Bug fix',
                                startDate: new Date('02/25/2017'),
                                endDate: new Date('02/26/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Low',
                                approved: false,
                            },
                            {
                                taskID: 27,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/28/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 28,
                                taskName: 'Phase 2 complete',
                                startDate: new Date('02/28/2017'),
                                endDate: new Date('02/28/2017'),
                                duration: 0,
                                priority: 'Normal',
                                approved: false,
                            },
                        ],
                    },
                ],
            },
            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 30,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            {
                                taskID: 31,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Low',
                                approved: true,
                            },
                            {
                                taskID: 32,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Normal',
                                approved: false,
                            },
                            {
                                taskID: 33,
                                taskName: 'Testing',
                                startDate: new Date('02/20/2017'),
                                endDate: new Date('02/21/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 34,
                                taskName: 'Bug fix',
                                startDate: new Date('02/24/2017'),
                                endDate: new Date('02/25/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 35,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/26/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 36,
                                taskName: 'Phase 3 complete',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 0,
                                priority: 'Critical',
                                approved: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        taskID: 37,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 38,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 39,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 40,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 41,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 42,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 43,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 44,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 45,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 46,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 47,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
    {
        taskID: 48,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 49,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 50,
                        taskName: 'Implementation Module 1',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'Normal',
                        duration: 11,
                        approved: false,
                        subtasks: [
                            {
                                taskID: 51,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 52,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Low',
                                approved: true,
                            },
                            {
                                taskID: 53,
                                taskName: 'Testing',
                                startDate: new Date('02/20/2017'),
                                endDate: new Date('02/21/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 54,
                                taskName: 'Bug fix',
                                startDate: new Date('02/24/2017'),
                                endDate: new Date('02/25/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: false,
                            },
                            {
                                taskID: 55,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/26/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 56,
                                taskName: 'Phase 1 complete',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 0,
                                priority: 'Low',
                                approved: true,
                            },
                        ],
                    },
                ],
            },
            {
                taskID: 57,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [
                    {
                        taskID: 58,
                        taskName: 'Implementation Module 2',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/28/2017'),
                        priority: 'Critical',
                        approved: false,
                        duration: 12,
                        subtasks: [
                            {
                                taskID: 59,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/20/2017'),
                                duration: 4,
                                progress: '50',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 60,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/20/2017'),
                                duration: 4,
                                progress: '50',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 61,
                                taskName: 'Testing',
                                startDate: new Date('02/21/2017'),
                                endDate: new Date('02/24/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 62,
                                taskName: 'Bug fix',
                                startDate: new Date('02/25/2017'),
                                endDate: new Date('02/26/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Low',
                                approved: false,
                            },
                            {
                                taskID: 63,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/28/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 64,
                                taskName: 'Phase 2 complete',
                                startDate: new Date('02/28/2017'),
                                endDate: new Date('02/28/2017'),
                                duration: 0,
                                priority: 'Normal',
                                approved: false,
                            },
                        ],
                    },
                ],
            },
            {
                taskID: 65,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 66,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            {
                                taskID: 67,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Low',
                                approved: true,
                            },
                            {
                                taskID: 68,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Normal',
                                approved: false,
                            },
                            {
                                taskID: 69,
                                taskName: 'Testing',
                                startDate: new Date('02/20/2017'),
                                endDate: new Date('02/21/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 70,
                                taskName: 'Bug fix',
                                startDate: new Date('02/24/2017'),
                                endDate: new Date('02/25/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 71,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/26/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 72,
                                taskName: 'Phase 3 complete',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 0,
                                priority: 'Critical',
                                approved: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        taskID: 73,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 74,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 75,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 76,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 77,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 78,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 7,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 8,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 9,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 10,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 11,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 14,
                        taskName: 'Implementation Module 1',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'Normal',
                        duration: 11,
                        approved: false,
                        subtasks: [
                            {
                                taskID: 15,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 16,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Low',
                                approved: true,
                            },
                            {
                                taskID: 17,
                                taskName: 'Testing',
                                startDate: new Date('02/20/2017'),
                                endDate: new Date('02/21/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 18,
                                taskName: 'Bug fix',
                                startDate: new Date('02/24/2017'),
                                endDate: new Date('02/25/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: false,
                            },
                            {
                                taskID: 19,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/26/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 20,
                                taskName: 'Phase 1 complete',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 0,
                                priority: 'Low',
                                approved: true,
                            },
                        ],
                    },
                ],
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                subtasks: [
                    {
                        taskID: 22,
                        taskName: 'Implementation Module 2',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/28/2017'),
                        priority: 'Critical',
                        approved: false,
                        duration: 12,
                        subtasks: [
                            {
                                taskID: 23,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/20/2017'),
                                duration: 4,
                                progress: '50',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 24,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/20/2017'),
                                duration: 4,
                                progress: '50',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 25,
                                taskName: 'Testing',
                                startDate: new Date('02/21/2017'),
                                endDate: new Date('02/24/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 26,
                                taskName: 'Bug fix',
                                startDate: new Date('02/25/2017'),
                                endDate: new Date('02/26/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Low',
                                approved: false,
                            },
                            {
                                taskID: 27,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/28/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 28,
                                taskName: 'Phase 2 complete',
                                startDate: new Date('02/28/2017'),
                                endDate: new Date('02/28/2017'),
                                duration: 0,
                                priority: 'Normal',
                                approved: false,
                            },
                        ],
                    },
                ],
            },
            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                subtasks: [
                    {
                        taskID: 30,
                        taskName: 'Implementation Module 3',
                        startDate: new Date('02/17/2017'),
                        endDate: new Date('02/27/2017'),
                        priority: 'High',
                        approved: false,
                        duration: 11,
                        subtasks: [
                            {
                                taskID: 31,
                                taskName: 'Development Task 1',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Low',
                                approved: true,
                            },
                            {
                                taskID: 32,
                                taskName: 'Development Task 2',
                                startDate: new Date('02/17/2017'),
                                endDate: new Date('02/19/2017'),
                                duration: 3,
                                progress: '50',
                                priority: 'Normal',
                                approved: false,
                            },
                            {
                                taskID: 33,
                                taskName: 'Testing',
                                startDate: new Date('02/20/2017'),
                                endDate: new Date('02/21/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Critical',
                                approved: true,
                            },
                            {
                                taskID: 34,
                                taskName: 'Bug fix',
                                startDate: new Date('02/24/2017'),
                                endDate: new Date('02/25/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'High',
                                approved: false,
                            },
                            {
                                taskID: 35,
                                taskName: 'Customer review meeting',
                                startDate: new Date('02/26/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 2,
                                progress: '0',
                                priority: 'Normal',
                                approved: true,
                            },
                            {
                                taskID: 36,
                                taskName: 'Phase 3 complete',
                                startDate: new Date('02/27/2017'),
                                endDate: new Date('02/27/2017'),
                                duration: 0,
                                priority: 'Critical',
                                approved: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 2,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 3,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 4,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 5,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 7,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 8,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 9,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 10,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 11,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 2,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 3,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 4,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 5,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 7,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 8,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 9,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 10,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 11,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 2,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 3,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 4,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 5,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 7,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 8,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 9,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 10,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 11,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 2,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 3,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 4,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 5,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 7,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 8,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 9,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 10,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 11,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        isInExpandState: true,
        subtasks: [
            {
                taskID: 2,
                taskName: 'Plan timeline',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 3,
                taskName: 'Plan budget',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                approved: true,
            },
            {
                taskID: 4,
                taskName: 'Allocate resources',
                startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'),
                duration: 5,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 5,
                taskName: 'Planning complete',
                startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
            },
        ],
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        isInExpandState: false,
        approved: false,
        subtasks: [
            {
                taskID: 7,
                taskName: 'Software Specification',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 60,
                priority: 'Normal',
                approved: false,
            },
            {
                taskID: 8,
                taskName: 'Develop prototype',
                startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'),
                duration: 3,
                progress: 100,
                priority: 'Critical',
                approved: false,
            },
            {
                taskID: 9,
                taskName: 'Get approval from customer',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 10,
                taskName: 'Design Documentation',
                startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'),
                duration: 2,
                progress: 100,
                approved: true,
            },
            {
                taskID: 11,
                taskName: 'Design complete',
                startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: true,
            },
        ],
    },
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map