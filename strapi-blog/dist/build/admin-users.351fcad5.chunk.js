(self.webpackChunkstrapi_blog=self.webpackChunkstrapi_blog||[]).push([[5199],{78086:function(K,E,t){(function(e,n){K.exports=n(t(67294))})(this,function(e){return function(n){var u={};function i(a){if(u[a])return u[a].exports;var l=u[a]={i:a,l:!1,exports:{}};return n[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=n,i.c=u,i.d=function(a,l,c){i.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:c})},i.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,l){if(1&l&&(a=i(a)),8&l||4&l&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&l&&typeof a!="string")for(var O in a)i.d(c,O,function(y){return a[y]}.bind(null,O));return c},i.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return i.d(l,"a",l),l},i.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},i.p="",i(i.s=68)}({0:function(n,u){n.exports=e},68:function(n,u,i){"use strict";i.r(u);var a=i(0);function l(){return(l=Object.assign||function(c){for(var O=1;O<arguments.length;O++){var y=arguments[O];for(var M in y)Object.prototype.hasOwnProperty.call(y,M)&&(c[M]=y[M])}return c}).apply(this,arguments)}u.default=function(c){return a.createElement("svg",l({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c),a.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),a.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),a.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}})})},57338:(K,E,t)=>{"use strict";t.d(E,{Z:()=>n});const n={firstname:"",lastname:"",email:"",roles:[]}},55867:(K,E,t)=>{"use strict";t.d(E,{Z:()=>n});const n=[]},46903:(K,E,t)=>{"use strict";t.r(E),t.d(E,{default:()=>it});var e=t(67294),n=t(68547),u=t(87751),i=t(78862),a=t(19408),l=t(62031),c=t(84686),O=t(78086),y=t.n(O),M=t(49656),D=t(97132),f=t(23724),T=t(45697),d=t.n(T),re=t(59522),R=t(5493),k=t(30741),Z=t(67826),j=t(49425),_=t(41798),w=t(19352),G=t.n(w),oe=t(18568),ae=t.n(oe),q=t(8610),$=Object.defineProperty,x=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,ce=(s,r,o)=>r in s?$(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o,ne=(s,r)=>{for(var o in r||(r={}))B.call(r,o)&&ce(s,o,r[o]);if(x)for(var o of x(r))X.call(r,o)&&ce(s,o,r[o]);return s},H=(s,r)=>{var o={};for(var m in s)B.call(s,m)&&r.indexOf(m)<0&&(o[m]=s[m]);if(s!=null&&x)for(var m of x(s))r.indexOf(m)<0&&X.call(s,m)&&(o[m]=s[m]);return o};const ve=({canDelete:s,headers:r,entriesToDelete:o,onClickDelete:m,onSelectRow:P,withMainAction:A,withBulkActions:C,rows:h})=>{const{push:p,location:{pathname:L}}=(0,M.useHistory)(),{formatMessage:I}=(0,D.useIntl)();return e.createElement(_.Tbody,null,h.map(g=>{const V=o.findIndex(J=>J===g.id)!==-1;return e.createElement(_.Tr,ne({key:g.id},(0,n.onRowClick)({fn:()=>p(`${L}/${g.id}`),condition:C})),A&&e.createElement(_.Td,ne({},n.stopPropagation),e.createElement(re.BaseCheckbox,{"aria-label":I({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,q.Pp)(g.firstname,g.lastname)}),checked:V,onChange:()=>{P({name:g.id,value:!V})}})),r.map(J=>{var N=J,{key:U,cellFormatter:se,name:ee}=N,W=H(N,["key","cellFormatter","name"]);return e.createElement(_.Td,{key:U},typeof se=="function"?se(g,ne({key:U,name:ee,formatMessage:I},W)):e.createElement(j.Typography,{textColor:"neutral800"},g[ee]||"-"))}),C&&e.createElement(_.Td,null,e.createElement(Z.Flex,{justifyContent:"end"},e.createElement(k.IconButton,{onClick:()=>p(`${L}/${g.id}`),label:I({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,q.Pp)(g.firstname,g.lastname)}),noBorder:!0,icon:e.createElement(G(),null)}),s&&e.createElement(R.Box,ne({paddingLeft:1},n.stopPropagation),e.createElement(k.IconButton,{onClick:()=>m(g.id),label:I({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,q.Pp)(g.firstname,g.lastname)}),noBorder:!0,icon:e.createElement(ae(),null)})))))}))};ve.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},ve.propTypes={canDelete:d().bool,entriesToDelete:d().array,headers:d().array.isRequired,onClickDelete:d().func,onSelectRow:d().func,rows:d().array,withBulkActions:d().bool,withMainAction:d().bool};const Fe=ve;var Ke=t(23980),xe=t.n(Ke);const De=({displayedFilters:s})=>{const[r,o]=(0,e.useState)(!1),{formatMessage:m}=(0,D.useIntl)(),P=(0,e.useRef)(),A=()=>{o(C=>!C)};return e.createElement(e.Fragment,null,e.createElement(R.Box,{paddingTop:1,paddingBottom:1},e.createElement(a.Button,{variant:"tertiary",ref:P,startIcon:e.createElement(xe(),null),onClick:A,size:"S"},m({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(n.FilterPopoverURLQuery,{displayedFilters:s,isVisible:r,onToggle:A,source:P})),e.createElement(n.FilterListURLQuery,{filtersSchema:s}))};De.propTypes={displayedFilters:d().arrayOf(d().shape({name:d().string.isRequired,metadatas:d().shape({label:d().string}),fieldSchema:d().shape({type:d().string})})).isRequired};const Ze=De;var de=t(87462),Te=t(15861),ye=t(70885),je=t(64687),me=t.n(je),pe=t(75146),le=t(34626),Ce=t(68115),Le=t(9008),we=t(80831),Me=t(23998),$e=t(81288);const Ne=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var ie=t(53209);const ze=ie.Ry().shape({firstname:ie.Z_().required(n.translatedErrors.required),lastname:ie.Z_(),email:ie.Z_().email(n.translatedErrors.email).required(n.translatedErrors.required),roles:ie.IX().min(1,n.translatedErrors.required).required(n.translatedErrors.required)}),Qe={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var Ge=function(){return window&&window.strapi&&window.strapi.isEE?t(97083).Z:t(57338).Z}(),Xe=function(){return window&&window.strapi&&window.strapi.isEE?t(810).Z:t(55867).Z}(),He=function(){return window&&window.strapi&&window.strapi.isEE?t(12201).Z:t(31605).Z}(),Se=function(r){var o=r.queryName,m=r.onToggle,P=(0,e.useState)("create"),A=(0,ye.Z)(P,2),C=A[0],h=A[1],p=(0,e.useState)(!1),L=(0,ye.Z)(p,2),I=L[0],g=L[1],V=(0,e.useState)(null),J=(0,ye.Z)(V,2),N=J[0],U=J[1],se=(0,f.useQueryClient)(),ee=(0,D.useIntl)(),W=ee.formatMessage,fe=(0,n.useNotification)(),ge=(0,n.useOverlayBlocker)(),S=ge.lockApp,ue=ge.unlockApp,Ee=(0,f.useMutation)(function(F){return Me.be.post("/admin/users",F)},{onSuccess:function(z){return(0,Te.Z)(me().mark(function Y(){var Q;return me().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return Q=z.data,U(Q.data.registrationToken),v.next=4,se.invalidateQueries(o);case 4:ct(),g(!1);case 6:case"end":return v.stop()}},Y)}))()},onError:function(z){throw g(!1),fe({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),z},onSettled:function(){ue()}}),Ie=W({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ut=function(){var F=(0,Te.Z)(me().mark(function z(Y,Q){var te,v;return me().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return te=Q.setErrors,S(),g(!0),b.prev=3,b.next=6,Ee.mutateAsync(Y);case 6:b.next=12;break;case 8:b.prev=8,b.t0=b.catch(3),ue(),(b.t0===null||b.t0===void 0||(v=b.t0.response)===null||v===void 0?void 0:v.data.message)==="Email already taken"&&te({email:b.t0.response.data.message});case 12:case"end":return b.stop()}},z,null,[[3,8]])}));return function(Y,Q){return F.apply(this,arguments)}}(),ct=function(){We?h(We):m()},he=Qe[C],Ue=he.buttonSubmitLabel,Oe=he.isDisabled,We=he.next,dt=C==="create"?e.createElement(a.Button,{type:"submit",loading:I},W(Ue)):e.createElement(a.Button,{type:"button",loading:I,onClick:m},W(Ue));return e.createElement(pe.ModalLayout,{onClose:m,labelledBy:"title"},e.createElement(pe.ModalHeader,null,e.createElement(Ce.Breadcrumbs,{label:Ie},e.createElement(Ce.Crumb,null,Ie))),e.createElement(we.Formik,{initialValues:Ge,onSubmit:ut,validationSchema:ze,validateOnChange:!1},function(F){var z=F.errors,Y=F.handleChange,Q=F.values;return e.createElement(n.Form,null,e.createElement(pe.ModalBody,null,e.createElement(Le.Stack,{spacing:6},C!=="create"&&e.createElement(He,{registrationToken:N}),e.createElement(R.Box,null,e.createElement(j.Typography,{variant:"beta",as:"h2"},W({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),e.createElement(R.Box,{paddingTop:4},e.createElement(Le.Stack,{spacing:1},e.createElement(le.Grid,{gap:5},Ne.map(function(te){return te.map(function(v){return e.createElement(le.GridItem,(0,de.Z)({key:v.name},v.size),e.createElement(n.GenericInput,(0,de.Z)({},v,{disabled:Oe,error:z[v.name],onChange:Y,value:Q[v.name]})))})}))))),e.createElement(R.Box,null,e.createElement(j.Typography,{variant:"beta",as:"h2"},W({id:"global.roles",defaultMessage:"User's role"})),e.createElement(R.Box,{paddingTop:4},e.createElement(le.Grid,{gap:5},e.createElement(le.GridItem,{col:6,xs:12},e.createElement($e.Z,{disabled:Oe,error:z.roles,onChange:Y,value:Q.roles})),Xe.map(function(te){return te.map(function(v){return e.createElement(le.GridItem,(0,de.Z)({key:v.name},v.size),e.createElement(n.GenericInput,(0,de.Z)({},v,{disabled:Oe,onChange:Y,value:Q[v.name]})))})})))))),e.createElement(pe.ModalFooter,{startActions:e.createElement(a.Button,{variant:"tertiary",onClick:m,type:"button"},W({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:dt}))}))};Se.propTypes={onToggle:d().func.isRequired,queryName:d().array.isRequired};const Ve=Se,Pe=({pagination:s})=>e.createElement(R.Box,{paddingTop:4},e.createElement(Z.Flex,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.PageSizeURLQuery,null),e.createElement(n.PaginationURLQuery,{pagination:s})));Pe.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Pe.propTypes={pagination:d().shape({page:d().number,pageCount:d().number,pageSize:d().number,total:d().number})};const Je=Pe;var _e=(s,r,o)=>new Promise((m,P)=>{var A=p=>{try{h(o.next(p))}catch(L){P(L)}},C=p=>{try{h(o.throw(p))}catch(L){P(L)}},h=p=>p.done?m(p.value):Promise.resolve(p.value).then(A,C);h((o=o.apply(s,r)).next())});const Ye=(s,r)=>_e(void 0,null,function*(){const{data:{data:o}}=yield Me.be.get(`/admin/users${s}`);return r(),o}),ke=s=>_e(void 0,null,function*(){yield Me.be.post("/admin/users/batch-delete",{ids:s})}),qe=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],et=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:s},{formatMessage:r}){return e.createElement(j.Typography,{textColor:"neutral800"},s.map(o=>r({id:`Settings.permissions.users.${o.code}`,defaultMessage:o.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:s},{formatMessage:r}){return e.createElement(Z.Flex,null,e.createElement(n.Status,{isActive:s,variant:s?"success":"danger"}),e.createElement(j.Typography,{textColor:"neutral800"},r({id:s?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:s?"Active":"Inactive"})))}}];var tt=Object.defineProperty,at=Object.defineProperties,nt=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,be=(s,r,o)=>r in s?tt(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o,Be=(s,r)=>{for(var o in r||(r={}))st.call(r,o)&&be(s,o,r[o]);if(Ae)for(var o of Ae(r))rt.call(r,o)&&be(s,o,r[o]);return s},Re=(s,r)=>at(s,nt(r)),ot=(s,r,o)=>new Promise((m,P)=>{var A=p=>{try{h(o.next(p))}catch(L){P(L)}},C=p=>{try{h(o.throw(p))}catch(L){P(L)}},h=p=>p.done?m(p.value):Promise.resolve(p.value).then(A,C);h((o=o.apply(s,r)).next())});const lt=()=>{const[s,r]=(0,e.useState)(!1),{allowedActions:{canCreate:o,canDelete:m,canRead:P}}=(0,n.useRBAC)(u.Z.settings.users),A=(0,f.useQueryClient)(),C=(0,n.useNotification)(),{formatMessage:h}=(0,D.useIntl)(),{search:p}=(0,M.useLocation)();(0,n.useFocusWhenNavigate)();const{notifyStatus:L}=(0,c.useNotifyAT)(),I=["users",p],g=et.map(S=>Re(Be({},S),{metadatas:Re(Be({},S.metadatas),{label:h(S.metadatas.label)})})),V=h({id:"global.users",defaultMessage:"Users"}),J=()=>{L(h({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:V}))},{status:N,data:U,isFetching:se}=(0,f.useQuery)(I,()=>Ye(p,J),{enabled:P,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError(){C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ee=()=>{r(S=>!S)},W=(0,f.useMutation)(S=>ke(S),{onSuccess(){return ot(this,null,function*(){yield A.invalidateQueries(I)})},onError(S){var ue,Ee;(Ee=(ue=S==null?void 0:S.response)==null?void 0:ue.data)!=null&&Ee.data?C({type:"warning",message:S.response.data.data}):C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),fe=N!=="success"&&N!=="error"||N==="success"&&se,ge=o?e.createElement(a.Button,{"data-testid":"create-user-button",onClick:ee,startIcon:e.createElement(y(),null),size:"S"},h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return e.createElement(l.Main,{"aria-busy":fe},e.createElement(n.SettingsPageTitle,{name:"Users"}),e.createElement(i.HeaderLayout,{primaryAction:ge,title:V,subtitle:h({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),P&&e.createElement(i.ActionLayout,{startActions:e.createElement(e.Fragment,null,e.createElement(n.SearchURLQuery,{label:h({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:V})}),e.createElement(Ze,{displayedFilters:qe}))}),e.createElement(i.ContentLayout,{canRead:P},!P&&e.createElement(n.NoPermissions,null),N==="error"&&e.createElement("div",null,"TODO: An error occurred"),P&&e.createElement(e.Fragment,null,e.createElement(n.DynamicTable,{contentType:"Users",isLoading:fe,onConfirmDeleteAll:W.mutateAsync,onConfirmDelete:S=>W.mutateAsync([S]),headers:g,rows:U==null?void 0:U.results,withBulkActions:!0,withMainAction:m},e.createElement(Fe,{canDelete:m,headers:g,rows:(U==null?void 0:U.results)||[],withBulkActions:!0,withMainAction:m})),e.createElement(Je,{pagination:U==null?void 0:U.pagination}))),s&&e.createElement(Ve,{onToggle:ee,queryName:I}))},it=()=>e.createElement(n.CheckPagePermissions,{permissions:u.Z.settings.users.main},e.createElement(lt,null))},82464:(K,E,t)=>{"use strict";t.d(E,{Z:()=>re});var e=t(67294),n=t(45697),u=t.n(n),i=t(30741),a=t.n(i),l=t(68547),c=t.n(l),O=t(67483),y=t.n(O),M=t(74855),D=t.n(M),f=t(97132);const T=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},e.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},e.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),d=({children:R,target:k})=>{const Z=(0,l.useNotification)(),{formatMessage:j}=(0,f.useIntl)(),_=()=>{Z({type:"info",message:{id:"notification.link-copied"}})},w=j({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return e.createElement(l.ContentBox,{endAction:e.createElement(M.CopyToClipboard,{onCopy:_,text:k},e.createElement(i.IconButton,{label:w,noBorder:!0,icon:e.createElement(y(),null)})),title:k,titleEllipsis:!0,subtitle:R,icon:e.createElement(T,null),iconBackground:"neutral100"})};d.propTypes={children:u().oneOfType([u().element,u().string]).isRequired,target:u().string.isRequired};const re=d},31605:(K,E,t)=>{"use strict";t.d(E,{Z:()=>O});var e=t(67294),n=t(97132),u=t(45697),i=t.n(u),a=t(63871),l=t(82464);const c=({registrationToken:y})=>{const{formatMessage:M}=(0,n.useIntl)(),D=`${window.location.origin}${a.Z}auth/register?registrationToken=${y}`;return e.createElement(l.Z,{target:D},M({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};c.defaultProps={registrationToken:""},c.propTypes={registrationToken:i().string};const O=c},81288:(K,E,t)=>{"use strict";t.d(E,{Z:()=>j});var e=t(67294),n=t(45697),u=t.n(n),i=t(97132),a=t(43808),l=t.n(a),c=t(23724),O=t.n(c),y=t(78384),M=t(57572),D=t.n(M),f=t(23998),T=(_,w,G)=>new Promise((oe,ae)=>{var q=B=>{try{x(G.next(B))}catch(X){ae(X)}},$=B=>{try{x(G.throw(B))}catch(X){ae(X)}},x=B=>B.done?oe(B.value):Promise.resolve(B.value).then(q,$);x((G=G.apply(_,w)).next())});const d=y.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,re=y.default.div`
  animation: ${d} 2s infinite linear;
`,R=()=>e.createElement(re,null,e.createElement(D(),null)),k=()=>T(void 0,null,function*(){const{data:_}=yield f.be.get("/admin/roles");return _.data}),Z=({disabled:_,error:w,onChange:G,value:oe})=>{const{status:ae,data:q}=(0,c.useQuery)(["roles"],k,{staleTime:5e4}),{formatMessage:$}=(0,i.useIntl)(),x=w?$({id:w,defaultMessage:w}):"",B=$({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),X=$({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),ce=$({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ne=ae==="loading"?e.createElement(R,null):void 0;return e.createElement(a.Select,{id:"roles",disabled:_,error:x,hint:X,label:B,name:"roles",onChange:H=>{G({target:{name:"roles",value:H}})},placeholder:ce,multi:!0,startIcon:ne,value:oe,withTags:!0,required:!0},(q||[]).map(H=>e.createElement(a.Option,{key:H.id,value:H.id},$({id:`global.${H.code}`,defaultMessage:H.name}))))};Z.defaultProps={disabled:!1,error:void 0},Z.propTypes={disabled:u().bool,error:u().string,onChange:u().func.isRequired,value:u().array.isRequired};const j=Z},97083:(K,E,t)=>{"use strict";t.d(E,{Z:()=>M});var e=t(57338),n=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(D,f,T)=>f in D?n(D,f,{enumerable:!0,configurable:!0,writable:!0,value:T}):D[f]=T,c=(D,f)=>{for(var T in f||(f={}))i.call(f,T)&&l(D,T,f[T]);if(u)for(var T of u(f))a.call(f,T)&&l(D,T,f[T]);return D};const O=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},M=c(c({},e.Z),O)},810:(K,E,t)=>{"use strict";t.d(E,{Z:()=>n});const n=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(K,E,t)=>{"use strict";t.d(E,{Z:()=>O});var e=t(67294),n=t(97132),u=t(45697),i=t.n(u),a=t(63871),l=t(82464);const c=({registrationToken:y})=>{const{formatMessage:M}=(0,n.useIntl)();return y?e.createElement(l.Z,{target:`${window.location.origin}${a.Z}auth/register?registrationToken=${y}`},M({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):e.createElement(l.Z,{target:`${window.location.origin}${a.Z}auth/login`},M({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};c.defaultProps={registrationToken:""},c.propTypes={registrationToken:i().string};const O=c}}]);
