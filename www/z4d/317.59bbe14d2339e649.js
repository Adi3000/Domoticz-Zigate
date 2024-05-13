"use strict";(self.webpackChunkz4d_plugin=self.webpackChunkz4d_plugin||[]).push([[317],{22317:(V,m,l)=>{l.r(m),l.d(m,{ManufacturerModule:()=>z});var h=l(93887),u=l(93331),d=l(38117);class _{IRCode;NwkId;constructor(o,t){this.IRCode=o,this.NwkId=t}}var e=l(54438),E=l(3366),g=l(45794),p=l(19664),F=l(89417),i=l(46247),I=l(5779),k=l(22242);const v=()=>["NwkId","Name","IEEE","Model","IRCode"],b=()=>[10,25,50];function T(n,o){if(1&n){const t=e.RV6();e.EFF(0,"\n              "),e.j41(1,"div",13),e.EFF(2,"\n                "),e.j41(3,"span",14),e.EFF(4,"\n                  "),e.nrm(5,"i",15),e.EFF(6,"\n                  "),e.j41(7,"input",16),e.nI1(8,"translate"),e.bIt("input",function(s){e.eBV(t),e.XpG();const r=e.sdS(21);return e.Njj(r.filterGlobal(s.target.value,"contains"))}),e.k0s(),e.EFF(9,"\n                "),e.k0s(),e.EFF(10,"\n              "),e.k0s(),e.EFF(11,"\n            ")}if(2&n){e.XpG();const t=e.sdS(21);e.R7$(7),e.FS9("placeholder",e.bMT(8,2,"manufacturer.casaia.placeholder")),e.Y8G("value",null==t.filters.global?null:t.filters.global.value)}}function R(n,o){1&n&&(e.EFF(0,"\n              "),e.j41(1,"tr"),e.EFF(2,"\n                "),e.j41(3,"th",17),e.EFF(4),e.nI1(5,"translate"),e.nrm(6,"p-sortIcon",18),e.EFF(7,"\n                "),e.k0s(),e.EFF(8,"\n                "),e.j41(9,"th",19),e.EFF(10),e.nI1(11,"translate"),e.nrm(12,"p-sortIcon",20),e.EFF(13,"\n                "),e.k0s(),e.EFF(14,"\n                "),e.j41(15,"th",21),e.EFF(16),e.nI1(17,"translate"),e.nrm(18,"p-sortIcon",22),e.EFF(19,"\n                "),e.k0s(),e.EFF(20,"\n                "),e.j41(21,"th",23),e.EFF(22),e.nI1(23,"translate"),e.nrm(24,"p-sortIcon",24),e.EFF(25,"\n                "),e.k0s(),e.EFF(26,"\n                "),e.j41(27,"th",25),e.EFF(28),e.nI1(29,"translate"),e.nrm(30,"p-sortIcon",26),e.EFF(31,"\n                "),e.k0s(),e.EFF(32,"\n              "),e.k0s(),e.EFF(33,"\n            ")),2&n&&(e.R7$(4),e.SpI("\n                  ",e.bMT(5,5,"manufacturer.casaia.nwkid"),""),e.R7$(6),e.SpI("\n                  ",e.bMT(11,7,"manufacturer.casaia.name"),""),e.R7$(6),e.SpI("\n                  ",e.bMT(17,9,"manufacturer.casaia.ieee"),""),e.R7$(6),e.SpI("\n                  ",e.bMT(23,11,"manufacturer.casaia.model"),""),e.R7$(6),e.SpI("\n                  ",e.bMT(29,13,"manufacturer.casaia.ircode"),""))}function y(n,o){if(1&n){const t=e.RV6();e.EFF(0,"\n                      "),e.j41(1,"input",30),e.mxI("ngModelChange",function(s){e.eBV(t);const r=e.XpG().$implicit;return e.DH7(r.IRCode,s)||(r.IRCode=s),e.Njj(s)}),e.bIt("change",function(s){e.eBV(t);const r=e.XpG().$implicit,c=e.XpG();return e.Njj(c.updateIRCode(s,r.NwkId))}),e.k0s(),e.EFF(2,"\n                    ")}if(2&n){const t=e.XpG().$implicit;e.R7$(),e.R50("ngModel",t.IRCode)}}function j(n,o){if(1&n){const t=e.RV6();e.EFF(0,"\n                      "),e.j41(1,"input",30),e.mxI("ngModelChange",function(s){e.eBV(t);const r=e.XpG().$implicit;return e.DH7(r.IRCode,s)||(r.IRCode=s),e.Njj(s)}),e.bIt("change",function(s){e.eBV(t);const r=e.XpG().$implicit,c=e.XpG();return e.Njj(c.updateIRCode(s,r.NwkId))}),e.k0s(),e.EFF(2,"\n                    ")}if(2&n){const t=e.XpG().$implicit;e.R7$(),e.R50("ngModel",t.IRCode)}}function w(n,o){if(1&n&&(e.EFF(0,"\n              "),e.j41(1,"tr"),e.EFF(2,"\n                "),e.j41(3,"td"),e.EFF(4),e.k0s(),e.EFF(5,"\n                "),e.j41(6,"td"),e.EFF(7),e.k0s(),e.EFF(8,"\n                "),e.j41(9,"td"),e.EFF(10),e.k0s(),e.EFF(11,"\n                "),e.j41(12,"td"),e.EFF(13),e.k0s(),e.EFF(14,"\n                "),e.j41(15,"td",27),e.EFF(16,"\n                  "),e.j41(17,"p-cellEditor"),e.EFF(18,"\n                    "),e.DNE(19,y,3,1,"ng-template",28),e.EFF(20,"\n                    "),e.DNE(21,j,3,1,"ng-template",29),e.EFF(22,"\n                  "),e.k0s(),e.EFF(23,"\n                "),e.k0s()()),2&n){const t=o.$implicit;e.R7$(4),e.SpI("\n                  ",t.NwkId,"\n                "),e.R7$(3),e.SpI("\n                  ",t.Name,"\n                "),e.R7$(3),e.SpI("\n                  ",t.IEEE,"\n                "),e.R7$(3),e.SpI("\n                  ",t.Model,"\n                "),e.R7$(2),e.Y8G("pEditableColumn",t.IRCode)}}let S=(()=>{class n{apiService;toastr;translate;rows;temp=[];hasEditing=!1;constructor(t,a,s){this.apiService=t,this.toastr=a,this.translate=s}ngOnInit(){this.getCasaiaDevices()}updateIRCode(t,a){this.hasEditing=!0,this.rows.find(r=>r.NwkId===a).IRCode=t.target.value}updateCasaiaDevices(){const t=[];this.rows.forEach(a=>{t.push(new _(a.IRCode,a.NwkId))}),this.apiService.putCasiaIrcode(t).subscribe(()=>{this.hasEditing=!1,this.getCasaiaDevices(),this.toastr.success(this.translate.instant("api.global.succes.update.notify"))})}getCasaiaDevices(){this.apiService.getCasiaDevices().subscribe(t=>{this.rows=t,this.temp=[...this.rows]})}static \u0275fac=function(a){return new(a||n)(e.rXU(E.G),e.rXU(g.tw),e.rXU(p.c$))};static \u0275cmp=e.VBU({type:n,selectors:[["app-manufacturer-casaia"]],decls:36,vars:23,consts:[["dt1",""],[1,"row","row-cols-1","row-cols-xxl-2","row-cols-xl-1","g-4"],[1,"col"],[1,"card"],[1,"card-header"],[1,"btn","btn-primary","float-end",3,"click","disabled","translate"],[1,"card-body"],[1,"card-title",3,"innerHTML"],[1,"card-text"],["styleClass","p-datatable-sm","dataKey","NwkId","responsiveLayout","scroll","stateStorage","local","stateKey","casaia",3,"globalFilterFields","rowHover","showCurrentPageReport","currentPageReportTemplate","rowsPerPageOptions","value","rows","paginator","scrollable"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text",3,"input","value","placeholder"],["pSortableColumn","NwkId"],["field","NwkId"],["pSortableColumn","Name"],["field","Name"],["pSortableColumn","IEEE"],["field","IEEE"],["pSortableColumn","Model"],["field","Model"],["pSortableColumn","IRCode",2,"width","8rem"],["field","IRCode"],["pEditableColumnField","IRCode",3,"pEditableColumn"],["pTemplate","input"],["pTemplate","output"],["pInputText","","type","text",3,"ngModelChange","change","ngModel"]],template:function(a,s){if(1&a){const r=e.RV6();e.j41(0,"div",1),e.EFF(1,"\n  "),e.j41(2,"div",2),e.EFF(3,"\n    "),e.j41(4,"div",3),e.EFF(5,"\n      "),e.j41(6,"div",4),e.EFF(7),e.nI1(8,"translate"),e.j41(9,"button",5),e.nI1(10,"translate"),e.bIt("click",function(){return e.eBV(r),e.Njj(s.updateCasaiaDevices())}),e.k0s(),e.EFF(11,"\n      "),e.k0s(),e.EFF(12,"\n      "),e.j41(13,"div",6),e.EFF(14,"\n        "),e.nrm(15,"h5",7),e.nI1(16,"translate"),e.EFF(17,"\n        "),e.j41(18,"div",8),e.EFF(19,"\n          "),e.j41(20,"p-table",9,0),e.nI1(22,"translate"),e.EFF(23,"\n            "),e.DNE(24,T,12,4,"ng-template",10),e.EFF(25,"\n            "),e.DNE(26,R,34,15,"ng-template",11),e.EFF(27,"\n            "),e.DNE(28,w,24,5,"ng-template",12),e.EFF(29,"\n          "),e.k0s(),e.EFF(30,"\n        "),e.k0s(),e.EFF(31,"\n      "),e.k0s(),e.EFF(32,"\n    "),e.k0s(),e.EFF(33,"\n  "),e.k0s(),e.EFF(34,"\n"),e.k0s(),e.EFF(35,"\n")}2&a&&(e.R7$(7),e.SpI("\n        ",e.bMT(8,13,"manufacturer.casaia.header"),"\n        "),e.R7$(2),e.FS9("translate",e.bMT(10,15,"manufacturer.casaia.validate.button")),e.Y8G("disabled",!s.hasEditing),e.R7$(6),e.Y8G("innerHTML",e.bMT(16,17,"manufacturer.casaia.subtitle"),e.npT),e.R7$(5),e.FS9("currentPageReportTemplate",e.bMT(22,19,"TOTAL")),e.Y8G("globalFilterFields",e.lJ4(21,v))("rowHover",!0)("showCurrentPageReport",!0)("rowsPerPageOptions",e.lJ4(22,b))("value",s.rows)("rows",10)("paginator",!0)("scrollable",!0))},dependencies:[F.me,F.BC,F.vS,p.Mm,i.XI,I.Ei,i.Tg,i.hp,i.c5,i.yc,k.S,p.D9]})}return n})();class M{key;value}var N=l(96354),f=l(60177),C=l(97013);const $=()=>[10,25,50];function D(n,o){if(1&n&&(e.EFF(0,"\n              "),e.j41(1,"span"),e.EFF(2," "),e.j41(3,"b"),e.EFF(4,"Name"),e.k0s(),e.EFF(5),e.j41(6,"b"),e.EFF(7,"NwkId"),e.k0s(),e.EFF(8),e.k0s(),e.EFF(9,"\n            ")),2&n){const t=o.item;e.R7$(5),e.SpI(" : ",t.ZDeviceName," - "),e.R7$(3),e.SpI(" : ",t.Nwkid,"")}}function P(n,o){if(1&n&&(e.j41(0,"p",12),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&n){const t=e.XpG();e.R7$(),e.SpI("\n            ",e.bMT(2,1,"manufacturer.zlinky.".concat(t.deviceSelected.protocole)),"\n          ")}}function G(n,o){1&n&&(e.EFF(0,"\n              "),e.j41(1,"tr"),e.EFF(2,"\n                "),e.j41(3,"th"),e.EFF(4),e.nI1(5,"translate"),e.k0s(),e.EFF(6,"\n                "),e.j41(7,"th"),e.EFF(8),e.nI1(9,"translate"),e.k0s(),e.EFF(10,"\n              "),e.k0s(),e.EFF(11,"\n            ")),2&n&&(e.R7$(4),e.SpI("\n                  ",e.bMT(5,2,"manufacturer.zlinky.key"),"\n                "),e.R7$(4),e.SpI("\n                  ",e.bMT(9,4,"manufacturer.zlinky.value"),"\n                "))}function x(n,o){if(1&n&&(e.EFF(0,"\n              "),e.j41(1,"tr"),e.EFF(2,"\n                "),e.j41(3,"td"),e.EFF(4),e.nI1(5,"translate"),e.k0s(),e.EFF(6,"\n                "),e.j41(7,"td"),e.EFF(8),e.k0s(),e.EFF(9,"\n              "),e.k0s()),2&n){const t=o.$implicit;e.R7$(4),e.SpI("\n                  ",e.bMT(5,2,"manufacturer.zlinky.".concat(t.key)),"\n                "),e.R7$(4),e.SpI("\n                  ",t.value,"\n                ")}}function X(n,o){if(1&n&&(e.j41(0,"p-table",13,0),e.nI1(2,"translate"),e.EFF(3,"\n            "),e.DNE(4,G,12,6,"ng-template",14),e.EFF(5,"\n            "),e.DNE(6,x,10,4,"ng-template",15),e.EFF(7,"\n          "),e.k0s()),2&n){const t=e.XpG();e.FS9("currentPageReportTemplate",e.bMT(2,8,"TOTAL")),e.Y8G("rowHover",!0)("showCurrentPageReport",!0)("rowsPerPageOptions",e.lJ4(10,$))("value",t.deviceSelected.ParametersForDisplay)("rows",10)("paginator",!0)("scrollable",!0)}}let O=(()=>{class n{apiService;toastr;translate;zlinkys$;deviceSelected;constructor(t,a,s){this.apiService=t,this.toastr=a,this.translate=s}ngOnInit(){this.zlinkys$=this.apiService.getZlinky().pipe((0,N.T)(t=>(t.forEach(a=>{a.protocole="PROTOCOL_LINKY_"+a["PROTOCOL Linky"],a.ParametersForDisplay=[],a.Parameters.forEach(s=>{const r=new M;r.key=Object.keys(s)[0],r.value=Object.values(s)[0],a.ParametersForDisplay.push(r)})}),t)))}getConfiguration(t){this.deviceSelected=t}static \u0275fac=function(a){return new(a||n)(e.rXU(E.G),e.rXU(g.tw),e.rXU(p.c$))};static \u0275cmp=e.VBU({type:n,selectors:[["app-manufacturer-zlinky"]],decls:33,vars:17,consts:[["dt1",""],[1,"row","row-cols-1","row-cols-xxl-2","row-cols-xl-1","g-4"],[1,"col"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"card-title",3,"innerHTML"],[1,"card-text"],["bindLabel","ZDeviceName","appendTo","body",1,"w-25",3,"change","clear","items","multiple","closeOnSelect","searchable","placeholder"],["ng-option-tmp",""],["class","mt-3 mb-3 font-weight-bold",4,"ngIf"],["styleClass","p-datatable-sm","responsiveLayout","scroll","stateStorage","local","stateKey","zlinky",3,"rowHover","showCurrentPageReport","currentPageReportTemplate","rowsPerPageOptions","value","rows","paginator","scrollable",4,"ngIf"],[1,"mt-3","mb-3","font-weight-bold"],["styleClass","p-datatable-sm","responsiveLayout","scroll","stateStorage","local","stateKey","zlinky",3,"rowHover","showCurrentPageReport","currentPageReportTemplate","rowsPerPageOptions","value","rows","paginator","scrollable"],["pTemplate","header"],["pTemplate","body"]],template:function(a,s){1&a&&(e.j41(0,"div",1),e.EFF(1,"\n  "),e.j41(2,"div",2),e.EFF(3,"\n    "),e.j41(4,"div",3),e.EFF(5,"\n      "),e.j41(6,"div",4),e.EFF(7),e.nI1(8,"translate"),e.k0s(),e.EFF(9,"\n      "),e.j41(10,"div",5),e.EFF(11,"\n        "),e.nrm(12,"h5",6),e.nI1(13,"translate"),e.EFF(14,"\n        "),e.j41(15,"div",7),e.EFF(16,"\n          "),e.j41(17,"ng-select",8),e.nI1(18,"translate"),e.nI1(19,"async"),e.bIt("change",function(c){return s.getConfiguration(c)})("clear",function(){return s.deviceSelected=null}),e.EFF(20,"\n            "),e.DNE(21,D,10,2,"ng-template",9),e.EFF(22,"\n          "),e.k0s(),e.EFF(23,"\n\n          "),e.DNE(24,P,3,3,"p",10),e.EFF(25,"\n\n          "),e.DNE(26,X,8,11,"p-table",11),e.EFF(27,"\n        "),e.k0s(),e.EFF(28,"\n      "),e.k0s(),e.EFF(29,"\n    "),e.k0s(),e.EFF(30,"\n  "),e.k0s(),e.EFF(31,"\n"),e.k0s(),e.EFF(32,"\n")),2&a&&(e.R7$(7),e.SpI("\n        ",e.bMT(8,9,"manufacturer.zlinky.header"),"\n      "),e.R7$(5),e.Y8G("innerHTML",e.bMT(13,11,"manufacturer.zlinky.subtitle"),e.npT),e.R7$(5),e.FS9("placeholder",e.bMT(18,13,"manufacturer.zlinky.placeholder")),e.Y8G("items",e.bMT(19,15,s.zlinkys$))("multiple",!1)("closeOnSelect",!0)("searchable",!0),e.R7$(7),e.Y8G("ngIf",s.deviceSelected),e.R7$(2),e.Y8G("ngIf",s.deviceSelected))},dependencies:[f.bT,C.vr,C.Uq,i.XI,I.Ei,f.Jj,p.D9]})}return n})();const L=[{path:"casaia",component:S,data:{title:(0,d.o6)("manufacturer.casaia")}},{path:"zlinky",component:O,data:{title:(0,d.o6)("manufacturer.zlinky")}}];let Z=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=e.$C({type:n});static \u0275inj=e.G2t({imports:[u.iI.forChild(L),u.iI]})}return n})(),z=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=e.$C({type:n});static \u0275inj=e.G2t({imports:[Z,h.G]})}return n})()}}]);