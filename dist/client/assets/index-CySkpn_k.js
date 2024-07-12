import{r as p,b as xe,L as ee,I as be,e as Z,j as y,g as Re,J as Oe}from"./components-BNXVk01B.js";const Le="modulepreload",Ne=function(e){return"https://cdn.shopify.com/oxygen-v2/34470/24523/50905/692788/"+e},te={},Ue=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.all(r.map(a=>{if(a=Ne(a),a in te)return;te[a]=!0;const c=a.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Le,c||(u.as="script",u.crossOrigin=""),u.href=a,i&&u.setAttribute("nonce",i),document.head.appendChild(u),c)return new Promise((l,m)=>{u.addEventListener("load",l),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};function R(e){if(!e){const t=`flattenConnection(): needs a 'connection' to flatten, but received '${e??""}' instead.`;return console.error(t+" Returning an empty array"),[]}return"nodes"in e?e.nodes:"edges"in e&&Array.isArray(e.edges)?e.edges.map(t=>{if(!(t!=null&&t.node))throw new Error("flattenConnection(): Connection edges must contain nodes");return t.node}):[]}const O="_shopify_y",L="_shopify_s";var Ve=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function $e(e){let t={},r,n,o=0,s=e.split(/;\s*/g),i,a;for(;o<s.length;o++)if(n=s[o],r=n.indexOf("="),~r){if(i=n.substring(0,r++).trim(),a=n.substring(r).trim(),a[0]==='"'&&(a=a.substring(1,a.length-1)),~a.indexOf("%"))try{a=decodeURIComponent(a)}catch{}Ve.has(n=i.toLowerCase())?n==="expires"?t.expires=new Date(a):n==="max-age"?t.maxage=+a:t[n]=a:t[i]=a}else(i=n.trim().toLowerCase())&&(i==="httponly"||i==="secure")&&(t[i]=!0);return t}function Me(e,t,r={}){let n=e+"="+encodeURIComponent(t);return r.expires&&(n+="; Expires="+new Date(r.expires).toUTCString()),r.maxage!=null&&r.maxage>=0&&(n+="; Max-Age="+(r.maxage|0)),r.domain&&(n+="; Domain="+r.domain),r.path&&(n+="; Path="+r.path),r.samesite&&(n+="; SameSite="+r.samesite),(r.secure||r.samesite==="None")&&(n+="; Secure"),r.httponly&&(n+="; HttpOnly"),n}const re="xxxx-4xxx-xxxx-xxxxxxxxxxxx";function z(){let e="";try{const t=window.crypto,r=new Uint16Array(31);t.getRandomValues(r);let n=0;e=re.replace(/[x]/g,o=>{const s=r[n]%16,i=o==="x"?s:s&3|8;return n++,i.toString(16)}).toUpperCase()}catch{e=re.replace(/[x]/g,r=>{const n=Math.random()*16|0;return(r==="x"?n:n&3|8).toString(16)}).toUpperCase()}return`${qe()}-${e}`}function qe(){let e=0,t=0;e=new Date().getTime()>>>0;try{t=performance.now()>>>0}catch{t=0}return Math.abs(e+t).toString(16).toLowerCase().padStart(8,"0")}function ve(e){const t=$e(e);return{[O]:t[O]||"",[L]:t[L]||""}}const v={PAGE_VIEW:"PAGE_VIEW",ADD_TO_CART:"ADD_TO_CART",PAGE_VIEW_2:"PAGE_VIEW_2",COLLECTION_VIEW:"COLLECTION_VIEW",PRODUCT_VIEW:"PRODUCT_VIEW",SEARCH_VIEW:"SEARCH_VIEW"},N={article:"article",blog:"blog",captcha:"captcha",cart:"cart",collection:"collection",customersAccount:"customers/account",customersActivateAccount:"customers/activate_account",customersAddresses:"customers/addresses",customersLogin:"customers/login",customersOrder:"customers/order",customersRegister:"customers/register",customersResetPassword:"customers/reset_password",giftCard:"gift_card",home:"index",listCollections:"list-collections",forbidden:"403",notFound:"404",page:"page",password:"password",product:"product",policy:"policy",search:"search"},We={hydrogen:"hydrogen",headless:"headless"},ne={hydrogen:"6167201",headless:"12875497473"};function E(e,t){return{schema_id:e,payload:t,metadata:{event_created_at_ms:Date.now()}}}function T(e){const t={id:"",resource:null,resourceId:null,search:"",searchParams:new URLSearchParams,hash:""};if(typeof e!="string")return t;try{const{search:r,searchParams:n,pathname:o,hash:s}=new URL(e),i=o.split("/"),a=i[i.length-1],c=i[i.length-2];return!a||!c?t:{id:`${a}${r}${s}`||"",resource:c??null,resourceId:a||null,search:r,searchParams:n,hash:s}}catch{return t}}function _(e,t){return typeof e!="object"?{}:(Object.entries(e).forEach(([r,n])=>{n&&(t[r]=n)}),t)}function je(e){return typeof document>"u"?(console.error(`${e} should only be used within the useEffect callback or event handlers`),!0):!1}const Ge="trekkie_storefront_page_view/1.4",Fe="myshopify.dev";function oe(e){const t=e,{id:r,resource:n}=T(t.resourceId),o=n?n.toLowerCase():void 0;return[E(Ge,_({pageType:t.pageType,customerId:parseInt(T(t.customerId).id||"0"),resourceType:o,resourceId:parseInt(r)},He(t)))]}function He(e){return{appClientId:e.shopifySalesChannel?ne[e.shopifySalesChannel]:ne.headless,isMerchantRequest:Be(e.url),hydrogenSubchannelId:e.storefrontId||"0",isPersistentCookie:e.hasUserConsent,uniqToken:e.uniqueToken,visitToken:e.visitToken,microSessionId:z(),microSessionCount:1,url:e.url,path:e.path,search:e.search,referrer:e.referrer,title:e.title,shopId:parseInt(T(e.shopId).id),currency:e.currency,contentLanguage:e.acceptedLanguage||"en"}}function Be(e){if(typeof e!="string")return!1;const t=new URL(e).hostname;return t.indexOf(Fe)!==-1||t==="localhost"}const I="custom_storefront_customer_tracking/1.0",_e="page_rendered",Ee="collection_page_rendered",Pe="product_page_rendered",Je="product_added_to_cart",Ce="search_submitted";function W(e){return{canonical_url:e.canonicalUrl||e.url,customer_id:parseInt(T(e.customerId).id||"0")}}function Ye(e){const t=e,r=W(t),n=t.pageType,o=[];switch(o.push(E(I,_({event_name:_e,...r},A(t)))),n){case N.collection:o.push(E(I,_({event_name:Ee,...r,collection_name:t.collectionHandle},A(t))));break;case N.product:o.push(E(I,_({event_name:Pe,...r,products:X(t.products),total_value:t.totalValue},A(t))));break;case N.search:o.push(E(I,_({event_name:Ce,...r,search_string:t.searchString},A(t))));break}return o}function ze(e){const t=e,r=W(t);return[E(I,_({event_name:_e,...r},A(t)))]}function Ke(e){const t=e,r=W(t);return[E(I,_({event_name:Ee,...r,collection_name:t.collectionHandle},A(t)))]}function Ze(e){const t=e,r=W(t);return[E(I,_({event_name:Pe,...r,products:X(t.products),total_value:t.totalValue},A(t)))]}function Xe(e){const t=e,r=W(t);return[E(I,_({event_name:Ce,...r,search_string:t.searchString},A(t)))]}function Qe(e){const t=e,r=T(t.cartId),n=r!=null&&r.id?`${r.id}`:null;return[E(I,_({event_name:Je,customerId:t.customerId,cart_token:n,total_value:t.totalValue,products:X(t.products),customer_id:parseInt(T(t.customerId).id||"0")},A(t)))]}function A(e){return{source:e.shopifySalesChannel||We.headless,hydrogenSubchannelId:e.storefrontId||"0",is_persistent_cookie:e.hasUserConsent,ccpa_enforced:!1,gdpr_enforced:!1,unique_token:e.uniqueToken,event_time:Date.now(),event_id:z(),event_source_url:e.url,referrer:e.referrer,user_agent:e.userAgent,navigation_type:e.navigationType,navigation_api:e.navigationApi,shop_id:parseInt(T(e.shopId).id),currency:e.currency}}function X(e){return e?e.map(t=>{const r=_({variant_gid:t.variantGid,category:t.category,sku:t.sku,product_id:parseInt(T(t.productGid).id),variant_id:parseInt(T(t.variantGid).id)},{product_gid:t.productGid,name:t.name,variant:t.variantName||"",brand:t.brand,price:parseFloat(t.price),quantity:Number(t.quantity||0)});return JSON.stringify(r)}):[]}function j(e,t){const{eventName:r,payload:n}=e;if(!n.hasUserConsent)return Promise.resolve();let o=[];const s=n;return r===v.PAGE_VIEW?o=o.concat(oe(s),Ye(s)):r===v.ADD_TO_CART?o=o.concat(Qe(n)):r===v.PAGE_VIEW_2?o=o.concat(oe(s),ze(s)):r===v.COLLECTION_VIEW?o=o.concat(Ke(s)):r===v.PRODUCT_VIEW?o=o.concat(Ze(s)):r===v.SEARCH_VIEW&&(o=o.concat(Xe(s))),o.length?et(o,t):Promise.resolve()}const ae="sendShopifyAnalytics request is unsuccessful";function et(e,t){const r={events:e,metadata:{event_sent_at_ms:Date.now()}};try{return fetch(t?`https://${t}/.well-known/shopify/monorail/unstable/produce_batch`:"https://monorail-edge.shopifysvc.com/unstable/produce_batch",{method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(r)}).then(n=>{if(!n.ok)throw new Error("Response failed");return n.text()}).then(n=>{n&&JSON.parse(n).result.forEach(s=>{s.status!==200&&console.error(ae,`

`,s.message)})}).catch(n=>{console.error(ae,n)})}catch{return Promise.resolve()}}function tt(){if(je("getClientBrowserParameters"))return{uniqueToken:"",visitToken:"",url:"",path:"",search:"",referrer:"",title:"",userAgent:"",navigationType:"",navigationApi:""};const[e,t]=ot(),r=ve(document.cookie);return{uniqueToken:r[O],visitToken:r[L],url:location.href,path:location.pathname,search:location.search,referrer:document.referrer,title:document.title,userAgent:navigator.userAgent,navigationType:e,navigationApi:t}}function rt(){try{const e=(performance==null?void 0:performance.getEntriesByType)&&(performance==null?void 0:performance.getEntriesByType("navigation"));if(e&&e[0]){const t=window.performance.getEntriesByType("navigation")[0].type;return t&&t.toString()}}catch{}}function nt(){var e,t;try{if(PerformanceNavigation&&((e=performance==null?void 0:performance.navigation)==null?void 0:e.type)!==null&&((t=performance==null?void 0:performance.navigation)==null?void 0:t.type)!==void 0){const r=performance.navigation.type;switch(r){case PerformanceNavigation.TYPE_NAVIGATE:return"navigate";case PerformanceNavigation.TYPE_RELOAD:return"reload";case PerformanceNavigation.TYPE_BACK_FORWARD:return"back_forward";default:return`unknown: ${r}`}}}catch{}}function ot(){try{let e="PerformanceNavigationTiming",t=rt();return t||(t=nt(),e="performance.navigation"),t?[t,e]:["unknown","unknown"]}catch{}return["error","error"]}const se={};function at(e,t){const r=se[e];if(r)return r;const n=new Promise((o,s)=>{const i=document.createElement("script");t!=null&&t.module?i.type="module":i.type="text/javascript",i.src=e,i.onload=()=>{o(!0)},i.onerror=()=>{s(!1)},(t==null?void 0:t.in)==="head"?document.head.appendChild(i):document.body.appendChild(i);const a=t==null?void 0:t.attributes;a&&Object.keys(a).forEach(c=>{i.setAttribute(c,a[c])})});return se[e]=n,n}function st(e,t){const[r,n]=p.useState("loading");return p.useEffect(()=>{at(e,t).then(()=>n("done")).catch(()=>n("error"))},[e]),r}const it=60*60*24*360*1,ct=60*30;function ut(e){const{hasUserConsent:t=!1,domain:r=""}=e||{};p.useEffect(()=>{const n=ve(document.cookie);let o=r||window.document.location.host;/^localhost/.test(o)&&(o="");const s=o?/^\./.test(o)?o:`.${o}`:"";t?(F(O,n[O]||z(),it,s),F(L,n[L]||z(),ct,s)):(F(O,"",0,s),F(L,"",0,s))},[e,t,r])}function F(e,t,r,n){document.cookie=Me(e,t,{maxage:r,domain:n,samesite:"Lax",path:"/"})}var ie=new Set,dt=e=>{ie.has(e)||(console.warn(e),ie.add(e))},ce=new Set,ue=e=>{ce.has(e)||(console.error(new Error(e)),ce.add(e))};p.lazy(()=>Ue(()=>import("./log-seo-tags-TY72EQWZ-DCHH-_Gl.js"),[]));function jt({connection:e,children:t=()=>(console.warn("<Pagination> requires children to work properly"),null)}){let r=xe().state==="loading",{endCursor:n,hasNextPage:o,hasPreviousPage:s,nextPageUrl:i,nodes:a,previousPageUrl:c,startCursor:d}=lt(e),u=p.useMemo(()=>({pageInfo:{endCursor:n,hasPreviousPage:s,hasNextPage:o,startCursor:d},nodes:a}),[n,o,s,d,a]),l=p.useMemo(()=>p.forwardRef(function(h,f){return o?p.createElement(ee,{preventScrollReset:!0,...h,to:i,state:u,replace:!0,ref:f}):null}),[o,i,u]),m=p.useMemo(()=>p.forwardRef(function(h,f){return s?p.createElement(ee,{preventScrollReset:!0,...h,to:c,state:u,replace:!0,ref:f}):null}),[s,c,u]);return t({state:u,hasNextPage:o,hasPreviousPage:s,isLoading:r,nextPageUrl:i,nodes:a,previousPageUrl:c,NextLink:l,PreviousLink:m})}function H(e){let t=new URLSearchParams(e);return t.delete("cursor"),t.delete("direction"),t.toString()}function $(e){throw new Error(`The Pagination component requires ${"`"+e+"`"} to be a part of your query. See the guide on how to setup your query to include ${"`"+e+"`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`)}function lt(e){e.pageInfo||$("pageInfo"),typeof e.pageInfo.startCursor>"u"&&$("pageInfo.startCursor"),typeof e.pageInfo.endCursor>"u"&&$("pageInfo.endCursor"),typeof e.pageInfo.hasNextPage>"u"&&$("pageInfo.hasNextPage"),typeof e.pageInfo.hasPreviousPage>"u"&&$("pageInfo.hasPreviousPage");let t=be(),{state:r,search:n,pathname:o}=Z(),s=new URLSearchParams(n).get("direction")==="previous",i=p.useMemo(()=>{var l;return!((l=globalThis==null?void 0:globalThis.window)!=null&&l.__hydrogenHydrated)||!r||!(r!=null&&r.nodes)?R(e):s?[...R(e),...r.nodes]:[...r.nodes,...R(e)]},[r,e]),a=p.useMemo(()=>{var P,S,C,w,V;let l=(P=globalThis==null?void 0:globalThis.window)==null?void 0:P.__hydrogenHydrated,m=!l||((S=r==null?void 0:r.pageInfo)==null?void 0:S.startCursor)===void 0?e.pageInfo.startCursor:r.pageInfo.startCursor,h=!l||((C=r==null?void 0:r.pageInfo)==null?void 0:C.endCursor)===void 0?e.pageInfo.endCursor:r.pageInfo.endCursor,f=!l||((w=r==null?void 0:r.pageInfo)==null?void 0:w.hasPreviousPage)===void 0?e.pageInfo.hasPreviousPage:r.pageInfo.hasPreviousPage,g=!l||((V=r==null?void 0:r.pageInfo)==null?void 0:V.hasNextPage)===void 0?e.pageInfo.hasNextPage:r.pageInfo.hasNextPage;return r!=null&&r.nodes&&(s?(m=e.pageInfo.startCursor,f=e.pageInfo.hasPreviousPage):(h=e.pageInfo.endCursor,g=e.pageInfo.hasNextPage)),{startCursor:m,endCursor:h,hasPreviousPage:f,hasNextPage:g}},[s,r,e.pageInfo.hasNextPage,e.pageInfo.hasPreviousPage,e.pageInfo.startCursor,e.pageInfo.endCursor]),c=p.useRef({params:H(n),pathname:o});p.useEffect(()=>{window.__hydrogenHydrated=!0},[]),p.useEffect(()=>{(H(n)!==c.current.params||o!==c.current.pathname)&&(c.current={pathname:o,params:H(n)},t(`${o}?${H(n)}`,{replace:!0,preventScrollReset:!0,state:{nodes:void 0,pageInfo:void 0}}))},[o,n]);let d=p.useMemo(()=>{let l=new URLSearchParams(n);return l.set("direction","previous"),a.startCursor&&l.set("cursor",a.startCursor),`?${l.toString()}`},[n,a.startCursor]),u=p.useMemo(()=>{let l=new URLSearchParams(n);return l.set("direction","next"),a.endCursor&&l.set("cursor",a.endCursor),`?${l.toString()}`},[n,a.endCursor]);return{...a,previousPageUrl:d,nextPageUrl:u,nodes:i}}var we="cartFormInput";function x({children:e,action:t,inputs:r,route:n,fetcherKey:o}){let s=Re({key:o});return y.jsxs(s.Form,{action:n||"",method:"post",children:[(t||r)&&y.jsx("input",{type:"hidden",name:we,value:JSON.stringify({action:t,inputs:r})}),typeof e=="function"?e(s):e]})}x.INPUT_NAME=we;x.ACTIONS={AttributesUpdateInput:"AttributesUpdateInput",BuyerIdentityUpdate:"BuyerIdentityUpdate",Create:"Create",DiscountCodesUpdate:"DiscountCodesUpdate",LinesAdd:"LinesAdd",LinesRemove:"LinesRemove",LinesUpdate:"LinesUpdate",NoteUpdate:"NoteUpdate",SelectedDeliveryOptionsUpdate:"SelectedDeliveryOptionsUpdate",MetafieldsSet:"MetafieldsSet",MetafieldDelete:"MetafieldDelete"};function pt(e){let t={};for(let i of e.entries()){let a=i[0],c=e.getAll(a);t[a]=c.length>1?c:i[1]}let{cartFormInput:r,...n}=t,{action:o,inputs:s}=r?JSON.parse(String(r)):{};return{action:o,inputs:{...s,...n}}}x.getFormInput=pt;var Ie="__h_pending_";function ft(e){return Ie+e}function de(e){return e.startsWith(Ie)}function Gt(e){let t=Oe();if(!t||!t.length)return e;let r=e!=null&&e.lines?structuredClone(e):{lines:{nodes:[]}},n=r.lines.nodes,o=!1;for(let{formData:s}of t){if(!s)continue;let i=x.getFormInput(s);if(i.action===x.ACTIONS.LinesAdd)for(let a of i.inputs.lines){if(!a.selectedVariant){console.error("[h2:error:useOptimisticCart] No selected variant was passed in the cart action. Make sure to pass the selected variant if you want to use an optimistic cart");continue}let c=n.find(d=>{var u;return d.merchandise.id===((u=a.selectedVariant)==null?void 0:u.id)});o=!0,c?(c.quantity=(c.quantity||1)+(a.quantity||1),c.isOptimistic=!0):n.unshift({id:ft(a.selectedVariant.id),merchandise:a.selectedVariant,isOptimistic:!0,quantity:a.quantity||1})}else if(i.action===x.ACTIONS.LinesRemove)for(let a of i.inputs.lineIds){let c=n.findIndex(d=>d.id===a);if(c!==-1){if(de(n[c].id)){console.error("[h2:error:useOptimisticCart] Tried to remove an optimistic line that has not been added to the cart yet");continue}n.splice(c,1),o=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to remove line '${a}' but it doesn't exist in the cart`)}else if(i.action===x.ACTIONS.LinesUpdate)for(let a of i.inputs.lines){let c=n.findIndex(d=>a.id===d.id);if(c>-1){if(de(n[c].id)){console.error("[h2:error:useOptimisticCart] Tried to update an optimistic line that has not been added to the cart yet");continue}n[c].quantity=a.quantity,n[c].quantity===0&&n.splice(c,1),o=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to update line '${a.id}' but it doesn't exist in the cart`)}}return o&&(r.isOptimistic=o),r}function Ft({handle:e,options:t=[],variants:r=[],productPath:n="products",children:o}){let s=r instanceof Array?r:R(r),{searchParams:i,path:a,alreadyOnProductPage:c}=ht(e,n),d=t.filter(u=>{var l;return((l=u==null?void 0:u.values)==null?void 0:l.length)===1});return p.createElement(p.Fragment,null,...p.useMemo(()=>t.filter(u=>{var l;return((l=u==null?void 0:u.values)==null?void 0:l.length)>1}).map(u=>{let l,m=[];for(let h of u.values){let f=new URLSearchParams(c?i:void 0);f.set(u.name,h),d.forEach(w=>{f.set(w.name,w.values[0])});let g=s.find(w=>{var V;return(V=w==null?void 0:w.selectedOptions)==null?void 0:V.every(b=>f.get(b==null?void 0:b.name)===(b==null?void 0:b.value))}),P=i.get(u.name),S=P?P===h:!1;S&&(l=h);let C="?"+f.toString();m.push({value:h,isAvailable:g?g.availableForSale:!0,to:a+C,search:C,isActive:S,variant:g})}return o({option:{name:u.name,value:l,values:m}})}),[t,s,o]))}function ht(e,t){let{pathname:r,search:n}=Z();return p.useMemo(()=>{let o=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(r),s=o&&o.length>0;t=t.startsWith("/")?t.substring(1):t;let i=s?`${o[0]}${t}/${e}`:`/${t}/${e}`;return{searchParams:new URLSearchParams(n),alreadyOnProductPage:i===r,path:i}},[r,n,e,t])}var Ae=p.createContext(void 0);Ae.Provider;var mt=()=>p.useContext(Ae);p.forwardRef((e,t)=>{let r=mt();return y.jsx("script",{suppressHydrationWarning:!0,...e,nonce:r,ref:t})});function U(e){let{type:t,data:r={},customData:n}=e,o=Z(),{publish:s,cart:i,prevCart:a,shop:c,customData:d}=Q(),u=o.pathname+o.search,l={...r,customData:{...d,...n},cart:i,prevCart:a,shop:c};return p.useEffect(()=>{c!=null&&c.shopId&&(l={...l,url:window.location.href},s(t,l))},[s,u,c==null?void 0:c.shopId]),null}function gt(e){return y.jsx(U,{...e,type:"page_viewed"})}function yt(e){return y.jsx(U,{...e,type:"product_viewed"})}function vt(e){return y.jsx(U,{...e,type:"collection_viewed"})}function _t(e){return y.jsx(U,{...e,type:"cart_viewed"})}function Et(e){return y.jsx(U,{...e,type:"search_viewed"})}function Pt(e){return y.jsx(U,{...e})}var M={PAGE_VIEWED:"page_viewed",PRODUCT_VIEWED:"product_viewed",COLLECTION_VIEWED:"collection_viewed",CART_VIEWED:"cart_viewed",SEARCH_VIEWED:"search_viewed",CART_UPDATED:"cart_updated",PRODUCT_ADD_TO_CART:"product_added_to_cart",PRODUCT_REMOVED_FROM_CART:"product_removed_from_cart",CUSTOM_EVENT:"custom_"},Ct="https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js",wt="https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js";function le(e){console.error(`[h2:error:useCustomerPrivacy] Unable to setup Customer Privacy API: Missing consent.${e} configuration.`)}function It(e){let{withPrivacyBanner:t=!0,onVisitorConsentCollected:r,onReady:n,...o}=e,s=p.useRef(!1),i=st(t?wt:Ct,{attributes:{id:"customer-privacy-api"}});p.useEffect(()=>{let a=c=>{r&&r(c.detail)};return document.addEventListener("visitorConsentCollected",a),()=>{document.removeEventListener("visitorConsentCollected",a)}},[r]),p.useEffect(()=>{var d,u;if(i!=="done"||s.current||(s.current=!0,o.checkoutDomain||le("checkoutDomain"),o.storefrontAccessToken||le("storefrontAccessToken"),(o.storefrontAccessToken.startsWith("shpat_")||o.storefrontAccessToken.length!==32)&&console.error("[h2:error:useCustomerPrivacy] It looks like you passed a private access token, make sure to use the public token"),t&&(window!=null&&window.privacyBanner)&&((d=window==null?void 0:window.privacyBanner)==null||d.loadBanner({checkoutRootDomain:o.checkoutDomain,storefrontAccessToken:o.storefrontAccessToken})),!((u=window.Shopify)!=null&&u.customerPrivacy)))return;let a=window.Shopify.customerPrivacy.setTrackingConsent;function c(l,m){a({...l,headlessStorefront:!0,checkoutRootDomain:o.checkoutDomain,storefrontAccessToken:o.storefrontAccessToken},m)}window.Shopify.customerPrivacy.setTrackingConsent=c,n&&n()},[i,t,o])}function At(){var e;try{return window.Shopify&&window.Shopify.customerPrivacy?(e=window.Shopify)==null?void 0:e.customerPrivacy:null}catch{return null}}function Tt(){let e=At();if(!e)throw new Error("Shopify Customer Privacy API not available. Must be used within a useEffect. Make sure to load the Shopify Customer Privacy API with useCustomerPrivacy() or <AnalyticsProvider>.");return e}function St({consent:e,onReady:t,domain:r}){let{subscribe:n,register:o,canTrack:s}=Q(),[i,a]=p.useState(!1),[c,d]=p.useState(!1),{ready:u}=o("Internal_Shopify_Analytics"),{ready:l}=o("Internal_Shopify_CustomerPrivacy"),m=()=>{i&&c&&t()},h=()=>{d(!0),l(),m()},{checkoutDomain:f,storefrontAccessToken:g,withPrivacyBanner:P}=e;return It({checkoutDomain:f||"mock.shop",storefrontAccessToken:g||"abcdefghijklmnopqrstuvwxyz123456",withPrivacyBanner:P,onVisitorConsentCollected:h,onReady:()=>{setTimeout(h,3e3)}}),ut({hasUserConsent:s(),domain:r}),p.useEffect(()=>{n(M.PAGE_VIEWED,Dt),n(M.PRODUCT_VIEWED,xt),n(M.COLLECTION_VIEWED,bt),n(M.SEARCH_VIEWED,Rt),n(M.PRODUCT_ADD_TO_CART,Ot),u(),a(!0),m()},[n,u]),null}function B(e){console.error(`[h2:error:ShopifyAnalytics] Unable to send Shopify analytics: Missing shop.${e} configuration.`)}function G(e){var n,o,s,i;let t=Tt(),r=t.analyticsProcessingAllowed();if(!((n=e==null?void 0:e.shop)!=null&&n.shopId)){B("shopId");return}if(!((o=e==null?void 0:e.shop)!=null&&o.acceptedLanguage)){B("acceptedLanguage");return}if(!((s=e==null?void 0:e.shop)!=null&&s.currency)){B("currency");return}if(!((i=e==null?void 0:e.shop)!=null&&i.hydrogenSubchannelId)){B("hydrogenSubchannelId");return}return{shopifySalesChannel:"hydrogen",...e.shop,hasUserConsent:r,...tt(),ccpaEnforced:!t.saleOfDataAllowed(),gdprEnforced:!(t.marketingAllowed()&&t.analyticsProcessingAllowed())}}function kt(e,t){if(t===null)return;let r=G(e);return r?{...r,cartId:t.id}:void 0}var k={};function Dt(e){let t=G(e);t&&(j({eventName:v.PAGE_VIEW_2,payload:{...t,...k}}),k={})}function xt(e){let t=G(e);if(t&&Te({eventName:Nt,productField:"products",variantField:"product.<displayed_variant>",fromSource:"product_viewed products array",products:e.products})){let r=K(e.products);k={pageType:N.product,resourceId:r[0].productGid},t={...t,...k,products:K(e.products)},j({eventName:v.PRODUCT_VIEW,payload:t})}}function bt(e){let t=G(e);t&&(k={pageType:N.collection,resourceId:e.collection.id},t={...t,...k,collectionHandle:e.collection.handle},j({eventName:v.COLLECTION_VIEW,payload:t}))}function Rt(e){let t=G(e);t&&(k={pageType:N.search},t={...t,...k,searchString:e.searchTerm},j({eventName:v.SEARCH_VIEW,payload:t}))}function Ot(e){let{cart:t,currentLine:r}=e,n=kt(e,t);!n||!(r!=null&&r.id)||Lt({matchedLine:r,eventPayload:n})}function Lt({matchedLine:e,eventPayload:t}){let r={id:e.merchandise.product.id,variantId:e.id,title:e.merchandise.product.title,variantTitle:e.merchandise.title,vendor:e.merchandise.product.vendor,price:e.merchandise.price.amount,quantity:e.quantity,productType:e.merchandise.product.productType,sku:e.merchandise.sku};Te({eventName:Ut,productField:"merchandise.product",variantField:"merchandise",fromSource:"cart query",products:[r]})&&j({eventName:v.ADD_TO_CART,payload:{...t,products:K([r])}})}var Nt="Product viewed",Ut="Add to cart";function D(e,t,r){console.error(`[h2:error:ShopifyAnalytics] ${e}: ${t} is required from the ${r}.`)}function Te({eventName:e,productField:t,variantField:r,products:n,fromSource:o}){return!n||n.length===0?(D(e,`${t}`,o),!1):(n.forEach(s=>{if(!s.id)return D(e,`${t}.id`,o),!1;if(!s.title)return D(e,`${t}.title`,o),!1;if(!s.price)return D(e,`${r}.price.amount`,o),!1;if(!s.vendor)return D(e,`${t}.vendor`,o),!1;if(!s.variantId)return D(e,`${r}.id`,o),!1;if(!s.variantTitle)return D(e,`${r}.title`,o),!1}),!0)}function K(e){return e.map(t=>{let r={productGid:t.id,variantGid:t.variantId,name:t.title,variantName:t.variantTitle,brand:t.vendor,price:t.price,quantity:t.quantity||1,category:t.productType};return t.sku&&(r.sku=t.sku),t.productType&&(r.category=t.productType),r})}function pe(e){console.error(`[h2:error:CartAnalytics] Unable to set up cart analytics events: ${e} is missing.`)}function Vt({cart:e,setCarts:t}){let{publish:r,shop:n,customData:o,canTrack:s,cart:i,prevCart:a}=Q(),c=p.useRef(null);return p.useEffect(()=>{if(e)return Promise.resolve(e).then(d=>{if(d&&d.lines){if(!d.id){pe("cart.id");return}if(!d.updatedAt){pe("cart.updatedAt");return}}t(({cart:u,prevCart:l})=>(d==null?void 0:d.updatedAt)!==(u==null?void 0:u.updatedAt)?{cart:d,prevCart:u}:{cart:u,prevCart:l})}),()=>{}},[t,e]),p.useEffect(()=>{if(!i||!(i!=null&&i.updatedAt)||(i==null?void 0:i.updatedAt)===(a==null?void 0:a.updatedAt))return;let d;try{d=JSON.parse(localStorage.getItem("cartLastUpdatedAt")||"")}catch{d=null}if(i.id===(d==null?void 0:d.id)&&i.updatedAt===(d==null?void 0:d.updatedAt))return;let u={eventTimestamp:Date.now(),cart:i,prevCart:a,shop:n,customData:o};if(i.updatedAt===c.current)return;c.current=i.updatedAt,r("cart_updated",u),localStorage.setItem("cartLastUpdatedAt",JSON.stringify({id:i.id,updatedAt:i.updatedAt}));let l=a!=null&&a.lines?R(a==null?void 0:a.lines):[],m=i.lines?R(i.lines):[];l==null||l.forEach(h=>{let f=m.filter(g=>h.id===g.id);if((f==null?void 0:f.length)===1){let g=f[0];h.quantity<g.quantity?r("product_added_to_cart",{...u,prevLine:h,currentLine:g}):h.quantity>g.quantity&&r("product_removed_from_cart",{...u,prevLine:h,currentLine:g})}else r("product_removed_from_cart",{...u,prevLine:h})}),m==null||m.forEach(h=>{let f=l.filter(g=>h.id===g.id);(!f||f.length===0)&&r("product_added_to_cart",{...u,currentLine:h})})},[i,a,r,n,o,s]),null}var $t={canTrack:()=>!1,cart:null,customData:{},prevCart:null,publish:()=>{},shop:null,subscribe:()=>{},register:()=>({ready:()=>{}})},Se=p.createContext($t),J=new Map,q={};function ke(){return Object.values(q).every(Boolean)}function fe(e,t){var r;J.has(e)||J.set(e,new Map),(r=J.get(e))==null||r.set(t.toString(),t)}var Y=new Map;function he(e,t){if(!ke()){Y.set(e,t);return}De(e,t)}function De(e,t){(J.get(e)??new Map).forEach((r,n)=>{try{r(t)}catch(o){typeof o=="object"&&o instanceof Error?console.error("Analytics publish error",o.message,n,o.stack):console.error("Analytics publish error",o,n)}})}function me(e){return q.hasOwnProperty(e)||(q[e]=!1),{ready:()=>{q[e]=!0,ke()&&Y.size>0&&(Y.forEach((t,r)=>{De(r,t)}),Y.clear())}}}function ge(){try{return window.Shopify.customerPrivacy.analyticsProcessingAllowed()}catch{}return!1}function ye(e,t){return`[h2:error:Analytics.Provider] - ${e} is required. Make sure ${t} is defined in your environment variables. See https://h2o.fyi/analytics/consent to learn how to setup environment variables in the Shopify admin.`}function Mt({canTrack:e,cart:t,children:r,consent:n,customData:o={},shop:s=null,disableThrowOnError:i=!1,cookieDomain:a}){var S;let c=p.useRef(!1),{shop:d}=qt(s),[u,l]=p.useState(!!e),[m,h]=p.useState({cart:null,prevCart:null}),[f,g]=p.useState(e?()=>e:()=>ge);if(d)if(/\/68817551382$/.test(d.shopId))dt("[h2:error:Analytics.Provider] - Mock shop is used. Analytics will not work properly.");else{if(!n.checkoutDomain){let C=ye("consent.checkoutDomain","PUBLIC_CHECKOUT_DOMAIN");ue(C)}if(!n.storefrontAccessToken){let C=ye("consent.storefrontAccessToken","PUBLIC_STOREFRONT_API_TOKEN");ue(C)}}let P=p.useMemo(()=>({canTrack:f,...m,customData:o,publish:f()?he:()=>{},shop:d,subscribe:fe,register:me}),[u,f(),f,JSON.stringify(f),m,(S=m.cart)==null?void 0:S.updatedAt,m.prevCart,he,fe,o,d,me,JSON.stringify(q)]);return y.jsxs(Se.Provider,{value:P,children:[r,!!d&&y.jsx(gt,{}),!!d&&!!t&&y.jsx(Vt,{cart:t,setCarts:h}),!!d&&n.checkoutDomain&&y.jsx(St,{consent:n,onReady:()=>{c.current=!0,l(!0),g(()=>ge)},domain:a})]})}function Q(){let e=p.useContext(Se);if(!e)throw new Error("[h2:error:useAnalytics] 'useAnalytics()' must be a descendent of <AnalyticsProvider/>");return e}function qt(e){let[t,r]=p.useState(null);return p.useEffect(()=>(Promise.resolve(e).then(r),()=>{}),[r,e]),{shop:t}}var Ht={CartView:_t,CollectionView:vt,CustomView:Pt,ProductView:yt,Provider:Mt,SearchView:Et};export{x as G,Q as X,Ht as a,mt as b,R as f,Ft as m,Gt as p,jt as w};
