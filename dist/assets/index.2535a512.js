(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var z,_,fe,A,Z,$={},me=[],He=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var r in t)e[r]=t[r];return e}function de(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,t,r){var n,i,o,c={};for(o in t)o=="key"?n=t[o]:o=="ref"?i=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?z.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return H(e,c,n,i,null)}function H(e,t,r,n,i){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++fe:i};return i==null&&_.vnode!=null&&_.vnode(o),o}function E(e){return e.children}function T(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?P(e):null}function ge(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return ge(e)}}function ee(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!O.__r++||Z!==_.debounceRendering)&&((Z=_.debounceRendering)||setTimeout)(O)}function O(){for(var e;O.__r=A.length;)e=A.sort(function(t,r){return t.__v.__b-r.__v.__b}),A=[],e.some(function(t){var r,n,i,o,c,h;t.__d&&(c=(o=(r=t).__v).__e,(h=r.__P)&&(n=[],(i=C({},o)).__v=o.__v+1,Y(h,o,i,r.__n,h.ownerSVGElement!==void 0,o.__h!=null?[c]:null,n,c==null?P(o):c,o.__h),be(n,o),o.__e!=c&&ge(o)))})}function ye(e,t,r,n,i,o,c,h,f,m){var s,d,l,a,p,x,g,v=n&&n.__k||me,w=v.length;for(r.__k=[],s=0;s<t.length;s++)if((a=r.__k[s]=(a=t[s])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?H(null,a,null,null,a):Array.isArray(a)?H(E,{children:a},null,null,null):a.__b>0?H(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=r,a.__b=r.__b+1,(l=v[s])===null||l&&a.key==l.key&&a.type===l.type)v[s]=void 0;else for(d=0;d<w;d++){if((l=v[d])&&a.key==l.key&&a.type===l.type){v[d]=void 0;break}l=null}Y(e,a,l=l||$,i,o,c,h,f,m),p=a.__e,(d=a.ref)&&l.ref!=d&&(g||(g=[]),l.ref&&g.push(l.ref,null,a),g.push(d,a.__c||p,a)),p!=null?(x==null&&(x=p),typeof a.type=="function"&&a.__k===l.__k?a.__d=f=ve(a,f,e):f=ke(e,a,l,v,p,f),typeof r.type=="function"&&(r.__d=f)):f&&l.__e==f&&f.parentNode!=e&&(f=P(l))}for(r.__e=x,s=w;s--;)v[s]!=null&&(typeof r.type=="function"&&v[s].__e!=null&&v[s].__e==r.__d&&(r.__d=P(n,s+1)),Ce(v[s],v[s]));if(g)for(s=0;s<g.length;s++)we(g[s],g[++s],g[++s])}function ve(e,t,r){for(var n,i=e.__k,o=0;i&&o<i.length;o++)(n=i[o])&&(n.__=e,t=typeof n.type=="function"?ve(n,t,r):ke(r,n,n,i,n.__e,t));return t}function ke(e,t,r,n,i,o){var c,h,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(r==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),c=null;else{for(h=o,f=0;(h=h.nextSibling)&&f<n.length;f+=2)if(h==i)break e;e.insertBefore(i,o),c=o}return c!==void 0?c:i.nextSibling}function Te(e,t,r,n,i){var o;for(o in r)o==="children"||o==="key"||o in t||U(e,o,null,r[o],n);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||U(e,o,t[o],r[o],n)}function te(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||He.test(t)?r:r+"px"}function U(e,t,r,n,i){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||te(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||te(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n||e.addEventListener(t,o?oe:re,o):e.removeEventListener(t,o?oe:re,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function re(e){this.l[e.type+!1](_.event?_.event(e):e)}function oe(e){this.l[e.type+!0](_.event?_.event(e):e)}function Y(e,t,r,n,i,o,c,h,f){var m,s,d,l,a,p,x,g,v,w,L,X,M,b=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(f=r.__h,h=t.__e=r.__e,t.__h=null,o=[h]),(m=_.__b)&&m(t);try{e:if(typeof b=="function"){if(g=t.props,v=(m=b.contextType)&&n[m.__c],w=m?v?v.props.value:m.__:n,r.__c?x=(s=t.__c=r.__c).__=s.__E:("prototype"in b&&b.prototype.render?t.__c=s=new b(g,w):(t.__c=s=new T(g,w),s.constructor=b,s.render=je),v&&v.sub(s),s.props=g,s.state||(s.state={}),s.context=w,s.__n=n,d=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),b.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=C({},s.__s)),C(s.__s,b.getDerivedStateFromProps(g,s.__s))),l=s.props,a=s.state,d)b.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==l&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,w),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,w)===!1||t.__v===r.__v){s.props=g,s.state=s.__s,t.__v!==r.__v&&(s.__d=!1),s.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(N){N&&(N.__=t)}),s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,w),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(l,a,p)})}if(s.context=w,s.props=g,s.__v=t,s.__P=e,L=_.__r,X=0,"prototype"in b&&b.prototype.render)s.state=s.__s,s.__d=!1,L&&L(t),m=s.render(s.props,s.state,s.context);else do s.__d=!1,L&&L(t),m=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++X<25);s.state=s.__s,s.getChildContext!=null&&(n=C(C({},n),s.getChildContext())),d||s.getSnapshotBeforeUpdate==null||(p=s.getSnapshotBeforeUpdate(l,a)),M=m!=null&&m.type===E&&m.key==null?m.props.children:m,ye(e,Array.isArray(M)?M:[M],t,r,n,i,o,c,h,f),s.base=t.__e,t.__h=null,s.__h.length&&c.push(s),x&&(s.__E=s.__=null),s.__e=!1}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Fe(r.__e,t,r,n,i,o,c,f);(m=_.diffed)&&m(t)}catch(N){t.__v=null,(f||o!=null)&&(t.__e=h,t.__h=!!f,o[o.indexOf(h)]=null),_.__e(N,t,r)}}function be(e,t){_.__c&&_.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){_.__e(n,r.__v)}})}function Fe(e,t,r,n,i,o,c,h){var f,m,s,d=r.props,l=t.props,a=t.type,p=0;if(a==="svg"&&(i=!0),o!=null){for(;p<o.length;p++)if((f=o[p])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,o[p]=null;break}}if(e==null){if(a===null)return document.createTextNode(l);e=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,l.is&&l),o=null,h=!1}if(a===null)d===l||h&&e.data===l||(e.data=l);else{if(o=o&&z.call(e.childNodes),m=(d=r.props||$).dangerouslySetInnerHTML,s=l.dangerouslySetInnerHTML,!h){if(o!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(s||m)&&(s&&(m&&s.__html==m.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(Te(e,l,d,i,h),s)t.__k=[];else if(p=t.props.children,ye(e,Array.isArray(p)?p:[p],t,r,n,i&&a!=="foreignObject",o,c,o?o[0]:r.__k&&P(r,0),h),o!=null)for(p=o.length;p--;)o[p]!=null&&de(o[p]);h||("value"in l&&(p=l.value)!==void 0&&(p!==e.value||a==="progress"&&!p||a==="option"&&p!==d.value)&&U(e,"value",p,d.value,!1),"checked"in l&&(p=l.checked)!==void 0&&p!==e.checked&&U(e,"checked",p,d.checked,!1))}return e}function we(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(n){_.__e(n,r)}}function Ce(e,t,r){var n,i;if(_.unmount&&_.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||we(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){_.__e(o,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&Ce(n[i],t,typeof e.type!="function");r||e.__e==null||de(e.__e),e.__=e.__e=e.__d=void 0}function je(e,t,r){return this.constructor(e,r)}function De(e,t,r){var n,i,o;_.__&&_.__(e,t),i=(n=typeof r=="function")?null:r&&r.__k||t.__k,o=[],Y(t,e=(!n&&r||t).__k=u(E,null,[e]),i||$,$,t.ownerSVGElement!==void 0,!n&&r?[r]:i?null:t.firstChild?z.call(t.childNodes):null,o,!n&&r?r:i?i.__e:t.firstChild,n),be(o,e)}z=me.slice,_={__e:function(e,t,r,n){for(var i,o,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),c=i.__d),c)return i.__E=i}catch(h){e=h}throw e}},fe=0,T.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},r),this.props)),e&&C(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),ee(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ee(this))},T.prototype.render=E,A=[],O.__r=0;var xe,y,W,ne,I=0,Se=[],F=[],se=_.__b,ie=_.__r,ce=_.diffed,ae=_.__c,_e=_.unmount;function $e(e,t){_.__h&&_.__h(y,e,I||t),I=0;var r=y.__H||(y.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:F}),r.__[e]}function Oe(e){return I=1,Ue(Pe,e)}function Ue(e,t,r){var n=$e(xe++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):Pe(void 0,t),function(o){var c=n.__N?n.__N[0]:n.__[0],h=n.t(c,o);c!==h&&(n.__N=[h,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,c,h){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(s){return s.__c});if(f.every(function(s){return!s.__N}))return!i||i.call(this,o,c,h);var m=!1;return f.forEach(function(s){if(s.__N){var d=s.__[0];s.__=s.__N,s.__N=void 0,d!==s.__[0]&&(m=!0)}}),!!m&&(!i||i.call(this,o,c,h))}}return n.__N||n.__}function ze(){for(var e;e=Se.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(j),e.__H.__h.forEach(G),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){typeof e.type!="function"||e.o||e.type===E?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,se&&se(e)},_.__r=function(e){ie&&ie(e),xe=0;var t=(y=e.__c).__H;t&&(W===y?(t.__h=[],y.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=F,r.__N=r.i=void 0})):(t.__h.forEach(j),t.__h.forEach(G),t.__h=[])),W=y},_.diffed=function(e){ce&&ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Se.push(t)!==1&&ne===_.requestAnimationFrame||((ne=_.requestAnimationFrame)||Be)(ze)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==F&&(r.__=r.__V),r.i=void 0,r.__V=F})),W=y=null},_.__c=function(e,t){t.some(function(r){try{r.__h.forEach(j),r.__h=r.__h.filter(function(n){return!n.__||G(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],_.__e(n,r.__v)}}),ae&&ae(e,t)},_.unmount=function(e){_e&&_e(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{j(n)}catch(i){t=i}}),r.__H=void 0,t&&_.__e(t,r.__v))};var le=typeof requestAnimationFrame=="function";function Be(e){var t,r=function(){clearTimeout(n),le&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);le&&(t=requestAnimationFrame(r))}function j(e){var t=y,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),y=t}function G(e){var t=y;e.__c=e.__(),y=t}function Pe(e,t){return typeof t=="function"?t(e):t}function We({link:e}){return u("li",{class:"directory-link"},u("a",{href:e.destination},e.text))}function qe({category:e}){const{title:t,entries:r,subCategories:n}=e,i=r.map(ue);return u("section",{class:"category"},u("h2",null,t),u("div",{class:"columns "+Ie(Ge(e))},i.length>0&&u("section",null,u("ul",null,i)),n.map(({title:o,entries:c})=>u("section",null,u("h3",null,o),u("ul",null,c.map(ue))))))}function Ie(e){switch(!0){case e>=12:return"columns-3";case e>=6:return"columns-2";default:return"columns-1"}}function ue(e){return u(We,{link:e})}function Ge(e){return e.entries.length+e.subCategories.map(({entries:t})=>t.length).reduce(Ke,0)}function Ke(e,t){return e+t}function Re(e){const{config:t,query:r,onQuery:n,onSearchSubmitted:i}=e;return u(E,null,u("nav",{class:"menu"},t.menu.map((o,c)=>u("a",{href:o.destination,key:c},o.text))),u("div",{class:"podium"},u("div",{class:"omnisearch"},u("input",{type:"search",placeholder:"Search",autoFocus:!0,value:r,onKeyPress:o=>{o.key==="Enter"&&i(0)},onInput:o=>n(o.currentTarget.value)}),u("div",{class:"search-providers"},t.searchProviders.map((o,c)=>u("button",{key:c,onClick:()=>i(c)},o.name)))),u("article",null,t.categories.map(o=>u(qe,{category:o}))),u("footer",null,u("hr",null),u("p",null,"Bastion is maintained by"," ",u("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),u("p",null,"The image that appears at the top of each page is"," ",u("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",u("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",u("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"," ",u("img",{src:"https://mirrors.creativecommons.org/presskit/icons/pd.svg",style:"height: 1em; margin-right: 0.125em; display: inline;"})),"."),u("p",null,"Theme inspired by"," ",u("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."))))}const K=Symbol(),R=Symbol(),V=Symbol(),D=Symbol();function k(e,t){function r(...n){if(n.length>=e.length)return e(...n);{const i=(...o)=>r(...n,...o);return i[K]=e,i[R]=r,i[V]=n,i[D]=r[D],i}}return r[K]=e,r[R]=r,r[V]=[],r[D]=t||Qe(e),r}function q(e){return e[K]}function Ve(e){return e[R]}function Q(e){return e[V]||[]}function Qe(e){return e[D]||e.name}class Ye extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const Je=k(function(e,t){return e(t)},"which"),S=k(function(e,t){var r,n;if(Xe(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((i,o)=>S(e[o],t[o]));if(e instanceof Function&&t instanceof Function)return q(e)&&q(e)===q(t)?S(Q(e),Q(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(i=>t.has(i));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(pe(e)&&pe(t)){const i=Object.keys(e),o=Object.keys(t);return i.length===o.length&&i.every(c=>S(e[c],t[c]))&&((r=e.__proto__)==null?void 0:r.constructor)===((n=t.__proto__)==null?void 0:n.constructor)}return e===t},"equals");k(function(e,t){return e===t},"is");k(function(e,t,...r){return!e(t,...r)},"not");k(function(e){return/^\s*$/.test(e)},"isBlank");function pe(e){return!!e&&typeof e=="object"}function Xe(e){return e instanceof Function&&Ve(e)===Je&&Q(e).length===1}k(function(t,r){return r.slice(0,t.length)===t?r.slice(t.length):r});k(function(t,r){return r instanceof Ye&&S(t,r.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function Ee(e){const[t,r,n]=Ze(e);return{link:{text:t,destination:r},keywords:n}}function Ze(e){const t=e.indexOf("|");let r,n;t===-1?(r=void 0,n=e):(r=e.slice(0,t).trim(),n=e.slice(t+1).trim());const[i,...o]=n.split(/\s+/);return[r!=null?r:et(i),i,o]}function et(e){return e.replace(/^[^:]+:\/\//,"")}function Le(e){const t=e==null?void 0:e.trim();return t?t.split(/\s+/):[]}function Ae(e){return Ee(e).link}function tt(e){return{menu:rt(e.menu),searchProviders:ot(e.searchProviders),categories:nt(e.categories)}}function rt(e){return J(e).map(Ae)}function ot(e){return J(e).map(Ae).map(t=>({name:t.text,searchUrlFormat:t.destination}))}function nt(e){return(e!=null?e:[]).map(st)}function st(e){var r;const t=Le(e.keywords);return{title:e.title,entries:Me(e.entries,t),subCategories:((r=e.subCategories)!=null?r:[]).map(it(t))}}const it=k((e,t)=>({title:t.title,entries:Me(t.entries,e.concat(Le(t.keywords)))}),"parseLeafCategory");function Me(e,t=[]){return J(e).map(Ee).map(r=>({...r,keywords:r.keywords.concat(t)}))}function J(e){return e?e.split(`
`).map(ct).filter(Boolean):[]}function ct(e){return e.trim()}const at={menu:`
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
  `,categories:[{title:"Software Development",keywords:"software development",subCategories:[{title:"Engineering",keywords:"engineering",entries:`
            The Art of Unix Programming | http://www.catb.org/esr/writings/taoup/html/ Eric Raymond
            https://buildingbeauty.org Christopher Alexander Greg Bryant
            https://beautiful.software Christopher Alexander Greg Bryant
            https://refactoring.com Martin Fowler
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
          `},{title:"Hosting",keywords:"hosting",entries:`
            fly.io | https://fly.io
            render.com | https://render.com
            cloudflare.com | https://cloudflare.com
            supabase.com | https://supabase.com
            digitalocean.com | https://digitalocean.com
          `},{title:"Help",keywords:"help",entries:`
            stackoverflow.com | https://stackoverflow.com
            exercism.org | https://exercism.org
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
      `},{title:"Music",keywords:"music",entries:`
        https://universocantigas.gal
        https://butterchurnviz.com visualizer
        https://open.spotify.com
        https://lyricstranslate.com
        https://musicanet.org
        https://lieder.net
        https://bandcamp.com
      `},{title:"Video",keywords:"videos",entries:`
        https://vimeo.com
        https://vid.puffyan.us invidious
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
      `}]};function _t(e){return{menu:e.menu,searchProviders:e.searchProviders,categories:e.categories.map(t=>({...t,subCategories:t.subCategories.map(r=>({...r,entries:r.entries.map(n=>n.link)})),entries:t.entries.map(r=>r.link)}))}}function lt(e,t){return t.filter(ut(e)).map(pt(e))}const ut=k((e,t)=>t.entries.some(B(e))||t.subCategories.some(Ne(e)),"categoryMatches"),pt=k((e,t)=>({...t,entries:t.entries.filter(B(e)),subCategories:t.subCategories.filter(Ne(e)).map(ht(e))})),Ne=k((e,t)=>t.entries.some(B(e))),ht=k((e,t)=>({...t,entries:t.entries.filter(B(e))})),B=k((e,t)=>ft(e).every(r=>t.link.destination.toLowerCase().includes(r)||t.link.text.toLowerCase().includes(r)||t.keywords.some(n=>n.toLowerCase().includes(r))),"entryMatches");function ft(e){return e.toLowerCase().split(/\s+/)}function mt(){const[e,t]=Oe(""),r=tt(at),n={...r,categories:lt(e,r.categories)};return u(Re,{config:_t(n),query:e,onQuery:t,onSearchSubmitted:i=>window.open(r.searchProviders[i].searchUrlFormat.replace("%s",e),"_self")})}k((e,t)=>S(new Set(e),new Set(t)),"isSameSetAs");k((e,t)=>{for(let r in e)if(!(r in t)||!S(e[r],t[r]))return!1;return!0},"hasProperties");var he;(e=>{function t({title:r="",entries:n=[],subCategories:i=[]}){return{title:r,entries:n,subCategories:i}}e.category=t})(he||(he={}));De(u(mt,null),document.getElementById("preact-root"));
