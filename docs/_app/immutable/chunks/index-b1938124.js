function C(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function Q(){return Object.create(null)}function k(t){t.forEach(Y)}function Z(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Ht(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Gt(t,e,n,r){if(t){const s=tt(t,e,n,r);return t[0](s)}}function tt(t,e,n,r){return t[1]&&r?_t(n.ctx.slice(),t[1](r(e))):n.ctx}function Jt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)l[c]=e.dirty[c]|s[c];return l}return e.dirty|s}return e.dirty}function Kt(t,e,n,r,s,l){if(s){const i=tt(e,n,r,l);t.p(i,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const et=typeof window<"u";let mt=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):C;const E=new Set;function nt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&G(nt)}function pt(t){let e;return E.size===0&&G(nt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let L=!1;function yt(){L=!0}function gt(){L=!1}function wt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,d=(s>0&&e[n[s]].claim_order<=u?s+1:wt(1,s,a=>e[n[a]].claim_order,u))-1;r[o]=n[d]+1;const f=d+1;n[f]=o,s=Math.max(f,s)}const l=[],i=[];let c=e.length-1;for(let o=n[s]+1;o!=0;o=r[o-1]){for(l.push(e[o-1]);c>=o;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);l.reverse(),i.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<i.length;o++){for(;u<l.length&&i[o].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(i[o],d)}}function bt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=rt("style");return vt(it(t),e),e.sheet}function vt(t,e){bt(t.head||t,e)}function Et(t,e){if(L){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){L&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function kt(t){t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Xt(){return J(" ")}function Yt(){return J("")}function Zt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function te(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,r,s=!1){jt(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,e,n,r){return st(t,s=>s.nodeName===e,s=>{const l=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||l.push(c.name)}l.forEach(i=>s.removeAttribute(i))},()=>r(e))}function ne(t,e,n){return ot(t,e,n,rt)}function ie(t,e,n){return ot(t,e,n,St)}function At(t,e){return st(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>J(e),!0)}function re(t){return At(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e){t.value=e==null?"":e}function ce(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function le(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function ue(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const T=new Map;let z=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:$t(e),rules:{}};return T.set(t,n),n}function U(t,e,n,r,s,l,i,c=0){const o=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*l(p);u+=p*100+`%{${i(g,1-g)}}
`}const d=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Mt(d)}_${c}`,a=it(t),{stylesheet:h,rules:_}=T.get(a)||Rt(a,t);_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${d}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${s}ms 1 both`,z+=1,f}function qt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),z-=s,z||Dt())}function Dt(){G(()=>{z||(T.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),T.clear())})}let A;function j(t){A=t}function K(){if(!A)throw new Error("Function called outside component initialization");return A}function ae(t){K().$$.on_mount.push(t)}function fe(t){K().$$.after_update.push(t)}function _e(t,e){return K().$$.context.set(t,e),e}const N=[],V=[],O=[],X=[],ct=Promise.resolve();let W=!1;function lt(){W||(W=!0,ct.then(ut))}function de(){return lt(),ct}function B(t){O.push(t)}const I=new Set;let D=0;function ut(){const t=A;do{for(;D<N.length;){const e=N[D];D++,j(e),Ot(e.$$)}for(j(null),N.length=0,D=0;V.length;)V.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];I.has(n)||(I.add(n),n())}O.length=0}while(N.length);for(;X.length;)X.pop()();W=!1,I.clear(),j(t)}function Ot(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let S;function Pt(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function H(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const P=new Set;let b;function he(){b={r:0,c:[],p:b}}function me(){b.r||k(b.c),b=b.p}function at(t,e){t&&t.i&&(P.delete(t),t.i(e))}function Tt(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),b.c.push(()=>{P.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const zt={duration:0};function pe(t,e,n,r){let s=e(t,n),l=r?0:1,i=null,c=null,o=null;function u(){o&&qt(t,o)}function d(a,h){const _=a.b-l;return h*=Math.abs(_),{a:l,b:a.b,d:_,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:_=300,easing:y=ft,tick:p=C,css:g}=s||zt,$={start:mt()+h,b:a};a||($.group=b,b.r+=1),i||c?c=$:(g&&(u(),o=U(t,l,a,_,h,y,g)),a&&p(0,1),i=d($,_),B(()=>H(t,a,"start")),pt(v=>{if(c&&v>c.start&&(i=d(c,_),c=null,H(t,i.b,"start"),g&&(u(),o=U(t,l,i.b,i.duration,0,y,s.css))),i){if(v>=i.end)p(l=i.b,1-l),H(t,i.b,"end"),c||(i.b?u():--i.group.r||k(i.group.c)),i=null;else if(v>=i.start){const M=v-i.start;l=i.a+i.d*y(M/i.duration),p(l,1-l)}}return!!(i||c)}))}return{run(a){Z(s)?Pt().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=c=null}}}function ye(t,e){Tt(t,1,1,()=>{e.delete(t.key)})}function ge(t,e,n,r,s,l,i,c,o,u,d,f){let a=t.length,h=l.length,_=a;const y={};for(;_--;)y[t[_].key]=_;const p=[],g=new Map,$=new Map;for(_=h;_--;){const m=f(s,l,_),w=n(m);let x=i.get(w);x?r&&x.p(m,e):(x=u(w,m),x.c()),g.set(w,p[_]=x),w in y&&$.set(w,Math.abs(_-y[w]))}const v=new Set,M=new Set;function F(m){at(m,1),m.m(c,d),i.set(m.key,m),d=m.first,h--}for(;a&&h;){const m=p[h-1],w=t[a-1],x=m.key,R=w.key;m===w?(d=m.first,a--,h--):g.has(R)?!i.has(x)||v.has(x)?F(m):M.has(R)?a--:$.get(x)>$.get(R)?(M.add(x),F(m)):(v.add(R),a--):(o(w,i),a--)}for(;a--;){const m=t[a];g.has(m.key)||o(m,i)}for(;h;)F(p[h-1]);return p}function we(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const i=t[l],c=e[l];if(c){for(const o in i)o in c||(r[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);t[l]=c}else for(const o in i)s[o]=1}for(const i in r)i in n||(n[i]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}function be(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function Bt(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||B(()=>{const o=l.map(Y).filter(Z);i?i.push(...o):k(o),t.$$.on_mount=[]}),c.forEach(B)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(N.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,r,s,l,i,c=[-1]){const o=A;j(t);const u=t.$$={fragment:null,ctx:null,props:l,update:C,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Q(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...h)=>{const _=h.length?h[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=_)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](_),d&&Ft(t,f)),a}):[],u.update(),d=!0,k(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){yt();const f=Nt(e.target);u.fragment&&u.fragment.l(f),f.forEach(kt)}else u.fragment&&u.fragment.c();e.intro&&at(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),gt(),ut()}j(o)}class Ee{$destroy(){Lt(this,1),this.$destroy=C}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xe as A,Lt as B,_t as C,de as D,C as E,Gt as F,Kt as G,Qt as H,Jt as I,Et as J,B as K,oe as L,le as M,Zt as N,te as O,Vt as P,k as Q,Wt as R,Ee as S,ue as T,ft as U,pe as V,ge as W,ye as X,Ht as Y,St as Z,ie as _,Nt as a,ee as b,ne as c,kt as d,rt as e,ce as f,Ut as g,At as h,ve as i,se as j,Xt as k,Yt as l,re as m,he as n,Tt as o,me as p,at as q,_e as r,It as s,J as t,fe as u,ae as v,be as w,$e as x,Bt as y,we as z};
