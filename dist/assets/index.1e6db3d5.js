(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();var q,u,ve,F,ne,z={},be=[],Ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var o in t)e[o]=t[o];return e}function we(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,o){var r,s,n,c={};for(n in t)n=="key"?r=t[n]:n=="ref"?s=t[n]:c[n]=t[n];if(arguments.length>2&&(c.children=arguments.length>3?q.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)c[n]===void 0&&(c[n]=e.defaultProps[n]);return T(e,c,r,s,null)}function T(e,t,o,r,s){var n={type:e,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++ve:s};return s==null&&u.vnode!=null&&u.vnode(n),n}function A(e){return e.children}function $(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__.__k.indexOf(e)+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?L(e):null}function Ce(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return Ce(e)}}function re(e){(!e.__d&&(e.__d=!0)&&F.push(e)&&!O.__r++||ne!==u.debounceRendering)&&((ne=u.debounceRendering)||setTimeout)(O)}function O(){for(var e;O.__r=F.length;)e=F.sort(function(t,o){return t.__v.__b-o.__v.__b}),F=[],e.some(function(t){var o,r,s,n,c,h;t.__d&&(c=(n=(o=t).__v).__e,(h=o.__P)&&(r=[],(s=C({},n)).__v=n.__v+1,X(h,n,s,o.__n,h.ownerSVGElement!==void 0,n.__h!=null?[c]:null,r,c==null?L(n):c,n.__h),Le(r,n),n.__e!=c&&Ce(n)))})}function xe(e,t,o,r,s,n,c,h,f,m){var i,d,_,a,p,x,g,k=r&&r.__k||be,w=k.length;for(o.__k=[],i=0;i<t.length;i++)if((a=o.__k[i]=(a=t[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(A,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=o,a.__b=o.__b+1,(_=k[i])===null||_&&a.key==_.key&&a.type===_.type)k[i]=void 0;else for(d=0;d<w;d++){if((_=k[d])&&a.key==_.key&&a.type===_.type){k[d]=void 0;break}_=null}X(e,a,_=_||z,s,n,c,h,f,m),p=a.__e,(d=a.ref)&&_.ref!=d&&(g||(g=[]),_.ref&&g.push(_.ref,null,a),g.push(d,a.__c||p,a)),p!=null?(x==null&&(x=p),typeof a.type=="function"&&a.__k===_.__k?a.__d=f=Se(a,f,e):f=Pe(e,a,_,k,p,f),typeof o.type=="function"&&(o.__d=f)):f&&_.__e==f&&f.parentNode!=e&&(f=L(_))}for(o.__e=x,i=w;i--;)k[i]!=null&&(typeof o.type=="function"&&k[i].__e!=null&&k[i].__e==o.__d&&(o.__d=L(r,i+1)),Ee(k[i],k[i]));if(g)for(i=0;i<g.length;i++)Ae(g[i],g[++i],g[++i])}function Se(e,t,o){for(var r,s=e.__k,n=0;s&&n<s.length;n++)(r=s[n])&&(r.__=e,t=typeof r.type=="function"?Se(r,t,o):Pe(o,r,r,s,r.__e,t));return t}function Pe(e,t,o,r,s,n){var c,h,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(o==null||s!=n||s.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(s),c=null;else{for(h=n,f=0;(h=h.nextSibling)&&f<r.length;f+=2)if(h==s)break e;e.insertBefore(s,n),c=n}return c!==void 0?c:s.nextSibling}function Be(e,t,o,r,s){var n;for(n in o)n==="children"||n==="key"||n in t||U(e,n,null,o[n],r);for(n in t)s&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||o[n]===t[n]||U(e,n,t[n],o[n],r)}function se(e,t,o){t[0]==="-"?e.setProperty(t,o):e[t]=o==null?"":typeof o!="number"||Ue.test(t)?o:o+"px"}function U(e,t,o,r,s){var n;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)o&&t in o||se(e.style,t,"");if(o)for(t in o)r&&o[t]===r[t]||se(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=o,o?r||e.addEventListener(t,n?ce:ie,n):e.removeEventListener(t,n?ce:ie,n);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=o==null?"":o;break e}catch{}typeof o=="function"||(o!=null&&(o!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,o):e.removeAttribute(t))}}function ie(e){this.l[e.type+!1](u.event?u.event(e):e)}function ce(e){this.l[e.type+!0](u.event?u.event(e):e)}function X(e,t,o,r,s,n,c,h,f){var m,i,d,_,a,p,x,g,k,w,E,oe,H,b=t.type;if(t.constructor!==void 0)return null;o.__h!=null&&(f=o.__h,h=t.__e=o.__e,t.__h=null,n=[h]),(m=u.__b)&&m(t);try{e:if(typeof b=="function"){if(g=t.props,k=(m=b.contextType)&&r[m.__c],w=m?k?k.props.value:m.__:r,o.__c?x=(i=t.__c=o.__c).__=i.__E:("prototype"in b&&b.prototype.render?t.__c=i=new b(g,w):(t.__c=i=new $(g,w),i.constructor=b,i.render=Ie),k&&k.sub(i),i.props=g,i.state||(i.state={}),i.context=w,i.__n=r,d=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),b.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,b.getDerivedStateFromProps(g,i.__s))),_=i.props,a=i.state,d)b.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==_&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,w),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,w)===!1||t.__v===o.__v){i.props=g,i.state=i.__s,t.__v!==o.__v&&(i.__d=!1),i.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(M){M&&(M.__=t)}),i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(_,a,p)})}if(i.context=w,i.props=g,i.__v=t,i.__P=e,E=u.__r,oe=0,"prototype"in b&&b.prototype.render)i.state=i.__s,i.__d=!1,E&&E(t),m=i.render(i.props,i.state,i.context);else do i.__d=!1,E&&E(t),m=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++oe<25);i.state=i.__s,i.getChildContext!=null&&(r=C(C({},r),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(p=i.getSnapshotBeforeUpdate(_,a)),H=m!=null&&m.type===A&&m.key==null?m.props.children:m,xe(e,Array.isArray(H)?H:[H],t,o,r,s,n,c,h,f),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),x&&(i.__E=i.__=null),i.__e=!1}else n==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=qe(o.__e,t,o,r,s,n,c,f);(m=u.diffed)&&m(t)}catch(M){t.__v=null,(f||n!=null)&&(t.__e=h,t.__h=!!f,n[n.indexOf(h)]=null),u.__e(M,t,o)}}function Le(e,t){u.__c&&u.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){u.__e(r,o.__v)}})}function qe(e,t,o,r,s,n,c,h){var f,m,i,d=o.props,_=t.props,a=t.type,p=0;if(a==="svg"&&(s=!0),n!=null){for(;p<n.length;p++)if((f=n[p])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,n[p]=null;break}}if(e==null){if(a===null)return document.createTextNode(_);e=s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,_.is&&_),n=null,h=!1}if(a===null)d===_||h&&e.data===_||(e.data=_);else{if(n=n&&q.call(e.childNodes),m=(d=o.props||z).dangerouslySetInnerHTML,i=_.dangerouslySetInnerHTML,!h){if(n!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(i||m)&&(i&&(m&&i.__html==m.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Be(e,_,d,s,h),i)t.__k=[];else if(p=t.props.children,xe(e,Array.isArray(p)?p:[p],t,o,r,s&&a!=="foreignObject",n,c,n?n[0]:o.__k&&L(o,0),h),n!=null)for(p=n.length;p--;)n[p]!=null&&we(n[p]);h||("value"in _&&(p=_.value)!==void 0&&(p!==e.value||a==="progress"&&!p||a==="option"&&p!==d.value)&&U(e,"value",p,d.value,!1),"checked"in _&&(p=_.checked)!==void 0&&p!==e.checked&&U(e,"checked",p,d.checked,!1))}return e}function Ae(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,o)}}function Ee(e,t,o){var r,s;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ae(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){u.__e(n,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&Ee(r[s],t,typeof e.type!="function");o||e.__e==null||we(e.__e),e.__=e.__e=e.__d=void 0}function Ie(e,t,o){return this.constructor(e,o)}function Re(e,t,o){var r,s,n;u.__&&u.__(e,t),s=(r=typeof o=="function")?null:o&&o.__k||t.__k,n=[],X(t,e=(!r&&o||t).__k=l(A,null,[e]),s||z,z,t.ownerSVGElement!==void 0,!r&&o?[o]:s?null:t.firstChild?q.call(t.childNodes):null,n,!r&&o?o:s?s.__e:t.firstChild,r),Le(n,e)}q=be.slice,u={__e:function(e,t,o,r){for(var s,n,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,r||{}),c=s.__d),c)return s.__E=s}catch(h){e=h}throw e}},ve=0,$.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},o),this.props)),e&&C(o,e),e!=null&&this.__v&&(t&&this.__h.push(t),re(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),re(this))},$.prototype.render=A,F=[],O.__r=0;var I,y,V,ae,B=0,Fe=[],N=[],le=u.__b,ue=u.__r,_e=u.diffed,pe=u.__c,he=u.unmount;function ee(e,t){u.__h&&u.__h(y,e,B||t),B=0;var o=y.__H||(y.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:N}),o.__[e]}function He(e){return B=1,Ve(Te,e)}function Ve(e,t,o){var r=ee(I++,2);if(r.t=e,!r.__c&&(r.__=[o?o(t):Te(void 0,t),function(n){var c=r.__N?r.__N[0]:r.__[0],h=r.t(c,n);c!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var s=y.shouldComponentUpdate;y.shouldComponentUpdate=function(n,c,h){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(i){return i.__c});if(f.every(function(i){return!i.__N}))return!s||s.call(this,n,c,h);var m=!1;return f.forEach(function(i){if(i.__N){var d=i.__[0];i.__=i.__N,i.__N=void 0,d!==i.__[0]&&(m=!0)}}),!!m&&(!s||s.call(this,n,c,h))}}return r.__N||r.__}function We(e,t){var o=ee(I++,3);!u.__s&&Me(o.__H,t)&&(o.__=e,o.i=t,y.__H.__h.push(o))}function Ge(e){return B=5,Ke(function(){return{current:e}},[])}function Ke(e,t){var o=ee(I++,7);return Me(o.__H,t)?(o.__V=e(),o.i=t,o.__h=e,o.__V):o.__}function Qe(){for(var e;e=Fe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(D),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){typeof e.type!="function"||e.o||e.type===A?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,le&&le(e)},u.__r=function(e){ue&&ue(e),I=0;var t=(y=e.__c).__H;t&&(V===y?(t.__h=[],y.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=N,o.__N=o.i=void 0})):(t.__h.forEach(D),t.__h.forEach(K),t.__h=[])),V=y},u.diffed=function(e){_e&&_e(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Fe.push(t)!==1&&ae===u.requestAnimationFrame||((ae=u.requestAnimationFrame)||Ye)(Qe)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==N&&(o.__=o.__V),o.i=void 0,o.__V=N})),V=y=null},u.__c=function(e,t){t.some(function(o){try{o.__h.forEach(D),o.__h=o.__h.filter(function(r){return!r.__||K(r)})}catch(r){t.some(function(s){s.__h&&(s.__h=[])}),t=[],u.__e(r,o.__v)}}),pe&&pe(e,t)},u.unmount=function(e){he&&he(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(r){try{D(r)}catch(s){t=s}}),o.__H=void 0,t&&u.__e(t,o.__v))};var fe=typeof requestAnimationFrame=="function";function Ye(e){var t,o=function(){clearTimeout(r),fe&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(o,100);fe&&(t=requestAnimationFrame(o))}function D(e){var t=y,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),y=t}function K(e){var t=y;e.__c=e.__(),y=t}function Me(e,t){return!e||e.length!==t.length||t.some(function(o,r){return o!==e[r]})}function Te(e,t){return typeof t=="function"?t(e):t}function Ze({link:e}){return l("li",{class:"directory-link"},l("a",{href:e.destination},e.text))}function Je({category:e}){const{title:t,entries:o,subCategories:r}=e,s=o.map(me);return l("section",{class:"category"},l("h2",null,t),l("div",{class:"columns "+Xe(et(e))},s.length>0&&l("section",null,l("ul",null,s)),r.map(({title:n,entries:c})=>l("section",null,l("h3",null,n),l("ul",null,c.map(me))))))}function Xe(e){switch(!0){case e>=12:return"columns-3";case e>=6:return"columns-2";default:return"columns-1"}}function me(e){return l(Ze,{link:e})}function et(e){return e.entries.length+e.subCategories.map(({entries:t})=>t.length).reduce(tt,0)}function tt(e,t){return e+t}function $e(e){return l("button",{class:"raised-button",...e})}function ot(e){const[t,o]=He(!1),r=Ge(null);return We(()=>{if(!t)return;function s(){o(!1)}const n=r.current;return n==null||n.addEventListener("close",s),n==null||n.showModal(),()=>n==null?void 0:n.removeEventListener("close",s)},[t]),l("div",{class:"dev-info-pane-opener"},l($e,{onClick:()=>o(!0)},"Show Developer Info"),t&&l("dialog",{ref:r},e.children))}function nt(e){return l("div",{class:"dev-info-pane"},l("label",{for:"leechblock-config"},"LeechBlock Config"),l("textarea",{id:"leechblock-config"},`*
`,e.leechblockAllowPatterns.map(t=>"+"+t).join(`
`)))}function rt(e){const{config:t,query:o,onQuery:r,onSearchSubmitted:s}=e;return l(A,null,l("nav",{class:"menu"},t.menu.map((n,c)=>l("a",{href:n.destination,key:c},n.text))),l("div",{class:"podium"},l("div",{class:"omnisearch"},l("input",{type:"search",placeholder:"Search",autoFocus:!0,value:o,onKeyPress:n=>{n.key==="Enter"&&s(0)},onInput:n=>r(n.currentTarget.value)}),l("div",{class:"search-providers"},t.searchProviders.map((n,c)=>l($e,{key:c,onClick:()=>s(c)},n.name)))),l("article",null,t.categories.map(n=>l(Je,{category:n}))),l("footer",null,l("hr",null),l("p",null,"Bastion is maintained by"," ",l("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),l("p",null,"The image that appears at the top of each page is"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"),"."),l("p",null,"Theme inspired by"," ",l("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."),l(ot,null,l(nt,{leechblockAllowPatterns:t.leechblockAllowPatterns})))))}const Q=Symbol(),Y=Symbol(),Z=Symbol(),j=Symbol();function v(e,t){function o(...r){if(r.length>=e.length)return e(...r);{const s=(...n)=>o(...r,...n);return s[Q]=e,s[Y]=o,s[Z]=r,s[j]=o[j],s}}return o[Q]=e,o[Y]=o,o[Z]=[],o[j]=t||it(e),o}function W(e){return e[Q]}function st(e){return e[Y]}function J(e){return e[Z]||[]}function it(e){return e[j]||e.name}class ct extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const at=v(function(e,t){return e(t)},"which"),P=v(function(e,t){var o,r;if(lt(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((s,n)=>P(e[n],t[n]));if(e instanceof Function&&t instanceof Function)return W(e)&&W(e)===W(t)?P(J(e),J(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(s=>t.has(s));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(de(e)&&de(t)){const s=Object.keys(e),n=Object.keys(t);return s.length===n.length&&s.every(c=>P(e[c],t[c]))&&((o=e.__proto__)==null?void 0:o.constructor)===((r=t.__proto__)==null?void 0:r.constructor)}return e===t},"equals");v(function(e,t){return e===t},"is");v(function(e,t,...o){return!e(t,...o)},"not");v(function(e){return/^\s*$/.test(e)},"isBlank");function de(e){return!!e&&typeof e=="object"}function lt(e){return e instanceof Function&&st(e)===at&&J(e).length===1}v(function(t,o){return o.slice(0,t.length)===t?o.slice(t.length):o});v(function(t,o){return o instanceof ct&&P(t,o.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function ut(e){return e.replace(/^[^:]+:\/\//,"").replace(/^www\./,"").replace(/\/$/,"")}function Ne(e){const[t,o,r]=_t(e);return{link:{text:t,destination:o},keywords:r}}function _t(e){const t=e.indexOf("|");let o,r;t===-1?(o=void 0,r=e):(o=e.slice(0,t).trim(),r=e.slice(t+1).trim());const[s,...n]=r.split(/\s+/);return[o!=null?o:ut(s),s,n]}function De(e){const t=e==null?void 0:e.trim();return t?t.split(/\s+/):[]}function je(e){return Ne(e).link}const G=(e,...t)=>t.reduce((o,r)=>r(o),e);function pt(e){return e||[]}function S(e){return t=>t.map(e)}function ge(e){return t=>t.map(e).reduce(ft,[])}function ht(e){const t=[...e].sort();return t.filter((o,r)=>o!==t[r-1])}function ft(e,t){return e.concat(t)}function mt(e){const t=dt(e.menu),o=yt(e.categories),r=gt(e.searchProviders);return{menu:t,searchProviders:r,categories:o,leechblockAllowPatterns:ht([...G(t,S(s=>s.destination),S(ye)),...G(r,S(s=>s.searchUrlFormat),S(Ct)),...G(pt(o),ge(s=>[s,...s.subCategories]),ge(s=>s.entries),S(s=>s.link.destination),S(ye)),...kt(e.customLeechblockAllowPatterns)])}}function dt(e){return te(e).map(je)}function gt(e){return te(e).map(je).map(t=>({name:t.text,searchUrlFormat:t.destination}))}function yt(e){return(e!=null?e:[]).map(vt)}function kt(e){var t;return(t=e==null?void 0:e.trim().split(/\s+/))!=null?t:[]}function vt(e){var o;const t=De(e.keywords);return{title:e.title,entries:ze(e.entries,t),subCategories:((o=e.subCategories)!=null?o:[]).map(bt(t))}}const bt=v((e,t)=>({title:t.title,entries:ze(t.entries,e.concat(De(t.keywords)))}),"parseLeafCategory");function ze(e,t=[]){return te(e).map(Ne).map(o=>({...o,keywords:o.keywords.concat(t)}))}function te(e){return e?e.split(`
`).map(wt).filter(Boolean):[]}function wt(e){return e.trim()}function ye(e){return xt(()=>new URL(e).hostname,()=>e)}function Ct(e){const t=new URL(e),o=t.pathname==="/"?"":t.pathname;return t.hostname+o}function xt(e,t){try{return e()}catch{return t()}}const St={menu:`
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
      `},{title:"Miscellaneous",entries:`
        https://permies.com
        https://federalregister.gov
        https://skepdic.com
        https://patternlanguage.com
        https://patreon.com
        https://en.wikiquote.org
        https://en.wikisource.org
        https://npl.wiki
        http://www.livingneighborhoods.org
      `}]};function Pt(e){return{...e,categories:e.categories.map(t=>({...t,subCategories:t.subCategories.map(o=>({...o,entries:o.entries.map(r=>r.link)})),entries:t.entries.map(o=>o.link)}))}}function Lt(e,t){return t.filter(At(e)).map(Et(e))}const At=v((e,t)=>t.entries.some(R(e))||t.subCategories.some(Oe(e)),"categoryMatches"),Et=v((e,t)=>({...t,entries:t.entries.filter(R(e)),subCategories:t.subCategories.filter(Oe(e)).map(Ft(e))})),Oe=v((e,t)=>t.entries.some(R(e))),Ft=v((e,t)=>({...t,entries:t.entries.filter(R(e))})),R=v((e,t)=>Ht(e).every(o=>t.link.destination.toLowerCase().includes(o)||t.link.text.toLowerCase().includes(o)||t.keywords.some(r=>r.toLowerCase().includes(o))),"entryMatches");function Ht(e){return e.toLowerCase().split(/\s+/)}function Mt(){const[e,t]=He(""),o=mt(St),r={...o,categories:Lt(e,o.categories)};return l(rt,{config:Pt(r),query:e,onQuery:t,onSearchSubmitted:s=>window.open(o.searchProviders[s].searchUrlFormat.replace("%s",e),"_self")})}v((e,t)=>P(new Set(e),new Set(t)),"isSameSetAs");v((e,t)=>{for(let o in e)if(!(o in t)||!P(e[o],t[o]))return!1;return!0},"hasProperties");var ke;(e=>{function t({title:o="",entries:r=[],subCategories:s=[]}){return{title:o,entries:r,subCategories:s}}e.category=t})(ke||(ke={}));Re(l(Mt,null),document.getElementById("preact-root"));
