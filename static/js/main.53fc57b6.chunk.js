(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);a(12);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(10),i=a(1),u=a(2),m=a(4),s=a(3),h=a(5),b=a(6),p=a(9),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).initialState=void 0,a.handleChange=function(e){var t=e.currentTarget,n=t.name,r=t.value;a.setState(Object(p.a)({},a.state,Object(b.a)({},n,r)))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(n.Component),d=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Job"),r.a.createElement("th",{scope:"col"},"Delete")))},j=function(e){var t=e.characterData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.removeCharacter(a)}},"Delete")))});return r.a.createElement("tbody",null,t)},E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",{className:"table"},r.a.createElement(d,null),r.a.createElement(j,{characterData:t,removeCharacter:a}))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[{name:"Charlie",job:"Janitor"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis",job:"Bartender"}],data:[]},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(o.a)(a.state.characters),[e])})},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter(function(t,a){return a!==e})})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data.map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,e),r.a.createElement("br",null),r.a.createElement(E,{characterData:this.state.characters,removeCharacter:this.removeCharacter}),r.a.createElement(f,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.53fc57b6.chunk.js.map