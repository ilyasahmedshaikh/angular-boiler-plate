(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{WPIu:function(t,e,n){"use strict";n.r(e),n.d(e,"ServiceRequestModule",(function(){return Q}));var a=n("ofXK"),o=n("3Pt+"),i=n("tyNb"),c=n("fXoL"),r=n("I/3d"),s=n("3cKu"),d=n("gfgO"),b=n("eeSA"),g=n("Oh/O");function l(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div"),c.Lb(1,"div",5),c.Lb(2,"label"),c.jc(3,"Full Name"),c.Kb(),c.Jb(4,"input",6),c.Kb(),c.Lb(5,"div",5),c.Lb(6,"label"),c.jc(7,"Mobile#"),c.Kb(),c.Jb(8,"input",7),c.Kb(),c.Lb(9,"div",5),c.Lb(10,"label"),c.jc(11,"Car Location"),c.Kb(),c.Jb(12,"input",8),c.Kb(),c.Lb(13,"a",9),c.Sb("click",(function(){return c.ec(t),c.Ub().next()})),c.jc(14,"Next"),c.Kb(),c.Kb()}}function u(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div"),c.Lb(1,"div",10),c.Lb(2,"app-slider",11),c.Sb("selectCategory",(function(e){return c.ec(t),c.Ub().getCategory(e)})),c.Kb(),c.Kb(),c.Lb(3,"div",10),c.Lb(4,"app-all-packages",12),c.Sb("selectAnyPackage",(function(e){return c.ec(t),c.Ub().getPackage(e)})),c.Kb(),c.Kb(),c.Lb(5,"div",10),c.Lb(6,"label"),c.jc(7,"Date & Time"),c.Kb(),c.Jb(8,"input",13),c.Kb(),c.Lb(9,"div",10),c.Lb(10,"label"),c.jc(11,"Payment"),c.Kb(),c.Lb(12,"select",14),c.Lb(13,"option",15),c.jc(14,"Select Payment"),c.Kb(),c.Lb(15,"option",16),c.jc(16,"Cash Payment"),c.Kb(),c.Kb(),c.Kb(),c.Lb(17,"a",9),c.Sb("click",(function(){return c.ec(t),c.Ub().back()})),c.jc(18,"Back"),c.Kb(),c.Lb(19,"a",17),c.Sb("click",(function(){return c.ec(t),c.Ub().serviceRequest()})),c.jc(20,"Create Service Request"),c.Kb(),c.Kb()}2&t&&(c.yb(4),c.Zb("selectable",!0))}let p=(()=>{class t{constructor(t,e,n,a,o){this.router=t,this.fireStore=e,this.fb=n,this.packageService=a,this.checkLogin=o,this.step=1,this.serviceRequestCollection="service-requests",this.loginStatus=!1,this.categoryData=[],this.packagesData=[],this.selectedCategory="",this.selectedPackage=""}ngOnInit(){this.formInit(),this.ifLogin(),this.loginStatus&&this.programForm.patchValue({fullName:this.checkLogin.getUserData().name,mobile:this.checkLogin.getUserData().contact})}formInit(){this.programForm=this.fb.group({fullName:["",o.n.required],mobile:["",o.n.required],location:["",o.n.required],category:["",o.n.required],package:["",o.n.required],datetime:["",o.n.required],payment:["",o.n.required]})}next(){this.step<2&&(this.step+=1)}back(){2==this.step&&(this.step-=1)}getUserData(){return this.checkLogin.getUserData()}serviceRequest(){this.fireStore.collection(this.serviceRequestCollection).add({user:this.getUserData(),location:this.programForm.value.location,category:this.selectedCategory,package:this.selectedPackage,datetime:this.programForm.value.datetime,payment:this.programForm.value.payment,detailer:"not-assigned",status:0}).then(t=>{this.router.navigateByUrl("/service-request"),this.programForm.reset()}).catch(t=>{console.log(t)})}getCategory(t){this.selectedCategory=t,this.packageService.setCategory(this.selectedCategory)}getPackage(t){this.selectedPackage=t}ifLogin(){this.checkLogin.status.subscribe(t=>{this.loginStatus=t,console.log(this.loginStatus),this.loginStatus||this.router.navigateByUrl("/auth/login")})}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(i.b),c.Ib(r.a),c.Ib(o.b),c.Ib(s.a),c.Ib(d.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-new-service-request"]],decls:8,vars:3,consts:[[1,"new-service-request-screen"],[1,"container"],[1,"heading","pt-4"],[1,"py-4",3,"formGroup"],[4,"ngIf"],[1,"form-group"],["type","text","id","inputAddress","placeholder","1234 Main St, Road","formControlName","fullName","readonly","",1,"form-control"],["type","number","id","inputAddress","placeholder","1234 Main St, Road","formControlName","mobile","readonly","",1,"form-control"],["type","text","id","inputAddress","placeholder","1234 Main St, Road","formControlName","location",1,"form-control"],[1,"rounded-btn","w-100","mt-4",3,"click"],[1,"form-group","pt-1"],[3,"selectCategory"],[3,"selectable","selectAnyPackage"],["type","datetime-local","id","date","name","date","formControlName","datetime",1,"form-control"],["formControlName","payment",1,"custom-select","form-control"],["selected",""],["value","cash"],[1,"rounded-btn","w-100","mt-2",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"h1"),c.jc(4,"New Service Request"),c.Kb(),c.Kb(),c.Lb(5,"form",3),c.ic(6,l,15,0,"div",4),c.ic(7,u,21,1,"div",4),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.Zb("formGroup",e.programForm),c.yb(1),c.Zb("ngIf",1==e.step),c.yb(1),c.Zb("ngIf",2==e.step))},directives:[o.p,o.h,o.d,a.l,o.a,o.g,o.c,o.k,b.a,g.a,o.m,o.j,o.o],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.new-service-request-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}']}),t})();var f=n("m9ic");function m(t,e){1&t&&(c.Lb(0,"p"),c.Jb(1,"i",17),c.Kb())}function h(t,e){1&t&&(c.Lb(0,"p"),c.Jb(1,"i",18),c.Kb())}const y=function(t){return{data:t}};function C(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div",5),c.Sb("click",(function(){return c.ec(t),c.Ub().backEnabled()})),c.Lb(1,"div",6),c.Lb(2,"div",7),c.Lb(3,"h5",8),c.jc(4),c.Kb(),c.Lb(5,"p",9),c.Jb(6,"i",10),c.jc(7),c.Kb(),c.Lb(8,"p",11),c.Jb(9,"i",12),c.Lb(10,"small"),c.jc(11),c.Vb(12,"date"),c.Kb(),c.Kb(),c.Kb(),c.Lb(13,"div",13),c.Lb(14,"a"),c.Jb(15,"i",14),c.Kb(),c.Kb(),c.Lb(16,"div",15),c.ic(17,m,2,0,"p",16),c.ic(18,h,2,0,"p",16),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit;c.Zb("state",c.bc(9,y,t)),c.yb(4),c.kc(t.package.name),c.yb(3),c.lc(" ",t.location," "),c.yb(4),c.kc(c.Wb(12,6,t.datetime,"medium")),c.yb(6),c.Zb("ngIf",3!=t.status),c.yb(1),c.Zb("ngIf",3==t.status)}}function P(t,e){1&t&&(c.Lb(0,"div",19),c.Jb(1,"img",20),c.Kb())}function M(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div",19),c.Jb(1,"img",21),c.Lb(2,"a",22),c.Sb("click",(function(){return c.ec(t),c.Ub().getCategories()})),c.jc(3,"Try Again"),c.Kb(),c.Kb()}}let _=(()=>{class t{constructor(t,e,n,a){this.fireStore=t,this.fb=e,this.checkLogin=n,this.backService=a,this.data=[],this.serviceRequests="service-requests",this.somethingWrong=!1,this.loading="assets/img/loading.gif"}ngOnInit(){this.getServiceRequests(),setTimeout(t=>{this.somethingWrong=!0},5e3)}getUserData(){return this.checkLogin.getUserData()}getServiceRequests(){"user"==this.getUserData().user_type&&this.fireStore.collection(this.serviceRequests,t=>t.where("user.email","==",this.getUserData().email)).get().subscribe(t=>{t.docs.forEach(t=>{let e={id:t.id,user:t.data().user,location:t.data().location,category:t.data().category,package:t.data().package,datetime:t.data().datetime,payment:t.data().payment,detailer:t.data().detailer,status:t.data().status};this.data.push(e)})}),"detailer"==this.getUserData().user_type&&this.fireStore.collection(this.serviceRequests,t=>t.where("detailer.email","==",this.getUserData().email)).get().subscribe(t=>{t.docs.forEach(t=>{let e={id:t.id,user:t.data().user,location:t.data().location,category:t.data().category,package:t.data().package,datetime:t.data().datetime,payment:t.data().payment,detailer:t.data().detailer,status:t.data().status};this.data.push(e)})}),"admin"==this.getUserData().user_type&&this.fireStore.collection(this.serviceRequests).get().subscribe(t=>{t.docs.forEach(t=>{let e={id:t.id,user:t.data().user,location:t.data().location,category:t.data().category,package:t.data().package,datetime:t.data().datetime,payment:t.data().payment,detailer:t.data().detailer,status:t.data().status};this.data.push(e)})})}backEnabled(){this.backService.toggleBackState()}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(r.a),c.Ib(o.b),c.Ib(d.a),c.Ib(f.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-service-requests"]],decls:8,vars:3,consts:[[1,"service-requests-screen"],[1,"container"],[1,"heading","pt-4"],["class","card mt-4","routerLink","/service-request/service-request-details",3,"state","click",4,"ngFor","ngForOf"],["class","text-center pt-5",4,"ngIf"],["routerLink","/service-request/service-request-details",1,"card","mt-4",3,"state","click"],[1,"row","card-body"],[1,"col-10","text-section"],[1,"card-title"],[1,"card-subtitle","mt-1","text-muted"],[1,"fas","fa-map-pin","pr-2"],[1,"card-text","text-muted"],[1,"far","fa-calendar-alt","pr-2"],[1,"col-2","icon-section"],[1,"fas","fa-chevron-right"],[1,"status","text-muted"],[4,"ngIf"],[1,"fas","fa-hourglass-half","text-warning"],[1,"fas","fa-check-circle","text-success"],[1,"text-center","pt-5"],["src","assets/img/content-loading.gif","alt","Loading ...",1,"content-loading"],["src","assets/img/no-data.png","alt","No Data",1,"no-data"],[1,"rounded-btn","w-100","mt-4",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"h1"),c.jc(4,"Service Requests"),c.Kb(),c.Kb(),c.ic(5,C,19,11,"div",3),c.ic(6,P,2,0,"div",4),c.ic(7,M,4,0,"div",4),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.Zb("ngForOf",e.data),c.yb(1),c.Zb("ngIf",0==e.data.length&&!e.somethingWrong),c.yb(1),c.Zb("ngIf",0==e.data.length&&e.somethingWrong))},directives:[a.k,a.l,i.c],pipes:[a.e],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.service-requests-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}.service-requests-screen[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]{text-align:center;display:block;margin:auto}.service-requests-screen[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#485563}.status[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}']}),t})();var O=n("mrSG"),v=n("tk/3");let L=(()=>{class t{constructor(){this.fcmEndpoint="https://fcm.googleapis.com/fcm/send",this.fcmLeagcyServerKey="AAAAVoiFh3Q:APA91bE1DFVFp62oJ2xwtFrkA2Uu286nP3paS3af3PVIpC0nEWQNbT3xjCYWg49Cld6w3CCdmEAGIeIdBueCkpKI6rHTIwEevq5PEufScu_6Ay_HjsnwBS1Im_lkBLMvPCSfLb7VztkZ"}headers(){return new v.c({"Content-Type":"application/json",Authorization:"key="+this.fcmLeagcyServerKey})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),k=(()=>{class t{constructor(t,e){this.http=t,this.fcmConfig=e}Notify(t){const e=this.fcmConfig.fcmEndpoint;let n=this.fcmConfig.headers();this.http.post(e,{to:t.token,collapse_key:"type_a",notification:{sound:"default",body:t.body,title:t.title},data:{body:t.body,title:t.title,key_1:"Value for key_1",key_2:"Value for key_2"}},{headers:n}).subscribe(t=>{console.log(t)},t=>{console.log(t),alert(t.message)},()=>{console.log("Notify Success")})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(v.a),c.Pb(L))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),K=(()=>{class t{constructor(){}getStatus(t){return 0==t?"Request Received":1==t?"Arrived at Destination":2==t?"Service Done":3==t?"Payment Recieved":void 0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function x(t,e){1&t&&(c.Lb(0,"span"),c.jc(1,"Request Received"),c.Kb())}function w(t,e){1&t&&(c.Lb(0,"span"),c.jc(1,"Arrived at Destination"),c.Kb())}function S(t,e){1&t&&(c.Lb(0,"span"),c.jc(1,"Service Done"),c.Kb())}function I(t,e){if(1&t&&(c.Lb(0,"p"),c.Lb(1,"small",12),c.Jb(2,"i",13),c.Kb(),c.ic(3,x,2,0,"span",7),c.ic(4,w,2,0,"span",7),c.ic(5,S,2,0,"span",7),c.Kb()),2&t){const t=c.Ub();c.yb(3),c.Zb("ngIf",0==t.data.data.status),c.yb(1),c.Zb("ngIf",1==t.data.data.status),c.yb(1),c.Zb("ngIf",2==t.data.data.status)}}function j(t,e){1&t&&(c.Lb(0,"p"),c.Lb(1,"small",12),c.Jb(2,"i",14),c.Kb(),c.Lb(3,"span"),c.jc(4,"Payment Recieved"),c.Kb(),c.Kb())}function q(t,e){1&t&&(c.Lb(0,"p"),c.jc(1,"Not Assigned Yet"),c.Kb())}function D(t,e){if(1&t&&(c.Lb(0,"p"),c.Lb(1,"small"),c.Jb(2,"i",15),c.Kb(),c.jc(3),c.Kb()),2&t){const t=c.Ub();c.yb(3),c.lc(" ",t.data.data.detailer.name," ")}}function U(t,e){if(1&t&&(c.Lb(0,"p"),c.Lb(1,"small"),c.Jb(2,"i",16),c.Kb(),c.jc(3),c.Kb()),2&t){const t=c.Ub();c.yb(3),c.lc(" 0",t.data.data.detailer.contact," ")}}function R(t,e){if(1&t&&(c.Lb(0,"option",20),c.jc(1),c.Kb()),2&t){const t=e.$implicit;c.Zb("value",t.id),c.yb(1),c.kc(t.name)}}function Z(t,e){if(1&t){const t=c.Mb();c.Lb(0,"div",4),c.Lb(1,"select",17),c.Sb("change",(function(e){return c.ec(t),c.Ub().selectDetailer(e)})),c.Lb(2,"option",18),c.jc(3,"Select Detailer"),c.Kb(),c.ic(4,R,2,2,"option",19),c.Kb(),c.Kb()}if(2&t){const t=c.Ub();c.yb(4),c.Zb("ngForOf",t.detailers)}}function N(t,e){if(1&t){const t=c.Mb();c.Lb(0,"a",22),c.Sb("click",(function(){return c.ec(t),c.Ub(2).getDetailers()})),c.jc(1,"Select Detailer"),c.Kb()}}function A(t,e){if(1&t){const t=c.Mb();c.Lb(0,"a",22),c.Sb("click",(function(){return c.ec(t),c.Ub(2).updateServiceRequest()})),c.jc(1,"Assign Now"),c.Kb()}}function F(t,e){if(1&t&&(c.Lb(0,"div"),c.ic(1,N,2,0,"a",21),c.ic(2,A,2,0,"a",21),c.Kb()),2&t){const t=c.Ub();c.yb(1),c.Zb("ngIf",0==t.detailers.length),c.yb(1),c.Zb("ngIf",t.detailers.length>0)}}function J(t,e){if(1&t){const t=c.Mb();c.Lb(0,"a",24),c.Sb("click",(function(){return c.ec(t),c.Ub(2).updateDetailerStatus(1)})),c.jc(1,"Arrived at Destination"),c.Kb()}}function E(t,e){if(1&t){const t=c.Mb();c.Lb(0,"a",24),c.Sb("click",(function(){return c.ec(t),c.Ub(2).updateDetailerStatus(2)})),c.jc(1,"Service Done"),c.Kb()}}function z(t,e){if(1&t){const t=c.Mb();c.Lb(0,"a",24),c.Sb("click",(function(){return c.ec(t),c.Ub(2).updateDetailerStatus(3)})),c.jc(1,"Payment Recieved"),c.Kb()}}function B(t,e){if(1&t&&(c.Lb(0,"div"),c.ic(1,J,2,0,"a",23),c.ic(2,E,2,0,"a",23),c.ic(3,z,2,0,"a",23),c.Kb()),2&t){const t=c.Ub();c.yb(1),c.Zb("ngIf",!t.data.data.status||0==t.data.data.status),c.yb(1),c.Zb("ngIf",1==t.data.data.status),c.yb(1),c.Zb("ngIf",2==t.data.data.status)}}function V(t,e){1&t&&(c.Lb(0,"a",25),c.Jb(1,"i",26),c.jc(2," Completed Request "),c.Kb())}function W(t,e){1&t&&(c.Lb(0,"div",27),c.Lb(1,"a",28),c.Jb(2,"i",29),c.jc(3," Need Help ?"),c.Kb(),c.Kb())}const T=[{path:"",component:_},{path:"new-service-request",component:p},{path:"service-requests",component:_},{path:"service-request-details",component:(()=>{class t{constructor(t,e,n,a,o){this.router=t,this.fireStore=e,this.checkLogin=n,this.fcmNotify=a,this.statusDescription=o,this.usersCollection="users",this.serviceRequestCollection="service-requests",this.data={},this.detailers=[],this.userData="",this.selectedDetailer="",this.data=this.router.getCurrentNavigation().extras.state}ngOnInit(){console.log(this.data),this.getUserData()}getUserData(){this.userData=this.checkLogin.getUserData()}getDetailers(){return Object(O.a)(this,void 0,void 0,(function*(){yield this.fireStore.collection(this.usersCollection,t=>t.where("user_type","==","detailer")).get().subscribe(t=>{t.docs.forEach(t=>{let e={id:t.id,name:t.data().name,image:t.data().image,contact:t.data().contact,email:t.data().email,user_type:t.data().user_type};this.detailers.push(e)})})}))}selectDetailer(t){let e=t.target.value,n=this.detailers.filter(t=>t.id==e)[0];this.selectDetailer=n}updateServiceRequest(){this.fireStore.collection(this.serviceRequestCollection).doc(this.data.data.id).update({detailer:this.selectDetailer}).then(t=>{alert("Detailer Assigned"),this.router.navigateByUrl("/service-request")}).catch(t=>{console.log(t)})}updateDetailerStatus(t){let e=this.statusDescription.getStatus(t),n={token:this.data.data.user.device_token,body:e,title:"Dirt2Clean - Detailer"};this.fireStore.collection(this.serviceRequestCollection).doc(this.data.data.id).update({status:t}).then(t=>{alert("Status Updated"),this.router.navigateByUrl("/service-request"),this.notify(n)}).catch(t=>{console.log(t)})}notify(t){this.fcmNotify.Notify(t)}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(i.b),c.Ib(r.a),c.Ib(d.a),c.Ib(k),c.Ib(K))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-service-request-details"]],decls:68,vars:20,consts:[[1,"service-request-details-screen","py-4"],[1,"container"],[1,"heading"],[1,"pt-4"],[1,"form-group","bg-light","py-2","px-3"],[1,"text-muted","mb-0"],[1,"text-capitalize"],[4,"ngIf"],["class","form-group bg-light py-2 px-3",4,"ngIf"],[1,"btns","pt-3"],["class","text-center d-block text-muted mb-2",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"pr-2"],[1,"fas","fa-hourglass-half","text-warning"],[1,"fas","fa-check-circle","text-success"],[1,"fas","fa-user","pr-2","text-muted"],[1,"fas","fa-mobile-alt","pr-2","text-muted"],[1,"custom-select","form-control",3,"change"],["selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","rounded-btn w-100 mt-2",3,"click",4,"ngIf"],[1,"rounded-btn","w-100","mt-2",3,"click"],["class","rounded-btn w-100",3,"click",4,"ngIf"],[1,"rounded-btn","w-100",3,"click"],[1,"text-center","d-block","text-muted","mb-2"],[1,"far","fa-calendar-check","pr-2"],[1,"text-center"],["href","tel:03312737076"],[1,"fas","fa-question-circle"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"h1"),c.jc(4,"Service Request Details"),c.Kb(),c.Kb(),c.Lb(5,"form",3),c.Lb(6,"div",4),c.Lb(7,"small"),c.Lb(8,"label",5),c.jc(9,"Name"),c.Kb(),c.Kb(),c.Lb(10,"p",6),c.jc(11),c.Kb(),c.Kb(),c.Lb(12,"div",4),c.Lb(13,"small"),c.Lb(14,"label",5),c.jc(15,"Contact"),c.Kb(),c.Kb(),c.Lb(16,"p"),c.jc(17),c.Kb(),c.Kb(),c.Lb(18,"div",4),c.Lb(19,"small"),c.Lb(20,"label",5),c.jc(21,"Car Location"),c.Kb(),c.Kb(),c.Lb(22,"p"),c.jc(23),c.Kb(),c.Kb(),c.Lb(24,"div",4),c.Lb(25,"small"),c.Lb(26,"label",5),c.jc(27,"Selected Category"),c.Kb(),c.Kb(),c.Lb(28,"p"),c.jc(29),c.Kb(),c.Kb(),c.Lb(30,"div",4),c.Lb(31,"small"),c.Lb(32,"label",5),c.jc(33,"Selected Package"),c.Kb(),c.Kb(),c.Lb(34,"p"),c.jc(35),c.Kb(),c.Kb(),c.Lb(36,"div",4),c.Lb(37,"small"),c.Lb(38,"label",5),c.jc(39,"Date & Time"),c.Kb(),c.Kb(),c.Lb(40,"p"),c.jc(41),c.Vb(42,"date"),c.Kb(),c.Kb(),c.Lb(43,"div",4),c.Lb(44,"small"),c.Lb(45,"label",5),c.jc(46,"Payment"),c.Kb(),c.Kb(),c.Lb(47,"p"),c.jc(48),c.Kb(),c.Kb(),c.Lb(49,"div",4),c.Lb(50,"small"),c.Lb(51,"label",5),c.jc(52,"Status"),c.Kb(),c.Kb(),c.ic(53,I,6,3,"p",7),c.ic(54,j,5,0,"p",7),c.Kb(),c.Lb(55,"div",4),c.Lb(56,"small"),c.Lb(57,"label",5),c.jc(58,"Assigned Detailer"),c.Kb(),c.Kb(),c.ic(59,q,2,0,"p",7),c.ic(60,D,4,1,"p",7),c.ic(61,U,4,1,"p",7),c.Kb(),c.ic(62,Z,5,1,"div",8),c.Lb(63,"div",9),c.ic(64,F,3,2,"div",7),c.ic(65,B,4,3,"div",7),c.ic(66,V,3,0,"a",10),c.ic(67,W,4,0,"div",11),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(11),c.kc(e.data.data.user.name),c.yb(6),c.kc(e.data.data.user.contact),c.yb(6),c.kc(e.data.data.location),c.yb(6),c.kc(e.data.data.category.name),c.yb(6),c.kc(e.data.data.package.name),c.yb(6),c.kc(c.Wb(42,17,e.data.data.datetime,"medium")),c.yb(7),c.kc(e.data.data.payment),c.yb(5),c.Zb("ngIf",3!=e.data.data.status),c.yb(1),c.Zb("ngIf",3==e.data.data.status),c.yb(5),c.Zb("ngIf","not-assigned"==e.data.data.detailer),c.yb(1),c.Zb("ngIf","not-assigned"!=e.data.data.detailer),c.yb(1),c.Zb("ngIf","not-assigned"!=e.data.data.detailer),c.yb(1),c.Zb("ngIf",e.detailers.length>0),c.yb(2),c.Zb("ngIf","admin"==e.userData.user_type),c.yb(1),c.Zb("ngIf","detailer"==e.userData.user_type),c.yb(1),c.Zb("ngIf",3==e.data.data.status),c.yb(1),c.Zb("ngIf","user"==e.userData.user_type))},directives:[o.p,o.h,o.i,a.l,o.j,o.o,a.k],pipes:[a.e],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.service-request-details-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}']}),t})()}];let G=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(T)],i.e]}),t})();var H=n("PCNd");let Q=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[a.c,G,o.e,o.l,H.a]]}),t})()}}]);