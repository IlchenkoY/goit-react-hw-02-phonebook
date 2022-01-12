(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{25:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,s,d,l,b=t(1),u=t.n(b),p=t(15),x=t.n(p),m=(t(25),t(20)),h=t(5),j=t(6),f=t(10),g=t(9),O=t(16),v=t.n(O),w=t(7),C=t(12),y=t(2),k=t(3),H=k.a.button(a||(a=Object(y.a)(["\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  padding: 8px 20px;\n  margin-top: 10px;\n  margin-left: auto;\n  background-color: #f44336;\n  color: white;\n  font-weight: 500;\n  &:hover {\n    cursor: pointer;\n    transition: all 0.3s ease 0s;\n    transform: translateY(-2px);\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n      0 17px 50px 0 rgba(0, 0, 0, 0.19);\n  }\n"]))),S=k.a.form(r||(r=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #e6d8b4;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),A=k.a.input(c||(c=Object(y.a)(["\n  width: 550px;\n  margin: 10px 0 30px 0;\n"]))),F=t(0),z={name:"",number:""},D=function(e){Object(f.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state=Object(C.a)({},z),e.formHandler=function(n){e.setState(Object(w.a)({},n.target.name,n.target.value))},e.submitHandler=function(n){n.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState(Object(C.a)({},z))},e}return Object(j.a)(t,[{key:"render",value:function(){return Object(F.jsxs)(S,{onSubmit:this.submitHandler,children:[Object(F.jsxs)("label",{children:["Name",Object(F.jsx)(A,{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:this.formHandler,required:!0})]}),Object(F.jsxs)("label",{children:["Number",Object(F.jsx)(A,{type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:this.formHandler,required:!0})]}),Object(F.jsx)(H,{type:"submit",children:"Add contact"})]})}}]),t}(b.Component),L=function(e){var n=e.id,t=e.name,a=e.number,r=e.onClick;return Object(F.jsxs)(F.Fragment,{children:[t,": ",a,Object(F.jsx)(H,{type:"button",onClick:function(){return r(n)},children:"Delete"})]})},J=k.a.ul(i||(i=Object(y.a)(["\n  background-color: #e6d8b4;\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),N=k.a.li(o||(o=Object(y.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),Z=function(e){var n=e.contacts,t=e.onDelete;return Object(F.jsx)(J,{children:n.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(F.jsx)(N,{children:Object(F.jsx)(L,{name:a,number:r,id:n,onClick:t})},n)}))})},q=k.a.label(s||(s=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #e6d8b4;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 1px 3px rgba(0, 0, 0, 0.12);\n"]))),B=k.a.input(d||(d=Object(y.a)(["\n  width: 550px;\n  margin: 10px 0 30px 0;\n"]))),E=function(e){var n=e.value,t=e.onChange;return Object(F.jsxs)(q,{children:["Find contacts by name or number",Object(F.jsx)(B,{type:"text",name:"filter",onChange:t,value:n})]})},M=k.a.div(l||(l=Object(y.a)(["\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),P=function(e){var n=e.children;return Object(F.jsx)(M,{children:n})},Y=function(e){Object(f.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(n){var t=n.name,a=n.number,r={id:v.a.generate(),name:t,number:a};e.state.contacts.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts")):e.setState((function(e){return{contacts:[r].concat(Object(m.a)(e.contacts))}}))},e.changeFilter=function(n){e.setState({filter:n.target.value})},e.filteredContactsHandler=function(){var n=e.state,t=n.contacts,a=n.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())||e.number.includes(a)}))},e.deleteContactHandler=function(n){e.setState({contacts:e.state.contacts.filter((function(e){return e.id!==n}))})},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state,n=e.contacts,t=e.filter;return Object(F.jsxs)(P,{children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(D,{onSubmit:this.formSubmitHandler}),Object(F.jsx)("h2",{children:"Contacts"}),n.length>0?Object(F.jsx)(E,{value:t,onChange:this.changeFilter}):Object(F.jsx)("p",{children:"You have no contacts yet"}),n.length>0&&Object(F.jsx)(Z,{contacts:this.filteredContactsHandler(),onDelete:this.deleteContactHandler})]})}}]),t}(b.Component);x.a.render(Object(F.jsx)(u.a.StrictMode,{children:Object(F.jsx)(Y,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b4541ec9.chunk.js.map