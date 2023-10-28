(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var B,_,ve,E,ne,j={},be=[],Ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function we(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,i,o,c={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?B.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return T(e,c,r,i,null)}function T(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ve:i};return i==null&&_.vnode!=null&&_.vnode(o),o}function L(e){return e.children}function N(e,t){this.props=e,this.context=t}function S(e,t){if(t==null)return e.__?S(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?S(e):null}function Ce(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ce(e)}}function oe(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!O.__r++||ne!==_.debounceRendering)&&((ne=_.debounceRendering)||setTimeout)(O)}function O(){for(var e;O.__r=E.length;)e=E.sort(function(t,n){return t.__v.__b-n.__v.__b}),E=[],e.some(function(t){var n,r,i,o,c,h;t.__d&&(c=(o=(n=t).__v).__e,(h=n.__P)&&(r=[],(i=C({},o)).__v=o.__v+1,X(h,o,i,n.__n,h.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c==null?S(o):c,o.__h),Le(r,o),o.__e!=c&&Ce(o)))})}function xe(e,t,n,r,i,o,c,h,f,m){var s,d,u,a,p,x,g,k=r&&r.__k||be,w=k.length;for(n.__k=[],s=0;s<t.length;s++)if((a=n.__k[s]=(a=t[s])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(L,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(u=k[s])===null||u&&a.key==u.key&&a.type===u.type)k[s]=void 0;else for(d=0;d<w;d++){if((u=k[d])&&a.key==u.key&&a.type===u.type){k[d]=void 0;break}u=null}X(e,a,u=u||j,i,o,c,h,f,m),p=a.__e,(d=a.ref)&&u.ref!=d&&(g||(g=[]),u.ref&&g.push(u.ref,null,a),g.push(d,a.__c||p,a)),p!=null?(x==null&&(x=p),typeof a.type=="function"&&a.__k===u.__k?a.__d=f=Pe(a,f,e):f=Se(e,a,u,k,p,f),typeof n.type=="function"&&(n.__d=f)):f&&u.__e==f&&f.parentNode!=e&&(f=S(u))}for(n.__e=x,s=w;s--;)k[s]!=null&&(typeof n.type=="function"&&k[s].__e!=null&&k[s].__e==n.__d&&(n.__d=S(r,s+1)),Ee(k[s],k[s]));if(g)for(s=0;s<g.length;s++)Ae(g[s],g[++s],g[++s])}function Pe(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?Pe(r,t,n):Se(n,r,r,i,r.__e,t));return t}function Se(e,t,n,r,i,o){var c,h,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),c=null;else{for(h=o,f=0;(h=h.nextSibling)&&f<r.length;f+=2)if(h==i)break e;e.insertBefore(i,o),c=o}return c!==void 0?c:i.nextSibling}function ze(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||U(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||U(e,o,t[o],n[o],r)}function re(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ue.test(t)?n:n+"px"}function U(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||re(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||re(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?ie:se,o):e.removeEventListener(t,o?ie:se,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function se(e){this.l[e.type+!1](_.event?_.event(e):e)}function ie(e){this.l[e.type+!0](_.event?_.event(e):e)}function X(e,t,n,r,i,o,c,h,f){var m,s,d,u,a,p,x,g,k,w,A,te,H,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,h=t.__e=n.__e,t.__h=null,o=[h]),(m=_.__b)&&m(t);try{e:if(typeof b=="function"){if(g=t.props,k=(m=b.contextType)&&r[m.__c],w=m?k?k.props.value:m.__:r,n.__c?x=(s=t.__c=n.__c).__=s.__E:("prototype"in b&&b.prototype.render?t.__c=s=new b(g,w):(t.__c=s=new N(g,w),s.constructor=b,s.render=Ie),k&&k.sub(s),s.props=g,s.state||(s.state={}),s.context=w,s.__n=r,d=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),b.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=C({},s.__s)),C(s.__s,b.getDerivedStateFromProps(g,s.__s))),u=s.props,a=s.state,d)b.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==u&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,w),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,w)===!1||t.__v===n.__v){s.props=g,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,w),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(u,a,p)})}if(s.context=w,s.props=g,s.__v=t,s.__P=e,A=_.__r,te=0,"prototype"in b&&b.prototype.render)s.state=s.__s,s.__d=!1,A&&A(t),m=s.render(s.props,s.state,s.context);else do s.__d=!1,A&&A(t),m=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++te<25);s.state=s.__s,s.getChildContext!=null&&(r=C(C({},r),s.getChildContext())),d||s.getSnapshotBeforeUpdate==null||(p=s.getSnapshotBeforeUpdate(u,a)),H=m!=null&&m.type===L&&m.key==null?m.props.children:m,xe(e,Array.isArray(H)?H:[H],t,n,r,i,o,c,h,f),s.base=t.__e,t.__h=null,s.__h.length&&c.push(s),x&&(s.__E=s.__=null),s.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Be(n.__e,t,n,r,i,o,c,f);(m=_.diffed)&&m(t)}catch(M){t.__v=null,(f||o!=null)&&(t.__e=h,t.__h=!!f,o[o.indexOf(h)]=null),_.__e(M,t,n)}}function Le(e,t){_.__c&&_.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){_.__e(r,n.__v)}})}function Be(e,t,n,r,i,o,c,h){var f,m,s,d=n.props,u=t.props,a=t.type,p=0;if(a==="svg"&&(i=!0),o!=null){for(;p<o.length;p++)if((f=o[p])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,o[p]=null;break}}if(e==null){if(a===null)return document.createTextNode(u);e=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,u.is&&u),o=null,h=!1}if(a===null)d===u||h&&e.data===u||(e.data=u);else{if(o=o&&B.call(e.childNodes),m=(d=n.props||j).dangerouslySetInnerHTML,s=u.dangerouslySetInnerHTML,!h){if(o!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(s||m)&&(s&&(m&&s.__html==m.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(ze(e,u,d,i,h),s)t.__k=[];else if(p=t.props.children,xe(e,Array.isArray(p)?p:[p],t,n,r,i&&a!=="foreignObject",o,c,o?o[0]:n.__k&&S(n,0),h),o!=null)for(p=o.length;p--;)o[p]!=null&&we(o[p]);h||("value"in u&&(p=u.value)!==void 0&&(p!==e.value||a==="progress"&&!p||a==="option"&&p!==d.value)&&U(e,"value",p,d.value,!1),"checked"in u&&(p=u.checked)!==void 0&&p!==e.checked&&U(e,"checked",p,d.checked,!1))}return e}function Ae(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){_.__e(r,n)}}function Ee(e,t,n){var r,i;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ae(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){_.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Ee(r[i],t,typeof e.type!="function");n||e.__e==null||we(e.__e),e.__=e.__e=e.__d=void 0}function Ie(e,t,n){return this.constructor(e,n)}function Re(e,t,n){var r,i,o;_.__&&_.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],X(t,e=(!r&&n||t).__k=l(L,null,[e]),i||j,j,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?B.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Le(o,e)}B=be.slice,_={__e:function(e,t,n,r){for(var i,o,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),c=i.__d),c)return i.__E=i}catch(h){e=h}throw e}},ve=0,N.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),oe(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),oe(this))},N.prototype.render=L,E=[],O.__r=0;var I,y,W,ce,z=0,He=[],$=[],ae=_.__b,le=_.__r,_e=_.diffed,ue=_.__c,pe=_.unmount;function Z(e,t){_.__h&&_.__h(y,e,z||t),z=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:$}),n.__[e]}function Me(e){return z=1,We(Ne,e)}function We(e,t,n){var r=Z(I++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ne(void 0,t),function(o){var c=r.__N?r.__N[0]:r.__[0],h=r.t(c,o);c!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,c,h){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(s){return s.__c});if(f.every(function(s){return!s.__N}))return!i||i.call(this,o,c,h);var m=!1;return f.forEach(function(s){if(s.__N){var d=s.__[0];s.__=s.__N,s.__N=void 0,d!==s.__[0]&&(m=!0)}}),!!m&&(!i||i.call(this,o,c,h))}}return r.__N||r.__}function qe(e,t){var n=Z(I++,3);!_.__s&&Te(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function Ve(e){return z=5,Ge(function(){return{current:e}},[])}function Ge(e,t){var n=Z(I++,7);return Te(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Ke(){for(var e;e=He.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(D),e.__H.__h.forEach(G),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){typeof e.type!="function"||e.o||e.type===L?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,ae&&ae(e)},_.__r=function(e){le&&le(e),I=0;var t=(y=e.__c).__H;t&&(W===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=$,n.__N=n.i=void 0})):(t.__h.forEach(D),t.__h.forEach(G),t.__h=[])),W=y},_.diffed=function(e){_e&&_e(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(He.push(t)!==1&&ce===_.requestAnimationFrame||((ce=_.requestAnimationFrame)||Qe)(Ke)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==$&&(n.__=n.__V),n.i=void 0,n.__V=$})),W=y=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(D),n.__h=n.__h.filter(function(r){return!r.__||G(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],_.__e(r,n.__v)}}),ue&&ue(e,t)},_.unmount=function(e){pe&&pe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{D(r)}catch(i){t=i}}),n.__H=void 0,t&&_.__e(t,n.__v))};var he=typeof requestAnimationFrame=="function";function Qe(e){var t,n=function(){clearTimeout(r),he&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);he&&(t=requestAnimationFrame(n))}function D(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function G(e){var t=y;e.__c=e.__(),y=t}function Te(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ne(e,t){return typeof t=="function"?t(e):t}function Ye({link:e}){return l("li",{class:"directory-link"},l("a",{href:e.destination},e.text))}function Je({category:e}){const{title:t,entries:n,subCategories:r}=e,i=n.map(fe);return l("section",{class:"category"},l("h2",null,t),l("div",{class:"columns "+Xe(Ze(e))},i.length>0&&l("section",null,l("ul",null,i)),r.map(({title:o,entries:c})=>l("section",null,l("h3",null,o),l("ul",null,c.map(fe))))))}function Xe(e){switch(!0){case e>=12:return"columns-3";case e>=6:return"columns-2";default:return"columns-1"}}function fe(e){return l(Ye,{link:e})}function Ze(e){return e.entries.length+e.subCategories.map(({entries:t})=>t.length).reduce(et,0)}function et(e,t){return e+t}function tt(e){const[t,n]=Me(!1),r=Ve(null);return qe(()=>{if(!t)return;function i(){n(!1)}const o=r.current;return o==null||o.addEventListener("close",i),o==null||o.showModal(),()=>o==null?void 0:o.removeEventListener("close",i)},[t]),l("div",{class:"dev-info-pane-opener"},l("button",{onClick:()=>n(!0)},"Show Developer Info"),t&&l("dialog",{ref:r},e.children))}function nt(e){return l("div",{class:"dev-info-pane"},l("label",{for:"leechblock-config"},"LeechBlock Config"),l("textarea",{id:"leechblock-config"},`*
`,ot(e.leechblockAllowPatterns).map(t=>"+"+t).join(`
`)))}function ot(e){const t=[...e].sort();return t.filter((n,r)=>n!==t[r-1])}function rt(e){const{config:t,query:n,onQuery:r,onSearchSubmitted:i}=e;return l(L,null,l("nav",{class:"menu"},t.menu.map((o,c)=>l("a",{href:o.destination,key:c},o.text))),l("div",{class:"podium"},l("div",{class:"omnisearch"},l("input",{type:"search",placeholder:"Search",autoFocus:!0,value:n,onKeyPress:o=>{o.key==="Enter"&&i(0)},onInput:o=>r(o.currentTarget.value)}),l("div",{class:"search-providers"},t.searchProviders.map((o,c)=>l("button",{key:c,onClick:()=>i(c)},o.name)))),l("article",null,t.categories.map(o=>l(Je,{category:o}))),l("footer",null,l("hr",null),l("p",null,"Bastion is maintained by"," ",l("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),l("p",null,"The image that appears at the top of each page is"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"),"."),l("p",null,"Theme inspired by"," ",l("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."),l(tt,null,l(nt,{leechblockAllowPatterns:t.leechblockAllowPatterns})))))}const K=Symbol(),Q=Symbol(),Y=Symbol(),F=Symbol();function v(e,t){function n(...r){if(r.length>=e.length)return e(...r);{const i=(...o)=>n(...r,...o);return i[K]=e,i[Q]=n,i[Y]=r,i[F]=n[F],i}}return n[K]=e,n[Q]=n,n[Y]=[],n[F]=t||it(e),n}function q(e){return e[K]}function st(e){return e[Q]}function J(e){return e[Y]||[]}function it(e){return e[F]||e.name}class ct extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const at=v(function(e,t){return e(t)},"which"),P=v(function(e,t){var n,r;if(lt(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((i,o)=>P(e[o],t[o]));if(e instanceof Function&&t instanceof Function)return q(e)&&q(e)===q(t)?P(J(e),J(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(i=>t.has(i));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(me(e)&&me(t)){const i=Object.keys(e),o=Object.keys(t);return i.length===o.length&&i.every(c=>P(e[c],t[c]))&&((n=e.__proto__)==null?void 0:n.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals");v(function(e,t){return e===t},"is");v(function(e,t,...n){return!e(t,...n)},"not");v(function(e){return/^\s*$/.test(e)},"isBlank");function me(e){return!!e&&typeof e=="object"}function lt(e){return e instanceof Function&&st(e)===at&&J(e).length===1}v(function(t,n){return n.slice(0,t.length)===t?n.slice(t.length):n});v(function(t,n){return n instanceof ct&&P(t,n.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function $e(e){const[t,n,r]=_t(e);return{link:{text:t,destination:n},keywords:r}}function _t(e){const t=e.indexOf("|");let n,r;t===-1?(n=void 0,r=e):(n=e.slice(0,t).trim(),r=e.slice(t+1).trim());const[i,...o]=r.split(/\s+/);return[n!=null?n:ut(i),i,o]}function ut(e){return e.replace(/^[^:]+:\/\//,"")}function De(e){const t=e==null?void 0:e.trim();return t?t.split(/\s+/):[]}function Fe(e){return $e(e).link}const de=(e,...t)=>t.reduce((n,r)=>r(n),e);function pt(e){return e||[]}function V(e){return t=>t.map(e)}function ge(e){return t=>t.map(e).reduce(ht,[])}function ht(e,t){return e.concat(t)}function ft(e){const t=mt(e.menu),n=gt(e.categories);return{menu:t,searchProviders:dt(e.searchProviders),categories:n,leechblockAllowPatterns:[...de(t,V(ye)),...de(pt(n),ge(r=>[r,...r.subCategories]),ge(wt),V(Ct),V(ye)),...yt(e.customLeechblockAllowPatterns)]}}function mt(e){return ee(e).map(Fe)}function dt(e){return ee(e).map(Fe).map(t=>({name:t.text,searchUrlFormat:t.destination}))}function gt(e){return(e!=null?e:[]).map(kt)}function yt(e){var t;return(t=e==null?void 0:e.trim().split(/\s+/))!=null?t:[]}function kt(e){var n;const t=De(e.keywords);return{title:e.title,entries:je(e.entries,t),subCategories:((n=e.subCategories)!=null?n:[]).map(vt(t))}}const vt=v((e,t)=>({title:t.title,entries:je(t.entries,e.concat(De(t.keywords)))}),"parseLeafCategory");function je(e,t=[]){return ee(e).map($e).map(n=>({...n,keywords:n.keywords.concat(t)}))}function ee(e){return e?e.split(`
`).map(bt).filter(Boolean):[]}function bt(e){return e.trim()}function wt(e){return e.entries}function Ct(e){return e.link}function ye(e){return new URL(e.destination).hostname}const xt={menu:`
    TV      | https://benchristel.github.io/tv
    Recipes | https://benchristel.github.io/recipes
    Bliki   | https://github.com/benchristel/benchristel.github.io/wiki
    Gmail   | https://mail.google.com
    Call    | https://benchristel.github.io/call
  `,searchProviders:`
    DuckDuckGo | https://duckduckgo.com?q=%s
    YouTube | https://youtube.com/results?search_query=%s
    GitHub | https://github.com/search?q=%s
    NPM | https://www.npmjs.com/search?q=%s
    Unicode | https://www.fileformat.info/info/unicode/char/search.htm?q=%s&han=Y&preview=entity
    iconsdb | https://www.iconsdb.com/black-icons/?search=%s
    Cornish Dictionary | https://cornishdictionary.org.uk/#%s
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
            https://spectrum.ieee.org
            https://lawsofux.com
            https://cheatsheetseries.owasp.org
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
          `},{title:"Hosting",keywords:"hosting",entries:`
            fly.io | https://fly.io
            render.com | https://render.com
            cloudflare.com | https://cloudflare.com
            supabase.com | https://supabase.com
            digitalocean.com | https://digitalocean.com
            https://hub.docker.com
          `},{title:"Help",keywords:"help",entries:`
            stackoverflow.com | https://stackoverflow.com
            exercism.org | https://exercism.org
          `},{title:"On Mac OS",keywords:"apple macintosh",entries:`
            Homebrew | https://brew.sh
          `}]},{title:"Food",keywords:"food",subCategories:[{title:"Merchants",entries:`
            https://herbco.com
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
            https://maps4heroes.com/
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
      `},{title:"Learning",keywords:"learning educational",entries:`
        https://khanacademy.org
        Leitner system (Wikipedia) | https://en.wikipedia.org/wiki/Leitner_system srs flashcards
      `},{title:"Commerce",keywords:"shopping amazon",entries:`
        https://herbco.com monterey bay herb company
        https://betterworldbooks.com
        https://evertype.com
        https://newegg.com
        https://bandcamp.com music
        https://alternativeto.net software tools
      `},{title:"Archives and Archiving",keywords:"archives",entries:`
        https://archive.org
        https://versionmuseum.com
      `},{title:"Books",keywords:"books",entries:`
        https://books.google.com
        https://betterworldbooks.com
        https://evertype.com
        https://terebess.hu
        https://exclassics.com
        https://en.wikibooks.org
      `},{title:"Music",keywords:"music",entries:`
        https://universocantigas.gal
        https://butterchurnviz.com visualizer
        https://open.spotify.com
        https://lyricstranslate.com
        https://musicanet.org
        https://lieder.net
        https://bandcamp.com
        Spotify | https://open.spotify.com
      `},{title:"Video",keywords:"videos",entries:`
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
      `},{title:"Miscellaneous",entries:`
        https://permies.com
        https://federalregister.gov
        https://skepdic.com
        https://patternlanguage.com
        https://patreon.com
        https://en.wikiquote.org
        https://en.wikisource.org
        https://npl.wiki
      `}]};function Pt(e){return{...e,categories:e.categories.map(t=>({...t,subCategories:t.subCategories.map(n=>({...n,entries:n.entries.map(r=>r.link)})),entries:t.entries.map(n=>n.link)}))}}function St(e,t){return t.filter(Lt(e)).map(At(e))}const Lt=v((e,t)=>t.entries.some(R(e))||t.subCategories.some(Oe(e)),"categoryMatches"),At=v((e,t)=>({...t,entries:t.entries.filter(R(e)),subCategories:t.subCategories.filter(Oe(e)).map(Et(e))})),Oe=v((e,t)=>t.entries.some(R(e))),Et=v((e,t)=>({...t,entries:t.entries.filter(R(e))})),R=v((e,t)=>Ht(e).every(n=>t.link.destination.toLowerCase().includes(n)||t.link.text.toLowerCase().includes(n)||t.keywords.some(r=>r.toLowerCase().includes(n))),"entryMatches");function Ht(e){return e.toLowerCase().split(/\s+/)}function Mt(){const[e,t]=Me(""),n=ft(xt),r={...n,categories:St(e,n.categories)};return l(rt,{config:Pt(r),query:e,onQuery:t,onSearchSubmitted:i=>window.open(n.searchProviders[i].searchUrlFormat.replace("%s",e),"_self")})}v((e,t)=>P(new Set(e),new Set(t)),"isSameSetAs");v((e,t)=>{for(let n in e)if(!(n in t)||!P(e[n],t[n]))return!1;return!0},"hasProperties");var ke;(e=>{function t({title:n="",entries:r=[],subCategories:i=[]}){return{title:n,entries:r,subCategories:i}}e.category=t})(ke||(ke={}));Re(l(Mt,null),document.getElementById("preact-root"));
