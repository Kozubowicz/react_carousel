(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),r=n(4),s=n(5),c=n(8),m=n(6),u=n(1),l=n.n(u),o=(n(13),n(7)),p=(n(14),n(0)),j=function(t){var e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,r=t.animationDuration,s=Object(u.useState)(0),c=Object(o.a)(s,2),m=c[0],l=c[1],j={width:i*(a-1)},b={transform:"translateX(".concat(m,"px)"),transition:"transform ".concat(r,"ms ease-in-out")};return Object(p.jsxs)("div",{className:"Carousel",children:[Object(p.jsx)("ul",{className:"Carousel__list",style:j,children:e.map((function(t,e){return Object(p.jsx)("li",{style:b,children:Object(p.jsx)("img",{src:t,alt:(e+1).toString(),width:a})},t)}))}),Object(p.jsx)("button",{type:"button",onClick:function(){var t=m+n*a;l(t>0?0:t)},children:"Prev"}),Object(p.jsx)("button",{type:"button",onClick:function(){var t=e.length*a-a*i,r=m-n*a;l(r<-t?-t:r)},"data-cy":"next",children:"Next"})]})},b=function(t){Object(c.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.step,a=e.frameSize,r=e.itemWidth,s=e.animationDuration;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(p.jsx)(j,{images:n,step:i,frameSize:a,itemWidth:r,animationDuration:s}),Object(p.jsxs)("div",{className:"App__inputs",children:[Object(p.jsxs)("label",{className:"App__inputs--item",htmlFor:"itemId",children:["Item Width:",Object(p.jsx)("input",{id:"itemId",type:"number",value:r,onChange:function(e){return t.setState({itemWidth:Number(e.target.value)})}})]}),Object(p.jsxs)("label",{className:"App__inputs--item",htmlFor:"frameId",children:["Frame size:",Object(p.jsx)("input",{id:"frameId",type:"number",value:a,onChange:function(e){return t.setState({frameSize:Number(e.target.value)})}})]}),Object(p.jsxs)("label",{className:"App__inputs--item",htmlFor:"stepId",children:["Step:",Object(p.jsx)("input",{id:"stepId",type:"number",value:i,onChange:function(e){return t.setState({step:Number(e.target.value)})}})]}),Object(p.jsxs)("label",{className:"App__inputs--item",htmlFor:"animationID",children:["Animation Duration:",Object(p.jsx)("input",{id:"animationID",type:"number",value:s,onChange:function(e){return t.setState({animationDuration:Number(e.target.value)})}})]})]})]})}}]),n}(l.a.Component),h=b;a.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3ca9796e.chunk.js.map