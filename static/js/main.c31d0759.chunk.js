(this.webpackJsonpthursday=this.webpackJsonpthursday||[]).push([[0],{30:function(e,t,n){e.exports=n(59)},35:function(e,t,n){},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(28),r=n.n(c),o=(n(35),n(8)),i=n(1),u=(n(36),n(10)),s=n(11),h=n(13),m=n(12),d=n(15),E=n.n(d),p=function(){return E.a.get("https://dog.ceo/api/breeds/image/random")},f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={image:"",match:0,like:!1},e.componentDidMount=function(){e.callNewDog()},e.callNewDog=function(){p().then((function(t){var n=t.data.message;e.setState({image:n})}))},e.handleClick=function(t){if("like"===t){var n=Math.floor(5*Math.random());console.log(n),1===n?e.setState({like:!0,match:e.state.match+1}):1!==n&&e.setState({like:!1}),e.callNewDog()}else e.callNewDog()},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"This is the Discover page"),l.a.createElement("img",{src:this.state.image}),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.handleClick("like")}},"thumb up"),l.a.createElement("button",{onClick:function(){return e.handleClick("dislike")}},"thumb down")),this.state.like?l.a.createElement("h1",null,"you found a match!"):null,l.a.createElement("h3",null,this.state.match))}}]),n}(l.a.Component);var v=function(){return l.a.createElement("h1",null,"This is the About page")},g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"This is the search page"),l.a.createElement("input",{type:"text",onChange:this.handleChange}))}}]),n}(l.a.Component);var b=function(){return l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"About")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/search"},"Search")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/discover"},"Discover")))};var k=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(i.a,{exact:!0,path:"/",component:v}),l.a.createElement(i.a,{exact:!0,path:"/discover",component:f}),l.a.createElement(i.a,{exact:!0,path:"/search",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c31d0759.chunk.js.map