(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/next.66b1d21c.svg"},15:function(e,t,a){e.exports=a.p+"static/media/previous.09a45199.svg"},16:function(e,t,a){e.exports=a(36)},21:function(e,t,a){},23:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(2),s=a.n(r),l=(a(21),a(3)),i=a(4),o=a(6),m=a(5),h=a(7),d=(a(23),a(13)),u={watches:[{id:10,index:1,imageUrl:"https://media.takealot.com/covers_tsins/46991000/46991000-1-full.jpg",metal:398},{id:11,index:2,imageUrl:"https://media.takealot.com/covers_tsins/45060146/816137020749-1-full.jpg",metal:141},{id:44,index:3,imageUrl:"https://media.takealot.com/covers_tsins/45060139/816137020961-1-full.jpg",metal:642},{id:1876,index:4,imageUrl:"https://media.takealot.com/covers_tsins/45060149/816137020299-1-full.jpg",metal:256},{id:1234438,index:5,imageUrl:"https://media.takealot.com/covers_tsins/55018422/55018422-1-full.jpg",metal:700},{id:474,index:6,imageUrl:"https://media.takealot.com/covers_tsins/49755935/49755935-1-full.jpg",metal:45},{id:16,index:7,imageUrl:"https://media.takealot.com/covers_tsins/49785822/6002128510557-1-full.jpg",metal:2},{id:14438,index:8,imageUrl:"https://media.takealot.com/covers_tsins/44506357/44506357-1-full.jpg",metal:12},{id:10,index:9,imageUrl:"https://media.takealot.com/covers_tsins/46991000/46991000-1-full.jpg",metal:398}]},p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getMetalSignal",value:function(e){var t="badge m2 badge-";return t+=e.metal>200?"warning":"white"}},{key:"render",value:function(){var e=this.props.watch,t=e.id,a=e.imageUrl,c=e.metal;return n.a.createElement("div",{className:"singleWatch"},n.a.createElement("div",{id:"watch-".concat(t),className:"img"},n.a.createElement("img",{src:a,alt:t})),n.a.createElement("div",{className:"details"},n.a.createElement("p",{className:this.getMetalSignal({metal:c})},"Radioactive Metals: ",c,"mg")))}}]),t}(c.Component),v=a(14),g=a.n(v),w=a(15),x=a.n(w),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={appearHome:!0,currentWatchIndex:0,currentWatch:u.watches[0],nextWatch:u.watches[1],previousWatch:u.watches[2]},a.toggleAppear=function(){a.setState({appearHome:!a.state.appearHome})},a.resetScroll=function(){a.setState({currentWatchIndex:0,currentWatch:u.watches[0],nextWatch:u.watches[1],previousWatch:u.watches[2]})},a.nextWatch=function(){var e=a.state.currentWatchIndex+1;a.state.currentWatchIndex===u.watches.length-2?a.resetScroll():a.setState({currentWatchIndex:e,currentWatch:u.watches[e],nextWatch:u.watches[e+1],previousWatch:u.watches[e-1]})},a.prevWatch=function(){var e=a.state.currentWatchIndex-1;a.state.currentWatchIndex<2?a.resetScroll():a.setState({currentWatchIndex:e,currentWatch:u.watches[e],nextWatch:u.watches[e+1],previousWatch:u.watches[e-1]})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.appearHome,a=e.currentWatch,c=e.nextWatch,r=e.previousWatch;return n.a.createElement(d.CSSTransition,{in:t,appear:!0,timeout:1500,classNames:"fade"},n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"watchCloset col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"imgPrev"},n.a.createElement(p,{watch:r})),n.a.createElement("div",{className:"imgCurr"},n.a.createElement(p,{watch:a})),n.a.createElement("div",{className:"imgNext"},n.a.createElement(p,{watch:c})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"scrollers col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.a.createElement("button",{onClick:this.prevWatch},n.a.createElement("img",{src:x.a,alt:"Previous",className:"Arrow"})),n.a.createElement("button",{onClick:this.nextWatch},n.a.createElement("img",{src:g.a,alt:"Next",className:"Arrow"}))))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(34);s.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.9916b484.chunk.js.map