import{u as W}from"./list-9e2f7b0a.js";import{g as B,o as D,a as U,n as F,u as N,b as j,r as O,w as R,c as _,s as I,d as q,e as H,f as $,h as b,V as z,i as S,j as J,k as K,l as V,t as E,m as A,p as Q}from"./index-195dfc16.js";function P(e){return B()?(D(e),!0):!1}function C(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const s=()=>t(o);return P(s),{off:s}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(s=>s(...o)))}}function G(e){return typeof e=="function"?e():N(e)}const X=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Y=Object.prototype.toString,Z=e=>Y.call(e)==="[object Object]",ee=()=>{};function te(e){return e||j()}function ne(e,t=!0,n){te()?U(e,n):t?e():F(e)}function oe(e){var t;const n=G(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L=X?window:void 0;function se(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=L):[t,n,i,o]=e,!t)return ee;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const s=[],a=()=>{s.forEach(u=>u()),s.length=0},p=(u,r,l,c)=>(u.addEventListener(r,l,c),()=>u.removeEventListener(r,l,c)),y=R(()=>[oe(t),G(o)],([u,r])=>{if(a(),!u)return;const l=Z(r)?{...r}:r;s.push(...n.flatMap(c=>i.map(g=>p(u,c,g,l))))},{immediate:!0,flush:"post"}),m=()=>{y(),a()};return P(m),m}function re(){const e=O(!1);return j()&&U(()=>{e.value=!0}),e}function ie(e){const t=re();return _(()=>(t.value,!!e()))}function ae(e={}){const{window:t=L,requestPermissions:n=!0}=e,i=e,o=ie(()=>!!t&&"Notification"in t),s=O(o.value&&"permission"in Notification&&Notification.permission==="granted"),a=O(null),p=async()=>{if(o.value)return!s.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(s.value=!0),s.value},{on:y,trigger:m}=C(),{on:u,trigger:r}=C(),{on:l,trigger:c}=C(),{on:g,trigger:k}=C(),T=async d=>{if(!o.value||!s.value)return;const h=Object.assign({},i,d);return a.value=new Notification(h.title||"",h),a.value.onclick=m,a.value.onshow=r,a.value.onerror=c,a.value.onclose=k,a.value},w=()=>{a.value&&a.value.close(),a.value=null};if(n&&ne(p),P(w),o.value&&t){const d=t.document;se(d,"visibilitychange",h=>{h.preventDefault(),d.visibilityState==="visible"&&w()})}return{isSupported:o,notification:a,ensurePermissions:p,permissionGranted:s,show:T,close:w,onClick:y,onShow:u,onError:l,onClose:g}}const le={class:"mt-3"},ue={class:"my-3"},de={__name:"HomeView",setup(e){const t=W(),{currentItem:n,items:i,timeleft:o}=I(t),{setCurrentItem:s,countdown:a,setFinishedItem:p}=t,y=q(),{selectedAlarmFile:m,notify:u}=I(y),r={STOP:0,COUNTING:1,PAUSE:2},l=O(r.STOP);let c=0;const g=()=>{l.value===r.STOP&&i.value.length>0&&s(),l.value=r.COUNTING,c=setInterval(()=>{a(),o.value===0&&T(!0)},1e3)},k=()=>{l.value=r.PAUSE,clearInterval(c)},T=f=>{clearInterval(c),l.value=r.STOP;const v=new Audio;if(v.src=m.value,f&&v.play(),u.value){const{show:x,isSupported:M}=ae({title:"事項完成",body:n.value,icon:new URL(""+new URL("alarm-d3fb8358.png",import.meta.url).href,self.location).href});M.value&&x()}p(),i.value.length>0&&g()},w=_(()=>n.value.length>0?n.value:i.value.length>0?"點擊開始":"沒有事項"),d=_(()=>{const f=Math.floor(o.value/60).toString().padStart(2,"0"),v=(o.value%60).toString().padStart(2,"0");return f+":"+v}),h=_(()=>{let f=o.value%60;return f=f/60*100,f});return(f,v)=>(H(),$(z,{class:"h-100 d-flex justify-center align-center"},{default:b(()=>[S(Q,{rotate:360,size:500,width:20,"model-value":h.value,color:"teal",class:"text-center"},{default:b(()=>[S(J,null,{default:b(()=>[S(K,{cols:"12"},{default:b(()=>[V("h1",le,E(w.value),1),V("h1",ue,E(d.value),1),S(A,{variant:"text",icon:"mdi-play",disabled:l.value===r.COUNTING||N(n).length===0&&N(i).length===0,onClick:g},null,8,["disabled"]),S(A,{variant:"text",icon:"mdi-pause",disabled:l.value!==r.COUNTING,onClick:k},null,8,["disabled"]),S(A,{variant:"text",icon:"mdi-skip-next",disabled:N(n).length===0,onClick:v[0]||(v[0]=x=>T(!1))},null,8,["disabled"])]),_:1})]),_:1})]),_:1},8,["model-value"])]),_:1}))}};export{de as default};