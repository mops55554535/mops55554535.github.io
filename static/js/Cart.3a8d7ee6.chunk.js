"use strict";(self.webpackChunkreact_pizza_v2=self.webpackChunkreact_pizza_v2||[]).push([[965],{7037:(s,e,t)=>{t.r(e),t.d(e,{default:()=>_});t(5043);var n=t(5475);const i={root:"Cart_root__8BKoV",top:"Cart_top__5+HFD",title:"Cart_title__wyana",clear:"Cart_clear__XeNaJ",content:"Cart_content__nqqiK",items:"Cart_items__Ls5Gp",info:"Cart_info__stzNV",bottom:"Cart_bottom__tN-Gc",back:"Cart_back__ba+oU",pay:"Cart_pay__zEV7e"};var r=t(3003);function a(s){var e,t,n="";if("string"==typeof s||"number"==typeof s)n+=s;else if("object"==typeof s)if(Array.isArray(s)){var i=s.length;for(e=0;e<i;e++)s[e]&&(t=a(s[e]))&&(n&&(n+=" "),n+=t)}else for(t in s)s[t]&&(n&&(n+=" "),n+=t);return n}const o=function(){for(var s,e,t=0,n="",i=arguments.length;t<i;t++)(s=arguments[t])&&(e=a(s))&&(n&&(n+=" "),n+=e);return n};var c=t(322);const d={root:"CartItem_root__wBucO",info:"CartItem_info__qMFhQ",image:"CartItem_image__xWZ2C",number:"CartItem_number__AMZsF",delete:"CartItem_delete__wnB3K"};var l=t(579);const h=s=>{let{id:e,title:t,sizes:n,types:i,size:a,price:h,count:j,imgUrl:x}=s;const m=(0,r.wA)();return(0,l.jsxs)("div",{className:d.root,children:[(0,l.jsxs)("div",{className:d.info,children:[(0,l.jsx)("div",{className:d.image,children:(0,l.jsx)("img",{src:x,alt:"Pizza"})}),(0,l.jsxs)("div",{className:d.about,children:[(0,l.jsx)("div",{className:d.title,children:(0,l.jsx)("h3",{children:t})}),(0,l.jsxs)("div",{className:d.options,children:[i,", ",a," ",(0,l.jsxs)("span",{children:[n," \u0441\u043c."]})]})]})]}),(0,l.jsxs)("div",{className:d.number,children:[(0,l.jsx)("button",{disabled:1===j,className:o("countBtn",{countBtnDisabled:1===j}),onClick:()=>{m((0,c.G8)(e))},children:"-"}),(0,l.jsx)("div",{children:j}),(0,l.jsx)("button",{className:"btn_plus",onClick:()=>{m((0,c.B5)({id:e}))},children:"+"})]}),(0,l.jsxs)("div",{className:d.cost,children:[h*j," ",(0,l.jsx)("span",{children:" \u20bd"})]}),(0,l.jsx)("div",{className:d.delete,onClick:()=>{window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440?")&&m((0,c.Ai)(e))},children:"x"})]})},j=t.p+"static/media/empty-cart.db905d1f4b063162f25b.png",x={},m=()=>(0,l.jsxs)("div",{className:x.root,children:[(0,l.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",(0,l.jsx)("span",{children:"\ud83d\ude15"})]}),(0,l.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",(0,l.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),(0,l.jsx)("img",{src:j,alt:"Empty cart"}),(0,l.jsx)(n.N_,{to:"/",className:"button button--black",children:(0,l.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]});var p=t(9540);const _=function(){const s=(0,r.wA)(),{totalPrice:e,items:t}=(0,r.d4)(p.V),a=t.reduce(((s,e)=>s+e.count),0);return e?(0,l.jsxs)("div",{className:i.root,children:[(0,l.jsxs)("div",{className:i.top,children:[(0,l.jsxs)("div",{className:i.title,children:[(0,l.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"black",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"black",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"black",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,l.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),(0,l.jsxs)("div",{className:i.clear,onClick:()=>{window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u041a\u043e\u0440\u0437\u0438\u043d\u0443?")&&s((0,c.gw)())},children:[(0,l.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M2.5 5H4.16667H17.5",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M8.33337 9.16667V14.1667",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M11.6666 9.16667V14.1667",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,l.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),(0,l.jsxs)("div",{className:i.content,children:[(0,l.jsx)("div",{className:i.items,children:t.map((s=>(0,l.jsx)(h,{...s},s.imgUrl)))}),(0,l.jsxs)("div",{className:i.info,children:[(0,l.jsxs)("span",{className:i.number,children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",(0,l.jsxs)("b",{children:[a," \u0448\u0442."]})]}),(0,l.jsxs)("span",{className:i.cost,children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",(0,l.jsxs)("b",{children:[e," \u20bd"]})]})]})]}),(0,l.jsxs)("div",{className:i.bottom,children:[(0,l.jsx)("div",{className:i.back,children:(0,l.jsxs)(n.N_,{to:"/",children:[(0,l.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,l.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})}),(0,l.jsx)("div",{className:i.pay,children:(0,l.jsx)("button",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]}):(0,l.jsx)(m,{})}}}]);
//# sourceMappingURL=Cart.3a8d7ee6.chunk.js.map