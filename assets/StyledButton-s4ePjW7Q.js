import{r as l,j as R,R as mt}from"./index-UszForRq.js";import{s as gt,a as j}from"./helper-H2rpVDS9.js";const N=l.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),M=l.createContext({}),_=l.createContext(null),U=typeof document<"u",ht=U?l.useLayoutEffect:l.useEffect,K=l.createContext({strict:!1}),q=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),yt="framerAppearId",pt="data-"+q(yt);function xt(t,e,n,s){const{visualElement:a}=l.useContext(M),r=l.useContext(K),c=l.useContext(_),u=l.useContext(N).reducedMotion,g=l.useRef();s=s||r.renderer,!g.current&&s&&(g.current=s(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=g.current;l.useInsertionEffect(()=>{d&&d.update(n,c)});const m=l.useRef(!!(n[pt]&&!window.HandoffComplete));return ht(()=>{d&&(d.render(),m.current&&d.animationState&&d.animationState.animateChanges())}),l.useEffect(()=>{d&&(d.updateFeatures(),!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(m.current=!1,window.HandoffComplete=!0))}),d}function wt(t){return typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function bt(t,e,n){return l.useCallback(s=>{s&&t.mount&&t.mount(s),e&&(s?e.mount(s):e.unmount()),n&&(typeof n=="function"?n(s):wt(n)&&(n.current=s))},[e])}function E(t){return typeof t=="string"||Array.isArray(t)}function Q(t){return typeof t=="object"&&typeof t.start=="function"}const Ct=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vt=["initial",...Ct];function O(t){return Q(t.animate)||vt.some(e=>E(t[e]))}function St(t){return!!(O(t)||t.variants)}function Vt(t,e){if(O(t)){const{initial:n,animate:s}=t;return{initial:n===!1||E(n)?n:void 0,animate:E(s)?s:void 0}}return t.inherit!==!1?e:{}}function Pt(t){const{initial:e,animate:n}=Vt(t,l.useContext(M));return l.useMemo(()=>({initial:e,animate:n}),[z(e),z(n)])}function z(t){return Array.isArray(t)?t.join(" "):t}const D={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},L={};for(const t in D)L[t]={isEnabled:e=>D[t].some(n=>!!e[n])};function Mt(t){for(const e in t)L[e]={...L[e],...t[e]}}const Tt=l.createContext({}),At=l.createContext({}),kt=Symbol.for("motionComponentSymbol");function Rt({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:s,Component:a}){t&&Mt(t);function r(u,g){let d;const m={...l.useContext(N),...u,layoutId:Et(u)},{isStatic:o}=m,f=Pt(u),h=s(u,o);if(!o&&U){f.visualElement=xt(a,h,m,e);const y=l.useContext(At),p=l.useContext(K).strict;f.visualElement&&(d=f.visualElement.loadFeatures(m,p,t,y))}return l.createElement(M.Provider,{value:f},d&&f.visualElement?l.createElement(d,{visualElement:f.visualElement,...m}):null,n(a,u,bt(h,f.visualElement,g),h,o,f.visualElement))}const c=l.forwardRef(r);return c[kt]=a,c}function Et({layoutId:t}){const e=l.useContext(Tt).id;return e&&t!==void 0?e+"-"+t:t}function Lt(t){function e(s,a={}){return Rt(t(s,a))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(s,a)=>(n.has(a)||n.set(a,e(a)),n.get(a))})}const Ot=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function J(t){return typeof t!="string"||t.includes("-")?!1:!!(Ot.indexOf(t)>-1||/[A-Z]/.test(t))}const tt={};function Se(t){Object.assign(tt,t)}const T=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],et=new Set(T);function nt(t,{layout:e,layoutId:n}){return et.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!tt[t]||t==="opacity")}const w=t=>!!(t&&t.getVelocity),Bt={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ft=T.length;function Wt(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},s,a){let r="";for(let c=0;c<Ft;c++){const u=T[c];if(t[u]!==void 0){const g=Bt[u]||u;r+=`${g}(${t[u]}) `}}return e&&!t.z&&(r+="translateZ(0)"),r=r.trim(),a?r=a(t,s?"":r):n&&s&&(r="none"),r}const at=t=>e=>typeof e=="string"&&e.startsWith(t),Ht=at("--"),Ve=at("var(--"),Pe=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,jt=(t,e)=>e&&typeof t=="number"?e.transform(t):t,zt=(t,e,n)=>Math.min(Math.max(n,t),e),B={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},A={...B,transform:t=>zt(0,1,t)},S={...B,default:1},Me=t=>Math.round(t*1e5)/1e5,Te=/(-)?([\d]*\.?[\d])+/g,Ae=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ke=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Dt(t){return typeof t=="string"}const v=t=>({test:e=>Dt(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),x=v("deg"),k=v("%"),i=v("px"),Re=v("vh"),Ee=v("vw"),$={...k,parse:t=>k.parse(t)/100,transform:t=>k.transform(t*100)},I={...B,transform:Math.round},$t={borderWidth:i,borderTopWidth:i,borderRightWidth:i,borderBottomWidth:i,borderLeftWidth:i,borderRadius:i,radius:i,borderTopLeftRadius:i,borderTopRightRadius:i,borderBottomRightRadius:i,borderBottomLeftRadius:i,width:i,maxWidth:i,height:i,maxHeight:i,size:i,top:i,right:i,bottom:i,left:i,padding:i,paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i,margin:i,marginTop:i,marginRight:i,marginBottom:i,marginLeft:i,rotate:x,rotateX:x,rotateY:x,rotateZ:x,scale:S,scaleX:S,scaleY:S,scaleZ:S,skew:x,skewX:x,skewY:x,distance:i,translateX:i,translateY:i,translateZ:i,x:i,y:i,z:i,perspective:i,transformPerspective:i,opacity:A,originX:$,originY:$,originZ:i,zIndex:I,fillOpacity:A,strokeOpacity:A,numOctaves:I};function st(t,e,n,s){const{style:a,vars:r,transform:c,transformOrigin:u}=t;let g=!1,d=!1,m=!0;for(const o in e){const f=e[o];if(Ht(o)){r[o]=f;continue}const h=$t[o],y=jt(f,h);if(et.has(o)){if(g=!0,c[o]=y,!m)continue;f!==(h.default||0)&&(m=!1)}else o.startsWith("origin")?(d=!0,u[o]=y):a[o]=y}if(e.transform||(g||s?a.transform=Wt(t.transform,n,m,s):a.transform&&(a.transform="none")),d){const{originX:o="50%",originY:f="50%",originZ:h=0}=u;a.transformOrigin=`${o} ${f} ${h}`}}const F=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rt(t,e,n){for(const s in e)!w(e[s])&&!nt(s,n)&&(t[s]=e[s])}function It({transformTemplate:t},e,n){return l.useMemo(()=>{const s=F();return st(s,e,{enableHardwareAcceleration:!n},t),Object.assign({},s.vars,s.style)},[e])}function Gt(t,e,n){const s=t.style||{},a={};return rt(a,s,t),Object.assign(a,It(t,e,n)),t.transformValues?t.transformValues(a):a}function Xt(t,e,n){const s={},a=Gt(t,e,n);return t.drag&&t.dragListener!==!1&&(s.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(s.tabIndex=0),s.style=a,s}const Yt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function P(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||Yt.has(t)}let ot=t=>!P(t);function Zt(t){t&&(ot=e=>e.startsWith("on")?!P(e):t(e))}try{Zt(require("@emotion/is-prop-valid").default)}catch{}function Nt(t,e,n){const s={};for(const a in t)a==="values"&&typeof t.values=="object"||(ot(a)||n===!0&&P(a)||!e&&!P(a)||t.draggable&&a.startsWith("onDrag"))&&(s[a]=t[a]);return s}function G(t,e,n){return typeof t=="string"?t:i.transform(e+n*t)}function _t(t,e,n){const s=G(e,t.x,t.width),a=G(n,t.y,t.height);return`${s} ${a}`}const Ut={offset:"stroke-dashoffset",array:"stroke-dasharray"},Kt={offset:"strokeDashoffset",array:"strokeDasharray"};function qt(t,e,n=1,s=0,a=!0){t.pathLength=1;const r=a?Ut:Kt;t[r.offset]=i.transform(-s);const c=i.transform(e),u=i.transform(n);t[r.array]=`${c} ${u}`}function it(t,{attrX:e,attrY:n,attrScale:s,originX:a,originY:r,pathLength:c,pathSpacing:u=1,pathOffset:g=0,...d},m,o,f){if(st(t,d,m,f),o){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:y,dimensions:p}=t;h.transform&&(p&&(y.transform=h.transform),delete h.transform),p&&(a!==void 0||r!==void 0||y.transform)&&(y.transformOrigin=_t(p,a!==void 0?a:.5,r!==void 0?r:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),s!==void 0&&(h.scale=s),c!==void 0&&qt(h,c,u,g,!1)}const ct=()=>({...F(),attrs:{}}),lt=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Qt(t,e,n,s){const a=l.useMemo(()=>{const r=ct();return it(r,e,{enableHardwareAcceleration:!1},lt(s),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};rt(r,t.style,t),a.style={...r,...a.style}}return a}function Jt(t=!1){return(n,s,a,{latestValues:r},c)=>{const g=(J(n)?Qt:Xt)(s,r,c,n),m={...Nt(s,typeof n=="string",t),...g,ref:a},{children:o}=s,f=l.useMemo(()=>w(o)?o.get():o,[o]);return l.createElement(n,{...m,children:f})}}function te(t,{style:e,vars:n},s,a){Object.assign(t.style,e,a&&a.getProjectionStyles(s));for(const r in n)t.style.setProperty(r,n[r])}const ee=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ne(t,e,n,s){te(t,e,void 0,s);for(const a in e.attrs)t.setAttribute(ee.has(a)?a:q(a),e.attrs[a])}function ut(t,e){const{style:n}=t,s={};for(const a in n)(w(n[a])||e.style&&w(e.style[a])||nt(a,t))&&(s[a]=n[a]);return s}function ae(t,e){const n=ut(t,e);for(const s in t)if(w(t[s])||w(e[s])){const a=T.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[a]=t[s]}return n}function se(t,e,n,s={},a={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,s,a)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,s,a)),e}function re(t){const e=l.useRef(null);return e.current===null&&(e.current=t()),e.current}const oe=t=>Array.isArray(t),ie=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Le=t=>oe(t)?t[t.length-1]||0:t;function ce(t){const e=w(t)?t.get():t;return ie(e)?e.toValue():e}function le({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},s,a,r){const c={latestValues:ue(s,a,r,t),renderState:e()};return n&&(c.mount=u=>n(s,u,c)),c}const ft=t=>(e,n)=>{const s=l.useContext(M),a=l.useContext(_),r=()=>le(t,e,s,a);return n?r():re(r)};function ue(t,e,n,s){const a={},r=s(t,{});for(const f in r)a[f]=ce(r[f]);let{initial:c,animate:u}=t;const g=O(t),d=St(t);e&&d&&!g&&t.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=n?n.initial===!1:!1;m=m||c===!1;const o=m?u:c;return o&&typeof o!="boolean"&&!Q(o)&&(Array.isArray(o)?o:[o]).forEach(h=>{const y=se(t,h);if(!y)return;const{transitionEnd:p,transition:W,...H}=y;for(const C in H){let b=H[C];if(Array.isArray(b)){const dt=m?b.length-1:0;b=b[dt]}b!==null&&(a[C]=b)}for(const C in p)a[C]=p[C]}),a}const fe=t=>t;class X{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function de(t){let e=new X,n=new X,s=0,a=!1,r=!1;const c=new WeakSet,u={schedule:(g,d=!1,m=!1)=>{const o=m&&a,f=o?e:n;return d&&c.add(g),f.add(g)&&o&&a&&(s=e.order.length),g},cancel:g=>{n.remove(g),c.delete(g)},process:g=>{if(a){r=!0;return}if(a=!0,[e,n]=[n,e],n.clear(),s=e.order.length,s)for(let d=0;d<s;d++){const m=e.order[d];m(g),c.has(m)&&(u.schedule(m),t())}a=!1,r&&(r=!1,u.process(g))}};return u}const V=["prepare","read","update","preRender","render","postRender"],me=40;function ge(t,e){let n=!1,s=!0;const a={delta:0,timestamp:0,isProcessing:!1},r=V.reduce((o,f)=>(o[f]=de(()=>n=!0),o),{}),c=o=>r[o].process(a),u=()=>{const o=performance.now();n=!1,a.delta=s?1e3/60:Math.max(Math.min(o-a.timestamp,me),1),a.timestamp=o,a.isProcessing=!0,V.forEach(c),a.isProcessing=!1,n&&e&&(s=!1,t(u))},g=()=>{n=!0,s=!0,a.isProcessing||t(u)};return{schedule:V.reduce((o,f)=>{const h=r[f];return o[f]=(y,p=!1,W=!1)=>(n||g(),h.schedule(y,p,W)),o},{}),cancel:o=>V.forEach(f=>r[f].cancel(o)),state:a,steps:r}}const{schedule:Y,cancel:Oe,state:Be,steps:Fe}=ge(typeof requestAnimationFrame<"u"?requestAnimationFrame:fe,!0),he={useVisualState:ft({scrapeMotionValuesFromProps:ae,createRenderState:ct,onMount:(t,e,{renderState:n,latestValues:s})=>{Y.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Y.render(()=>{it(n,s,{enableHardwareAcceleration:!1},lt(e.tagName),t.transformTemplate),ne(e,n)})}})},ye={useVisualState:ft({scrapeMotionValuesFromProps:ut,createRenderState:F})};function pe(t,{forwardMotionProps:e=!1},n,s){return{...J(t)?he:ye,preloadedFeatures:n,useRender:Jt(e),createVisualElement:s,Component:t}}const xe=Lt(pe),we=l.memo(l.forwardRef(({children:t,...e},n)=>R.jsx(xe.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...e,ref:n,children:t}))),be=t=>mt.createElement("a",t,t.children),Z=gt({base:"inline-flex items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:j("bg-accent text-zinc-100","active:contrast-125 hover:contrast-[1.10]","font-semibold","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed","dark:text-neutral-800"),secondary:j("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed")}}}),We=({variant:t="primary",className:e,href:n,...s})=>n?R.jsx(be,{href:n,className:Z({variant:t,className:e}),...s}):R.jsx(we,{className:Z({variant:t,className:e}),...s});export{te as $,Re as A,Le as B,pt as C,Q as D,oe as E,Ct as F,E as G,wt as H,Se as I,At as J,Fe as K,Tt as L,we as M,ce as N,tt as O,_ as P,Ve as Q,T as R,We as S,U as T,O as U,St as V,L as W,vt as X,Ht as Y,st as Z,ut as _,re as a,ee as a0,q as a1,ae as a2,it as a3,ne as a4,lt as a5,J as a6,Mt as a7,K as a8,be as b,N as c,Oe as d,Dt as e,Y as f,Te as g,Me as h,w as i,A as j,B as k,zt as l,xe as m,fe as n,Ae as o,k as p,Pe as q,se as r,ke as s,Be as t,ht as u,et as v,$t as w,i as x,x as y,Ee as z};
