(this["webpackJsonpfugr-ru-react-test"]=this["webpackJsonpfugr-ru-react-test"]||[]).push([[0],{17:function(e,t,a){e.exports={Loader:"Loader_Loader__2OjC9","lds-dual-ring":"Loader_lds-dual-ring__3VLXW"}},21:function(e,t,a){e.exports=a.p+"static/media/logo.8ab5c688.svg"},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(20),c=a.n(l),s=(a(29),a(10)),o=a(1),i=a(21),m=a.n(i),d=function(e){return n.a.createElement("div",{className:"navbar navbar-expand-md navbar-dark bg-dark"},n.a.createElement(s.b,{to:"/",className:"navbar-brand"},n.a.createElement("img",{src:m.a,width:"30",height:"30",className:"d-inline-block align-top mr-2",alt:"",loading:"lazy"}),"Fugr-ru React test"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.c,{exact:!0,to:"/",activeClassName:"active",className:"nav-link"},"Chose data")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.c,{to:"/about",activeClassName:"active",className:"nav-link"},"About app")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.c,{to:"/description",activeClassName:"active",className:"nav-link"},"Task description")))))},u=function(e){var t=e.repoUrl;return n.a.createElement("div",{className:"col alert alert-info alert-dismissible fade show",role:"alert"},n.a.createElement("h5",{className:"alert-heading"},"More info:"),"You can get more information about test task and view app's code on those Github repos by\xa0",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t},"link"),".",n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert"},n.a.createElement("span",null,"\xd7")))},p=a(13),h=a(23),E=a.n(h),b=function(e){var t=e.markdownUrl,a=Object(r.useState)(""),l=Object(p.a)(a,2),c=l[0],s=l[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){s(E()(e))}))}),[t]),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:c},className:"col mx-auto"})},f=function(e){return n.a.createElement("div",{class:"container my-1"},n.a.createElement(u,{repoUrl:"https://github.com/SunBro-Marko/fugr-ru-react-test"}),n.a.createElement(b,{markdownUrl:"https://raw.githubusercontent.com/SunBro-Marko/fugr-ru-react-test/master/README.md"}))},g=function(e){return n.a.createElement("div",{class:"container my-5"},n.a.createElement("div",{class:"col mx-auto"},n.a.createElement("h2",{class:"text-center"},"Select the data size to load the table:")),n.a.createElement("div",{class:"col-12 col-md-8 col-lg-6 mx-auto"},n.a.createElement(s.b,{to:"/table/small",className:"btn btn-info btn-lg btn-block"},"Small amount of data"),n.a.createElement(s.b,{to:"/table/large",className:"btn btn-warning btn-lg btn-block"},"Large amount of data"),n.a.createElement("ul",{class:"mt-4"},n.a.createElement("p",null,"This project is made as a test task, link to the test task and github project below:"),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/fugr-ru/frontend-javascript-test"},n.a.createElement("strong",null,"Test task description"))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/SunBro-Marko/fugr-ru-react-test"},n.a.createElement("strong",null,"Project Github page"))))))},v=function(e){return n.a.createElement("div",{class:"container my-1"},n.a.createElement(u,{repoUrl:"https://github.com/SunBro-Marko/fugr-ru-react-test"}),n.a.createElement(b,{markdownUrl:"https://raw.githubusercontent.com/fugr-ru/frontend-javascript-test/master/README.md"}))},N=a(6),k=a(7),y=a(9),w=a(8),F=function(e){var t=n.a.useState(""),a=Object(p.a)(t,2),r=a[0],l=a[1];return n.a.createElement("div",{className:"input-group mb-3 pt-3 pl-3 pr-3"},n.a.createElement("input",{onChange:function(e){l(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e.searchHandler(r)},type:"text",className:"form-control",placeholder:"\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435...","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{onClick:function(){return e.searchHandler(r)},className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-search",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})))))},j=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){var e=this,t=this.props.headers.map((function(t){return n.a.createElement("th",{key:t,onClick:e.props.sortHandler.bind(null,t)},t," ",e.props.sortField===t?n.a.createElement("small",null,e.props.sortDirection):"")}));return n.a.createElement("thead",null,n.a.createElement("tr",null,t))}}]),a}(n.a.Component),C=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(N.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).Hightlight=function(e,t){var a=String(e);if(!t)return a;var r=new RegExp(t,"ig"),l=a.match(r);return l?a.split(r).map((function(e,t,a){if(t<a.length-1){var r=l.shift();return n.a.createElement("span",{key:Math.random()},e,n.a.createElement("span",{className:"bg-warning"},r))}return e})):a},e}return Object(k.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data.map((function(t){return n.a.createElement("tr",{key:t.id+Math.random(),onClick:e.props.selectionHandler.bind(null,t)},n.a.createElement("td",null,t.id),n.a.createElement("td",null,e.Hightlight(t.firstName,e.props.searchFilter)),n.a.createElement("td",null,e.Hightlight(t.lastName,e.props.searchFilter)),n.a.createElement("td",null,e.Hightlight(t.email,e.props.searchFilter)),n.a.createElement("td",null,e.Hightlight(t.phone,e.props.searchFilter)))}));return n.a.createElement("tbody",null,t)}}]),a}(n.a.Component),O=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){for(var e=this,t=this.props.itemsCount,a=this.props.currentPage+1,r=this.props.itemsOnPage,l=Math.ceil(t/r),c=[],s=1;s<=l;s++)c.push(s);var o=a-3<=0?0:a-3,i=a+2>=c.length?c.length:a+2,m=c.slice(o,i);m.unshift("<<","<"),m.push(">",">>");var d=m.map((function(t){return n.a.createElement("li",{key:t,className:t===a?"page-item active":"page-item"},n.a.createElement("button",{className:"page-link",onClick:e.props.paginatorHandler.bind(null,t,l)},t))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",null,n.a.createElement("ul",{className:"pagination justify-content-center"},d)))}}]),a}(n.a.Component),x=function(e){var t=e.handleSubmitElement,a=n.a.createRef(),r=n.a.createRef(),l=n.a.createRef(),c=n.a.createRef(),s=n.a.createRef();return n.a.createElement("div",{className:"modal fade",id:"addModalForm",tabIndex:"-1",role:"dialog","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},n.a.createElement("div",{className:"modal-content px-3"},n.a.createElement("form",null,n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title"},"Add row to table"),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"id"},"Id:"),n.a.createElement("input",{ref:a,type:"number",className:"form-control",id:"id",placeholder:"Enter id"})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"firstName"},"First name:"),n.a.createElement("input",{ref:r,type:"firstName",className:"form-control",id:"firstName",placeholder:"Enter first name"})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"lastName"},"Last name:"),n.a.createElement("input",{ref:l,type:"lastName",className:"form-control",id:"lastName",placeholder:"Enter last name"})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"email"},"Email address:"),n.a.createElement("input",{ref:c,type:"email",className:"form-control",id:"email",placeholder:"Enter email"})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{htmlFor:"phone"},"Phone number:"),n.a.createElement("input",{ref:s,type:"phone",className:"form-control",id:"phone",placeholder:"Phone number (xxx)xxx-xxxx"}))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{onClick:function(e){var n={id:a.current.value,firstName:r.current.value,lastName:l.current.value,email:c.current.value,phone:s.current.value};t(n)},className:"btn btn-primary disabled ","data-dismiss":"modal"},"Add to table"))))))},H=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(N.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={isDataSelected:!1,isShowForm:!1,data:e.props.data,dataFiltred:"",searchFilter:"",sortDirection:"asc",sortField:"id",selectionRow:null,itemsOnPage:10,currentPage:0,headers:["id","firstName","lastName","email","phone"],addItem:""},e.sortHandler=function(t){var a="";t&&(a=t===e.state.sortField&&"asc"===e.state.sortDirection?"desc":"asc"),"none"===t&&(a=e.state.sortDirection,t=e.state.sortField),console.log("\u042f\u0447\u0435\u0439\u043a\u0430:".concat(t,", \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435:").concat(a));var r=e.state.data.concat().sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0}));e.setState({data:"asc"===a?r:r.reverse(),sortDirection:a,sortField:t})},e.selectionHandler=function(t){e.setState({selectionRow:t})},e.searchHandler=function(t){e.setState({searchFilter:t})},e.paginatorHandler=function(t,a){var r;parseInt(t)&&(r=t-1),"<"===t&&(r=e.state.currentPage-1>=0?e.state.currentPage-1:0),">"===t&&(r=e.state.currentPage+1<=a-1?e.state.currentPage+1:a-1),"<<"===t&&(r=0),">>"===t&&(r=a-1),e.setState({currentPage:Number(r)})},e.AddElementHandler=function(t){e.setState({addItem:t})},e}return Object(k.a)(a,[{key:"componentDidMount",value:function(){this.sortHandler("none")}},{key:"getFilteredData",value:function(){var e=this.state,t=e.data,a=e.searchFilter;return a?t.filter((function(e){return e.firstName.toLowerCase().includes(a.toLowerCase())||e.lastName.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())||e.phone.toLowerCase().includes(a.toLowerCase())})):t}},{key:"CheckElementforAdd",value:function(e){""!==this.state.addItem&&(e.unshift(this.state.addItem),this.setState({addItem:""}))}},{key:"render",value:function(){var e=this.getFilteredData();return e[0]!==this.state.addItem&&this.CheckElementforAdd(e),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement(F,{searchHandler:this.searchHandler}),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-hover"},n.a.createElement(j,{headers:this.state.headers,sortHandler:this.sortHandler,sortDirection:this.state.sortDirection,sortField:this.state.sortField}),n.a.createElement(C,{data:e.slice(0+10*this.state.currentPage,10+10*this.state.currentPage),selectionHandler:this.selectionHandler,searchFilter:this.state.searchFilter}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-8"},n.a.createElement(O,{itemsCount:e.length,currentPage:this.state.currentPage,paginatorHandler:this.paginatorHandler,itemsOnPage:this.state.itemsOnPage})),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("button",{type:"button",className:"btn btn-block btn-primary","data-toggle":"modal","data-target":"#addModalForm"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))),n.a.createElement(x,{handleSubmitElement:this.AddElementHandler}))}}]),a}(n.a.Component),L=a(17),S=a.n(L),M=function(){return n.a.createElement("div",{className:S.a.Loader},n.a.createElement("div",{className:S.a["lds-dual-ring"]}))},P=function(e){var t=e.isLoaded,a=e.data;return t?n.a.createElement(n.a.Fragment,null,n.a.createElement(H,{isLoaded:t,data:a})):n.a.createElement(M,null)},R=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var r;return Object(N.a)(this,a),(r=t.call(this,e)).fetchUrl={large:"https://api.mockaroo.com/api/847ce770?count=1000&key=beedb770",small:"https://api.mockaroo.com/api/847ce770?count=32&key=beedb770"},r.state={fetchUrl:"large"===e.match.params.size?r.fetchUrl.large:r.fetchUrl.small,error:null,isLoaded:!1,data:[]},r}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new XMLHttpRequest;t.open("GET",this.state.fetchUrl,!0),t.onload=function(){if(200===t.status){var a=JSON.parse(t.response);e.setState({isLoaded:!0,data:a})}else e.setState({isLoaded:!0,error:"Error"})},t.send()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,r=e.data;return t?n.a.createElement("div",null,"Error: ",t.message):n.a.createElement(P,{isLoaded:a,data:r})}}]),a}(n.a.Component);var D=function(){var e;return e="fugr-ru-react-test",n.a.createElement(s.a,{basename:e},n.a.createElement(d,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/table/:size",component:R}),n.a.createElement(o.a,{path:"/about",component:f}),n.a.createElement(o.a,{path:"/description",component:v}),n.a.createElement(o.a,{path:"/",component:g})))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3a409478.chunk.js.map