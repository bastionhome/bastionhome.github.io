(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();var V,u,be,F,re,z={},ke=[],Ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var o in t)e[o]=t[o];return e}function ve(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,o){var n,s,r,c={};for(r in t)r=="key"?n=t[r]:r=="ref"?s=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?V.call(arguments,2):o),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return T(e,c,n,s,null)}function T(e,t,o,n,s){var r={type:e,props:t,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++be:s};return s==null&&u.vnode!=null&&u.vnode(r),r}function A(e){return e.children}function D(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__.__k.indexOf(e)+1):null;for(var o;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null)return o.__e;return typeof e.type=="function"?L(e):null}function Ce(e){var t,o;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((o=e.__k[t])!=null&&o.__e!=null){e.__e=e.__c.base=o.__e;break}return Ce(e)}}function ne(e){(!e.__d&&(e.__d=!0)&&F.push(e)&&!B.__r++||re!==u.debounceRendering)&&((re=u.debounceRendering)||setTimeout)(B)}function B(){for(var e;B.__r=F.length;)e=F.sort(function(t,o){return t.__v.__b-o.__v.__b}),F=[],e.some(function(t){var o,n,s,r,c,p;t.__d&&(c=(r=(o=t).__v).__e,(p=o.__P)&&(n=[],(s=C({},r)).__v=r.__v+1,J(p,r,s,o.__n,p.ownerSVGElement!==void 0,r.__h!=null?[c]:null,n,c==null?L(r):c,r.__h),Le(n,r),r.__e!=c&&Ce(r)))})}function xe(e,t,o,n,s,r,c,p,m,d){var i,f,h,a,_,x,g,w=n&&n.__k||ke,v=w.length;for(o.__k=[],i=0;i<t.length;i++)if((a=o.__k[i]=(a=t[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(A,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=o,a.__b=o.__b+1,(h=w[i])===null||h&&a.key==h.key&&a.type===h.type)w[i]=void 0;else for(f=0;f<v;f++){if((h=w[f])&&a.key==h.key&&a.type===h.type){w[f]=void 0;break}h=null}J(e,a,h=h||z,s,r,c,p,m,d),_=a.__e,(f=a.ref)&&h.ref!=f&&(g||(g=[]),h.ref&&g.push(h.ref,null,a),g.push(f,a.__c||_,a)),_!=null?(x==null&&(x=_),typeof a.type=="function"&&a.__k===h.__k?a.__d=m=Se(a,m,e):m=Pe(e,a,h,w,_,m),typeof o.type=="function"&&(o.__d=m)):m&&h.__e==m&&m.parentNode!=e&&(m=L(h))}for(o.__e=x,i=v;i--;)w[i]!=null&&(typeof o.type=="function"&&w[i].__e!=null&&w[i].__e==o.__d&&(o.__d=L(n,i+1)),Ee(w[i],w[i]));if(g)for(i=0;i<g.length;i++)Ae(g[i],g[++i],g[++i])}function Se(e,t,o){for(var n,s=e.__k,r=0;s&&r<s.length;r++)(n=s[r])&&(n.__=e,t=typeof n.type=="function"?Se(n,t,o):Pe(o,n,n,s,n.__e,t));return t}function Pe(e,t,o,n,s,r){var c,p,m;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(o==null||s!=r||s.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(s),c=null;else{for(p=r,m=0;(p=p.nextSibling)&&m<n.length;m+=2)if(p==s)break e;e.insertBefore(s,r),c=r}return c!==void 0?c:s.nextSibling}function Oe(e,t,o,n,s){var r;for(r in o)r==="children"||r==="key"||r in t||U(e,r,null,o[r],n);for(r in t)s&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||o[r]===t[r]||U(e,r,t[r],o[r],n)}function se(e,t,o){t[0]==="-"?e.setProperty(t,o):e[t]=o==null?"":typeof o!="number"||Ue.test(t)?o:o+"px"}function U(e,t,o,n,s){var r;e:if(t==="style")if(typeof o=="string")e.style.cssText=o;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)o&&t in o||se(e.style,t,"");if(o)for(t in o)n&&o[t]===n[t]||se(e.style,t,o[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=o,o?n||e.addEventListener(t,r?ce:ie,r):e.removeEventListener(t,r?ce:ie,r);else if(t!=="dangerouslySetInnerHTML"){if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=o==null?"":o;break e}catch{}typeof o=="function"||(o!=null&&(o!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,o):e.removeAttribute(t))}}function ie(e){this.l[e.type+!1](u.event?u.event(e):e)}function ce(e){this.l[e.type+!0](u.event?u.event(e):e)}function J(e,t,o,n,s,r,c,p,m){var d,i,f,h,a,_,x,g,w,v,E,oe,H,k=t.type;if(t.constructor!==void 0)return null;o.__h!=null&&(m=o.__h,p=t.__e=o.__e,t.__h=null,r=[p]),(d=u.__b)&&d(t);try{e:if(typeof k=="function"){if(g=t.props,w=(d=k.contextType)&&n[d.__c],v=d?w?w.props.value:d.__:n,o.__c?x=(i=t.__c=o.__c).__=i.__E:("prototype"in k&&k.prototype.render?t.__c=i=new k(g,v):(t.__c=i=new D(g,v),i.constructor=k,i.render=qe),w&&w.sub(i),i.props=g,i.state||(i.state={}),i.context=v,i.__n=n,f=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,k.getDerivedStateFromProps(g,i.__s))),h=i.props,a=i.state,f)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&g!==h&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,v),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,v)===!1||t.__v===o.__v){i.props=g,i.state=i.__s,t.__v!==o.__v&&(i.__d=!1),i.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(M){M&&(M.__=t)}),i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,v),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(h,a,_)})}if(i.context=v,i.props=g,i.__v=t,i.__P=e,E=u.__r,oe=0,"prototype"in k&&k.prototype.render)i.state=i.__s,i.__d=!1,E&&E(t),d=i.render(i.props,i.state,i.context);else do i.__d=!1,E&&E(t),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++oe<25);i.state=i.__s,i.getChildContext!=null&&(n=C(C({},n),i.getChildContext())),f||i.getSnapshotBeforeUpdate==null||(_=i.getSnapshotBeforeUpdate(h,a)),H=d!=null&&d.type===A&&d.key==null?d.props.children:d,xe(e,Array.isArray(H)?H:[H],t,o,n,s,r,c,p,m),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),x&&(i.__E=i.__=null),i.__e=!1}else r==null&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=Ve(o.__e,t,o,n,s,r,c,m);(d=u.diffed)&&d(t)}catch(M){t.__v=null,(m||r!=null)&&(t.__e=p,t.__h=!!m,r[r.indexOf(p)]=null),u.__e(M,t,o)}}function Le(e,t){u.__c&&u.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(n){n.call(o)})}catch(n){u.__e(n,o.__v)}})}function Ve(e,t,o,n,s,r,c,p){var m,d,i,f=o.props,h=t.props,a=t.type,_=0;if(a==="svg"&&(s=!0),r!=null){for(;_<r.length;_++)if((m=r[_])&&"setAttribute"in m==!!a&&(a?m.localName===a:m.nodeType===3)){e=m,r[_]=null;break}}if(e==null){if(a===null)return document.createTextNode(h);e=s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,h.is&&h),r=null,p=!1}if(a===null)f===h||p&&e.data===h||(e.data=h);else{if(r=r&&V.call(e.childNodes),d=(f=o.props||z).dangerouslySetInnerHTML,i=h.dangerouslySetInnerHTML,!p){if(r!=null)for(f={},_=0;_<e.attributes.length;_++)f[e.attributes[_].name]=e.attributes[_].value;(i||d)&&(i&&(d&&i.__html==d.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Oe(e,h,f,s,p),i)t.__k=[];else if(_=t.props.children,xe(e,Array.isArray(_)?_:[_],t,o,n,s&&a!=="foreignObject",r,c,r?r[0]:o.__k&&L(o,0),p),r!=null)for(_=r.length;_--;)r[_]!=null&&ve(r[_]);p||("value"in h&&(_=h.value)!==void 0&&(_!==e.value||a==="progress"&&!_||a==="option"&&_!==f.value)&&U(e,"value",_,f.value,!1),"checked"in h&&(_=h.checked)!==void 0&&_!==e.checked&&U(e,"checked",_,f.checked,!1))}return e}function Ae(e,t,o){try{typeof e=="function"?e(t):e.current=t}catch(n){u.__e(n,o)}}function Ee(e,t,o){var n,s;if(u.unmount&&u.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Ae(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){u.__e(r,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&Ee(n[s],t,typeof e.type!="function");o||e.__e==null||ve(e.__e),e.__=e.__e=e.__d=void 0}function qe(e,t,o){return this.constructor(e,o)}function Re(e,t,o){var n,s,r;u.__&&u.__(e,t),s=(n=typeof o=="function")?null:o&&o.__k||t.__k,r=[],J(t,e=(!n&&o||t).__k=l(A,null,[e]),s||z,z,t.ownerSVGElement!==void 0,!n&&o?[o]:s?null:t.firstChild?V.call(t.childNodes):null,r,!n&&o?o:s?s.__e:t.firstChild,n),Le(r,e)}V=ke.slice,u={__e:function(e,t,o,n){for(var s,r,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),c=s.__d),c)return s.__E=s}catch(p){e=p}throw e}},be=0,D.prototype.setState=function(e,t){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},o),this.props)),e&&C(o,e),e!=null&&this.__v&&(t&&this.__h.push(t),ne(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ne(this))},D.prototype.render=A,F=[],B.__r=0;var q,y,I,ae,O=0,Fe=[],N=[],le=u.__b,ue=u.__r,he=u.diffed,_e=u.__c,pe=u.unmount;function ee(e,t){u.__h&&u.__h(y,e,O||t),O=0;var o=y.__H||(y.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({__V:N}),o.__[e]}function He(e){return O=1,Ie(Te,e)}function Ie(e,t,o){var n=ee(q++,2);if(n.t=e,!n.__c&&(n.__=[o?o(t):Te(void 0,t),function(r){var c=n.__N?n.__N[0]:n.__[0],p=n.t(c,r);c!==p&&(n.__N=[p,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){y.u=!0;var s=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,c,p){if(!n.__c.__H)return!0;var m=n.__c.__H.__.filter(function(i){return i.__c});if(m.every(function(i){return!i.__N}))return!s||s.call(this,r,c,p);var d=!1;return m.forEach(function(i){if(i.__N){var f=i.__[0];i.__=i.__N,i.__N=void 0,f!==i.__[0]&&(d=!0)}}),!!d&&(!s||s.call(this,r,c,p))}}return n.__N||n.__}function We(e,t){var o=ee(q++,3);!u.__s&&Me(o.__H,t)&&(o.__=e,o.i=t,y.__H.__h.push(o))}function Ge(e){return O=5,Ke(function(){return{current:e}},[])}function Ke(e,t){var o=ee(q++,7);return Me(o.__H,t)?(o.__V=e(),o.i=t,o.__h=e,o.__V):o.__}function Ze(){for(var e;e=Fe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($),e.__H.__h.forEach(K),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){typeof e.type!="function"||e.o||e.type===A?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,le&&le(e)},u.__r=function(e){ue&&ue(e),q=0;var t=(y=e.__c).__H;t&&(I===y?(t.__h=[],y.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=N,o.__N=o.i=void 0})):(t.__h.forEach($),t.__h.forEach(K),t.__h=[])),I=y},u.diffed=function(e){he&&he(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Fe.push(t)!==1&&ae===u.requestAnimationFrame||((ae=u.requestAnimationFrame)||Xe)(Ze)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==N&&(o.__=o.__V),o.i=void 0,o.__V=N})),I=y=null},u.__c=function(e,t){t.some(function(o){try{o.__h.forEach($),o.__h=o.__h.filter(function(n){return!n.__||K(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],u.__e(n,o.__v)}}),_e&&_e(e,t)},u.unmount=function(e){pe&&pe(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{$(n)}catch(s){t=s}}),o.__H=void 0,t&&u.__e(t,o.__v))};var me=typeof requestAnimationFrame=="function";function Xe(e){var t,o=function(){clearTimeout(n),me&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(o,100);me&&(t=requestAnimationFrame(o))}function $(e){var t=y,o=e.__c;typeof o=="function"&&(e.__c=void 0,o()),y=t}function K(e){var t=y;e.__c=e.__(),y=t}function Me(e,t){return!e||e.length!==t.length||t.some(function(o,n){return o!==e[n]})}function Te(e,t){return typeof t=="function"?t(e):t}function Qe({link:e}){return l("li",{class:"directory-link"},l("a",{href:e.destination},e.text))}function Ye({category:e}){const{title:t,entries:o,subCategories:n}=e,s=o.map(de);return l("section",{class:"category"},l("h2",null,t),l("div",{class:"columns "+Je(et(e))},s.length>0&&l("section",null,l("ul",null,s)),n.map(({title:r,entries:c})=>l("section",null,l("h3",null,r),l("ul",null,c.map(de))))))}function Je(e){switch(!0){case e>=12:return"columns-3";case e>=6:return"columns-2";default:return"columns-1"}}function de(e){return l(Qe,{link:e})}function et(e){return e.entries.length+e.subCategories.map(({entries:t})=>t.length).reduce(tt,0)}function tt(e,t){return e+t}function De(e){return l("button",{class:"raised-button",...e})}function ot(e){const[t,o]=He(!1),n=Ge(null);return We(()=>{if(!t)return;function s(){o(!1)}const r=n.current;return r==null||r.addEventListener("close",s),r==null||r.showModal(),()=>r==null?void 0:r.removeEventListener("close",s)},[t]),l("div",{class:"dev-info-pane-opener"},l(De,{onClick:()=>o(!0)},"Show Developer Info"),t&&l("dialog",{ref:n},e.children))}function rt(e){return l("div",{class:"dev-info-pane"},l("label",{for:"leechblock-config"},"LeechBlock Config"),l("textarea",{id:"leechblock-config"},`*
`,e.leechblockAllowPatterns.map(t=>"+"+t).join(`
`)))}function nt(e){const{config:t,query:o,onQuery:n,onSearchSubmitted:s}=e;return l(A,null,l("nav",{class:"menu"},t.menu.map((r,c)=>l("a",{href:r.destination,key:c},r.text))),l("div",{class:"podium"},l("div",{class:"omnisearch"},l("input",{type:"search",placeholder:"Search",autoFocus:!0,value:o,onKeyPress:r=>{r.key==="Enter"&&s(0)},onInput:r=>n(r.currentTarget.value)}),l("div",{class:"search-providers"},t.searchProviders.map((r,c)=>l(De,{key:c,onClick:()=>s(c)},r.name)))),l("article",null,t.categories.map(r=>l(Ye,{category:r}))),l("footer",null,l("hr",null),l("p",null,"Bastion is maintained by"," ",l("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),l("p",null,"The image that appears at the top of each page is"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"),"."),l("p",null,"Theme inspired by"," ",l("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."),l(ot,null,l(rt,{leechblockAllowPatterns:t.leechblockAllowPatterns})))))}const Z=Symbol(),X=Symbol(),Q=Symbol(),j=Symbol();function b(e,t){function o(...n){if(n.length>=e.length)return e(...n);{const s=(...r)=>o(...n,...r);return s[Z]=e,s[X]=o,s[Q]=n,s[j]=o[j],s}}return o[Z]=e,o[X]=o,o[Q]=[],o[j]=t||it(e),o}function W(e){return e[Z]}function st(e){return e[X]}function Y(e){return e[Q]||[]}function it(e){return e[j]||e.name}class ct extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const at=b(function(e,t){return e(t)},"which"),P=b(function(e,t){var o,n;if(lt(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((s,r)=>P(e[r],t[r]));if(e instanceof Function&&t instanceof Function)return W(e)&&W(e)===W(t)?P(Y(e),Y(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(s=>t.has(s));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(fe(e)&&fe(t)){const s=Object.keys(e),r=Object.keys(t);return s.length===r.length&&s.every(c=>P(e[c],t[c]))&&((o=e.__proto__)==null?void 0:o.constructor)===((n=t.__proto__)==null?void 0:n.constructor)}return e===t},"equals");b(function(e,t){return e===t},"is");b(function(e,t,...o){return!e(t,...o)},"not");b(function(e){return/^\s*$/.test(e)},"isBlank");function fe(e){return!!e&&typeof e=="object"}function lt(e){return e instanceof Function&&st(e)===at&&Y(e).length===1}b(function(t,o){return o.slice(0,t.length)===t?o.slice(t.length):o});b(function(t,o){return o instanceof ct&&P(t,o.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function ut(e){return e.replace(/^[^:]+:\/\//,"").replace(/^www\./,"").replace(/\/$/,"")}function Ne(e){const[t,o,n]=ht(e);return{link:{text:t,destination:o},keywords:n}}function ht(e){const t=e.indexOf("|");let o,n;t===-1?(o=void 0,n=e):(o=e.slice(0,t).trim(),n=e.slice(t+1).trim());const[s,...r]=n.split(/\s+/);return[o!=null?o:ut(s),s,r]}function $e(e){const t=e==null?void 0:e.trim();return t?t.split(/\s+/):[]}function je(e){return Ne(e).link}const G=(e,...t)=>t.reduce((o,n)=>n(o),e);function _t(e){return e||[]}function S(e){return t=>t.map(e)}function ge(e){return t=>t.map(e).reduce(mt,[])}function pt(e){const t=[...e].sort();return t.filter((o,n)=>o!==t[n-1])}function mt(e,t){return e.concat(t)}function dt(e){const t=ft(e.menu),o=yt(e.categories),n=gt(e.searchProviders);return{menu:t,searchProviders:n,categories:o,leechblockAllowPatterns:pt([...G(t,S(s=>s.destination),S(ye)),...G(n,S(s=>s.searchUrlFormat),S(Ct)),...G(_t(o),ge(s=>[s,...s.subCategories]),ge(s=>s.entries),S(s=>s.link.destination),S(ye)),...wt(e.customLeechblockAllowPatterns)])}}function ft(e){return te(e).map(je)}function gt(e){return te(e).map(je).map(t=>({name:t.text,searchUrlFormat:t.destination}))}function yt(e){return(e!=null?e:[]).map(bt)}function wt(e){var t;return(t=e==null?void 0:e.trim().split(/\s+/))!=null?t:[]}function bt(e){var o;const t=$e(e.keywords);return{title:e.title,entries:ze(e.entries,t),subCategories:((o=e.subCategories)!=null?o:[]).map(kt(t))}}const kt=b((e,t)=>({title:t.title,entries:ze(t.entries,e.concat($e(t.keywords)))}),"parseLeafCategory");function ze(e,t=[]){return te(e).map(Ne).map(o=>({...o,keywords:o.keywords.concat(t)}))}function te(e){return e?e.split(`
`).map(vt).filter(Boolean):[]}function vt(e){return e.trim()}function ye(e){return xt(()=>new URL(e).hostname,()=>e)}function Ct(e){const t=new URL(e),o=t.pathname==="/"?"":t.pathname;return t.hostname+o}function xt(e,t){try{return e()}catch{return t()}}const St={menu:`
    TV      | https://benchristel.github.io/tv
    Recipes | https://benchristel.github.io/recipes
    Book    | https://benchristel.github.io/process-to-processes
    Guide   | https://bensguide.substack.com
    Zen     | https://benchristel.github.io/meditation
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
    fidelity.com
    sfcu.org
    etrade.com
    allrecipes.com
    goatcounter.com
    *.goatcounter.com
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
      `,subCategories:[{title:"Audiobooks",keywords:"audiobooks",entries:`
            https://librivox.org
            His Last Bow (Sherlock Holmes) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=aV3MnZW-rbA sir arthur conan doyle
            The Return of Sherlock Holmes | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=vzFCXmbdmNk sir arthur conan doyle
          `}]},{title:"Music",keywords:"music",subCategories:[{title:"Lyrics",keywords:"lyrics",entries:`
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
        WeVidi | https://wevidi.net
        My 2000's TV | https://my00stv.com/
      `},{title:"Languages and Linguistics",keywords:"languages linguistics",entries:`
        https://zompist.com
        https://latecornishlittlebits.blogspot.com
        https://merriam-webster.com
        https://ipachart.com
        https://internationalphoneticalphabet.org
        https://dedalvs.com
        http://www.hungarianreference.com
      `,subCategories:[{title:"Cornish",keywords:"cornish kernewek kernowek",entries:`
          https://akademikernewek.org.uk
          https://cornish-language.org
          https://cornishdictionary.org.uk
          https://gocornish.org
          Kernowek Bew - Audio Course by Dan Prohaska | https://kernowekbew.com/clowgors-audio-course
          Alternative Set of Courses by Dan Prohaska | https://www.kernewegva.com/deskikernowek.html
          `}]},{title:"Academia",entries:`
        https://researchgate.net
        https://psyarxiv.com
        https://academia.edu
        https://apa.org
        https://arxiv.org
      `},{title:"Meditation",keywords:"meditation",entries:`
        https://benchristel.github.io/meditation
        30-minute meditation, bells every 5 minutes | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=AoDoci_oAvw
      `,subCategories:[{title:"Sit, Breathe, Wake Up! (Culadasa)",keywords:"sit breathe wake up culadasa",entries:`
            Video 1 (40m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=UG-0XGpesgs
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
        https://ytoo.org/
      `}]};function Pt(e){return{...e,categories:e.categories.map(t=>({...t,subCategories:t.subCategories.map(o=>({...o,entries:o.entries.map(n=>n.link)})),entries:t.entries.map(o=>o.link)}))}}function Lt(e,t){return t.filter(At(e)).map(Et(e))}const At=b((e,t)=>t.entries.some(R(e))||t.subCategories.some(Be(e)),"categoryMatches"),Et=b((e,t)=>({...t,entries:t.entries.filter(R(e)),subCategories:t.subCategories.filter(Be(e)).map(Ft(e))})),Be=b((e,t)=>t.entries.some(R(e))),Ft=b((e,t)=>({...t,entries:t.entries.filter(R(e))})),R=b((e,t)=>Ht(e).every(o=>t.link.destination.toLowerCase().includes(o)||t.link.text.toLowerCase().includes(o)||t.keywords.some(n=>n.toLowerCase().includes(o))),"entryMatches");function Ht(e){return e.toLowerCase().split(/\s+/)}function Mt(){const[e,t]=He(""),o=dt(St),n={...o,categories:Lt(e,o.categories)};return l(nt,{config:Pt(n),query:e,onQuery:t,onSearchSubmitted:s=>window.open(o.searchProviders[s].searchUrlFormat.replace("%s",e),"_self")})}b((e,t)=>P(new Set(e),new Set(t)),"isSameSetAs");b((e,t)=>{for(let o in e)if(!(o in t)||!P(e[o],t[o]))return!1;return!0},"hasProperties");var we;(e=>{function t({title:o="",entries:n=[],subCategories:s=[]}){return{title:o,entries:n,subCategories:s}}e.category=t})(we||(we={}));Re(l(Mt,null),document.getElementById("preact-root"));
