(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5OiB":function(t,n,e){"use strict";e.r(n),e.d(n,"AdminModule",(function(){return Y}));var o=e("ofXK"),a=e("3Pt+"),i=e("tyNb"),c=e("fXoL"),r=e("I/3d"),g=e("m9ic");const d=function(t){return{data:t}};function s(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div"),c.Lb(1,"div",7),c.Lb(2,"div",8),c.Lb(3,"div",9),c.Jb(4,"img",10),c.Kb(),c.Lb(5,"div",11),c.Lb(6,"div",12),c.Lb(7,"h5",13),c.jc(8),c.Kb(),c.Lb(9,"p",14),c.jc(10),c.Kb(),c.Lb(11,"div",8),c.Lb(12,"div",15),c.Lb(13,"small",16),c.jc(14),c.Kb(),c.Kb(),c.Lb(15,"div",17),c.Lb(16,"a",18),c.Sb("click",(function(){return c.ec(t),c.Ub(2).backEnabled()})),c.Jb(17,"i",19),c.Kb(),c.Lb(18,"a",20),c.Sb("click",(function(){c.ec(t);const e=n.$implicit;return c.Ub(2).deletePackage(e.id)})),c.Jb(19,"i",21),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=n.$implicit;c.yb(4),c.ac("src",t.image,c.fc),c.yb(4),c.kc(t.name),c.yb(2),c.lc("Rs. ",t.price,""),c.yb(4),c.kc(t.category[0].name),c.yb(2),c.Zb("state",c.bc(5,d,t))}}function l(t,n){if(1&t&&(c.Lb(0,"div",5),c.ic(1,s,20,7,"div",6),c.Kb()),2&t){const t=c.Ub();c.yb(1),c.Zb("ngForOf",t.data)}}function b(t,n){1&t&&(c.Lb(0,"div",22),c.Jb(1,"img",23),c.Kb())}function p(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div",22),c.Jb(1,"img",24),c.Lb(2,"a",25),c.Sb("click",(function(){return c.ec(t),c.Ub().getPackages()})),c.jc(3,"Try Again"),c.Kb(),c.Kb()}}let u=(()=>{class t{constructor(t,n){this.fireStore=t,this.backService=n,this.packageCollection="packages",this.data=[],this.somethingWrong=!1}ngOnInit(){this.getPackages(),setTimeout(t=>{this.somethingWrong=!0},5e3)}getPackages(){this.fireStore.collection(this.packageCollection).get().subscribe(t=>{t.docs.forEach(t=>{let n={id:t.id,image:t.data().image,name:t.data().name,price:t.data().price,category:t.data().category};this.data.push(n)})})}deletePackage(t){confirm("Delete?")&&(this.fireStore.collection(this.packageCollection).doc(t).delete(),this.data=[],this.getPackages())}backEnabled(){this.backService.toggleBackState()}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(r.a),c.Ib(g.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-all-packages"]],decls:8,vars:3,consts:[[1,"all-packages-screen"],[1,"container"],[1,"heading","pt-4"],["class","packages-cards pb-5",4,"ngIf"],["class","text-center pt-5",4,"ngIf"],[1,"packages-cards","pb-5"],[4,"ngFor","ngForOf"],[1,"card","mt-3"],[1,"row"],[1,"col-4"],[1,"card-img-top",3,"src"],[1,"col-8","pl-0"],[1,"content","py-2"],[1,"package"],[1,"price","text-muted"],[1,"col-6"],[1,"text-muted"],[1,"col-6","icons"],["routerLink","/admin/add-package",3,"state","click"],[1,"px-4","fas","fa-pencil-alt"],[3,"click"],[1,"fas","fa-trash-alt"],[1,"text-center","pt-5"],["src","assets/img/content-loading.gif","alt","Loading ...",1,"content-loading"],["src","assets/img/no-data.png","alt","No Data",1,"no-data"],[1,"rounded-btn","w-100","mt-4",3,"click"]],template:function(t,n){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"h1"),c.jc(4,"All Packages"),c.Kb(),c.Kb(),c.ic(5,l,2,1,"div",3),c.ic(6,b,2,0,"div",4),c.ic(7,p,4,0,"div",4),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.Zb("ngIf",n.data.length>0),c.yb(1),c.Zb("ngIf",0==n.data.length&&!n.somethingWrong),c.yb(1),c.Zb("ngIf",0==n.data.length&&n.somethingWrong))},directives:[o.l,o.k,i.d],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.all-packages-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}.icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#485563}.card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.card-img-top[_ngcontent-%COMP%]{width:100%;height:90px;object-fit:cover;object-position:center;border-radius:3px 0 0 3px}']}),t})();var f=e("nYR2"),m=e("Vaw3");function h(t,n){1&t&&(c.Lb(0,"h1"),c.jc(1,"Add Package"),c.Kb())}function C(t,n){1&t&&(c.Lb(0,"h1"),c.jc(1,"Update Package"),c.Kb())}function M(t,n){if(1&t&&c.Jb(0,"img",19),2&t){const t=c.Ub();c.ac("src",t.preview,c.fc)}}function P(t,n){if(1&t&&c.Jb(0,"img",19),2&t){const t=c.Ub();c.ac("src",t.loading,c.fc)}}function O(t,n){if(1&t&&(c.Lb(0,"option",20),c.jc(1),c.Kb()),2&t){const t=n.$implicit;c.ac("value",t.id),c.yb(1),c.kc(t.name)}}function _(t,n){if(1&t){const t=c.Mb();c.Lb(0,"a",21),c.Sb("click",(function(){return c.ec(t),c.Ub().addPackage()})),c.jc(1,"Add Package"),c.Kb()}}function y(t,n){if(1&t){const t=c.Mb();c.Lb(0,"a",21),c.Sb("click",(function(){return c.ec(t),c.Ub().updatePackage()})),c.jc(1,"Update Package"),c.Kb()}}let x=(()=>{class t{constructor(t,n,e,o){this.router=t,this.fireStore=n,this.storage=e,this.fb=o,this.packageCollection="packages",this.categories=[],this.data="",this.selectedCategory={},this.preview="assets/img/img-upload-icon.png",this.loading="assets/img/loading.gif",this.percent=0,this.imageUploaded=!1,this.router.getCurrentNavigation().extras.state&&(this.data=this.router.getCurrentNavigation().extras.state.data)}ngOnInit(){this.formInit(),this.getCategories(),this.data&&(this.preview=this.data.image,this.programForm.patchValue({name:this.data.name,price:this.data.price,category:this.data.category[0].id}))}formInit(){this.programForm=this.fb.group({name:["",a.n.required],price:["",a.n.required],category:["",a.n.required]})}addPackage(){this.fireStore.collection(this.packageCollection).add({image:this.preview,name:this.programForm.value.name,price:this.programForm.value.price,category:this.selectedCategory}).then(t=>{this.router.navigateByUrl("/admin/all-packages"),this.programForm.reset()}).catch(t=>{console.log(t)})}onCategorySelect(t){let n=t.target.value,e=this.categories.filter(t=>t.id==n);this.selectedCategory=e}uploadFile(t){this.imageUploaded=!this.imageUploaded;const n=t.target.files[0],e=n.name,o=this.storage.ref(e),a=this.storage.upload(e,n);this.uploadPercent=a.percentageChanges(),this.uploadPercent.subscribe(t=>this.percent=t),a.snapshotChanges().pipe(Object(f.a)(()=>{this.downloadURL=o.getDownloadURL(),this.downloadURL.subscribe(t=>{this.preview=t,this.imageUploaded=!this.imageUploaded})})).subscribe()}getCategories(){this.fireStore.collection("categories").get().subscribe(t=>{t.docs.forEach(t=>{let n={id:t.id,image:t.data().image,name:t.data().name};this.categories.push(n)})})}updatePackage(){console.log(this.programForm.value),this.fireStore.collection(this.packageCollection).doc(this.data.id).update({image:this.preview,name:this.programForm.value.name,price:this.programForm.value.price,category:this.selectedCategory}).then(t=>{alert("Category Updated"),this.router.navigateByUrl("/admin/all-packages")}).catch(t=>{console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(i.b),c.Ib(r.a),c.Ib(m.a),c.Ib(a.b))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-add-package"]],decls:32,vars:8,consts:[[1,"add-package-screen"],[1,"container"],[1,"heading","pt-4"],[4,"ngIf"],[1,"row","justify-content-center","my-4"],[1,"col-6"],[1,"add-img"],["type","file","accept","image/*",1,"d-none",3,"change"],["file",""],[3,"click"],[3,"src",4,"ngIf"],[3,"formGroup"],[1,"form-group"],["type","text","formControlName","name","placeholder","Package Name",1,"form-control"],["type","text","formControlName","price","placeholder","Package Price",1,"form-control"],["formControlName","category",1,"custom-select","form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"add-package-btn"],["class","rounded-btn w-100 mt-4",3,"click",4,"ngIf"],[3,"src"],[3,"value"],[1,"rounded-btn","w-100","mt-4",3,"click"]],template:function(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.ic(3,h,2,0,"h1",3),c.ic(4,C,2,0,"h1",3),c.Kb(),c.Lb(5,"div",4),c.Lb(6,"div",5),c.Lb(7,"div",6),c.Lb(8,"input",7,8),c.Sb("change",(function(t){return n.uploadFile(t)})),c.Kb(),c.Lb(10,"a",9),c.Sb("click",(function(){return c.ec(t),c.dc(9).click()})),c.ic(11,M,1,1,"img",10),c.ic(12,P,1,1,"img",10),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Lb(13,"form",11),c.Lb(14,"div",12),c.Lb(15,"label"),c.jc(16,"Package Name"),c.Kb(),c.Jb(17,"input",13),c.Kb(),c.Lb(18,"div",12),c.Lb(19,"label"),c.jc(20,"Package Price"),c.Kb(),c.Jb(21,"input",14),c.Kb(),c.Lb(22,"div",12),c.Lb(23,"label"),c.jc(24,"Categories"),c.Kb(),c.Lb(25,"select",15),c.Sb("change",(function(t){return n.onCategorySelect(t)})),c.Lb(26,"option"),c.jc(27,"Select Category"),c.Kb(),c.ic(28,O,2,2,"option",16),c.Kb(),c.Kb(),c.Kb(),c.Lb(29,"div",17),c.ic(30,_,2,0,"a",18),c.ic(31,y,2,0,"a",18),c.Kb(),c.Kb(),c.Kb()}2&t&&(c.yb(3),c.Zb("ngIf",!n.data),c.yb(1),c.Zb("ngIf",n.data),c.yb(7),c.Zb("ngIf",!n.imageUploaded),c.yb(1),c.Zb("ngIf",n.imageUploaded),c.yb(1),c.Zb("formGroup",n.programForm),c.yb(15),c.Zb("ngForOf",n.categories),c.yb(2),c.Zb("ngIf",!n.data),c.yb(1),c.Zb("ngIf",n.data))},directives:[o.l,a.p,a.h,a.d,a.a,a.g,a.c,a.m,a.j,a.o,o.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.add-package-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}.add-package-screen[_ngcontent-%COMP%]   .add-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px;height:180px;object-fit:cover;object-position:center;box-shadow:0 0 10px #e7e7e7;border-radius:25px}']}),t})();const k=function(t){return{data:t}};function v(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div"),c.Lb(1,"div",7),c.Lb(2,"div",8),c.Lb(3,"div",9),c.Jb(4,"img",10),c.Kb(),c.Lb(5,"div",11),c.Lb(6,"div",12),c.Lb(7,"h5",13),c.jc(8),c.Kb(),c.Lb(9,"div",8),c.Lb(10,"div",14),c.Lb(11,"a",15),c.Sb("click",(function(){return c.ec(t),c.Ub(2).backEnabled()})),c.Jb(12,"i",16),c.Kb(),c.Lb(13,"a",17),c.Sb("click",(function(){c.ec(t);const e=n.$implicit;return c.Ub(2).deleteCategory(e.id)})),c.Jb(14,"i",18),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=n.$implicit;c.yb(4),c.ac("src",t.image,c.fc),c.yb(4),c.kc(t.name),c.yb(3),c.Zb("state",c.bc(3,k,t))}}function w(t,n){if(1&t&&(c.Lb(0,"div",5),c.ic(1,v,15,5,"div",6),c.Kb()),2&t){const t=c.Ub();c.yb(1),c.Zb("ngForOf",t.data)}}function L(t,n){1&t&&(c.Lb(0,"div",19),c.Jb(1,"img",20),c.Kb())}function K(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div",19),c.Jb(1,"img",21),c.Lb(2,"a",22),c.Sb("click",(function(){return c.ec(t),c.Ub().getCategories()})),c.jc(3,"Try Again"),c.Kb(),c.Kb()}}let I=(()=>{class t{constructor(t,n){this.fireStore=t,this.backService=n,this.categoryCollection="categories",this.data=[],this.somethingWrong=!1}ngOnInit(){this.getCategories(),setTimeout(t=>{this.somethingWrong=!0},5e3)}getCategories(){this.fireStore.collection(this.categoryCollection).get().subscribe(t=>{t.docs.forEach(t=>{let n={id:t.id,image:t.data().image,name:t.data().name};this.data.push(n)})})}deleteCategory(t){confirm("Delete?")&&(this.fireStore.collection(this.categoryCollection).doc(t).delete(),this.data=[],this.getCategories())}backEnabled(){this.backService.toggleBackState()}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(r.a),c.Ib(g.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-all-categories"]],decls:8,vars:3,consts:[[1,"all-categories-screen"],[1,"container"],[1,"heading","pt-4"],["class","categories-cards pb-5",4,"ngIf"],["class","text-center pt-5",4,"ngIf"],[1,"categories-cards","pb-5"],[4,"ngFor","ngForOf"],[1,"card","mt-3"],[1,"row"],[1,"col-5"],[1,"card-img-top",3,"src"],[1,"col-7","pl-0"],[1,"content","py-2"],[1,"package","pb-3"],[1,"col-12","icons"],["routerLink","/admin/add-category",3,"state","click"],[1,"px-4","fas","fa-pencil-alt"],[3,"click"],[1,"fas","fa-trash-alt"],[1,"text-center","pt-5"],["src","assets/img/content-loading.gif","alt","Loading ...",1,"content-loading"],["src","assets/img/no-data.png","alt","No Data",1,"no-data"],[1,"rounded-btn","w-100","mt-4",3,"click"]],template:function(t,n){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"h1"),c.jc(4,"All Categories"),c.Kb(),c.Kb(),c.ic(5,w,2,1,"div",3),c.ic(6,L,2,0,"div",4),c.ic(7,K,4,0,"div",4),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.Zb("ngIf",n.data.length>0),c.yb(1),c.Zb("ngIf",0==n.data.length&&!n.somethingWrong),c.yb(1),c.Zb("ngIf",0==n.data.length&&n.somethingWrong))},directives:[o.l,o.k,i.d],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.all-categories-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}.icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#485563}.card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.card-img-top[_ngcontent-%COMP%]{width:100%;height:90px;object-fit:contain;object-position:center;border-radius:3px 0 0 3px}']}),t})();function U(t,n){1&t&&(c.Lb(0,"h1"),c.jc(1,"Add Category"),c.Kb())}function S(t,n){1&t&&(c.Lb(0,"h1"),c.jc(1,"Update Category"),c.Kb())}function j(t,n){if(1&t&&c.Jb(0,"img",16),2&t){const t=c.Ub();c.ac("src",t.preview,c.fc)}}function F(t,n){if(1&t&&c.Jb(0,"img",16),2&t){const t=c.Ub();c.ac("src",t.loading,c.fc)}}function Z(t,n){if(1&t){const t=c.Mb();c.Lb(0,"a",17),c.Sb("click",(function(){return c.ec(t),c.Ub().addCategory()})),c.jc(1,"Add Category"),c.Kb()}}function J(t,n){if(1&t){const t=c.Mb();c.Lb(0,"a",17),c.Sb("click",(function(){return c.ec(t),c.Ub().updateCategory()})),c.jc(1,"Update Category"),c.Kb()}}let z=(()=>{class t{constructor(t,n,e,o){this.router=t,this.fireStore=n,this.storage=e,this.fb=o,this.categoryCollection="categories",this.data="",this.preview="assets/img/img-upload-icon.png",this.loading="assets/img/loading.gif",this.percent=0,this.imageUploaded=!1,this.router.getCurrentNavigation().extras.state&&(this.data=this.router.getCurrentNavigation().extras.state.data)}ngOnInit(){this.formInit(),this.data&&(this.preview=this.data.image,this.programForm.patchValue({name:this.data.name}))}formInit(){this.programForm=this.fb.group({name:["",a.n.required]})}addCategory(){this.fireStore.collection(this.categoryCollection).add({image:this.preview,name:this.programForm.value.name}).then(t=>{this.router.navigateByUrl("/admin/all-categories"),this.programForm.reset()}).catch(t=>{console.log(t)})}uploadFile(t){this.imageUploaded=!this.imageUploaded;const n=t.target.files[0],e=n.name,o=this.storage.ref(e),a=this.storage.upload(e,n);this.uploadPercent=a.percentageChanges(),this.uploadPercent.subscribe(t=>this.percent=t),a.snapshotChanges().pipe(Object(f.a)(()=>{this.downloadURL=o.getDownloadURL(),this.downloadURL.subscribe(t=>{this.preview=t,this.imageUploaded=!this.imageUploaded})})).subscribe()}updateCategory(){this.fireStore.collection(this.categoryCollection).doc(this.data.id).update({image:this.preview,name:this.programForm.value.name}).then(t=>{alert("Category Updated"),this.router.navigateByUrl("/admin/all-categories")}).catch(t=>{console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(i.b),c.Ib(r.a),c.Ib(m.a),c.Ib(a.b))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-add-category"]],decls:20,vars:7,consts:[[1,"add-category-screen"],[1,"container"],[1,"heading","pt-4"],[4,"ngIf"],[1,"row","justify-content-center","my-4"],[1,"col-6"],[1,"add-img"],["type","file","accept","image/*",1,"d-none",3,"change"],["file",""],[3,"click"],[3,"src",4,"ngIf"],[3,"formGroup"],[1,"category-input"],["type","text","formControlName","name","placeholder","Category Name",1,"form-control"],[1,"add-category-btn","mt-4"],["class","rounded-btn w-100 mt-2",3,"click",4,"ngIf"],[3,"src"],[1,"rounded-btn","w-100","mt-2",3,"click"]],template:function(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.ic(3,U,2,0,"h1",3),c.ic(4,S,2,0,"h1",3),c.Kb(),c.Lb(5,"div",4),c.Lb(6,"div",5),c.Lb(7,"div",6),c.Lb(8,"form"),c.Lb(9,"input",7,8),c.Sb("change",(function(t){return n.uploadFile(t)})),c.Kb(),c.Lb(11,"a",9),c.Sb("click",(function(){return c.ec(t),c.dc(10).click()})),c.ic(12,j,1,1,"img",10),c.ic(13,F,1,1,"img",10),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Lb(14,"form",11),c.Lb(15,"div",12),c.Jb(16,"input",13),c.Kb(),c.Kb(),c.Lb(17,"div",14),c.ic(18,Z,2,0,"a",15),c.ic(19,J,2,0,"a",15),c.Kb(),c.Kb(),c.Kb()}2&t&&(c.yb(3),c.Zb("ngIf",!n.data),c.yb(1),c.Zb("ngIf",n.data),c.yb(8),c.Zb("ngIf",!n.imageUploaded),c.yb(1),c.Zb("ngIf",n.imageUploaded),c.yb(1),c.Zb("formGroup",n.programForm),c.yb(4),c.Zb("ngIf",!n.data),c.yb(1),c.Zb("ngIf",n.data))},directives:[o.l,a.p,a.h,a.i,a.d,a.a,a.g,a.c],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.add-category-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}.add-category-screen[_ngcontent-%COMP%]   .add-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:180px;height:180px;object-fit:cover;object-position:center;box-shadow:0 0 10px #e7e7e7;border-radius:25px}']}),t})();var N=e("UbJi");function D(t,n){1&t&&(c.Lb(0,"h1"),c.jc(1,"Add Detailer"),c.Kb())}function A(t,n){1&t&&(c.Lb(0,"h1"),c.jc(1,"Update Detailer"),c.Kb())}function E(t,n){if(1&t&&(c.Lb(0,"div",11),c.Jb(1,"img",12),c.Kb()),2&t){const t=c.Ub();c.yb(1),c.ac("src",t.data.image,c.fc)}}function W(t,n){if(1&t){const t=c.Mb();c.Lb(0,"a",13),c.Sb("click",(function(){return c.ec(t),c.Ub().addDetailer()})),c.jc(1,"Add Detailer"),c.Kb()}}function B(t,n){if(1&t){const t=c.Mb();c.Lb(0,"a",13),c.Sb("click",(function(){return c.ec(t),c.Ub().updateDetailer()})),c.jc(1,"Update Detailer"),c.Kb()}}let G=(()=>{class t{constructor(t,n,e,o){this.fb=t,this.router=n,this.fireStore=e,this.auth=o,this.usersCollection="users",this.loading="assets/img/loading.gif",this.router.getCurrentNavigation().extras.state&&(this.data=this.router.getCurrentNavigation().extras.state.data)}ngOnInit(){this.formInit(),console.log(this.data),this.data&&this.programForm.patchValue({name:this.data.name,email:this.data.email,contact:this.data.contact,password:this.data.password})}formInit(){this.programForm=this.fb.group({name:["",a.n.required],email:["",a.n.required],contact:["",a.n.required]})}addDetailer(){this.auth.createUserWithEmailAndPassword(this.programForm.value.email,this.programForm.value.password).then(t=>{console.log("Success!",t),this.fireStore.collection(this.usersCollection).add({image:"https://i.ibb.co/2MH630J/user.png",name:this.programForm.value.name,email:this.programForm.value.email,contact:this.programForm.value.contact,user_type:"detailer"}).then(t=>{console.log(t),this.router.navigateByUrl("/admin/all-detailers"),this.programForm.reset()}).catch(t=>{console.log(t)})}).catch(t=>{console.log("Something went wrong: ",t.message)})}updateDetailer(){this.fireStore.collection(this.usersCollection).doc(this.data.id).update({name:this.programForm.value.name,email:this.programForm.value.email,contact:this.programForm.value.contact}).then(t=>{alert("Detailer Updated"),this.router.navigateByUrl("/admin/all-detailers")}).catch(t=>{console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(a.b),c.Ib(i.b),c.Ib(r.a),c.Ib(N.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-add-detailer"]],decls:21,vars:6,consts:[[1,"add-detailer-screen"],[1,"container"],[1,"heading","pt-4"],[4,"ngIf"],["class","image",4,"ngIf"],[1,"pt-4",3,"formGroup"],[1,"form-group"],["type","text","placeholder","Name","formControlName","name",1,"form-control"],["type","text","placeholder","Email","formControlName","email",1,"form-control"],["type","number","placeholder","Contact","formControlName","contact",1,"form-control"],["class","rounded-btn w-100 mt-4",3,"click",4,"ngIf"],[1,"image"],[1,"w-50","d-block","m-auto","pt-4",3,"src"],[1,"rounded-btn","w-100","mt-4",3,"click"]],template:function(t,n){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.ic(3,D,2,0,"h1",3),c.ic(4,A,2,0,"h1",3),c.Kb(),c.ic(5,E,2,1,"div",4),c.Lb(6,"form",5),c.Lb(7,"div",6),c.Lb(8,"label"),c.jc(9,"Name"),c.Kb(),c.Jb(10,"input",7),c.Kb(),c.Lb(11,"div",6),c.Lb(12,"label"),c.jc(13,"Email"),c.Kb(),c.Jb(14,"input",8),c.Kb(),c.Lb(15,"div",6),c.Lb(16,"label"),c.jc(17,"Contact"),c.Kb(),c.Jb(18,"input",9),c.Kb(),c.ic(19,W,2,0,"a",10),c.ic(20,B,2,0,"a",10),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(3),c.Zb("ngIf",!n.data),c.yb(1),c.Zb("ngIf",n.data),c.yb(1),c.Zb("ngIf",n.data),c.yb(1),c.Zb("formGroup",n.programForm),c.yb(13),c.Zb("ngIf",!n.data),c.yb(1),c.Zb("ngIf",n.data))},directives:[o.l,a.p,a.h,a.d,a.a,a.g,a.c,a.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.add-detailer-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}']}),t})();var R=e("mrSG");const q=function(t){return{data:t}};function T(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div",6),c.Sb("click",(function(){return c.ec(t),c.Ub().backEnabled()})),c.Lb(1,"div",7),c.Lb(2,"div",8),c.Lb(3,"div",9),c.Jb(4,"img",10),c.Kb(),c.Kb(),c.Lb(5,"div",11),c.Lb(6,"div",12),c.Lb(7,"p",13),c.jc(8),c.Kb(),c.Lb(9,"p"),c.jc(10),c.Kb(),c.Kb(),c.Kb(),c.Lb(11,"div",14),c.Lb(12,"div",15),c.Jb(13,"i",16),c.Kb(),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=n.$implicit;c.Zb("state",c.bc(4,q,t)),c.yb(4),c.ac("src",t.image,c.fc),c.yb(4),c.kc(t.name),c.yb(2),c.lc("+92",t.contact,"")}}function $(t,n){1&t&&(c.Lb(0,"div",17),c.Jb(1,"img",18),c.Kb())}function V(t,n){if(1&t){const t=c.Mb();c.Lb(0,"div",17),c.Jb(1,"img",19),c.Lb(2,"a",20),c.Sb("click",(function(){return c.ec(t),c.Ub().getUsers()})),c.jc(3,"Try Again"),c.Kb(),c.Kb()}}const X=[{path:"",component:x},{path:"all-packages",component:u},{path:"add-package",component:x},{path:"all-categories",component:I},{path:"add-category",component:z},{path:"all-detailers",component:(()=>{class t{constructor(t,n){this.fireStore=t,this.backService=n,this.data=[],this.usersCollection="users",this.somethingWrong=!1}ngOnInit(){this.getUsers(),setTimeout(t=>{this.somethingWrong=!0},5e3)}getUsers(){return Object(R.a)(this,void 0,void 0,(function*(){yield this.fireStore.collection(this.usersCollection,t=>t.where("user_type","==","detailer")).get().subscribe(t=>{t.docs.forEach(t=>{let n={id:t.id,name:t.data().name,image:t.data().image,contact:t.data().contact,email:t.data().email,user_type:t.data().user_type};this.data.push(n)})})}))}backEnabled(){this.backService.toggleBackState()}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(r.a),c.Ib(g.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-all-detailers"]],decls:9,vars:3,consts:[[1,"all-detailers-screen","py-4"],[1,"container"],[1,"heading"],[1,"detailers-list"],["class","card p-3 mt-3","routerLink","/admin/add-detailer",3,"state","click",4,"ngFor","ngForOf"],["class","text-center pt-5",4,"ngIf"],["routerLink","/admin/add-detailer",1,"card","p-3","mt-3",3,"state","click"],[1,"row"],[1,"col-3","pr-0"],[1,"detailer-img"],[3,"src"],[1,"col-7","pl-0"],[1,"detailer-contact"],[1,"text-capitalize"],[1,"col-2","text-right"],[1,"arrow-icon"],[1,"fas","fa-angle-right"],[1,"text-center","pt-5"],["src","assets/img/content-loading.gif","alt","Loading ...",1,"content-loading"],["src","assets/img/no-data.png","alt","No Data",1,"no-data"],[1,"rounded-btn","w-100","mt-4",3,"click"]],template:function(t,n){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"h1"),c.jc(4,"All Detailers"),c.Kb(),c.Kb(),c.Lb(5,"div",3),c.ic(6,T,14,6,"div",4),c.Kb(),c.ic(7,$,2,0,"div",5),c.ic(8,V,4,0,"div",5),c.Kb(),c.Kb()),2&t&&(c.yb(6),c.Zb("ngForOf",n.data),c.yb(1),c.Zb("ngIf",0==n.data.length&&!n.somethingWrong),c.yb(1),c.Zb("ngIf",0==n.data.length&&n.somethingWrong))},directives:[o.k,o.l,i.c],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.rounded-btn[_ngcontent-%COMP%]{border:1px solid #29323c;padding:8px;color:#fff;border-radius:50px;display:block;margin:auto;text-align:center}.bg-gradient[_ngcontent-%COMP%], .rounded-btn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#29323c,#485563)}.bg-gradient-1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc466b,#3f5efb)}.bg-gradient-2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#fc4a1a,#f7b733)}.bg-gradient-3[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ff512f,#dd2476)}.bg-gradient-4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#43cea2,#185a9d)}.bg-gradient-5[_ngcontent-%COMP%]{background:linear-gradient(90deg,#00c6ff,#0072ff)}body[_ngcontent-%COMP%]{margin:0!important;overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]{padding:20px 0 0}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.all-detailers-screen[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;color:#485563;margin-bottom:0}.detailers-list[_ngcontent-%COMP%]   .detailer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:55px;height:55px;object-fit:cover;object-position:center;border:1px solid #fff;border-radius:50%}.detailers-list[_ngcontent-%COMP%]   .detailer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#485563}.detailers-list[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;padding-top:15px;color:#485563}']}),t})()},{path:"add-detailer",component:G}];let H=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[i.e.forChild(X)],i.e]}),t})(),Y=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[o.c,H,a.e,a.l]]}),t})()}}]);