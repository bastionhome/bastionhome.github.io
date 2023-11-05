(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var I,_,ve,H,oe,O={},be=[],Be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function we(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,s,o,c={};for(o in t)o=="key"?r=t[o]:o=="ref"?s=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?I.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return T(e,c,r,s,null)}function T(e,t,n,r,s){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++ve:s};return s==null&&_.vnode!=null&&_.vnode(o),o}function A(e){return e.children}function N(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?L(e):null}function Ce(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ce(e)}}function re(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!U.__r++||oe!==_.debounceRendering)&&((oe=_.debounceRendering)||setTimeout)(U)}function U(){for(var e;U.__r=H.length;)e=H.sort(function(t,n){return t.__v.__b-n.__v.__b}),H=[],e.some(function(t){var n,r,s,o,c,h;t.__d&&(c=(o=(n=t).__v).__e,(h=n.__P)&&(r=[],(s=C({},o)).__v=o.__v+1,Z(h,o,s,n.__n,h.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c==null?L(o):c,o.__h),Le(r,o),o.__e!=c&&Ce(o)))})}function xe(e,t,n,r,s,o,c,h,f,m){var i,d,u,a,p,x,g,k=r&&r.__k||be,w=k.length;for(n.__k=[],i=0;i<t.length;i++)if((a=n.__k[i]=(a=t[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(A,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(u=k[i])===null||u&&a.key==u.key&&a.type===u.type)k[i]=void 0;else for(d=0;d<w;d++){if((u=k[d])&&a.key==u.key&&a.type===u.type){k[d]=void 0;break}u=null}Z(e,a,u=u||O,s,o,c,h,f,m),p=a.__e,(d=a.ref)&&u.ref!=d&&(g||(g=[]),u.ref&&g.push(u.ref,null,a),g.push(d,a.__c||p,a)),p!=null?(x==null&&(x=p),typeof a.type=="function"&&a.__k===u.__k?a.__d=f=Se(a,f,e):f=Pe(e,a,u,k,p,f),typeof n.type=="function"&&(n.__d=f)):f&&u.__e==f&&f.parentNode!=e&&(f=L(u))}for(n.__e=x,i=w;i--;)k[i]!=null&&(typeof n.type=="function"&&k[i].__e!=null&&k[i].__e==n.__d&&(n.__d=L(r,i+1)),Ee(k[i],k[i]));if(g)for(i=0;i<g.length;i++)Ae(g[i],g[++i],g[++i])}function Se(e,t,n){for(var r,s=e.__k,o=0;s&&o<s.length;o++)(r=s[o])&&(r.__=e,t=typeof r.type=="function"?Se(r,t,n):Pe(n,r,r,s,r.__e,t));return t}function Pe(e,t,n,r,s,o){var c,h,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||s!=o||s.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(s),c=null;else{for(h=o,f=0;(h=h.nextSibling)&&f<r.length;f+=2)if(h==s)break e;e.insertBefore(s,o),c=o}return c!==void 0?c:s.nextSibling}function ze(e,t,n,r,s){var o;for(o in n)o==="children"||o==="key"||o in t||B(e,o,null,n[o],r);for(o in t)s&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||B(e,o,t[o],n[o],r)}function se(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Be.test(t)?n:n+"px"}function B(e,t,n,r,s){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||se(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||se(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?ce:ie,o):e.removeEventListener(t,o?ce:ie,o);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function ie(e){this.l[e.type+!1](_.event?_.event(e):e)}function ce(e){this.l[e.type+!0](_.event?_.event(e):e)}function Z(e,t,n,r,s,o,c,h,f){var m,i,d,u,a,p,x,g,k,w,E,ne,M,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,h=t.__e=n.__e,t.__h=null,o=[h]),(m=_.__b)&&m(t);try{e:if(typeof b=="function"){if(g=t.props,k=(m=b.contextType)&&r[m.__c],w=m?k?k.props.value:m.__:r,n.__c?x=(i=t.__c=n.__c).__=i.__E:("prototype"in b&&b.prototype.render?t.__c=i=new b(g,w):(t.__c=i=new N(g,w),i.constructor=b,i.render=Re),k&&k.sub(i),i.props=g,i.state||(i.state={}),i.context=w,i.__n=r,d=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,b.getDerivedStateFromProps(g,i.__s))),u=i.props,a=i.state,d)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==u&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,w),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,w)===!1||t.__v===n.__v){i.props=g,i.state=i.__s,t.__v!==n.__v&&(i.__d=!1),i.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(F){F&&(F.__=t)}),i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(u,a,p)})}if(i.context=w,i.props=g,i.__v=t,i.__P=e,E=_.__r,ne=0,"prototype"in b&&b.prototype.render)i.state=i.__s,i.__d=!1,E&&E(t),m=i.render(i.props,i.state,i.context);else do i.__d=!1,E&&E(t),m=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ne<25);i.state=i.__s,i.getChildContext!=null&&(r=C(C({},r),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(p=i.getSnapshotBeforeUpdate(u,a)),M=m!=null&&m.type===A&&m.key==null?m.props.children:m,xe(e,Array.isArray(M)?M:[M],t,n,r,s,o,c,h,f),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),x&&(i.__E=i.__=null),i.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ie(n.__e,t,n,r,s,o,c,f);(m=_.diffed)&&m(t)}catch(F){t.__v=null,(f||o!=null)&&(t.__e=h,t.__h=!!f,o[o.indexOf(h)]=null),_.__e(F,t,n)}}function Le(e,t){_.__c&&_.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){_.__e(r,n.__v)}})}function Ie(e,t,n,r,s,o,c,h){var f,m,i,d=n.props,u=t.props,a=t.type,p=0;if(a==="svg"&&(s=!0),o!=null){for(;p<o.length;p++)if((f=o[p])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,o[p]=null;break}}if(e==null){if(a===null)return document.createTextNode(u);e=s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,u.is&&u),o=null,h=!1}if(a===null)d===u||h&&e.data===u||(e.data=u);else{if(o=o&&I.call(e.childNodes),m=(d=n.props||O).dangerouslySetInnerHTML,i=u.dangerouslySetInnerHTML,!h){if(o!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(i||m)&&(i&&(m&&i.__html==m.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(ze(e,u,d,s,h),i)t.__k=[];else if(p=t.props.children,xe(e,Array.isArray(p)?p:[p],t,n,r,s&&a!=="foreignObject",o,c,o?o[0]:n.__k&&L(n,0),h),o!=null)for(p=o.length;p--;)o[p]!=null&&we(o[p]);h||("value"in u&&(p=u.value)!==void 0&&(p!==e.value||a==="progress"&&!p||a==="option"&&p!==d.value)&&B(e,"value",p,d.value,!1),"checked"in u&&(p=u.checked)!==void 0&&p!==e.checked&&B(e,"checked",p,d.checked,!1))}return e}function Ae(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){_.__e(r,n)}}function Ee(e,t,n){var r,s;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ae(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){_.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&Ee(r[s],t,typeof e.type!="function");n||e.__e==null||we(e.__e),e.__=e.__e=e.__d=void 0}function Re(e,t,n){return this.constructor(e,n)}function qe(e,t,n){var r,s,o;_.__&&_.__(e,t),s=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Z(t,e=(!r&&n||t).__k=l(A,null,[e]),s||O,O,t.ownerSVGElement!==void 0,!r&&n?[n]:s?null:t.firstChild?I.call(t.childNodes):null,o,!r&&n?n:s?s.__e:t.firstChild,r),Le(o,e)}I=be.slice,_={__e:function(e,t,n,r){for(var s,o,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,r||{}),c=s.__d),c)return s.__E=s}catch(h){e=h}throw e}},ve=0,N.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),re(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),re(this))},N.prototype.render=A,H=[],U.__r=0;var R,y,W,ae,z=0,He=[],$=[],le=_.__b,_e=_.__r,ue=_.diffed,pe=_.__c,he=_.unmount;function ee(e,t){_.__h&&_.__h(y,e,z||t),z=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:$}),n.__[e]}function Me(e){return z=1,We(Te,e)}function We(e,t,n){var r=ee(R++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Te(void 0,t),function(o){var c=r.__N?r.__N[0]:r.__[0],h=r.t(c,o);c!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var s=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,c,h){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(i){return i.__c});if(f.every(function(i){return!i.__N}))return!s||s.call(this,o,c,h);var m=!1;return f.forEach(function(i){if(i.__N){var d=i.__[0];i.__=i.__N,i.__N=void 0,d!==i.__[0]&&(m=!0)}}),!!m&&(!s||s.call(this,o,c,h))}}return r.__N||r.__}function Ve(e,t){var n=ee(R++,3);!_.__s&&Fe(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function Ge(e){return z=5,Ke(function(){return{current:e}},[])}function Ke(e,t){var n=ee(R++,7);return Fe(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Qe(){for(var e;e=He.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(D),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){typeof e.type!="function"||e.o||e.type===A?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,le&&le(e)},_.__r=function(e){_e&&_e(e),R=0;var t=(y=e.__c).__H;t&&(W===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=$,n.__N=n.i=void 0})):(t.__h.forEach(D),t.__h.forEach(K),t.__h=[])),W=y},_.diffed=function(e){ue&&ue(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(He.push(t)!==1&&ae===_.requestAnimationFrame||((ae=_.requestAnimationFrame)||Ye)(Qe)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==$&&(n.__=n.__V),n.i=void 0,n.__V=$})),W=y=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(D),n.__h=n.__h.filter(function(r){return!r.__||K(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],_.__e(r,n.__v)}}),pe&&pe(e,t)},_.unmount=function(e){he&&he(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{D(r)}catch(s){t=s}}),n.__H=void 0,t&&_.__e(t,n.__v))};var fe=typeof requestAnimationFrame=="function";function Ye(e){var t,n=function(){clearTimeout(r),fe&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);fe&&(t=requestAnimationFrame(n))}function D(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function K(e){var t=y;e.__c=e.__(),y=t}function Fe(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Te(e,t){return typeof t=="function"?t(e):t}function Je({link:e}){return l("li",{class:"directory-link"},l("a",{href:e.destination},e.text))}function Xe({category:e}){const{title:t,entries:n,subCategories:r}=e,s=n.map(me);return l("section",{class:"category"},l("h2",null,t),l("div",{class:"columns "+Ze(et(e))},s.length>0&&l("section",null,l("ul",null,s)),r.map(({title:o,entries:c})=>l("section",null,l("h3",null,o),l("ul",null,c.map(me))))))}function Ze(e){switch(!0){case e>=12:return"columns-3";case e>=6:return"columns-2";default:return"columns-1"}}function me(e){return l(Je,{link:e})}function et(e){return e.entries.length+e.subCategories.map(({entries:t})=>t.length).reduce(tt,0)}function tt(e,t){return e+t}function Ne(e){return l("button",{class:"raised-button",...e})}function nt(e){const[t,n]=Me(!1),r=Ge(null);return Ve(()=>{if(!t)return;function s(){n(!1)}const o=r.current;return o==null||o.addEventListener("close",s),o==null||o.showModal(),()=>o==null?void 0:o.removeEventListener("close",s)},[t]),l("div",{class:"dev-info-pane-opener"},l(Ne,{onClick:()=>n(!0)},"Show Developer Info"),t&&l("dialog",{ref:r},e.children))}function ot(e){return l("div",{class:"dev-info-pane"},l("label",{for:"leechblock-config"},"LeechBlock Config"),l("textarea",{id:"leechblock-config"},`*
`,e.leechblockAllowPatterns.map(t=>"+"+t).join(`
`)))}function rt(e){const{config:t,query:n,onQuery:r,onSearchSubmitted:s}=e;return l(A,null,l("nav",{class:"menu"},t.menu.map((o,c)=>l("a",{href:o.destination,key:c},o.text))),l("div",{class:"podium"},l("div",{class:"omnisearch"},l("input",{type:"search",placeholder:"Search",autoFocus:!0,value:n,onKeyPress:o=>{o.key==="Enter"&&s(0)},onInput:o=>r(o.currentTarget.value)}),l("div",{class:"search-providers"},t.searchProviders.map((o,c)=>l(Ne,{key:c,onClick:()=>s(c)},o.name)))),l("article",null,t.categories.map(o=>l(Xe,{category:o}))),l("footer",null,l("hr",null),l("p",null,"Bastion is maintained by"," ",l("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),l("p",null,"The image that appears at the top of each page is"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"),"."),l("p",null,"Theme inspired by"," ",l("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."),l(nt,null,l(ot,{leechblockAllowPatterns:t.leechblockAllowPatterns})))))}const Q=Symbol(),Y=Symbol(),J=Symbol(),j=Symbol();function v(e,t){function n(...r){if(r.length>=e.length)return e(...r);{const s=(...o)=>n(...r,...o);return s[Q]=e,s[Y]=n,s[J]=r,s[j]=n[j],s}}return n[Q]=e,n[Y]=n,n[J]=[],n[j]=t||it(e),n}function V(e){return e[Q]}function st(e){return e[Y]}function X(e){return e[J]||[]}function it(e){return e[j]||e.name}class ct extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const at=v(function(e,t){return e(t)},"which"),P=v(function(e,t){var n,r;if(lt(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((s,o)=>P(e[o],t[o]));if(e instanceof Function&&t instanceof Function)return V(e)&&V(e)===V(t)?P(X(e),X(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(s=>t.has(s));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(de(e)&&de(t)){const s=Object.keys(e),o=Object.keys(t);return s.length===o.length&&s.every(c=>P(e[c],t[c]))&&((n=e.__proto__)==null?void 0:n.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals");v(function(e,t){return e===t},"is");v(function(e,t,...n){return!e(t,...n)},"not");v(function(e){return/^\s*$/.test(e)},"isBlank");function de(e){return!!e&&typeof e=="object"}function lt(e){return e instanceof Function&&st(e)===at&&X(e).length===1}v(function(t,n){return n.slice(0,t.length)===t?n.slice(t.length):n});v(function(t,n){return n instanceof ct&&P(t,n.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function $e(e){const[t,n,r]=_t(e);return{link:{text:t,destination:n},keywords:r}}function _t(e){const t=e.indexOf("|");let n,r;t===-1?(n=void 0,r=e):(n=e.slice(0,t).trim(),r=e.slice(t+1).trim());const[s,...o]=r.split(/\s+/);return[n!=null?n:ut(s),s,o]}function ut(e){return e.replace(/^[^:]+:\/\//,"")}function De(e){const t=e==null?void 0:e.trim();return t?t.split(/\s+/):[]}function je(e){return $e(e).link}const G=(e,...t)=>t.reduce((n,r)=>r(n),e);function pt(e){return e||[]}function S(e){return t=>t.map(e)}function ge(e){return t=>t.map(e).reduce(ft,[])}function ht(e){const t=[...e].sort();return t.filter((n,r)=>n!==t[r-1])}function ft(e,t){return e.concat(t)}function mt(e){const t=dt(e.menu),n=yt(e.categories),r=gt(e.searchProviders);return{menu:t,searchProviders:r,categories:n,leechblockAllowPatterns:ht([...G(t,S(s=>s.destination),S(ye)),...G(r,S(s=>s.searchUrlFormat),S(Ct)),...G(pt(n),ge(s=>[s,...s.subCategories]),ge(s=>s.entries),S(s=>s.link.destination),S(ye)),...kt(e.customLeechblockAllowPatterns)])}}function dt(e){return te(e).map(je)}function gt(e){return te(e).map(je).map(t=>({name:t.text,searchUrlFormat:t.destination}))}function yt(e){return(e!=null?e:[]).map(vt)}function kt(e){var t;return(t=e==null?void 0:e.trim().split(/\s+/))!=null?t:[]}function vt(e){var n;const t=De(e.keywords);return{title:e.title,entries:Oe(e.entries,t),subCategories:((n=e.subCategories)!=null?n:[]).map(bt(t))}}const bt=v((e,t)=>({title:t.title,entries:Oe(t.entries,e.concat(De(t.keywords)))}),"parseLeafCategory");function Oe(e,t=[]){return te(e).map($e).map(n=>({...n,keywords:n.keywords.concat(t)}))}function te(e){return e?e.split(`
`).map(wt).filter(Boolean):[]}function wt(e){return e.trim()}function ye(e){return xt(()=>new URL(e).hostname,()=>e)}function Ct(e){const t=new URL(e),n=t.pathname==="/"?"":t.pathname;return t.hostname+n}function xt(e,t){try{return e()}catch{return t()}}const St={menu:`
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
            https://eloquentjavascript.net
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
        Byrd's Filling Station | https://byrdsfillingstation.com/pages/in-store-bulk-product-list-non-food
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
      `}]};function Pt(e){return{...e,categories:e.categories.map(t=>({...t,subCategories:t.subCategories.map(n=>({...n,entries:n.entries.map(r=>r.link)})),entries:t.entries.map(n=>n.link)}))}}function Lt(e,t){return t.filter(At(e)).map(Et(e))}const At=v((e,t)=>t.entries.some(q(e))||t.subCategories.some(Ue(e)),"categoryMatches"),Et=v((e,t)=>({...t,entries:t.entries.filter(q(e)),subCategories:t.subCategories.filter(Ue(e)).map(Ht(e))})),Ue=v((e,t)=>t.entries.some(q(e))),Ht=v((e,t)=>({...t,entries:t.entries.filter(q(e))})),q=v((e,t)=>Mt(e).every(n=>t.link.destination.toLowerCase().includes(n)||t.link.text.toLowerCase().includes(n)||t.keywords.some(r=>r.toLowerCase().includes(n))),"entryMatches");function Mt(e){return e.toLowerCase().split(/\s+/)}function Ft(){const[e,t]=Me(""),n=mt(St),r={...n,categories:Lt(e,n.categories)};return l(rt,{config:Pt(r),query:e,onQuery:t,onSearchSubmitted:s=>window.open(n.searchProviders[s].searchUrlFormat.replace("%s",e),"_self")})}v((e,t)=>P(new Set(e),new Set(t)),"isSameSetAs");v((e,t)=>{for(let n in e)if(!(n in t)||!P(e[n],t[n]))return!1;return!0},"hasProperties");var ke;(e=>{function t({title:n="",entries:r=[],subCategories:s=[]}){return{title:n,entries:r,subCategories:s}}e.category=t})(ke||(ke={}));qe(l(Ft,null),document.getElementById("preact-root"));
