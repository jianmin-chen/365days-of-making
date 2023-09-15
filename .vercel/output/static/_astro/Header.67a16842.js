import{j as d}from"./jsx-runtime.7d759e48.js";import{r as u}from"./index.8365acb2.js";let H={data:""},R=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||H,_=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,q=/\/\*[^]*?\*\/|  +/g,z=/\n+/g,x=(e,t)=>{let a="",o="",s="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":o+=r[1]=="f"?x(n,r):r+"{"+x(n,r[1]=="k"?"":t)+"}":typeof n=="object"?o+=x(n,t?t.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=x.p?x.p(r,n):r+":"+n+";")}return a+(t&&s?t+"{"+s+"}":s)+o},y={},L=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+L(e[a]);return t}return e},U=(e,t,a,o,s)=>{let r=L(e),n=y[r]||(y[r]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(r));if(!y[n]){let l=r!==e?e:(c=>{let p,h,f=[{}];for(;p=_.exec(c.replace(q,""));)p[4]?f.shift():p[3]?(h=p[3].replace(z," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][p[1]]=p[2].replace(z," ").trim();return f[0]})(e);y[n]=x(s?{["@keyframes "+n]:l}:l,a?"":"."+n)}let i=a&&y.g?y.g:null;return a&&(y.g=y[n]),((l,c,p,h)=>{h?c.data=c.data.replace(h,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(y[n],t,o,i),n},B=(e,t,a)=>e.reduce((o,s,r)=>{let n=t[r];if(n&&n.call){let i=n(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":x(i,""):i===!1?"":i}return o+s+(n??"")},"");function N(e){let t=this||{},a=e.call?e(t.p):e;return U(a.unshift?a.raw?B(a,[].slice.call(arguments,1),t.p):a.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):a,R(t.target),t.g,t.o,t.k)}let F,A,D;N.bind({g:1});let b=N.bind({k:1});function J(e,t,a,o){x.p=t,F=e,A=a,D=o}function v(e,t){let a=this||{};return function(){let o=arguments;function s(r,n){let i=Object.assign({},r),l=i.className||s.className;a.p=Object.assign({theme:A&&A()},i),a.o=/ *go\d+/.test(l),i.className=N.apply(a,o)+(l?" "+l:""),t&&(i.ref=n);let c=e;return e[0]&&(c=i.as||e,delete i.as),D&&c[0]&&D(i),F(c,i)}return t?t(s):s}}var Y=e=>typeof e=="function",O=(e,t)=>Y(e)?e(t):e,Z=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),G=20,k=new Map,Q=1e3,P=e=>{if(k.has(e))return;let t=setTimeout(()=>{k.delete(e),w({type:4,toastId:e})},Q);k.set(e,t)},V=e=>{let t=k.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,G)};case 1:return t.toast.id&&V(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?S(e,{type:1,toast:a}):S(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?P(o):e.toasts.forEach(r=>{P(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},$=[],C={toasts:[],pausedAt:void 0},w=e=>{C=S(C,e),$.forEach(t=>{t(C)})},W={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},X=(e={})=>{let[t,a]=u.useState(C);u.useEffect(()=>($.push(a),()=>{let s=$.indexOf(a);s>-1&&$.splice(s,1)}),[t]);let o=t.toasts.map(s=>{var r,n;return{...e,...e[s.type],...s,duration:s.duration||((r=e[s.type])==null?void 0:r.duration)||e?.duration||W[s.type],style:{...e.style,...(n=e[s.type])==null?void 0:n.style,...s.style}}});return{...t,toasts:o}},K=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||Z()}),j=e=>(t,a)=>{let o=K(t,e,a);return w({type:2,toast:o}),o.id},m=(e,t)=>j("blank")(e,t);m.error=j("error");m.success=j("success");m.loading=j("loading");m.custom=j("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,a)=>{let o=m.loading(t.loading,{...a,...a?.loading});return e.then(s=>(m.success(O(t.success,s),{id:o,...a,...a?.success}),s)).catch(s=>{m.error(O(t.error,s),{id:o,...a,...a?.error})}),e};var ee=(e,t)=>{w({type:1,toast:{id:e,height:t}})},te=()=>{w({type:5,time:Date.now()})},ae=e=>{let{toasts:t,pausedAt:a}=X(e);u.useEffect(()=>{if(a)return;let r=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,a]);let o=u.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),s=u.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},p=t.filter(g=>(g.position||c)===(r.position||c)&&g.height),h=p.findIndex(g=>g.id===r.id),f=p.filter((g,I)=>I<h&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,I)=>g+(I.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:ee,startPause:te,endPause:o,calculateOffset:s}}},re=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,se=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oe=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ie=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${re} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${oe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,le=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`,ce=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ue=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,pe=v("div")`
  position: absolute;
`,me=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,he=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ge=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(he,null,t):t:a==="blank"?null:u.createElement(me,null,u.createElement(le,{...o}),a!=="loading"&&u.createElement(pe,null,a==="error"?u.createElement(ie,{...o}):u.createElement(ue,{...o})))},ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,be=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,xe="0%{opacity:0;} 100%{opacity:1;}",ve="0%{opacity:1;} 100%{opacity:0;}",we=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,je=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ee=(e,t)=>{let a=e.includes("top")?1:-1,[o,s]=M()?[xe,ve]:[ye(a),be(a)];return{animation:t?`${b(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ke=u.memo(({toast:e,position:t,style:a,children:o})=>{let s=e.height?Ee(e.position||t||"top-center",e.visible):{opacity:0},r=u.createElement(ge,{toast:e}),n=u.createElement(je,{...e.ariaProps},O(e.message,e));return u.createElement(we,{className:e.className,style:{...s,...a,...e.style}},typeof o=="function"?o({icon:r,message:n}):u.createElement(u.Fragment,null,r,n))});J(u.createElement);var $e=({id:e,className:t,style:a,onHeightUpdate:o,children:s})=>{let r=u.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;o(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:r,className:t,style:a},s)},Ce=(e,t)=>{let a=e.includes("top"),o=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...o,...s}},Oe=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ne=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:s,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=ae(a);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let p=c.position||t,h=l.calculateOffset(c,{reverseOrder:e,gutter:o,defaultPosition:t}),f=Ce(p,h);return u.createElement($e,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Oe:"",style:f},c.type==="custom"?O(c.message,c):s?s(c):u.createElement(ke,{toast:c,position:p}))}))},T=m;function De({popup:e}){const t=u.useRef(null);return u.useEffect(()=>{document&&document.querySelector(".subscribe")?.addEventListener("click",()=>{t.current.classList.toggle("modal-open")})},[]),d.jsxs(d.Fragment,{children:[d.jsx(Ne,{toastOptions:{style:{fontFamily:"sans-serif"}}}),e!==!1&&d.jsxs("button",{className:"special",id:"modal-button",onClick:()=>{t.current.classList.toggle("modal-open")},children:[d.jsx("span",{children:"psst: you can subscribe to updates!"}),d.jsx("img",{src:"/dino.png"})]}),d.jsxs("header",{children:[d.jsxs("div",{children:[d.jsx("a",{href:"https://hackclub.com/",children:d.jsx("img",{style:{border:0,width:"200px",zIndex:"999"},src:"https://assets.hackclub.com/flag-orpheus-top.svg",alt:"Hack Club"})}),d.jsx("h1",{children:d.jsx("a",{href:"/",children:"365 Days of Making"})})]}),d.jsxs("div",{children:[d.jsx("h2",{children:"I'm going to learn something new and/or work on something cool everyday for the next 365 days!"}),d.jsxs("nav",{children:[d.jsx("h2",{children:d.jsx("a",{href:"/",children:"Entries"})}),d.jsx("h2",{children:"/"}),d.jsx("h2",{children:d.jsx("a",{href:"/start",children:"About & Start your own!"})})]})]})]}),d.jsx("div",{className:"modal",ref:t,onClick:()=>{t.current.classList.toggle("modal-open")},children:d.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[d.jsx("span",{className:"close",onClick:()=>{t.current.classList.toggle("modal-open")},children:"×"}),d.jsx("p",{style:{marginBottom:"0",marginTop:"0"},children:"My goal with this blog is to create helpful content for front-end web devs, and my newsletter is no different! I'll let you know when I publish new content, and I'll even share exclusive newsletter-only content now and then."}),d.jsxs("form",{onSubmit:a=>{a.preventDefault(),a.target.email?.value&&fetch("/api/subscribe",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:a.target.email.value})}).then(o=>{t.current.classList.remove("modal-open"),a.target.reset(),o.ok?T.success("Subscribed!"):T.error("Oops, there was an error subscribing - try again?")})},children:[d.jsx("input",{autoFocus:!0,placeholder:"Email",autoComplete:"off",name:"email",type:"email",required:!0}),d.jsx("button",{children:"→"})]})]})})]})}export{De as default};
