/*! For license information please see main.848b2abf.chunk.js.LICENSE.txt */
(this.webpackJsonpday4=this.webpackJsonpday4||[]).push([[0],{10:function(t,e,n){t.exports={task_holder:"tasks_task_holder__3hvjQ"}},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(9),c=n.n(i),r=(n(16),n.p,n(11)),o=n(2),d=n(3),l=n(4),u=n(6),h=n(5),b=n(8),j=n.n(b),p=n(10),f=n.n(p),m=n(0),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:f.a.task_holder,onClick:this.props.click,children:[Object(m.jsx)("h1",{children:this.props.title}),Object(m.jsx)("h6",{children:this.props.time})]})}}]),n}(a.a.Component),_=v,O=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={items:[]},s.addNew=s.addNew.bind(Object(l.a)(s)),s}return Object(d.a)(n,[{key:"delete",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"addNew",value:function(){var t=this;if(console.log("hit"),console.log(this._inputElement.value),""!==this._inputElement.value){var e={title:this._inputElement.value,key:Date.now()};this.setState({items:[].concat(Object(r.a)(this.state.items),[e])},(function(){return console.log(t.state.items)}))}this._inputElement.value=""}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:j.a.dashboard_holder,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",placeholder:"Tasks",ref:function(e){return t._inputElement=e}}),Object(m.jsx)("button",{onClick:this.addNew,children:"Submit"})]}),Object(m.jsx)("div",{className:j.a.dashboard_task,children:this.state.items.map((function(e){return Object(m.jsx)(_,{title:e.title,time:e.key,click:function(){return t.delete(e.key)}})}))})]})}}]),n}(a.a.Component);var k=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(O,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),x()},8:function(t,e,n){t.exports={dashboard_holder:"dashboard_dashboard_holder__1_X-3",dashboard_task:"dashboard_dashboard_task__ZP5Nz"}}},[[18,1,2]]]);
//# sourceMappingURL=main.848b2abf.chunk.js.map