import{u as l,j as n,L as r}from"./components-BNXVk01B.js";import{w as d,f as x}from"./index-CySkpn_k.js";import{M as j}from"./Money-BIQ2KV1-.js";const g=()=>[{title:"Orders"}];function b(){const{customer:s}=l(),{orders:t}=s;return n.jsx("div",{className:"orders",children:t.nodes.length?n.jsx(u,{orders:t}):n.jsx(c,{})})}function u({orders:s}){return n.jsx("div",{className:"acccount-orders",children:s!=null&&s.nodes.length?n.jsx(d,{connection:s,children:({nodes:t,isLoading:e,PreviousLink:a,NextLink:o})=>n.jsxs(n.Fragment,{children:[n.jsx(a,{children:e?"Loading...":n.jsx("span",{children:"↑ Load previous"})}),t.map(i=>n.jsx(h,{order:i},i.id)),n.jsx(o,{children:e?"Loading...":n.jsx("span",{children:"Load more ↓"})})]})}):n.jsx(c,{})})}function c(){return n.jsxs("div",{children:[n.jsx("p",{children:"You haven't placed any orders yet."}),n.jsx("br",{}),n.jsx("p",{children:n.jsx(r,{to:"/collections",children:"Start Shopping →"})})]})}function h({order:s}){var e;const t=(e=x(s.fulfillments)[0])==null?void 0:e.status;return n.jsxs(n.Fragment,{children:[n.jsxs("fieldset",{children:[n.jsx(r,{to:`/account/orders/${btoa(s.id)}`,children:n.jsxs("strong",{children:["#",s.number]})}),n.jsx("p",{children:new Date(s.processedAt).toDateString()}),n.jsx("p",{children:s.financialStatus}),t&&n.jsx("p",{children:t}),n.jsx(j,{data:s.totalPrice}),n.jsx(r,{to:`/account/orders/${btoa(s.id)}`,children:"View Order →"})]}),n.jsx("br",{})]})}export{b as default,g as meta};
