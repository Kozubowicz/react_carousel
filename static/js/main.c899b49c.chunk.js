(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),s=n(4),c=n(5),r=n(8),u=n(6),o=n(1),m=n.n(o),p=(n(13),n(7)),l=(n(14),n(0)),b=function(t){var e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,c=Object(o.useState)(0),r=Object(p.a)(c,2),u=r[0],m=r[1],b={width:i*a-1},j={transform:"translateX(".concat(u,"%)"),transition:"transform ".concat(s,"ms ease-in-out")};return Object(l.jsxs)("div",{className:"Carousel",children:[Object(l.jsx)("ul",{className:"Carousel__list",style:b,children:e.map((function(t,e){return Object(l.jsx)("li",{style:j,children:Object(l.jsx)("img",{src:t,alt:(e+1).toString(),width:a})},t)}))}),Object(l.jsxs)("div",{className:"Carousel__buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){var t=u+100*n;m(t>0?0:t)},children:"Prev"}),Object(l.jsx)("button",{type:"button",onClick:function(){var t=100*e.length-100*i,a=u-100*n;m(a<-t?-t:a)},"data-cy":"next",children:"Next"})]})]})},j=function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.step,a=e.frameSize,s=e.itemWidth,c=e.animationDuration;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(l.jsx)(b,{images:n,step:i,frameSize:a,itemWidth:s,animationDuration:c}),Object(l.jsxs)("div",{className:"App__inputs",children:[Object(l.jsxs)("div",{className:"App__inputs--item-container",children:[Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{itemWidth:t.itemWidth+10}}))},children:"+"}),Object(l.jsxs)("label",{className:"App__inputs--item",htmlFor:"itemId",children:["Item Width:",Object(l.jsx)("input",{id:"itemId",type:"number",step:10,value:s,onChange:function(e){var n=Number(e.target.value);t.setState((function(){return{itemWidth:n}}))}})]}),Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{itemWidth:t.itemWidth-10}}))},children:"-"})]}),Object(l.jsxs)("div",{className:"App__inputs--item-container",children:[Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{frameSize:t.frameSize+1}}))},children:"+"}),Object(l.jsxs)("label",{className:"App__inputs--item",htmlFor:"frameId",children:["Frame size:",Object(l.jsx)("input",{id:"frameId",type:"number",value:a,onChange:function(e){var n=Number(e.target.value);t.setState((function(){return{frameSize:n}}))}})]}),Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{frameSize:t.frameSize-1}}))},children:"-"})]}),Object(l.jsxs)("div",{className:"App__inputs--item-container",children:[Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{step:t.step+1}}))},children:"+"}),Object(l.jsxs)("label",{className:"App__inputs--item",htmlFor:"stepId",children:["Step:",Object(l.jsx)("input",{id:"stepId",type:"number",value:i,onChange:function(e){var n=Number(e.target.value);t.setState((function(){return{step:n}}))}})]}),Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{step:t.step-1}}))},children:"-"})]}),Object(l.jsxs)("div",{className:"App__inputs--item-container",children:[Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{animationDuration:t.animationDuration+100}}))},children:"+"}),Object(l.jsxs)("label",{className:"App__inputs--item",htmlFor:"animationID",children:["Animation Duration:",Object(l.jsx)("input",{id:"animationID",type:"number",step:100,value:c,onChange:function(e){var n=Number(e.target.value);t.setState((function(){return{animationDuration:n}}))}})]}),Object(l.jsx)("button",{type:"button",className:"App__inputs--item-button",onClick:function(){t.setState((function(t){return{animationDuration:t.animationDuration+100}}))},children:"-"})]})]})]})}}]),n}(m.a.Component),d=j;a.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c899b49c.chunk.js.map