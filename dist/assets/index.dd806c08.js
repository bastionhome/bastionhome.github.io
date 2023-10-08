(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();var z,a,fe,A,Z,$={},me=[],He=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var r in t)e[r]=t[r];return e}function de(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,t,r){var o,s,n,c={};for(n in t)n=="key"?o=t[n]:n=="ref"?s=t[n]:c[n]=t[n];if(arguments.length>2&&(c.children=arguments.length>3?z.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)c[n]===void 0&&(c[n]=e.defaultProps[n]);return H(e,c,o,s,null)}function H(e,t,r,o,s){var n={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++fe:s};return s==null&&a.vnode!=null&&a.vnode(n),n}function E(e){return e.children}function T(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?P(e):null}function ge(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return ge(e)}}function ee(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!O.__r++||Z!==a.debounceRendering)&&((Z=a.debounceRendering)||setTimeout)(O)}function O(){for(var e;O.__r=A.length;)e=A.sort(function(t,r){return t.__v.__b-r.__v.__b}),A=[],e.some(function(t){var r,o,s,n,c,h;t.__d&&(c=(n=(r=t).__v).__e,(h=r.__P)&&(o=[],(s=C({},n)).__v=n.__v+1,Y(h,n,s,r.__n,h.ownerSVGElement!==void 0,n.__h!=null?[c]:null,o,c==null?P(n):c,n.__h),be(o,n),n.__e!=c&&ge(n)))})}function ye(e,t,r,o,s,n,c,h,f,m){var i,d,l,_,p,x,g,v=o&&o.__k||me,w=v.length;for(r.__k=[],i=0;i<t.length;i++)if((_=r.__k[i]=(_=t[i])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?H(null,_,null,null,_):Array.isArray(_)?H(E,{children:_},null,null,null):_.__b>0?H(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null){if(_.__=r,_.__b=r.__b+1,(l=v[i])===null||l&&_.key==l.key&&_.type===l.type)v[i]=void 0;else for(d=0;d<w;d++){if((l=v[d])&&_.key==l.key&&_.type===l.type){v[d]=void 0;break}l=null}Y(e,_,l=l||$,s,n,c,h,f,m),p=_.__e,(d=_.ref)&&l.ref!=d&&(g||(g=[]),l.ref&&g.push(l.ref,null,_),g.push(d,_.__c||p,_)),p!=null?(x==null&&(x=p),typeof _.type=="function"&&_.__k===l.__k?_.__d=f=ve(_,f,e):f=ke(e,_,l,v,p,f),typeof r.type=="function"&&(r.__d=f)):f&&l.__e==f&&f.parentNode!=e&&(f=P(l))}for(r.__e=x,i=w;i--;)v[i]!=null&&(typeof r.type=="function"&&v[i].__e!=null&&v[i].__e==r.__d&&(r.__d=P(o,i+1)),Ce(v[i],v[i]));if(g)for(i=0;i<g.length;i++)we(g[i],g[++i],g[++i])}function ve(e,t,r){for(var o,s=e.__k,n=0;s&&n<s.length;n++)(o=s[n])&&(o.__=e,t=typeof o.type=="function"?ve(o,t,r):ke(r,o,o,s,o.__e,t));return t}function ke(e,t,r,o,s,n){var c,h,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(r==null||s!=n||s.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(s),c=null;else{for(h=n,f=0;(h=h.nextSibling)&&f<o.length;f+=2)if(h==s)break e;e.insertBefore(s,n),c=n}return c!==void 0?c:s.nextSibling}function Te(e,t,r,o,s){var n;for(n in r)n==="children"||n==="key"||n in t||U(e,n,null,r[n],o);for(n in t)s&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||r[n]===t[n]||U(e,n,t[n],r[n],o)}function te(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||He.test(t)?r:r+"px"}function U(e,t,r,o,s){var n;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||te(e.style,t,"");if(r)for(t in r)o&&r[t]===o[t]||te(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=r,r?o||e.addEventListener(t,n?ne:re,n):e.removeEventListener(t,n?ne:re,n);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function re(e){this.l[e.type+!1](a.event?a.event(e):e)}function ne(e){this.l[e.type+!0](a.event?a.event(e):e)}function Y(e,t,r,o,s,n,c,h,f){var m,i,d,l,_,p,x,g,v,w,L,X,M,b=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(f=r.__h,h=t.__e=r.__e,t.__h=null,n=[h]),(m=a.__b)&&m(t);try{e:if(typeof b=="function"){if(g=t.props,v=(m=b.contextType)&&o[m.__c],w=m?v?v.props.value:m.__:o,r.__c?x=(i=t.__c=r.__c).__=i.__E:("prototype"in b&&b.prototype.render?t.__c=i=new b(g,w):(t.__c=i=new T(g,w),i.constructor=b,i.render=je),v&&v.sub(i),i.props=g,i.state||(i.state={}),i.context=w,i.__n=o,d=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,b.getDerivedStateFromProps(g,i.__s))),l=i.props,_=i.state,d)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==l&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,w),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,w)===!1||t.__v===r.__v){i.props=g,i.state=i.__s,t.__v!==r.__v&&(i.__d=!1),i.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(N){N&&(N.__=t)}),i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(l,_,p)})}if(i.context=w,i.props=g,i.__v=t,i.__P=e,L=a.__r,X=0,"prototype"in b&&b.prototype.render)i.state=i.__s,i.__d=!1,L&&L(t),m=i.render(i.props,i.state,i.context);else do i.__d=!1,L&&L(t),m=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++X<25);i.state=i.__s,i.getChildContext!=null&&(o=C(C({},o),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(p=i.getSnapshotBeforeUpdate(l,_)),M=m!=null&&m.type===E&&m.key==null?m.props.children:m,ye(e,Array.isArray(M)?M:[M],t,r,o,s,n,c,h,f),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),x&&(i.__E=i.__=null),i.__e=!1}else n==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Fe(r.__e,t,r,o,s,n,c,f);(m=a.diffed)&&m(t)}catch(N){t.__v=null,(f||n!=null)&&(t.__e=h,t.__h=!!f,n[n.indexOf(h)]=null),a.__e(N,t,r)}}function be(e,t){a.__c&&a.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){a.__e(o,r.__v)}})}function Fe(e,t,r,o,s,n,c,h){var f,m,i,d=r.props,l=t.props,_=t.type,p=0;if(_==="svg"&&(s=!0),n!=null){for(;p<n.length;p++)if((f=n[p])&&"setAttribute"in f==!!_&&(_?f.localName===_:f.nodeType===3)){e=f,n[p]=null;break}}if(e==null){if(_===null)return document.createTextNode(l);e=s?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,l.is&&l),n=null,h=!1}if(_===null)d===l||h&&e.data===l||(e.data=l);else{if(n=n&&z.call(e.childNodes),m=(d=r.props||$).dangerouslySetInnerHTML,i=l.dangerouslySetInnerHTML,!h){if(n!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(i||m)&&(i&&(m&&i.__html==m.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Te(e,l,d,s,h),i)t.__k=[];else if(p=t.props.children,ye(e,Array.isArray(p)?p:[p],t,r,o,s&&_!=="foreignObject",n,c,n?n[0]:r.__k&&P(r,0),h),n!=null)for(p=n.length;p--;)n[p]!=null&&de(n[p]);h||("value"in l&&(p=l.value)!==void 0&&(p!==e.value||_==="progress"&&!p||_==="option"&&p!==d.value)&&U(e,"value",p,d.value,!1),"checked"in l&&(p=l.checked)!==void 0&&p!==e.checked&&U(e,"checked",p,d.checked,!1))}return e}function we(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(o){a.__e(o,r)}}function Ce(e,t,r){var o,s;if(a.unmount&&a.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||we(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){a.__e(n,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&Ce(o[s],t,typeof e.type!="function");r||e.__e==null||de(e.__e),e.__=e.__e=e.__d=void 0}function je(e,t,r){return this.constructor(e,r)}function De(e,t,r){var o,s,n;a.__&&a.__(e,t),s=(o=typeof r=="function")?null:r&&r.__k||t.__k,n=[],Y(t,e=(!o&&r||t).__k=u(E,null,[e]),s||$,$,t.ownerSVGElement!==void 0,!o&&r?[r]:s?null:t.firstChild?z.call(t.childNodes):null,n,!o&&r?r:s?s.__e:t.firstChild,o),be(n,e)}z=me.slice,a={__e:function(e,t,r,o){for(var s,n,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,o||{}),c=s.__d),c)return s.__E=s}catch(h){e=h}throw e}},fe=0,T.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},r),this.props)),e&&C(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),ee(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ee(this))},T.prototype.render=E,A=[],O.__r=0;var xe,y,W,oe,I=0,Se=[],F=[],ie=a.__b,se=a.__r,ce=a.diffed,_e=a.__c,ae=a.unmount;function $e(e,t){a.__h&&a.__h(y,e,I||t),I=0;var r=y.__H||(y.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:F}),r.__[e]}function Oe(e){return I=1,Ue(Pe,e)}function Ue(e,t,r){var o=$e(xe++,2);if(o.t=e,!o.__c&&(o.__=[r?r(t):Pe(void 0,t),function(n){var c=o.__N?o.__N[0]:o.__[0],h=o.t(c,n);c!==h&&(o.__N=[h,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){y.u=!0;var s=y.shouldComponentUpdate;y.shouldComponentUpdate=function(n,c,h){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(i){return i.__c});if(f.every(function(i){return!i.__N}))return!s||s.call(this,n,c,h);var m=!1;return f.forEach(function(i){if(i.__N){var d=i.__[0];i.__=i.__N,i.__N=void 0,d!==i.__[0]&&(m=!0)}}),!!m&&(!s||s.call(this,n,c,h))}}return o.__N||o.__}function ze(){for(var e;e=Se.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(j),e.__H.__h.forEach(G),e.__H.__h=[]}catch(t){e.__H.__h=[],a.__e(t,e.__v)}}a.__b=function(e){typeof e.type!="function"||e.o||e.type===E?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,ie&&ie(e)},a.__r=function(e){se&&se(e),xe=0;var t=(y=e.__c).__H;t&&(W===y?(t.__h=[],y.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=F,r.__N=r.i=void 0})):(t.__h.forEach(j),t.__h.forEach(G),t.__h=[])),W=y},a.diffed=function(e){ce&&ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Se.push(t)!==1&&oe===a.requestAnimationFrame||((oe=a.requestAnimationFrame)||Be)(ze)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==F&&(r.__=r.__V),r.i=void 0,r.__V=F})),W=y=null},a.__c=function(e,t){t.some(function(r){try{r.__h.forEach(j),r.__h=r.__h.filter(function(o){return!o.__||G(o)})}catch(o){t.some(function(s){s.__h&&(s.__h=[])}),t=[],a.__e(o,r.__v)}}),_e&&_e(e,t)},a.unmount=function(e){ae&&ae(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{j(o)}catch(s){t=s}}),r.__H=void 0,t&&a.__e(t,r.__v))};var le=typeof requestAnimationFrame=="function";function Be(e){var t,r=function(){clearTimeout(o),le&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(r,100);le&&(t=requestAnimationFrame(r))}function j(e){var t=y,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),y=t}function G(e){var t=y;e.__c=e.__(),y=t}function Pe(e,t){return typeof t=="function"?t(e):t}function We({link:e}){return u("li",{class:"directory-link"},u("a",{href:e.destination},e.text))}function qe({category:e}){const{title:t,entries:r,subCategories:o}=e,s=r.map(ue);return u("section",{class:"category"},u("h2",null,t),u("div",{class:"columns "+Ie(Ge(e))},s.length>0&&u("section",null,u("ul",null,s)),o.map(({title:n,entries:c})=>u("section",null,u("h3",null,n),u("ul",null,c.map(ue))))))}function Ie(e){switch(!0){case e>=12:return"columns-3";case e>=6:return"columns-2";default:return"columns-1"}}function ue(e){return u(We,{link:e})}function Ge(e){return e.entries.length+e.subCategories.map(({entries:t})=>t.length).reduce(Ke,0)}function Ke(e,t){return e+t}function Re(e){const{config:t,query:r,onQuery:o,onSearchSubmitted:s}=e;return u(E,null,u("nav",{class:"menu"},t.menu.map((n,c)=>u("a",{href:n.destination,key:c},n.text))),u("div",{class:"podium"},u("div",{class:"omnisearch"},u("input",{type:"search",placeholder:"Search",autoFocus:!0,value:r,onKeyPress:n=>{n.key==="Enter"&&s(0)},onInput:n=>o(n.currentTarget.value)}),u("div",{class:"search-providers"},t.searchProviders.map((n,c)=>u("button",{key:c,onClick:()=>s(c)},n.name)))),u("article",null,t.categories.map(n=>u(qe,{category:n}))),u("footer",null,u("hr",null),u("p",null,"Bastion is maintained by"," ",u("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),u("p",null,"The image that appears at the top of each page is"," ",u("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",u("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",u("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"," ",u("img",{src:"https://mirrors.creativecommons.org/presskit/icons/pd.svg",style:"height: 1em; margin-right: 0.125em; display: inline;"})),"."),u("p",null,"Theme inspired by"," ",u("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."))))}const K=Symbol(),R=Symbol(),V=Symbol(),D=Symbol();function k(e,t){function r(...o){if(o.length>=e.length)return e(...o);{const s=(...n)=>r(...o,...n);return s[K]=e,s[R]=r,s[V]=o,s[D]=r[D],s}}return r[K]=e,r[R]=r,r[V]=[],r[D]=t||Qe(e),r}function q(e){return e[K]}function Ve(e){return e[R]}function Q(e){return e[V]||[]}function Qe(e){return e[D]||e.name}class Ye extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const Je=k(function(e,t){return e(t)},"which"),S=k(function(e,t){var r,o;if(Xe(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((s,n)=>S(e[n],t[n]));if(e instanceof Function&&t instanceof Function)return q(e)&&q(e)===q(t)?S(Q(e),Q(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(s=>t.has(s));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(pe(e)&&pe(t)){const s=Object.keys(e),n=Object.keys(t);return s.length===n.length&&s.every(c=>S(e[c],t[c]))&&((r=e.__proto__)==null?void 0:r.constructor)===((o=t.__proto__)==null?void 0:o.constructor)}return e===t},"equals");k(function(e,t){return e===t},"is");k(function(e,t,...r){return!e(t,...r)},"not");k(function(e){return/^\s*$/.test(e)},"isBlank");function pe(e){return!!e&&typeof e=="object"}function Xe(e){return e instanceof Function&&Ve(e)===Je&&Q(e).length===1}k(function(t,r){return r.slice(0,t.length)===t?r.slice(t.length):r});k(function(t,r){return r instanceof Ye&&S(t,r.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function Ee(e){const[t,r,o]=Ze(e);return{link:{text:t,destination:r},keywords:o}}function Ze(e){const t=e.indexOf("|");let r,o;t===-1?(r=void 0,o=e):(r=e.slice(0,t).trim(),o=e.slice(t+1).trim());const[s,...n]=o.split(/\s+/);return[r!=null?r:et(s),s,n]}function et(e){return e.replace(/^[^:]+:\/\//,"")}function Le(e){const t=e==null?void 0:e.trim();return t?t.split(/\s+/):[]}function Ae(e){return Ee(e).link}function tt(e){return{menu:rt(e.menu),searchProviders:nt(e.searchProviders),categories:ot(e.categories)}}function rt(e){return J(e).map(Ae)}function nt(e){return J(e).map(Ae).map(t=>({name:t.text,searchUrlFormat:t.destination}))}function ot(e){return(e!=null?e:[]).map(it)}function it(e){var r;const t=Le(e.keywords);return{title:e.title,entries:Me(e.entries,t),subCategories:((r=e.subCategories)!=null?r:[]).map(st(t))}}const st=k((e,t)=>({title:t.title,entries:Me(t.entries,e.concat(Le(t.keywords)))}),"parseLeafCategory");function Me(e,t=[]){return J(e).map(Ee).map(r=>({...r,keywords:r.keywords.concat(t)}))}function J(e){return e?e.split(`
`).map(ct).filter(Boolean):[]}function ct(e){return e.trim()}const _t={menu:`
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
  `,categories:[{title:"Software Development",subCategories:[{title:"Engineering",entries:`
            The Art of Unix Programming | http://www.catb.org/esr/writings/taoup/html/ Eric Raymond
            https://buildingbeauty.org Christopher Alexander Greg Bryant
            https://beautiful.software Christopher Alexander Greg Bryant
            https://refactoring.com Martin Fowler
          `},{title:"Unix",entries:`
            https://hub.docker.com
            https://man7.org
          `},{title:"Reference",entries:`
            https://unicode.org
            https://memorymanagement.org
            https://spectrum.ieee.org
            https://lawsofux.com
            https://cheatsheetseries.owasp.org
          `},{title:"Web Programming",entries:`
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
          `},{title:"Hosting",entries:`
            fly.io | https://fly.io
            render.com | https://render.com
            cloudflare.com | https://cloudflare.com
            supabase.com | https://supabase.com
            digitalocean.com | https://digitalocean.com
          `},{title:"Help",entries:`
            stackoverflow.com | https://stackoverflow.com
            exercism.org | https://exercism.org
          `}]},{title:"Food",subCategories:[{title:"Merchants",entries:`
            https://herbco.com
          `},{title:"Korean",keywords:"korean",entries:`
            https://maangchi.com
            https://koreanbapsang.com
            https://mykoreankitchen.com
          `},{title:"Indian",keywords:"indian",entries:`
            https://indianhealthyrecipes.com
            https://www.vegrecipesofindia.com
          `},{title:"Turkish",keywords:"turkish",entries:`
            Ozlem's Turkish Table | https://ozlemsturkishtable.com/
            Binnur's Turkish Cookbook | https://binnurturkishcookbook.blogspot.com/
          `}]},{title:"Web-based Tools",subCategories:[{title:"Sensing",entries:`
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
          `}]},{title:"Gaming",subCategories:[{title:"Catalogs",entries:`
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
      `},{title:"Computer Habitability",entries:`
        addons.mozilla.org | https://addons.mozilla.org
        LeechBlock NG | https://www.proginosko.com/leechblock/
        uBlock Origin for Firefox | https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
        New Tab Override for Firefox | https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/
        darkreader.org | https://darkreader.org
        https://href.li
      `},{title:"Images",entries:`
        https://images.freeimages.com
        https://flickr.com
        https://cliparts.co
      `},{title:"Learning",entries:`
        https://khanacademy.org
        Leitner system (Wikipedia) | https://en.wikipedia.org/wiki/Leitner_system srs flashcards
      `},{title:"Commerce",entries:`
        https://herbco.com
        https://betterworldbooks.com
        https://evertype.com
        https://newegg.com
        https://bandcamp.com
        https://alternativeto.net
      `},{title:"Archives and Archiving",entries:`
        https://archive.org
        https://versionmuseum.com
      `},{title:"Books",entries:`
        https://books.google.com
        https://betterworldbooks.com
        https://evertype.com
        https://terebess.hu
        https://exclassics.com
      `},{title:"Music",entries:`
        https://universocantigas.gal
        https://butterchurnviz.com
        https://open.spotify.com
        https://lyricstranslate.com
        https://musicanet.org
        https://lieder.net
        https://bandcamp.com
      `},{title:"Video",entries:`
        https://vimeo.com
        https://vid.puffyan.us
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
      `}]};function at(e){return{menu:e.menu,searchProviders:e.searchProviders,categories:e.categories.map(t=>({...t,subCategories:t.subCategories.map(r=>({...r,entries:r.entries.map(o=>o.link)})),entries:t.entries.map(r=>r.link)}))}}function lt(e,t){return t.filter(ut(e)).map(pt(e))}const ut=k((e,t)=>t.entries.some(B(e))||t.subCategories.some(Ne(e)),"categoryMatches"),pt=k((e,t)=>({...t,entries:t.entries.filter(B(e)),subCategories:t.subCategories.filter(Ne(e)).map(ht(e))})),Ne=k((e,t)=>t.entries.some(B(e))),ht=k((e,t)=>({...t,entries:t.entries.filter(B(e))})),B=k((e,t)=>ft(e).every(r=>t.link.destination.toLowerCase().includes(r)||t.link.text.toLowerCase().includes(r)||t.keywords.some(o=>o.toLowerCase().includes(r))),"entryMatches");function ft(e){return e.toLowerCase().split(/\s+/)}function mt(){const[e,t]=Oe(""),r=tt(_t),o={...r,categories:lt(e,r.categories)};return u(Re,{config:at(o),query:e,onQuery:t,onSearchSubmitted:s=>window.open(r.searchProviders[s].searchUrlFormat.replace("%s",e),"_self")})}k((e,t)=>S(new Set(e),new Set(t)),"isSameSetAs");k((e,t)=>{for(let r in e)if(!(r in t)||!S(e[r],t[r]))return!1;return!0},"hasProperties");var he;(e=>{function t({title:r="",entries:o=[],subCategories:s=[]}){return{title:r,entries:o,subCategories:s}}e.category=t})(he||(he={}));De(u(mt,null),document.getElementById("preact-root"));
