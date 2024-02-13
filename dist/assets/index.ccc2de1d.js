(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();var q,u,be,F,ne,z={},ke=[],Oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var o in t)e[o]=t[o];return e}function ve(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,o){var r,s,n,c={};for(n in t)n=="key"?r=t[n]:n=="ref"?s=t[n]:c[n]=t[n];if(arguments.length>2&&(c.children=arguments.length>3?q.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)c[n]===void 0&&(c[n]=e.defaultProps[n]);return T(e,c,r,s,null)}function T(e,t,o,r,s){var n={type:e,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++be:s};return s==null&&u.vnode!=null&&u.vnode(n),n}function A(e){return e.children}function N(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__.__k.indexOf(e)+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?P(e):null}function Ce(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return Ce(e)}}function re(e){(!e.__d&&(e.__d=!0)&&F.push(e)&&!B.__r++||ne!==u.debounceRendering)&&((ne=u.debounceRendering)||setTimeout)(B)}function B(){for(var e;B.__r=F.length;)e=F.sort(function(t,o){return t.__v.__b-o.__v.__b}),F=[],e.some(function(t){var o,r,s,n,c,p;t.__d&&(c=(n=(o=t).__v).__e,(p=o.__P)&&(r=[],(s=C({},n)).__v=n.__v+1,J(p,n,s,o.__n,p.ownerSVGElement!==void 0,n.__h!=null?[c]:null,r,c==null?P(n):c,n.__h),Pe(r,n),n.__e!=c&&Ce(n)))})}function xe(e,t,o,r,s,n,c,p,m,f){var i,d,_,a,h,x,g,w=r&&r.__k||ke,v=w.length;for(o.__k=[],i=0;i<t.length;i++)if((a=o.__k[i]=(a=t[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(A,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=o,a.__b=o.__b+1,(_=w[i])===null||_&&a.key==_.key&&a.type===_.type)w[i]=void 0;else for(d=0;d<v;d++){if((_=w[d])&&a.key==_.key&&a.type===_.type){w[d]=void 0;break}_=null}J(e,a,_=_||z,s,n,c,p,m,f),h=a.__e,(d=a.ref)&&_.ref!=d&&(g||(g=[]),_.ref&&g.push(_.ref,null,a),g.push(d,a.__c||h,a)),h!=null?(x==null&&(x=h),typeof a.type=="function"&&a.__k===_.__k?a.__d=m=Se(a,m,e):m=Le(e,a,_,w,h,m),typeof o.type=="function"&&(o.__d=m)):m&&_.__e==m&&m.parentNode!=e&&(m=P(_))}for(o.__e=x,i=v;i--;)w[i]!=null&&(typeof o.type=="function"&&w[i].__e!=null&&w[i].__e==o.__d&&(o.__d=P(r,i+1)),Ee(w[i],w[i]));if(g)for(i=0;i<g.length;i++)Ae(g[i],g[++i],g[++i])}function Se(e,t,o){for(var r,s=e.__k,n=0;s&&n<s.length;n++)(r=s[n])&&(r.__=e,t=typeof r.type=="function"?Se(r,t,o):Le(o,r,r,s,r.__e,t));return t}function Le(e,t,o,r,s,n){var c,p,m;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(o==null||s!=n||s.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(s),c=null;else{for(p=n,m=0;(p=p.nextSibling)&&m<r.length;m+=2)if(p==s)break e;e.insertBefore(s,n),c=n}return c!==void 0?c:s.nextSibling}function Ue(e,t,o,r,s){var n;for(n in o)n==="children"||n==="key"||n in t||O(e,n,null,o[n],r);for(n in t)s&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||o[n]===t[n]||O(e,n,t[n],o[n],r)}function se(e,t,o){t[0]==="-"?e.setProperty(t,o):e[t]=o==null?"":typeof o!="number"||Oe.test(t)?o:o+"px"}function O(e,t,o,r,s){var n;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)o&&t in o||se(e.style,t,"");if(o)for(t in o)r&&o[t]===r[t]||se(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=o,o?r||e.addEventListener(t,n?ce:ie,n):e.removeEventListener(t,n?ce:ie,n);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=o==null?"":o;break e}catch{}typeof o=="function"||(o!=null&&(o!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,o):e.removeAttribute(t))}}function ie(e){this.l[e.type+!1](u.event?u.event(e):e)}function ce(e){this.l[e.type+!0](u.event?u.event(e):e)}function J(e,t,o,r,s,n,c,p,m){var f,i,d,_,a,h,x,g,w,v,E,oe,H,k=t.type;if(t.constructor!==void 0)return null;o.__h!=null&&(m=o.__h,p=t.__e=o.__e,t.__h=null,n=[p]),(f=u.__b)&&f(t);try{e:if(typeof k=="function"){if(g=t.props,w=(f=k.contextType)&&r[f.__c],v=f?w?w.props.value:f.__:r,o.__c?x=(i=t.__c=o.__c).__=i.__E:("prototype"in k&&k.prototype.render?t.__c=i=new k(g,v):(t.__c=i=new N(g,v),i.constructor=k,i.render=Ve),w&&w.sub(i),i.props=g,i.state||(i.state={}),i.context=v,i.__n=r,d=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,k.getDerivedStateFromProps(g,i.__s))),_=i.props,a=i.state,d)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&g!==_&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,v),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,v)===!1||t.__v===o.__v){i.props=g,i.state=i.__s,t.__v!==o.__v&&(i.__d=!1),i.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(M){M&&(M.__=t)}),i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,v),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(_,a,h)})}if(i.context=v,i.props=g,i.__v=t,i.__P=e,E=u.__r,oe=0,"prototype"in k&&k.prototype.render)i.state=i.__s,i.__d=!1,E&&E(t),f=i.render(i.props,i.state,i.context);else do i.__d=!1,E&&E(t),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++oe<25);i.state=i.__s,i.getChildContext!=null&&(r=C(C({},r),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(h=i.getSnapshotBeforeUpdate(_,a)),H=f!=null&&f.type===A&&f.key==null?f.props.children:f,xe(e,Array.isArray(H)?H:[H],t,o,r,s,n,c,p,m),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),x&&(i.__E=i.__=null),i.__e=!1}else n==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=qe(o.__e,t,o,r,s,n,c,m);(f=u.diffed)&&f(t)}catch(M){t.__v=null,(m||n!=null)&&(t.__e=p,t.__h=!!m,n[n.indexOf(p)]=null),u.__e(M,t,o)}}function Pe(e,t){u.__c&&u.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){u.__e(r,o.__v)}})}function qe(e,t,o,r,s,n,c,p){var m,f,i,d=o.props,_=t.props,a=t.type,h=0;if(a==="svg"&&(s=!0),n!=null){for(;h<n.length;h++)if((m=n[h])&&"setAttribute"in m==!!a&&(a?m.localName===a:m.nodeType===3)){e=m,n[h]=null;break}}if(e==null){if(a===null)return document.createTextNode(_);e=s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,_.is&&_),n=null,p=!1}if(a===null)d===_||p&&e.data===_||(e.data=_);else{if(n=n&&q.call(e.childNodes),f=(d=o.props||z).dangerouslySetInnerHTML,i=_.dangerouslySetInnerHTML,!p){if(n!=null)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(i||f)&&(i&&(f&&i.__html==f.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Ue(e,_,d,s,p),i)t.__k=[];else if(h=t.props.children,xe(e,Array.isArray(h)?h:[h],t,o,r,s&&a!=="foreignObject",n,c,n?n[0]:o.__k&&P(o,0),p),n!=null)for(h=n.length;h--;)n[h]!=null&&ve(n[h]);p||("value"in _&&(h=_.value)!==void 0&&(h!==e.value||a==="progress"&&!h||a==="option"&&h!==d.value)&&O(e,"value",h,d.value,!1),"checked"in _&&(h=_.checked)!==void 0&&h!==e.checked&&O(e,"checked",h,d.checked,!1))}return e}function Ae(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,o)}}function Ee(e,t,o){var r,s;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ae(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){u.__e(n,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&Ee(r[s],t,typeof e.type!="function");o||e.__e==null||ve(e.__e),e.__=e.__e=e.__d=void 0}function Ve(e,t,o){return this.constructor(e,o)}function Ie(e,t,o){var r,s,n;u.__&&u.__(e,t),s=(r=typeof o=="function")?null:o&&o.__k||t.__k,n=[],J(t,e=(!r&&o||t).__k=l(A,null,[e]),s||z,z,t.ownerSVGElement!==void 0,!r&&o?[o]:s?null:t.firstChild?q.call(t.childNodes):null,n,!r&&o?o:s?s.__e:t.firstChild,r),Pe(n,e)}q=ke.slice,u={__e:function(e,t,o,r){for(var s,n,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,r||{}),c=s.__d),c)return s.__E=s}catch(p){e=p}throw e}},be=0,N.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},o),this.props)),e&&C(o,e),e!=null&&this.__v&&(t&&this.__h.push(t),re(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),re(this))},N.prototype.render=A,F=[],B.__r=0;var V,y,R,ae,U=0,Fe=[],$=[],le=u.__b,ue=u.__r,_e=u.diffed,he=u.__c,pe=u.unmount;function ee(e,t){u.__h&&u.__h(y,e,U||t),U=0;var o=y.__H||(y.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:$}),o.__[e]}function He(e){return U=1,Re(Te,e)}function Re(e,t,o){var r=ee(V++,2);if(r.t=e,!r.__c&&(r.__=[o?o(t):Te(void 0,t),function(n){var c=r.__N?r.__N[0]:r.__[0],p=r.t(c,n);c!==p&&(r.__N=[p,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var s=y.shouldComponentUpdate;y.shouldComponentUpdate=function(n,c,p){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(i){return i.__c});if(m.every(function(i){return!i.__N}))return!s||s.call(this,n,c,p);var f=!1;return m.forEach(function(i){if(i.__N){var d=i.__[0];i.__=i.__N,i.__N=void 0,d!==i.__[0]&&(f=!0)}}),!!f&&(!s||s.call(this,n,c,p))}}return r.__N||r.__}function Ge(e,t){var o=ee(V++,3);!u.__s&&Me(o.__H,t)&&(o.__=e,o.i=t,y.__H.__h.push(o))}function We(e){return U=5,Ke(function(){return{current:e}},[])}function Ke(e,t){var o=ee(V++,7);return Me(o.__H,t)?(o.__V=e(),o.i=t,o.__h=e,o.__V):o.__}function Qe(){for(var e;e=Fe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(D),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){typeof e.type!="function"||e.o||e.type===A?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,le&&le(e)},u.__r=function(e){ue&&ue(e),V=0;var t=(y=e.__c).__H;t&&(R===y?(t.__h=[],y.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=$,o.__N=o.i=void 0})):(t.__h.forEach(D),t.__h.forEach(K),t.__h=[])),R=y},u.diffed=function(e){_e&&_e(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Fe.push(t)!==1&&ae===u.requestAnimationFrame||((ae=u.requestAnimationFrame)||Xe)(Qe)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==$&&(o.__=o.__V),o.i=void 0,o.__V=$})),R=y=null},u.__c=function(e,t){t.some(function(o){try{o.__h.forEach(D),o.__h=o.__h.filter(function(r){return!r.__||K(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],u.__e(r,o.__v)}}),he&&he(e,t)},u.unmount=function(e){pe&&pe(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(r){try{D(r)}catch(s){t=s}}),o.__H=void 0,t&&u.__e(t,o.__v))};var me=typeof requestAnimationFrame=="function";function Xe(e){var t,o=function(){clearTimeout(r),me&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(o,100);me&&(t=requestAnimationFrame(o))}function D(e){var t=y,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),y=t}function K(e){var t=y;e.__c=e.__(),y=t}function Me(e,t){return!e||e.length!==t.length||t.some(function(o,r){return o!==e[r]})}function Te(e,t){return typeof t=="function"?t(e):t}function Ye({link:e}){return l("li",{class:"directory-link"},l("a",{href:e.destination},e.text))}function Ze({category:e}){const{title:t,entries:o,subCategories:r}=e,s=o.map(fe);return l("section",{class:"category"},l("h2",null,t),l("div",{class:"columns "+Je(et(e))},s.length>0&&l("section",null,l("ul",null,s)),r.map(({title:n,entries:c})=>l("section",null,l("h3",null,n),l("ul",null,c.map(fe))))))}function Je(e){switch(!0){case e>=12:return"columns-3";case e>=6:return"columns-2";default:return"columns-1"}}function fe(e){return l(Ye,{link:e})}function et(e){return e.entries.length+e.subCategories.map(({entries:t})=>t.length).reduce(tt,0)}function tt(e,t){return e+t}function Ne(e){return l("button",{class:"raised-button",...e})}function ot(e){const[t,o]=He(!1),r=We(null);return Ge(()=>{if(!t)return;function s(){o(!1)}const n=r.current;return n==null||n.addEventListener("close",s),n==null||n.showModal(),()=>n==null?void 0:n.removeEventListener("close",s)},[t]),l("div",{class:"dev-info-pane-opener"},l(Ne,{onClick:()=>o(!0)},"Show Developer Info"),t&&l("dialog",{ref:r},e.children))}function nt(e){return l("div",{class:"dev-info-pane"},l("label",{for:"leechblock-config"},"LeechBlock Config"),l("textarea",{id:"leechblock-config"},`*
`,e.leechblockAllowPatterns.map(t=>"+"+t).join(`
`)))}function rt(e){const{config:t,query:o,onQuery:r,onSearchSubmitted:s}=e;return l(A,null,l("nav",{class:"menu"},t.menu.map((n,c)=>l("a",{href:n.destination,key:c},n.text))),l("div",{class:"podium"},l("div",{class:"omnisearch"},l("input",{type:"search",placeholder:"Search",autoFocus:!0,value:o,onKeyPress:n=>{n.key==="Enter"&&s(0)},onInput:n=>r(n.currentTarget.value)}),l("div",{class:"search-providers"},t.searchProviders.map((n,c)=>l(Ne,{key:c,onClick:()=>s(c)},n.name)))),l("article",null,t.categories.map(n=>l(Ze,{category:n}))),l("footer",null,l("hr",null),l("p",null,"Bastion is maintained by"," ",l("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),l("p",null,"The image that appears at the top of each page is"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"),"."),l("p",null,"Theme inspired by"," ",l("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."),l(ot,null,l(nt,{leechblockAllowPatterns:t.leechblockAllowPatterns})))))}const Q=Symbol(),X=Symbol(),Y=Symbol(),j=Symbol();function b(e,t){function o(...r){if(r.length>=e.length)return e(...r);{const s=(...n)=>o(...r,...n);return s[Q]=e,s[X]=o,s[Y]=r,s[j]=o[j],s}}return o[Q]=e,o[X]=o,o[Y]=[],o[j]=t||it(e),o}function G(e){return e[Q]}function st(e){return e[X]}function Z(e){return e[Y]||[]}function it(e){return e[j]||e.name}class ct extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const at=b(function(e,t){return e(t)},"which"),L=b(function(e,t){var o,r;if(lt(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((s,n)=>L(e[n],t[n]));if(e instanceof Function&&t instanceof Function)return G(e)&&G(e)===G(t)?L(Z(e),Z(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(s=>t.has(s));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(de(e)&&de(t)){const s=Object.keys(e),n=Object.keys(t);return s.length===n.length&&s.every(c=>L(e[c],t[c]))&&((o=e.__proto__)==null?void 0:o.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals");b(function(e,t){return e===t},"is");b(function(e,t,...o){return!e(t,...o)},"not");b(function(e){return/^\s*$/.test(e)},"isBlank");function de(e){return!!e&&typeof e=="object"}function lt(e){return e instanceof Function&&st(e)===at&&Z(e).length===1}b(function(t,o){return o.slice(0,t.length)===t?o.slice(t.length):o});b(function(t,o){return o instanceof ct&&L(t,o.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function ut(e){return e.replace(/^[^:]+:\/\//,"").replace(/^www\./,"").replace(/\/$/,"")}function $e(e){const[t,o,r]=_t(e);return{link:{text:t,destination:o},keywords:r}}function _t(e){const t=e.indexOf("|");let o,r;t===-1?(o=void 0,r=e):(o=e.slice(0,t).trim(),r=e.slice(t+1).trim());const[s,...n]=r.split(/\s+/);return[o!=null?o:ut(s),s,n]}function De(e){const t=e==null?void 0:e.trim();return t?t.split(/\s+/):[]}function je(e){return $e(e).link}const W=(e,...t)=>t.reduce((o,r)=>r(o),e);function ht(e){return e||[]}function S(e){return t=>t.map(e)}function ge(e){return t=>t.map(e).reduce(mt,[])}function pt(e){const t=[...e].sort();return t.filter((o,r)=>o!==t[r-1])}function mt(e,t){return e.concat(t)}function ft(e){const t=dt(e.menu),o=yt(e.categories),r=gt(e.searchProviders);return{menu:t,searchProviders:r,categories:o,leechblockAllowPatterns:pt([...W(t,S(s=>s.destination),S(ye)),...W(r,S(s=>s.searchUrlFormat),S(Ct)),...W(ht(o),ge(s=>[s,...s.subCategories]),ge(s=>s.entries),S(s=>s.link.destination),S(ye)),...wt(e.customLeechblockAllowPatterns)])}}function dt(e){return te(e).map(je)}function gt(e){return te(e).map(je).map(t=>({name:t.text,searchUrlFormat:t.destination}))}function yt(e){return(e!=null?e:[]).map(bt)}function wt(e){var t;return(t=e==null?void 0:e.trim().split(/\s+/))!=null?t:[]}function bt(e){var o;const t=De(e.keywords);return{title:e.title,entries:ze(e.entries,t),subCategories:((o=e.subCategories)!=null?o:[]).map(kt(t))}}const kt=b((e,t)=>({title:t.title,entries:ze(t.entries,e.concat(De(t.keywords)))}),"parseLeafCategory");function ze(e,t=[]){return te(e).map($e).map(o=>({...o,keywords:o.keywords.concat(t)}))}function te(e){return e?e.split(`
`).map(vt).filter(Boolean):[]}function vt(e){return e.trim()}function ye(e){return xt(()=>new URL(e).hostname,()=>e)}function Ct(e){const t=new URL(e),o=t.pathname==="/"?"":t.pathname;return t.hostname+o}function xt(e,t){try{return e()}catch{return t()}}const St={menu:`
    TV      | https://benchristel.github.io/tv
    Recipes | https://benchristel.github.io/recipes
    Bliki   | https://github.com/benchristel/benchristel.github.io/wiki
    Gmail   | https://mail.google.com
    Guide   | https://bensguide.substack.com
  `,searchProviders:`
    DuckDuckGo | https://html.duckduckgo.com/html/?q=%s
    YouTube | https://youtube.com/results?search_query=%s
    GitHub | https://github.com/search?q=%s
    NPM | https://www.npmjs.com/search?q=%s
    Openverse | https://openverse.org/search/?q=%s
    Unicode | https://www.fileformat.info/info/unicode/char/search.htm?q=%s&han=Y&preview=entity
    iconsdb | https://www.iconsdb.com/black-icons/?search=%s
    Cornish Dict. | https://cornishdictionary.org.uk/#%s
    Wikipedia | https://en.wikipedia.org/w/index.php?search=%s
  `,customLeechblockAllowPatterns:`
    bastionhome.github.io
    localhost
    127.0.0.1
    youtube.com/channel*
    youtube.com/@*
    youtube.com/playlist*
    youtube.com/results*
    youtube.com/watch*
    dasichuanrestaurant.com
    doordash.com
    yelp.com
    opentable.com
  `,categories:[{title:"Software Development",keywords:"software development",subCategories:[{title:"Engineering",keywords:"engineering",entries:`
            The Art of Unix Programming | http://www.catb.org/esr/writings/taoup/html/ Eric Raymond
            https://buildingbeauty.org Christopher Alexander Greg Bryant
            https://beautiful.software Christopher Alexander Greg Bryant
            https://refactoring.com Martin Fowler
            https://dreamsongs.com Richard Gabriel
          `},{title:"Unix",keywords:"unix",entries:`
            https://hub.docker.com
            https://man7.org
          `},{title:"Reference",keywords:"reference",entries:`
            https://unicode.org
            https://memorymanagement.org
            https://lawsofux.com
            https://cheatsheetseries.owasp.org
            https://www.w3.org world wide web consortium
          `},{title:"Web Programming",keywords:"web programming",entries:`
            NPM | https://npmjs.com node package manager javascript
            MDN | https://developer.mozilla.com network html css javascript js
            https://eslint.org
            https://cssreference.io
            https://css-tricks.com
            https://moderncss.dev
            https://marked.js.org
            https://vitejs.dev
            https://preactjs.com
            https://react.dev
            https://sqlite.org
            https://json.org
            https://jwt.io
            https://jsonpath.com
            Deno | https://deno.com javascript js node
            Deno Docs | https://docs.deno.com
            https://flow.org/
            https://typescriptlang.org
            https://iconsdb.com
            mdsite | https://benchristel.github.io/mdsite
            https://caniuse.com
            https://bun.sh javascript js node
            Build Your Own React | https://pomb.us/build-your-own-react/ didact
            https://codemirror.net
            https://eloquentjavascript.net
          `},{title:"Languages",entries:"Zig | https://ziglang.org"},{title:"Hosting",keywords:"hosting",entries:`
            https://gitlab.com
            https://surge.sh/
            fly.io | https://fly.io
            render.com | https://render.com
            cloudflare.com | https://cloudflare.com
            supabase.com | https://supabase.com
            digitalocean.com | https://digitalocean.com
            https://hub.docker.com
            https://adaptable.io
            alwaysdata.com | https://www.alwaysdata.com/en/
            https://www.argonaut.dev/
            https://www.cyclic.sh/
            https://domcloud.co/
            https://www.koyeb.com/
            https://www.northflank.com/
            https://www.withcoherence.com/
          `},{title:"Help",keywords:"help",entries:`
            stackoverflow.com | https://stackoverflow.com
            exercism.org | https://exercism.org
          `},{title:"On Mac OS",keywords:"apple macintosh",entries:`
            Homebrew | https://brew.sh
          `}]},{title:"Food",keywords:"food",subCategories:[{title:"Merchants",entries:`
            Sunridge Farms | https://shopsunridgefarms.com bulk
            https://herbco.com
            Byrd's Filling Station | https://byrdsfillingstation.com/pages/in-store-bulk-product-list-non-food
          `},{title:"Korean",keywords:"korean recipes cookbook",entries:`
            https://maangchi.com
            https://koreanbapsang.com
            https://mykoreankitchen.com
          `},{title:"Indian",keywords:"indian recipes cookbook",entries:`
            https://indianhealthyrecipes.com
            https://www.vegrecipesofindia.com
          `},{title:"Turkish",keywords:"turkish recipes cookbook",entries:`
            Ozlem's Turkish Table | https://ozlemsturkishtable.com/
            Binnur's Turkish Cookbook | https://binnurturkishcookbook.blogspot.com/
          `},{title:"French",keywords:"french recipes cookbook",entries:`
            https://www.pardonyourfrench.com
          `}]},{title:"Web-based Tools",keywords:"web based tools",subCategories:[{title:"Sensing",entries:`
            https://timeanddate.com
            https://accuweather.com
            https://map.purpleair.com
          `},{title:"Deciding",entries:`
            https://druthers.app
            https://decisionmatrix.app
          `},{title:"Communicating",entries:`
            https://pop.com
            https://tuple.app
            https://benchristel.github.io/call
            https://pivotaltracker.com
          `},{title:"Calculating",entries:`
            www.wolframalpha.com
          `},{title:"Creating",entries:`
            https://excalidraw.com
          `},{title:"Transforming",entries:`
            https://pngtosvg.com
            https://jsonpath.com
            https://yamllint.com
            https://translate.google.com
          `},{title:"Recording",entries:`
            https://pivotaltracker.com
          `},{title:"Prototyping",entries:`
            Taste Playground | https://benchristel.github.io/try-taste
            https://jsfiddle.net
            https://codesandbox.io
            Flow Playground | https://flow.org/try
            TypeScript Playground | https://www.typescriptlang.org/play
          `}]},{title:"Gaming",keywords:"gaming games",subCategories:[{title:"Catalogs",entries:`
            https://protondb.com linux wine
            https://store.steampowered.com
            https://steamdb.info
            https://kongregate.com
          `},{title:"Hosting",entries:`
            https://server.pro
          `},{title:"Minecraft",keywords:"minecraft",entries:`
            https://minecraft.fandom.com
            https://curseforge.com
            https://minecraftmods.com
          `},{title:"Age of Empires",entries:`
            https://ageofempires.fandom.com
          `},{title:"Heroes of Might and Magic",entries:`
            http://celestialheavens.com
            https://maps4heroes.com
            https://heroesofmightandmagic.com
            https://mightandmagic.fandom.com
            https://heroescommunity.com
          `},{title:"Other Games",entries:`
            https://zero-k.info
            https://mindustrygame.github.io
          `},{title:"General / Reference",entries:`
            https://lparchive.org
          `}]},{title:"Linux and Computer Hardware",keywords:"linux",entries:`
        https://frame.work
        https://community.frame.work
        https://packagehub.suse.com
        https://superuser.com
        https://packages.fedoraproject.org
        https://flathub.org
        https://cinnamon-spices.linuxmint.com
      `},{title:"Computer Habitability",keywords:"computing computers browsers extensions",entries:`
        addons.mozilla.org | https://addons.mozilla.org
        LeechBlock NG | https://www.proginosko.com/leechblock/
        uBlock Origin for Firefox | https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
        New Tab Override for Firefox | https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/
        darkreader.org | https://darkreader.org
        https://href.li
        https://alternativeto.net
      `},{title:"Images",keywords:"images",entries:`
        https://images.freeimages.com
        https://flickr.com
        https://cliparts.co
        https://search.creativecommons.org/
      `},{title:"Learning",keywords:"learning educational",entries:`
        https://khanacademy.org
        Leitner system (Wikipedia) | https://en.wikipedia.org/wiki/Leitner_system srs flashcards
      `},{title:"Commerce",keywords:"shopping amazon",entries:`
        Sunridge Farms | https://shopsunridgefarms.com bulk
        https://herbco.com monterey bay herb company bulk
        https://betterworldbooks.com
        https://evertype.com
        https://newegg.com
        https://bandcamp.com music
        qobuz.com | https://qobuz.com music
        https://everynoise.com
        https://alternativeto.net software tools
        Byrd's Filling Station | https://byrdsfillingstation.com/pages/in-store-bulk-product-list-non-food bulk
      `},{title:"Archives and Archiving",keywords:"archives",entries:`
        https://archive.org
        https://ghostarchive.org
        https://versionmuseum.com
      `},{title:"Books",keywords:"books",entries:`
        https://books.google.com
        https://betterworldbooks.com
        https://www.ebooks.com
        https://evertype.com
        https://terebess.hu
        https://exclassics.com
        https://en.wikibooks.org
      `},{title:"Music",keywords:"music",subCategories:[{title:"Lyrics",keywords:"lyrics",entries:`
            https://lyricstranslate.com
            https://universocantigas.gal
            https://lieder.net
            https://musicanet.org
          `},{title:"Visualizers",keywords:"visualizers",entries:`
            https://butterchurnviz.com
          `},{title:"Streaming",keywords:"streaming",entries:`
            https://bandcamp.com
            https://deezer.com
            https://open.spotify.com
            qobuz.com | https://www.qobuz.com/us-en/discover
          `},{title:"Stores",keywords:"buying purchase purchasing stores",entries:`
            qobuz.com | https://www.qobuz.com/us-en/discover
          `},{title:"History",keywords:"history",entries:`
            https://albumoftheyear.org history
            https://lieder.net
          `}]},{title:"Video",keywords:"videos",entries:`
        https://vimeo.com
        Invidious | https://vid.puffyan.us
      `},{title:"Languages and Linguistics",entries:`
        https://akademikernewek.org.uk
        https://cornish-language.org
        https://cornishdictionary.org.uk
        https://gocornish.org
        https://zompist.com
        https://latecornishlittlebits.blogspot.com
        https://merriam-webster.com
        https://ipachart.com
        https://internationalphoneticalphabet.org
        https://dedalvs.com
        http://www.hungarianreference.com
      `},{title:"Academia",entries:`
        https://researchgate.net
        https://psyarxiv.com
        https://academia.edu
        https://apa.org
        https://arxiv.org
      `},{title:"Meditation",keywords:"meditation",subCategories:[{title:"Sit, Breathe, Wake Up! (Culadasa)",keywords:"sit breathe wake up culadasa",entries:`
            Video 1 (40m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=4XGLpEJBq5c
            Video 2 (43m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=IeXWFRs5cGk
            Video 3 (46m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=SRqXq570Cf0
            Video 4 (21m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=aNFc4veG61E
            Video 5 (35m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=gB4_JS4jsb0
            Video 7 (52m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=LBDV7jmZL8s
            Video 8 (46m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=nbvx7K_Zh0U
            Video 9 (25m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=SpTDGyhoFho
          `}]},{title:"Miscellaneous",entries:`
        https://permies.com
        https://federalregister.gov
        https://skepdic.com
        https://patternlanguage.com
        https://patreon.com
        https://en.wikiquote.org
        https://en.wikisource.org
        https://npl.wiki
        http://www.livingneighborhoods.org
      `}]};function Lt(e){return{...e,categories:e.categories.map(t=>({...t,subCategories:t.subCategories.map(o=>({...o,entries:o.entries.map(r=>r.link)})),entries:t.entries.map(o=>o.link)}))}}function Pt(e,t){return t.filter(At(e)).map(Et(e))}const At=b((e,t)=>t.entries.some(I(e))||t.subCategories.some(Be(e)),"categoryMatches"),Et=b((e,t)=>({...t,entries:t.entries.filter(I(e)),subCategories:t.subCategories.filter(Be(e)).map(Ft(e))})),Be=b((e,t)=>t.entries.some(I(e))),Ft=b((e,t)=>({...t,entries:t.entries.filter(I(e))})),I=b((e,t)=>Ht(e).every(o=>t.link.destination.toLowerCase().includes(o)||t.link.text.toLowerCase().includes(o)||t.keywords.some(r=>r.toLowerCase().includes(o))),"entryMatches");function Ht(e){return e.toLowerCase().split(/\s+/)}function Mt(){const[e,t]=He(""),o=ft(St),r={...o,categories:Pt(e,o.categories)};return l(rt,{config:Lt(r),query:e,onQuery:t,onSearchSubmitted:s=>window.open(o.searchProviders[s].searchUrlFormat.replace("%s",e),"_self")})}b((e,t)=>L(new Set(e),new Set(t)),"isSameSetAs");b((e,t)=>{for(let o in e)if(!(o in t)||!L(e[o],t[o]))return!1;return!0},"hasProperties");var we;(e=>{function t({title:o="",entries:r=[],subCategories:s=[]}){return{title:o,entries:r,subCategories:s}}e.category=t})(we||(we={}));Ie(l(Mt,null),document.getElementById("preact-root"));
