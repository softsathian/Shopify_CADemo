import{j as t,L as j}from"./components-BNXVk01B.js";import{p as y,G as d}from"./index-CySkpn_k.js";import{u as f}from"./variants-D8q_WIPp.js";import{I as b}from"./Image-ePsQ5Z9S.js";import{M as m}from"./Money-BIQ2KV1-.js";function S({layout:n,cart:e}){var o,c,u,l;const i=y(e),s=!!((c=(o=i==null?void 0:i.lines)==null?void 0:o.nodes)!=null&&c.length),a=`cart-main ${i&&!!((l=(u=i==null?void 0:i.discountCodes)==null?void 0:u.filter(p=>p.applicable))!=null&&l.length)?"with-discount":""}`;return t.jsxs("div",{className:a,children:[t.jsx(w,{hidden:s,layout:n}),t.jsx(v,{cart:i,layout:n})]})}function v({layout:n,cart:e}){var s;const i=!!e&&e.totalQuantity>0;return t.jsxs("div",{className:"cart-details",children:[t.jsx(C,{lines:(s=e==null?void 0:e.lines)==null?void 0:s.nodes,layout:n}),i&&t.jsxs(A,{cost:e.cost,layout:n,children:[t.jsx(D,{discountCodes:e.discountCodes}),t.jsx(N,{checkoutUrl:e.checkoutUrl})]})]})}function C({lines:n,layout:e}){return n?t.jsx("div",{"aria-labelledby":"cart-lines",children:t.jsx("ul",{children:n.map(i=>t.jsx(g,{line:i,layout:e},i.id))})}):null}function g({layout:n,line:e}){const{id:i,merchandise:s}=e,{product:r,title:a,image:o,selectedOptions:c}=s,u=f(r.handle,c);return t.jsxs("li",{className:"cart-line",children:[o&&t.jsx(b,{alt:a,aspectRatio:"1/1",data:o,height:100,loading:"lazy",width:100}),t.jsxs("div",{children:[t.jsx(j,{prefetch:"intent",to:u,onClick:()=>{n==="aside"&&(window.location.href=u)},children:t.jsx("p",{children:t.jsx("strong",{children:r.title})})}),t.jsx(q,{line:e,as:"span"}),t.jsx("ul",{children:c.map(l=>t.jsx("li",{children:t.jsxs("small",{children:[l.name,": ",l.value]})},l.name))}),t.jsx(L,{line:e})]})]},i)}function N({checkoutUrl:n}){return n?t.jsxs("div",{children:[t.jsx("a",{href:n,target:"_self",children:t.jsx("p",{children:"Continue to Checkout →"})}),t.jsx("br",{})]}):null}function A({cost:n,layout:e,children:i=null}){var r;const s=e==="page"?"cart-summary-page":"cart-summary-aside";return t.jsxs("div",{"aria-labelledby":"cart-summary",className:s,children:[t.jsx("h4",{children:"Totals"}),t.jsxs("dl",{className:"cart-subtotal",children:[t.jsx("dt",{children:"Subtotal"}),t.jsx("dd",{children:(r=n==null?void 0:n.subtotalAmount)!=null&&r.amount?t.jsx(m,{data:n==null?void 0:n.subtotalAmount}):"-"})]}),i]})}function I({lineIds:n,disabled:e}){return t.jsx(d,{route:"/cart",action:d.ACTIONS.LinesRemove,inputs:{lineIds:n},children:t.jsx("button",{disabled:e,type:"submit",children:"Remove"})})}function L({line:n}){if(!n||typeof(n==null?void 0:n.quantity)>"u")return null;const{id:e,quantity:i,isOptimistic:s}=n,r=Number(Math.max(0,i-1).toFixed(0)),a=Number((i+1).toFixed(0));return t.jsxs("div",{className:"cart-line-quantity",children:[t.jsxs("small",{children:["Quantity: ",i,"   "]}),t.jsx(x,{lines:[{id:e,quantity:r}],children:t.jsx("button",{"aria-label":"Decrease quantity",disabled:i<=1||!!s,name:"decrease-quantity",value:r,children:t.jsx("span",{children:"− "})})})," ",t.jsx(x,{lines:[{id:e,quantity:a}],children:t.jsx("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:a,disabled:!!s,children:t.jsx("span",{children:"+"})})})," ",t.jsx(I,{lineIds:[e],disabled:!!s})]})}function q({line:n,priceType:e="regular",...i}){var r,a;if(!((r=n==null?void 0:n.cost)!=null&&r.amountPerQuantity)||!((a=n==null?void 0:n.cost)!=null&&a.totalAmount))return t.jsx("div",{style:{visibility:"hidden"},children:" "});const s=e==="regular"?n.cost.totalAmount:n.cost.compareAtAmountPerQuantity;return s==null?t.jsx("div",{style:{visibility:"hidden"},children:" "}):t.jsx("div",{children:t.jsx(m,{withoutTrailingZeros:!0,...i,data:s})})}function w({hidden:n=!1,layout:e="aside"}){return t.jsxs("div",{hidden:n,children:[t.jsx("br",{}),t.jsx("p",{children:"Looks like you haven’t added anything yet, let’s get you started!"}),t.jsx("br",{}),t.jsx(j,{to:"/collections",onClick:()=>{e==="aside"&&(window.location.href="/collections")},children:"Continue shopping →"})]})}function D({discountCodes:n}){var i;const e=((i=n==null?void 0:n.filter(s=>s.applicable))==null?void 0:i.map(({code:s})=>s))||[];return t.jsxs("div",{children:[t.jsx("dl",{hidden:!e.length,children:t.jsxs("div",{children:[t.jsx("dt",{children:"Discount(s)"}),t.jsx(h,{children:t.jsxs("div",{className:"cart-discount",children:[t.jsx("code",{children:e==null?void 0:e.join(", ")})," ",t.jsx("button",{children:"Remove"})]})})]})}),t.jsx(h,{discountCodes:e,children:t.jsxs("div",{children:[t.jsx("input",{type:"text",name:"discountCode",placeholder:"Discount code"})," ",t.jsx("button",{type:"submit",children:"Apply"})]})})]})}function h({discountCodes:n,children:e}){return t.jsx(d,{route:"/cart",action:d.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:n||[]},children:e})}function x({children:n,lines:e}){return t.jsx(d,{route:"/cart",action:d.ACTIONS.LinesUpdate,inputs:{lines:e},children:n})}export{S as C};
