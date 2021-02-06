(this["webpackJsonpkyojin-editor"]=this["webpackJsonpkyojin-editor"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n,i=a(2),l=a(0),s=a.n(l),c=a(11),r=a.n(c),o=(a(95),a(15)),d=(a(96),a(74));!function(e){e.v1="v1"}(n||(n={}));var u=a(149),j=a(24),b=a.n(j),v=a(67),h=a.n(v),O=a(144),x=a(152),m=a(148),k=a(145),f=a(146),g=a(45),p=a(155),T=a(133),y=a(139),D=a(147),C=a(73),Y=a.n(C),E=a(56),w=a.n(E),S=a(75),M=a(153);function W(e){switch(e){case"audio":return"\u0410\u0443\u0434\u0438\u043e";case"text":return"\u0421\u0442\u0430\u0442\u044c\u044f / \u0418\u0441\u0442\u043e\u0440\u0438\u044f";case"quicktest":return"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0442\u0435\u0441\u0442";case"test":return"\u0422\u0435\u0441\u0442";case"image":return"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}}var z=function(e){var t=s.a.useState(null),a=Object(o.a)(t,2),n=a[0],l=a[1];return Object(i.jsxs)(m.a,{children:[Object(i.jsxs)(g.a,{variant:"h6",children:["\u0417\u0430\u0434\u0430\u043d\u0438\u044f",Object(i.jsx)(T.a,{edge:"end","aria-label":"task",onClick:function(e){l(e.currentTarget)},title:"\u041d\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:Object(i.jsx)(w.a,{})})]}),Object(i.jsx)(S.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){l(null)},children:["audio","text","quicktest","test","image"].map((function(e){return e})).map((function(t){return Object(i.jsx)(M.a,{onClick:(a=t,function(){e.onAddTask(a),l(null)}),children:W(t)},t);var a}))})]})},H=a(77),q=a(136),R=a(137),A=a(138),I=a(154);function F(e){switch(e.tasktype){case"audio":var t,a=e;return"".concat(W(e.tasktype)," ").concat(null!==(t=a.title)&&void 0!==t?t:a.id," (").concat(a.type,")");case"image":var n,i=e;return"".concat(W(e.tasktype)," ").concat(null!==(n=i.title)&&void 0!==n?n:i.id);case"quicktest":var l,s=e;return"".concat(W(e.tasktype)," ").concat(null!==(l=s.title)&&void 0!==l?l:s.id);case"test":var c,r=e;return"".concat(W(e.tasktype)," ").concat(null!==(c=r.title)&&void 0!==c?c:r.id);case"text":var o,d=e;return"".concat(W(e.tasktype)," ").concat(null!==(o=d.title)&&void 0!==o?o:d.id," (").concat(d.type,")")}}var N=function(e){var t=s.a.useState(null),a=Object(o.a)(t,2),n=a[0],l=a[1];return Object(i.jsxs)(q.a,{variant:"outlined",children:[Object(i.jsx)(R.a,{action:Object(i.jsx)(T.a,{"aria-label":"delete",onClick:function(e){l(e.currentTarget)},children:Object(i.jsx)(w.a,{})}),title:"\u0414\u0435\u043d\u044c ".concat(e.dayNumber+1)}),Object(i.jsx)(A.a,{children:e.dayTasks.tasks.map((function(t){var a,n=e.allTasks.find((function(e){return e.id===t})),l=n?F(n):"Task ".concat(t);return Object(i.jsx)(I.a,{variant:"outlined",size:"small",onDelete:(a=t,function(){e.onRemoveTask(e.dayNumber,a)}),label:l},"chip-".concat(t))}))}),Object(i.jsx)(S.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){l(null)},children:e.allTasks.filter((function(t){return!e.dayTasks.tasks.includes(t.id)})).map((function(t){return Object(i.jsx)(M.a,{onClick:(a=t.id,function(){e.onAddTask(e.dayNumber,a),l(null)}),children:F(t)},t.id);var a}))})]})};var B=function(e){return Object(i.jsxs)(H.a,{variant:"elevation",elevation:0,children:[Object(i.jsx)(D.a,{id:"standard-number",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439 \u0432 \u043a\u0443\u0440\u0441\u0435",helperText:"1 .. 90",type:"number",value:e.daysCount,onChange:function(t){e.onDaysCount(Number(t.target.value))},inputProps:{min:1,max:90},InputLabelProps:{shrink:!0}}),Object(i.jsx)(y.a,{container:!0,spacing:2,alignItems:"stretch",children:e.daysArray.map((function(t,a){return Object(i.jsx)(y.a,{item:!0,xs:12,sm:4,children:Object(i.jsx)(N,{dayNumber:a,dayTasks:t,allTasks:e.allTasks,onAddTask:e.onAddDayTask,onRemoveTask:e.onRemoveDayTask})},"day".concat(a))}))})]})},L=a(72),P=a.n(L),J=a(151),U=a(140),G=a(141),V=a(142),K=a(143);var Q=function(e){var t=s.a.useState(!1),a=Object(o.a)(t,2),n=a[0],l=a[1],c=s.a.useState(""),r=Object(o.a)(c,2),d=r[0],u=r[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(p.a,{title:"Show the full source. Copy/Paste enabled.",children:Object(i.jsx)(T.a,{"aria-label":"raw","aria-haspopup":"true",color:"inherit",onClick:function(){l(!0),u(e.raw)},children:Object(i.jsx)(P.a,{})})}),Object(i.jsxs)(J.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",fullWidth:!0,"aria-labelledby":"confirmation-dialog-title",open:n,children:[Object(i.jsx)(U.a,{id:"confirmation-dialog-title",children:"Raw"}),Object(i.jsx)(G.a,{dividers:!0,children:Object(i.jsx)(D.a,{id:"value-textfield",label:"Value",size:"small",fullWidth:!0,multiline:!0,value:d,onChange:function(e){var t=e.target.value&&""!==e.target.value?e.target.value:"";console.log("new rawValue "+t),u(t)},variant:"outlined"})}),Object(i.jsxs)(V.a,{children:[Object(i.jsx)(K.a,{autoFocus:!0,onClick:function(){l(!1),u("")},color:"primary",children:"Cancel"}),Object(i.jsx)(K.a,{onClick:function(){l(!1),e.onChangeRaw(d),u("")},color:"primary",disabled:e.isReadonly,children:"Set"})]})]})]})},X=a(12),Z=a(20),$=a.n(Z);var _=function(e){var t,a,n,l,s,c=null===(t=e.task)||void 0===t?void 0:t.type,r=null===(a=e.task)||void 0===a?void 0:a.audio,o=null===(n=e.task)||void 0===n?void 0:n.title,d=null===(l=e.task)||void 0===l?void 0:l.brief,u=null===(s=e.task)||void 0===s?void 0:s.image;return Object(i.jsxs)(q.a,{variant:"outlined",children:[Object(i.jsx)(R.a,{action:Object(i.jsx)(T.a,{"aria-label":"delete",onClick:function(){console.log("handleDelete "+e.id),e.onDeleteTask&&e.onDeleteTask(e.id)},children:Object(i.jsx)($.a,{})}),title:W(e.tasktype),subheader:Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(g.a,{color:"textSecondary",children:e.id})})}),Object(i.jsx)(A.a,{children:Object(i.jsxs)(y.a,{container:!0,spacing:2,alignItems:"stretch",children:[Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsxs)(D.a,{id:"title",size:"small",label:"\u0422\u0438\u043f",select:!0,value:null!==c&&void 0!==c?c:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{type:a});e.onEditTask(n)}},fullWidth:!0,required:!0,variant:"outlined",children:[Object(i.jsx)(M.a,{value:""},"unknown"),Object(i.jsx)(M.a,{value:"meditation",children:"\u041c\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044f"},"meditation"),Object(i.jsx)(M.a,{value:"breathe",children:"\u0414\u044b\u0445\u0430\u043d\u0438\u0435"},"breathe"),Object(i.jsx)(M.a,{value:"sleep",children:"\u0421\u043e\u043d"},"sleep"),Object(i.jsx)(M.a,{value:"background",children:"\u0424\u043e\u043d\u043e\u0432\u0430\u044f \u043c\u0443\u0437\u044b\u043a\u0430"},"background")]})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"image",size:"small",label:"Mp3 \u0444\u0430\u0439\u043b",helperText:"URL / \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u043f\u043e http/https \u0444\u0430\u0439\u043b",value:null!==r&&void 0!==r?r:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{audio:a});e.onEditTask(n)}},fullWidth:!0,required:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"title",size:"small",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",helperText:"\u0415\u0441\u043b\u0438 \u043f\u0443\u0441\u0442\u043e, \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0438\u0437 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 mp3",value:null!==o&&void 0!==o?o:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{title:a});e.onEditTask(n)}},fullWidth:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"brief",size:"small",label:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435",helperText:"\u0415\u0441\u043b\u0438 \u043f\u0443\u0441\u0442\u043e, \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0438\u0437 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 mp3",value:null!==d&&void 0!==d?d:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{brief:a});e.onEditTask(n)}},fullWidth:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"image",size:"small",label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u0441\u0441\u044b\u043b\u043a\u0430)",helperText:"\u0415\u0441\u043b\u0438 \u043f\u0443\u0441\u0442\u043e, \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0438\u0437 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 mp3",value:null!==u&&void 0!==u?u:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{image:a});e.onEditTask(n)}},fullWidth:!0,variant:"outlined"})})]})})]})};var ee=function(e){var t,a,n,l,s=null===(t=e.task)||void 0===t?void 0:t.type,c=null===(a=e.task)||void 0===a?void 0:a.title,r=null===(n=e.task)||void 0===n?void 0:n.brief,o=null===(l=e.task)||void 0===l?void 0:l.image;return Object(i.jsxs)(q.a,{variant:"outlined",children:[Object(i.jsx)(R.a,{action:Object(i.jsx)(T.a,{"aria-label":"delete",onClick:function(){console.log("handleDelete "+e.id),e.onDeleteTask&&e.onDeleteTask(e.id)},children:Object(i.jsx)($.a,{})}),title:W(e.tasktype),subheader:Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(g.a,{color:"textSecondary",children:e.id})})}),Object(i.jsx)(A.a,{children:Object(i.jsxs)(y.a,{container:!0,spacing:2,alignItems:"stretch",children:[Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsxs)(D.a,{id:"title",size:"small",label:"\u0422\u0438\u043f",select:!0,value:null!==s&&void 0!==s?s:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{type:a});e.onEditTask(n)}},fullWidth:!0,required:!0,variant:"outlined",children:[Object(i.jsx)(M.a,{value:""},"unknown"),Object(i.jsx)(M.a,{value:"article",children:"\u0421\u0442\u0430\u0442\u044c\u044f"},"article"),Object(i.jsx)(M.a,{value:"tale",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"},"tale")]})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"title",size:"small",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:null!==c&&void 0!==c?c:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{title:a});e.onEditTask(n)}},fullWidth:!0,required:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"brief",size:"small",label:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435",value:null!==r&&void 0!==r?r:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{brief:a});e.onEditTask(n)}},fullWidth:!0,required:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"image",size:"small",label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u0441\u0441\u044b\u043b\u043a\u0430)",helperText:"URL / \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u043f\u043e http/https \u0444\u0430\u0439\u043b",value:null!==o&&void 0!==o?o:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{image:a});e.onEditTask(n)}},fullWidth:!0,required:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(g.a,{children:"TODO: \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430\u043c\u0438"})})]})})]})};var te=function(e){var t,a,n,l=null===(t=e.task)||void 0===t?void 0:t.title,s=null===(a=e.task)||void 0===a?void 0:a.brief,c=null===(n=e.task)||void 0===n?void 0:n.image;return Object(i.jsxs)(q.a,{variant:"outlined",children:[Object(i.jsx)(R.a,{action:Object(i.jsx)(T.a,{"aria-label":"delete",onClick:function(){console.log("handleDelete "+e.id),e.onDeleteTask&&e.onDeleteTask(e.id)},children:Object(i.jsx)($.a,{})}),title:W(e.tasktype),subheader:Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(g.a,{color:"textSecondary",children:e.id})})}),Object(i.jsx)(A.a,{children:Object(i.jsxs)(y.a,{container:!0,spacing:2,alignItems:"stretch",children:[Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"title",size:"small",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:null!==l&&void 0!==l?l:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{title:a});e.onEditTask(n)}},fullWidth:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"brief",size:"small",label:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435",value:null!==s&&void 0!==s?s:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{brief:a});e.onEditTask(n)}},fullWidth:!0,variant:"outlined"})}),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"image",size:"small",label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u0441\u0441\u044b\u043b\u043a\u0430)",helperText:"URL / \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u043f\u043e http/https \u0444\u0430\u0439\u043b",value:null!==c&&void 0!==c?c:"",onChange:function(t){var a=t.target.value;if(e.onEditTask){var n=Object(X.a)(Object(X.a)({},e.task),{},{image:a});e.onEditTask(n)}},fullWidth:!0,required:!0,variant:"outlined"})})]})})]})};var ae=function(e){return Object(i.jsxs)(q.a,{variant:"outlined",children:[Object(i.jsx)(R.a,{action:Object(i.jsx)(T.a,{"aria-label":"delete",onClick:function(){console.log("handleDelete "+e.id),e.onDeleteTask&&e.onDeleteTask(e.id)},children:Object(i.jsx)($.a,{})}),title:W(e.tasktype),subheader:Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(g.a,{color:"textSecondary",children:e.id})})}),Object(i.jsx)(A.a,{children:Object(i.jsx)(g.a,{children:"TODO: \u0434\u043e\u0434\u0435\u043b\u0430\u0442\u044c"})})]})};var ne=function(e){return Object(i.jsxs)(q.a,{variant:"outlined",children:[Object(i.jsx)(R.a,{action:Object(i.jsx)(T.a,{"aria-label":"delete",onClick:function(){console.log("handleDelete "+e.id),e.onDeleteTask&&e.onDeleteTask(e.id)},children:Object(i.jsx)($.a,{})}),title:W(e.tasktype),subheader:Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(g.a,{color:"textSecondary",children:e.id})})}),Object(i.jsx)(A.a,{children:Object(i.jsx)(g.a,{children:"TODO: \u0434\u043e\u0434\u0435\u043b\u0430\u0442\u044c"})})]})},ie=Object(O.a)((function(e){return Object(x.a)({root:{flexGrow:1},small:{width:e.spacing(3),height:e.spacing(3)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),le={tasks:[]};var se=function(e){var t,a,l,c,r=ie(),j=new Date,v=b()(j).format("YYYYMMDDTHHmmss"),O=e.editId?e.kyojins.find((function(t){return t.id===e.editId})):void 0,x=s.a.useState(null!==(t=null===O||void 0===O?void 0:O.id)&&void 0!==t?t:Object(u.a)()),C=Object(o.a)(x,2),E=C[0],w=C[1],S=s.a.useState(null!==(a=null===O||void 0===O?void 0:O.revision)&&void 0!==a?a:v),M=Object(o.a)(S,2),W=M[0],H=M[1],q=s.a.useState(null===O||void 0===O?void 0:O.name),R=Object(o.a)(q,2),A=R[0],I=R[1],F=s.a.useState(null===O||void 0===O?void 0:O.thumbnail),N=Object(o.a)(F,2),L=N[0],P=N[1],J=s.a.useState(null===O||void 0===O?void 0:O.image),U=Object(o.a)(J,2),G=U[0],V=U[1],K=s.a.useState(null!==(l=null===O||void 0===O?void 0:O.tasks)&&void 0!==l?l:[]),X=Object(o.a)(K,2),Z=X[0],$=X[1],se=s.a.useState(null!==(c=null===O||void 0===O?void 0:O.days)&&void 0!==c?c:[le]),ce=Object(o.a)(se,2),re=ce[0],oe=ce[1],de=function(e){$(Z.filter((function(t){return t.id!==e}))),H(b()(new Date).format("YYYYMMDDTHHmmss"))},ue=function(e){$(Z.map((function(t){return t.id!==e.id?t:e}))),H(b()(new Date).format("YYYYMMDDTHHmmss"))},je=new Date,be=(b()(je).format("YYYYMMDDTHHmmss"),{v:n.v1,id:E,revision:v,name:null!==A&&void 0!==A?A:"",thumbnail:null!==L&&void 0!==L?L:"",image:null!==G&&void 0!==G?G:"",tasks:Z,days:re});return Object(i.jsxs)("div",{children:[Object(i.jsx)(m.a,{display:"block",displayPrint:"none",children:Object(i.jsx)(k.a,{position:"static",children:Object(i.jsxs)(f.a,{variant:"dense",children:[Object(i.jsx)(g.a,{variant:"h6",className:r.title,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0432\u0435\u043b\u0438\u043a\u0430\u043d\u043e\u0432"},"appTitle"),Object(i.jsx)(Q,{isReadonly:!1,raw:JSON.stringify(be,void 0,2),onChangeRaw:function(e){var t=JSON.parse(e);t&&(w(t.id),H(t.revision),I(t.name),P(t.thumbnail),V(t.image),$(t.tasks),oe(t.days))}}),Object(i.jsx)(p.a,{title:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",children:Object(i.jsx)(T.a,{edge:"end",color:"inherit","aria-label":"\u0421\u043a\u0430\u0447\u0430\u0442\u044c",onClick:function(){if(A)if(L)if(G)if(Z&&0!==Z.length){var e={v:n.v1,id:E,revision:v,name:A,thumbnail:L,image:G,tasks:Z,days:re},t=JSON.stringify(e,void 0,2),a=new Blob([t],{type:"application/json;charset=utf-8"});h.a.saveAs(a,e.name+"."+e.revision+".json")}else console.log("no tasks");else console.log("no image");else console.log("no thumbnail");else console.log("no name")},children:Object(i.jsx)(Y.a,{})})})]})})}),Object(i.jsxs)(m.a,{children:[Object(i.jsx)(g.a,{children:"\xa0"}),Object(i.jsxs)(y.a,{container:!0,spacing:2,alignItems:"stretch",children:[Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"name",size:"small",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0443\u0440\u0441\u0430",value:null!==A&&void 0!==A?A:"",onChange:function(e){I(e.target.value),H(b()(new Date).format("YYYYMMDDTHHmmss"))},fullWidth:!0,required:!0,variant:"outlined"})},"name"),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"revision",size:"small",label:"\u0412\u0435\u0440\u0441\u0438\u044f",value:null!==W&&void 0!==W?W:"",fullWidth:!0,variant:"outlined",disabled:!0})},"version"),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"thumbnail",size:"small",label:"Thumbnail \u0434\u043b\u044f \u0441\u043f\u0438\u0441\u043a\u0430 (\u0441\u0441\u044b\u043b\u043a\u0430)",value:null!==L&&void 0!==L?L:"",onChange:function(e){P(e.target.value),H(b()(new Date).format("YYYYMMDDTHHmmss"))},fullWidth:!0,required:!0,variant:"outlined"})},"thumbnail"),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(D.a,{id:"image",size:"small",label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u0441\u0441\u044b\u043b\u043a\u0430)",value:null!==G&&void 0!==G?G:"",onChange:function(e){V(e.target.value),H(b()(new Date).format("YYYYMMDDTHHmmss"))},fullWidth:!0,required:!0,variant:"outlined"})},"image"),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(B,{daysCount:re.length,daysArray:re,allTasks:Z,onDaysCount:function(e){if(e>re.length){var t=re.concat(Object(d.a)(Array(e-re.length)).map((function(e,t){return{tasks:[]}})));oe(t)}else oe(re.slice(0,e))},onAddDayTask:function(e,t){oe(re.map((function(a,n){return n===e?{tasks:a.tasks.filter((function(e){return e!==t})).concat([t])}:a})))},onRemoveDayTask:function(e,t){oe(re.map((function(a,n){return n===e?{tasks:a.tasks.filter((function(e){return e!==t}))}:a})))}})},"daylist"),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(z,{onAddTask:function(e){var t={id:Object(u.a)(),tasktype:e};$(Z.concat([t])),H(b()(new Date).format("YYYYMMDDTHHmmss"))}})},"taskadd"),Object(i.jsx)(y.a,{item:!0,xs:12,children:Object(i.jsx)(y.a,{container:!0,spacing:2,alignItems:"stretch",children:Z.map((function(e){switch(e.tasktype){case"audio":return Object(i.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(_,{id:e.id,tasktype:e.tasktype,task:e,onEditTask:ue,onDeleteTask:de})},e.id);case"text":return Object(i.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(ee,{id:e.id,tasktype:e.tasktype,task:e,onEditTask:ue,onDeleteTask:de})},e.id);case"image":return Object(i.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(te,{id:e.id,tasktype:e.tasktype,task:e,onEditTask:ue,onDeleteTask:de})},e.id);case"quicktest":return Object(i.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(ne,{id:e.id,tasktype:e.tasktype,task:e,onDeleteTask:de})},e.id);case"test":return Object(i.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(ae,{id:e.id,tasktype:e.tasktype,task:e,onDeleteTask:de})},e.id);default:return Object(i.jsxs)(g.a,{children:[e.id," - ",e.tasktype]})}}))})},"tasks")]})]})]})};var ce=function(){var e=s.a.useState([]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(se,{kyojins:a,onChange:function(e){n([e])}})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,157)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),l(e),s(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(ce,{})}),document.getElementById("root")),re()},95:function(e,t,a){},96:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.e67c2642.chunk.js.map