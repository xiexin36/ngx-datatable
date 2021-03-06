/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './header-cell.component.ngfactory';
import * as import2 from '../../../../build/directives/draggable.directive';
import * as import3 from '../../../../build/directives/resizeable.directive';
import * as import4 from '../../../../build/directives/long-press.directive';
import * as import5 from '../../../../build/components/header/header-cell.component';
import * as import6 from '@angular/common';
import * as import7 from '../../../../build/components/header/header.component';
import * as import8 from '../../../../build/directives/orderable.directive';
import * as import9 from '@angular/platform-browser';
const styles_DataTableHeaderComponent:any[] = ([] as any[]);
export const RenderType_DataTableHeaderComponent:import0.RendererTypeV2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableHeaderComponent,
  data: {}
}
);
function View_DataTableHeaderComponent_2():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵeld(0,(null as any),(null as any),5,'datatable-header-cell',[
      [
        'draggable',
        ''
      ]
      ,
      [
        'long-press',
        ''
      ]
      ,
      [
        'resizeable',
        ''
      ]

    ]
    ,[
      [
        1,
        'resizeable'
      ]
      ,
      [
        1,
        'press'
      ]
      ,
      [
        1,
        'longpress'
      ]
      ,
      [
        2,
        'height',
        'px'
      ]
      ,
      [
        3,
        'className',
        0
      ]
      ,
      [
        0,
        'title',
        0
      ]
      ,
      [
        2,
        'minWidth',
        'px'
      ]
      ,
      [
        2,
        'maxWidth',
        'px'
      ]
      ,
      [
        2,
        'width',
        'px'
      ]

    ]
    ,[
      [
        (null as any),
        'resize'
      ]
      ,
      [
        (null as any),
        'longPressStart'
      ]
      ,
      [
        (null as any),
        'longPressEnd'
      ]
      ,
      [
        (null as any),
        'sort'
      ]
      ,
      [
        (null as any),
        'select'
      ]
      ,
      [
        (null as any),
        'mousedown'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('mousedown' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnov(view,2).onMousedown($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('mousedown' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnov(view,3).onMouseDown($event)) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('resize' === eventName)) {
        const pd_2:any = ((<any>comp.onColumnResized($event,view.context.$implicit)) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('longPressStart' === eventName)) {
        const pd_3:any = ((<any>comp.onLongPressStart($event)) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('longPressEnd' === eventName)) {
        const pd_4:any = ((<any>comp.onLongPressEnd($event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      if (('sort' === eventName)) {
        const pd_5:any = ((<any>comp.onSort($event)) !== false);
        allowDefault = (pd_5 && allowDefault);
      }
      if (('select' === eventName)) {
        const pd_6:any = ((<any>comp.select.emit($event)) !== false);
        allowDefault = (pd_6 && allowDefault);
      }
      return allowDefault;
    },import1.View_DataTableHeaderCellComponent_0,import1.RenderType_DataTableHeaderCellComponent),
      import0.ɵdid(335872,[[
        1,
        4
      ]
    ],0,import2.DraggableDirective,[import0.ElementRef],{
      dragEventTarget: [
        0,
        'dragEventTarget'
      ]
      ,
      dragModel: [
        1,
        'dragModel'
      ]
      ,
      dragX: [
        2,
        'dragX'
      ]
      ,
      dragY: [
        3,
        'dragY'
      ]

    }
    ,(null as any)),
      import0.ɵdid(2170880,(null as any),0,import3.ResizeableDirective,[import0.ElementRef],{resizeEnabled: [
        0,
        'resizeEnabled'
      ]
    },{resize: 'resize'}),
      import0.ɵdid(73728,(null as any),0,import4.LongPressDirective,([] as any[]),{pressModel: [
        0,
        'pressModel'
      ]
    },{
      longPressStart: 'longPressStart',
      longPressEnd: 'longPressEnd'
    }
    ),
    import0.ɵdid(24576,(null as any),0,import5.DataTableHeaderCellComponent,([] as any[]),{
      sortType: [
        0,
        'sortType'
      ]
      ,
      column: [
        1,
        'column'
      ]
      ,
      sortAscendingIcon: [
        2,
        'sortAscendingIcon'
      ]
      ,
      sortDescendingIcon: [
        3,
        'sortDescendingIcon'
      ]
      ,
      selectionType: [
        4,
        'selectionType'
      ]
      ,
      headerHeight: [
        5,
        'headerHeight'
      ]
      ,
      sorts: [
        6,
        'sorts'
      ]

    }
    ,{
      sort: 'sort',
      select: 'select'
    }
    ),
    import0.ɵted((null as any),['\n        '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.dragEventTarget;
    const currVal_1:any = view.context.$implicit;
    const currVal_2:any = ((comp.reorderable && view.context.$implicit.draggable) && view.context.$implicit.dragging);
    const currVal_3:any = false;
    check(view,1,0,currVal_0,currVal_1,currVal_2,currVal_3);
    const currVal_4:any = view.context.$implicit.resizeable;
    check(view,2,0,currVal_4);
    const currVal_5:any = view.context.$implicit;
    check(view,3,0,currVal_5);
    const currVal_6:any = comp.sortType;
    const currVal_7:any = view.context.$implicit;
    const currVal_8:any = comp.sortAscendingIcon;
    const currVal_9:any = comp.sortDescendingIcon;
    const currVal_10:any = comp.selectionType;
    const currVal_11:any = comp.headerHeight;
    const currVal_12:any = comp.sorts;
    check(view,4,0,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12);
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = import0.ɵnov(view,2).resizeEnabled;
    const currVal_1:any = import0.ɵnov(view,3).press;
    const currVal_2:any = import0.ɵnov(view,3).isLongPress;
    const currVal_3:any = import0.ɵnov(view,4).headerHeight;
    const currVal_4:any = import0.ɵnov(view,4).columnCssClasses;
    const currVal_5:any = import0.ɵnov(view,4).name;
    const currVal_6:any = import0.ɵnov(view,4).minWidth;
    const currVal_7:any = import0.ɵnov(view,4).maxWidth;
    const currVal_8:any = import0.ɵnov(view,4).width;
    check(view,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8);
  });
}
function View_DataTableHeaderComponent_1():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),5,'div',([] as any[]),[[
        3,
        'className',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any)),
    import0.ɵdid(139264,(null as any),0,import6.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n        ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableHeaderComponent_2),
    import0.ɵdid(401408,(null as any),0,import6.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
    ,{
      ngForOf: [
        0,
        'ngForOf'
      ]
      ,
      ngForTrackBy: [
        1,
        'ngForTrackBy'
      ]

    }
    ,(null as any)),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.stylesByGroup(view.context.$implicit.type);
    check(view,1,0,currVal_0);
    const currVal_1:any = view.context.$implicit.columns;
    const currVal_2:any = comp.columnTrackingFn;
    check(view,4,0,currVal_1,currVal_2);
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = ('datatable-row-' + view.context.$implicit.type);
    check(view,0,0,currVal_0);
  });
}
export function View_DataTableHeaderComponent_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵted((null as any),['\n    ']),
    import0.ɵeld(0,(null as any),(null as any),6,'div',[
      [
        'class',
        'datatable-header-inner'
      ]
      ,
      [
        'orderable',
        ''
      ]

    ]
      ,[[
        2,
        'width',
        'px'
      ]
      ],[[
        (null as any),
        'reorder'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import7.DataTableHeaderComponent = view.component;
      if (('reorder' === eventName)) {
        const pd_0:any = ((<any>comp.onColumnReordered($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdid(598016,(null as any),1,import8.OrderableDirective,[
      import0.KeyValueDiffers,
      import9.DOCUMENT
    ]
    ,(null as any),{reorder: 'reorder'}),
    import0.ɵqud(301989888,1,{draggables: 1}),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableHeaderComponent_1),
    import0.ɵdid(401408,(null as any),0,import6.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
    ,{
      ngForOf: [
        0,
        'ngForOf'
      ]
      ,
      ngForTrackBy: [
        1,
        'ngForTrackBy'
      ]

    }
    ,(null as any)),
    import0.ɵted((null as any),['\n    ']),
    import0.ɵted((null as any),['\n  '])
  ]
  ,(check,view) => {
    var comp:import7.DataTableHeaderComponent = view.component;
    const currVal_0:any = comp.columnsByPin;
    const currVal_1:any = comp.trackByGroups;
    check(view,6,0,currVal_0,currVal_1);
  },(check,view) => {
    var comp:import7.DataTableHeaderComponent = view.component;
    const currVal_0:any = comp.columnGroupWidths.total;
    check(view,1,0,currVal_0);
  });
}
const RenderType_DataTableHeaderComponent_Host:import0.RendererTypeV2 = import0.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_DataTableHeaderComponent_Host_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),1,'datatable-header',[[
        'class',
        'datatable-header'
      ]
    ],[
      [
        2,
        'height',
        (null as any)
      ]
      ,
      [
        2,
        'width',
        (null as any)
      ]

    ]
    ,(null as any),(null as any),View_DataTableHeaderComponent_0,RenderType_DataTableHeaderComponent),
    import0.ɵdid(24576,(null as any),0,import7.DataTableHeaderComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(check,view) => {
    const currVal_0:any = import0.ɵnov(view,1).headerHeight;
    const currVal_1:any = import0.ɵnov(view,1).headerWidth;
    check(view,0,0,currVal_0,currVal_1);
  });
}
export const DataTableHeaderComponentNgFactory:import0.ComponentFactory<import7.DataTableHeaderComponent> = import0.ɵccf('datatable-header',import7.DataTableHeaderComponent,View_DataTableHeaderComponent_Host_0);