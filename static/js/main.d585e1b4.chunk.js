(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(6),s=a(1),u=function(){return r.a.createElement("h1",null,"Home Page")},m=a(13),i=a(19),h=function(e){var t=e.person,a=Object(s.h)(),n=new URLSearchParams(a.search);return r.a.createElement(o.b,{to:{pathname:"/people/".concat(t.slug),search:n.toString()},className:"f"===t.sex?"red":"blue"},t.name)},p=function(e){var t=e.person,a=e.url;return r.a.createElement("tr",{className:t.slug===a.replace("/people/","")?"highlight":""},r.a.createElement("td",null,r.a.createElement(h,{person:t})),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null,void 0===t.mother?t.motherName:r.a.createElement(h,{person:t.mother})),r.a.createElement("td",null,void 0===t.father?t.fatherName:r.a.createElement(h,{person:t.father})))},d=function(e){var t=e.peoples,a=e.url,n=e.handleSorting,c=Object(s.h)(),l=new URLSearchParams(c.search),o=l.get("sortBy")||"",u=l.get("sortOrder")||"";return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:n,className:"name"===o?"title":""},"name"),r.a.createElement("th",{onClick:n,className:"sex"===o?"title":""},"sex"),r.a.createElement("th",{onClick:n,className:"born"===o?"title":""},"born"),r.a.createElement("th",{onClick:n,className:"died"===o?"title":""},"died"),r.a.createElement("th",null,"mother"),r.a.createElement("th",null,"father"))),r.a.createElement("tbody",null,function(e){if(u)switch(o){case"name":e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"sex":e.sort((function(e,t){return e.sex.localeCompare(t.sex)}));break;case"born":e.sort((function(e,t){return e.born-t.born}));break;case"died":e.sort((function(e,t){return e.died-t.died}))}return"desc"===u&&e.reverse(),e}(t).map((function(e){return r.a.createElement(p,{person:e,url:a,key:e.slug})}))))},f=a(12),E=a.n(f),b=a(14),g=a(21),v=function(){var e=Object(g.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{father:t.find((function(t){return e.fatherName===t.name})),mother:t.find((function(t){return e.motherName===t.name}))})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){var t=Object(s.g)(),a=Object(s.h)(),c=new URLSearchParams(a.search),l=c.get("query")||"",o=Object(n.useState)([]),u=Object(m.a)(o,2),h=u[0],p=u[1],f=Object(n.useState)([]),E=Object(m.a)(f,2),b=E[0],g=E[1];Object(n.useEffect)((function(){v().then(p),g(h)}),[]),Object(n.useEffect)((function(){g(h.filter((function(e){var t,a;return e.name.toLowerCase().includes(l.toLowerCase())||(null===(t=e.fatherName)||void 0===t?void 0:t.toLowerCase().includes(l.toLowerCase()))||(null===(a=e.motherName)||void 0===a?void 0:a.toLowerCase().includes(l.toLowerCase()))})))}),[l,h]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"People page"),r.a.createElement(i.DebounceInput,{debounceTimeout:500,type:"text",value:l,onChange:function(e){var a=e.target;c.set("query",a.value),t.push({search:c.toString()})}}),r.a.createElement(d,{peoples:b,url:e.match.url,handleSorting:function(e){c.set("sortBy",e.currentTarget.innerText),"asc"===c.get("sortOrder")?c.set("sortOrder","desc"):c.set("sortOrder","asc"),t.push({search:c.toString()})}}))},O=function(){return r.a.createElement("h1",null,"Page not found")},x=(a(34),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement(o.b,{to:"/",className:"nav-link"},"Home"),r.a.createElement(o.b,{to:"/people/",className:"nav-link"},"People")),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/home"},r.a.createElement(s.a,{to:"/"})),r.a.createElement(s.b,{path:"/",exact:!0,component:u}),r.a.createElement(s.b,{path:"/people/:personSlug?",component:N}),r.a.createElement(s.b,{path:"/:someText",exact:!0,component:O})))});l.a.render(r.a.createElement(o.a,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d585e1b4.chunk.js.map