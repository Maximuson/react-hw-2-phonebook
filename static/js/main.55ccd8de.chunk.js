(this["webpackJsonpreact-hw-2-phonebook"]=this["webpackJsonpreact-hw-2-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={section:"Section_section__Ap5Zy"}},14:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),u=n.n(l),i=n(13),c=n(1),o=n(2),m=n(3),s=n(5),d=n(4),h=n(6),b=n(11),f=n.n(b),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this))).state={name:"",number:""},n.handleInput=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.submitForm=function(e){var t={id:f()(),name:n.state.name,number:n.state.number};n.handleSubmit(e,t),n.setState({name:"",number:""})},n.handleSubmit=e.handleSubmit,n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",null,r.a.createElement("h3",null,"Name"),r.a.createElement("input",{onChange:this.handleInput,name:"name",value:t,type:"text"})),r.a.createElement("div",null,r.a.createElement("h3",null,"Number"),r.a.createElement("input",{onChange:this.handleInput,name:"number",value:n,type:"text"})),r.a.createElement("input",{type:"submit",value:"Add"}))}}]),t}(a.Component),v=n(12),E=n.n(v),C=function(e){var t=e.title,n=e.children;return r.a.createElement("div",{className:E.a.section},r.a.createElement("h2",null,t),n)},S=function(e){var t=e.name,n=void 0===t?"":t,a=e.number,l=void 0===a?"":a,u=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("span",null,n||"noName",": ",l||"noNumber"),r.a.createElement("button",{onClick:u,type:"button"},"Delete"))},j=function(e){var t=e.contacts,n=e.handleDelete,a=t.map((function(e){var t=e.id,a=e.name,l=e.number;return r.a.createElement("li",{key:t},r.a.createElement(S,{handleDelete:function(){n(t)},id:t,name:a,number:l}))}));return r.a.createElement("ul",null,a)},y=function(e){var t=e.onChange,n=e.filter;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:n,onChange:t,name:"filter",id:""}))},O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.filterContacts=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},n.handleInput=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e,t){if(e.preventDefault(),-1!==n.state.contacts.findIndex((function(e){return e.name===t.name})))return alert("contact exist in your book"),!1;n.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[t]),name:"",number:"",filter:""}}))},n.handleDelete=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.contacts,l=e.filter,u=this.filterContacts(a,l);return r.a.createElement("div",null,r.a.createElement(C,{title:"Phonebook"},r.a.createElement(p,{name:t,number:n,handleSubmit:this.handleSubmit,handleInput:this.handleInput})),r.a.createElement(C,{title:"Contacts"},r.a.createElement(y,{onChange:this.handleInput,filter:l}),r.a.createElement(j,{handleDelete:this.handleDelete,contacts:u})))}}]),t}(a.Component);u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.55ccd8de.chunk.js.map