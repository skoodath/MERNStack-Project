(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),u=n(14),l=n(2),i=(n(20),function(e){var t=e.person,n=e.removeContact;return r.a.createElement("li",null,t.name," | ",t.number,r.a.createElement("button",{className:"rmbtn",onClick:n},"X"))}),s=function(e){var t=e.onChangeName,n=e.onChangePhone,a=e.onSubmit,c=e.nameVal,o=e.phoneVal;return r.a.createElement("form",{onSubmit:a},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Name: ",r.a.createElement("input",{type:"text",onChange:t,value:c,placeholder:"Enter a Name",required:!0})),r.a.createElement("div",null,"Phone: ",r.a.createElement("input",{type:"tel",maxLength:"12",onChange:n,value:o,placeholder:"Enter phone no.",required:!0})),r.a.createElement("div",null,r.a.createElement("button",{className:"addbtn",type:"submit"},"Add"))))},m=function(e){var t=e.onSearchChange,n=e.searchVal;return r.a.createElement("div",null,"Search Contact: ",r.a.createElement("input",{type:"text",onChange:t,value:n,placeholder:"search a contact"}))},f=n(3),d=n.n(f),h="https://enigmatic-waters-00270.herokuapp.com/api/persons",p=function(){return d.a.get(h)},b=function(e){return d.a.post(h,e)},E=function(e){return d.a.delete("".concat(h,"/").concat(e))},v=function(e,t){return d.a.put("".concat(h,"/").concat(e),t)},g=function(e){var t=e.message;return""===t?"":r.a.createElement("div",{className:"successNotice"},t)},O=function(e){var t=e.message;return""===t?"":r.a.createElement("div",{className:"errorNotice"},t)};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),f=Object(l.a)(o,2),d=f[0],h=f[1],j=Object(a.useState)(""),w=Object(l.a)(j,2),C=w[0],S=w[1],P=Object(a.useState)(""),N=Object(l.a)(P,2),k=N[0],L=N[1],V=Object(a.useState)(""),x=Object(l.a)(V,2),D=x[0],T=x[1],A=Object(a.useState)(""),q=Object(l.a)(A,2),J=q[0],B=q[1];Object(a.useEffect)((function(){p().then((function(e){c(e.data)}))}),[]);var F=n.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:D}),r.a.createElement(O,{message:J}),r.a.createElement(m,{onSearchChange:function(e){L(e.target.value)},searchVal:k}),r.a.createElement("h3",null,"Add New Contact"),r.a.createElement(s,{onChangeName:function(e){h(e.target.value)},onChangePhone:function(e){S(e.target.value)},onSubmit:function(e){e.preventDefault();var t={name:d,number:C},a=!1;n.forEach((function(e){if(e.name.toLowerCase()===d.toLowerCase()&&e.number===C)alert("".concat(d," and ").concat(C," combination already exists. Please enter a new contact.!")),a=!0;else{if(a||e.name.toLowerCase()!==d.toLowerCase()||e.number===C)return;if(window.confirm("".concat(e.name," is already added to the phonebook. Should the number be replaced?"))){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.find((function(t){return t.id===e.id})),{number:C});v(t.id,t).then((function(t){c(n.map((function(n){return n.id!==e.id?n:t.data}))),h(""),S(""),T("Contact successfully Updated")})).catch((function(e){B("".concat(t.name," was already deleted"))})),setTimeout((function(){T("")}),3e3),setTimeout((function(){B("")}),3e3),c(n.filter((function(e){return e.id!==t.id})))}a=!0}})),a||(b(t).then((function(e){c(n.concat(e.data)),h(""),S(""),T("Contact successfully Added")})),setTimeout((function(){T("")}),3e3))},nameVal:d,phoneVal:C}),r.a.createElement("h3",null,"Numbers"),r.a.createElement("ol",null,0===F.length?r.a.createElement("p",null,"There are no contacts!"):F.map((function(e){return r.a.createElement(i,{key:e.id,person:e,removeContact:function(){return function(e){if(window.confirm("Are you sure you want to delete this record")){var t=n.filter((function(t){return t.id!==e}));E(e).then((function(e){c(t),h(""),S(""),T("Record deleted successfully")})),setTimeout((function(){T("")}),3e3)}}(e.id)}})}))))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8162b8e1.chunk.js.map