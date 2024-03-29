(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();var V,u,bt,F,rt,z={},kt=[],Bt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(t,e){for(var o in e)t[o]=e[o];return t}function vt(t){var e=t.parentNode;e&&e.removeChild(t)}function l(t,e,o){var n,s,r,c={};for(r in e)r=="key"?n=e[r]:r=="ref"?s=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?V.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)c[r]===void 0&&(c[r]=t.defaultProps[r]);return T(t,c,n,s,null)}function T(t,e,o,n,s){var r={type:t,props:e,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++bt:s};return s==null&&u.vnode!=null&&u.vnode(r),r}function A(t){return t.children}function N(t,e){this.props=t,this.context=e}function P(t,e){if(e==null)return t.__?P(t.__,t.__.__k.indexOf(t)+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?P(t):null}function Ct(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return Ct(t)}}function nt(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!U.__r++||rt!==u.debounceRendering)&&((rt=u.debounceRendering)||setTimeout)(U)}function U(){for(var t;U.__r=F.length;)t=F.sort(function(e,o){return e.__v.__b-o.__v.__b}),F=[],t.some(function(e){var o,n,s,r,c,p;e.__d&&(c=(r=(o=e).__v).__e,(p=o.__P)&&(n=[],(s=C({},r)).__v=r.__v+1,J(p,r,s,o.__n,p.ownerSVGElement!==void 0,r.__h!=null?[c]:null,n,c==null?P(r):c,r.__h),Pt(n,r),r.__e!=c&&Ct(r)))})}function xt(t,e,o,n,s,r,c,p,m,d){var i,f,h,a,_,x,g,w=n&&n.__k||kt,v=w.length;for(o.__k=[],i=0;i<e.length;i++)if((a=o.__k[i]=(a=e[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(A,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=o,a.__b=o.__b+1,(h=w[i])===null||h&&a.key==h.key&&a.type===h.type)w[i]=void 0;else for(f=0;f<v;f++){if((h=w[f])&&a.key==h.key&&a.type===h.type){w[f]=void 0;break}h=null}J(t,a,h=h||z,s,r,c,p,m,d),_=a.__e,(f=a.ref)&&h.ref!=f&&(g||(g=[]),h.ref&&g.push(h.ref,null,a),g.push(f,a.__c||_,a)),_!=null?(x==null&&(x=_),typeof a.type=="function"&&a.__k===h.__k?a.__d=m=St(a,m,t):m=Lt(t,a,h,w,_,m),typeof o.type=="function"&&(o.__d=m)):m&&h.__e==m&&m.parentNode!=t&&(m=P(h))}for(o.__e=x,i=v;i--;)w[i]!=null&&(typeof o.type=="function"&&w[i].__e!=null&&w[i].__e==o.__d&&(o.__d=P(n,i+1)),Et(w[i],w[i]));if(g)for(i=0;i<g.length;i++)At(g[i],g[++i],g[++i])}function St(t,e,o){for(var n,s=t.__k,r=0;s&&r<s.length;r++)(n=s[r])&&(n.__=t,e=typeof n.type=="function"?St(n,e,o):Lt(o,n,n,s,n.__e,e));return e}function Lt(t,e,o,n,s,r){var c,p,m;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(o==null||s!=r||s.parentNode==null)t:if(r==null||r.parentNode!==t)t.appendChild(s),c=null;else{for(p=r,m=0;(p=p.nextSibling)&&m<n.length;m+=2)if(p==s)break t;t.insertBefore(s,r),c=r}return c!==void 0?c:s.nextSibling}function Ot(t,e,o,n,s){var r;for(r in o)r==="children"||r==="key"||r in e||B(t,r,null,o[r],n);for(r in e)s&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||o[r]===e[r]||B(t,r,e[r],o[r],n)}function st(t,e,o){e[0]==="-"?t.setProperty(e,o):t[e]=o==null?"":typeof o!="number"||Bt.test(e)?o:o+"px"}function B(t,e,o,n,s){var r;t:if(e==="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)o&&e in o||st(t.style,e,"");if(o)for(e in o)n&&o[e]===n[e]||st(t.style,e,o[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=o,o?n||t.addEventListener(e,r?ct:it,r):t.removeEventListener(e,r?ct:it,r);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=o==null?"":o;break t}catch{}typeof o=="function"||(o!=null&&(o!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,o):t.removeAttribute(e))}}function it(t){this.l[t.type+!1](u.event?u.event(t):t)}function ct(t){this.l[t.type+!0](u.event?u.event(t):t)}function J(t,e,o,n,s,r,c,p,m){var d,i,f,h,a,_,x,g,w,v,E,ot,H,k=e.type;if(e.constructor!==void 0)return null;o.__h!=null&&(m=o.__h,p=e.__e=o.__e,e.__h=null,r=[p]),(d=u.__b)&&d(e);try{t:if(typeof k=="function"){if(g=e.props,w=(d=k.contextType)&&n[d.__c],v=d?w?w.props.value:d.__:n,o.__c?x=(i=e.__c=o.__c).__=i.__E:("prototype"in k&&k.prototype.render?e.__c=i=new k(g,v):(e.__c=i=new N(g,v),i.constructor=k,i.render=qt),w&&w.sub(i),i.props=g,i.state||(i.state={}),i.context=v,i.__n=n,f=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,k.getDerivedStateFromProps(g,i.__s))),h=i.props,a=i.state,f)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&g!==h&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,v),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,v)===!1||e.__v===o.__v){i.props=g,i.state=i.__s,e.__v!==o.__v&&(i.__d=!1),i.__v=e,e.__e=o.__e,e.__k=o.__k,e.__k.forEach(function(M){M&&(M.__=e)}),i.__h.length&&c.push(i);break t}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,v),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(h,a,_)})}if(i.context=v,i.props=g,i.__v=e,i.__P=t,E=u.__r,ot=0,"prototype"in k&&k.prototype.render)i.state=i.__s,i.__d=!1,E&&E(e),d=i.render(i.props,i.state,i.context);else do i.__d=!1,E&&E(e),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ot<25);i.state=i.__s,i.getChildContext!=null&&(n=C(C({},n),i.getChildContext())),f||i.getSnapshotBeforeUpdate==null||(_=i.getSnapshotBeforeUpdate(h,a)),H=d!=null&&d.type===A&&d.key==null?d.props.children:d,xt(t,Array.isArray(H)?H:[H],e,o,n,s,r,c,p,m),i.base=e.__e,e.__h=null,i.__h.length&&c.push(i),x&&(i.__E=i.__=null),i.__e=!1}else r==null&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=Vt(o.__e,e,o,n,s,r,c,m);(d=u.diffed)&&d(e)}catch(M){e.__v=null,(m||r!=null)&&(e.__e=p,e.__h=!!m,r[r.indexOf(p)]=null),u.__e(M,e,o)}}function Pt(t,e){u.__c&&u.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(n){n.call(o)})}catch(n){u.__e(n,o.__v)}})}function Vt(t,e,o,n,s,r,c,p){var m,d,i,f=o.props,h=e.props,a=e.type,_=0;if(a==="svg"&&(s=!0),r!=null){for(;_<r.length;_++)if((m=r[_])&&"setAttribute"in m==!!a&&(a?m.localName===a:m.nodeType===3)){t=m,r[_]=null;break}}if(t==null){if(a===null)return document.createTextNode(h);t=s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,h.is&&h),r=null,p=!1}if(a===null)f===h||p&&t.data===h||(t.data=h);else{if(r=r&&V.call(t.childNodes),d=(f=o.props||z).dangerouslySetInnerHTML,i=h.dangerouslySetInnerHTML,!p){if(r!=null)for(f={},_=0;_<t.attributes.length;_++)f[t.attributes[_].name]=t.attributes[_].value;(i||d)&&(i&&(d&&i.__html==d.__html||i.__html===t.innerHTML)||(t.innerHTML=i&&i.__html||""))}if(Ot(t,h,f,s,p),i)e.__k=[];else if(_=e.props.children,xt(t,Array.isArray(_)?_:[_],e,o,n,s&&a!=="foreignObject",r,c,r?r[0]:o.__k&&P(o,0),p),r!=null)for(_=r.length;_--;)r[_]!=null&&vt(r[_]);p||("value"in h&&(_=h.value)!==void 0&&(_!==t.value||a==="progress"&&!_||a==="option"&&_!==f.value)&&B(t,"value",_,f.value,!1),"checked"in h&&(_=h.checked)!==void 0&&_!==t.checked&&B(t,"checked",_,f.checked,!1))}return t}function At(t,e,o){try{typeof t=="function"?t(e):t.current=e}catch(n){u.__e(n,o)}}function Et(t,e,o){var n,s;if(u.unmount&&u.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||At(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){u.__e(r,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(s=0;s<n.length;s++)n[s]&&Et(n[s],e,typeof t.type!="function");o||t.__e==null||vt(t.__e),t.__=t.__e=t.__d=void 0}function qt(t,e,o){return this.constructor(t,o)}function Rt(t,e,o){var n,s,r;u.__&&u.__(t,e),s=(n=typeof o=="function")?null:o&&o.__k||e.__k,r=[],J(e,t=(!n&&o||e).__k=l(A,null,[t]),s||z,z,e.ownerSVGElement!==void 0,!n&&o?[o]:s?null:e.firstChild?V.call(e.childNodes):null,r,!n&&o?o:s?s.__e:e.firstChild,n),Pt(r,t)}V=kt.slice,u={__e:function(t,e,o,n){for(var s,r,c;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(t)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,n||{}),c=s.__d),c)return s.__E=s}catch(p){t=p}throw t}},bt=0,N.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof t=="function"&&(t=t(C({},o),this.props)),t&&C(o,t),t!=null&&this.__v&&(e&&this.__h.push(e),nt(this))},N.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),nt(this))},N.prototype.render=A,F=[],U.__r=0;var q,y,G,at,O=0,Ft=[],D=[],lt=u.__b,ut=u.__r,ht=u.diffed,_t=u.__c,pt=u.unmount;function tt(t,e){u.__h&&u.__h(y,t,O||e),O=0;var o=y.__H||(y.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({__V:D}),o.__[t]}function Ht(t){return O=1,Gt(Tt,t)}function Gt(t,e,o){var n=tt(q++,2);if(n.t=t,!n.__c&&(n.__=[o?o(e):Tt(void 0,e),function(r){var c=n.__N?n.__N[0]:n.__[0],p=n.t(c,r);c!==p&&(n.__N=[p,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){y.u=!0;var s=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,c,p){if(!n.__c.__H)return!0;var m=n.__c.__H.__.filter(function(i){return i.__c});if(m.every(function(i){return!i.__N}))return!s||s.call(this,r,c,p);var d=!1;return m.forEach(function(i){if(i.__N){var f=i.__[0];i.__=i.__N,i.__N=void 0,f!==i.__[0]&&(d=!0)}}),!!d&&(!s||s.call(this,r,c,p))}}return n.__N||n.__}function It(t,e){var o=tt(q++,3);!u.__s&&Mt(o.__H,e)&&(o.__=t,o.i=e,y.__H.__h.push(o))}function Wt(t){return O=5,Kt(function(){return{current:t}},[])}function Kt(t,e){var o=tt(q++,7);return Mt(o.__H,e)?(o.__V=t(),o.i=e,o.__h=t,o.__V):o.__}function Xt(){for(var t;t=Ft.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach($),t.__H.__h.forEach(K),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){typeof t.type!="function"||t.o||t.type===A?t.o||(t.o=t.__&&t.__.o?t.__.o:""):t.o=(t.__&&t.__.o?t.__.o:"")+(t.__&&t.__.__k?t.__.__k.indexOf(t):0),y=null,lt&&lt(t)},u.__r=function(t){ut&&ut(t),q=0;var e=(y=t.__c).__H;e&&(G===y?(e.__h=[],y.__h=[],e.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=D,o.__N=o.i=void 0})):(e.__h.forEach($),e.__h.forEach(K),e.__h=[])),G=y},u.diffed=function(t){ht&&ht(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ft.push(e)!==1&&at===u.requestAnimationFrame||((at=u.requestAnimationFrame)||Zt)(Xt)),e.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==D&&(o.__=o.__V),o.i=void 0,o.__V=D})),G=y=null},u.__c=function(t,e){e.some(function(o){try{o.__h.forEach($),o.__h=o.__h.filter(function(n){return!n.__||K(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],u.__e(n,o.__v)}}),_t&&_t(t,e)},u.unmount=function(t){pt&&pt(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{$(n)}catch(s){e=s}}),o.__H=void 0,e&&u.__e(e,o.__v))};var mt=typeof requestAnimationFrame=="function";function Zt(t){var e,o=function(){clearTimeout(n),mt&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(o,100);mt&&(e=requestAnimationFrame(o))}function $(t){var e=y,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),y=e}function K(t){var e=y;t.__c=t.__(),y=e}function Mt(t,e){return!t||t.length!==e.length||e.some(function(o,n){return o!==t[n]})}function Tt(t,e){return typeof e=="function"?e(t):e}function Qt({link:t}){return l("li",{class:"directory-link"},l("a",{href:t.destination},t.text))}function Yt({category:t}){const{title:e,entries:o,subCategories:n}=t,s=o.map(dt);return l("section",{class:"category"},l("h2",null,e),l("div",{class:"columns "+Jt(te(t))},s.length>0&&l("section",null,l("ul",null,s)),n.map(({title:r,entries:c})=>l("section",null,l("h3",null,r),l("ul",null,c.map(dt))))))}function Jt(t){switch(!0){case t>=12:return"columns-3";case t>=6:return"columns-2";default:return"columns-1"}}function dt(t){return l(Qt,{link:t})}function te(t){return t.entries.length+t.subCategories.map(({entries:e})=>e.length).reduce(ee,0)}function ee(t,e){return t+e}function Nt(t){return l("button",{class:"raised-button",...t})}function oe(t){const[e,o]=Ht(!1),n=Wt(null);return It(()=>{if(!e)return;function s(){o(!1)}const r=n.current;return r==null||r.addEventListener("close",s),r==null||r.showModal(),()=>r==null?void 0:r.removeEventListener("close",s)},[e]),l("div",{class:"dev-info-pane-opener"},l(Nt,{onClick:()=>o(!0)},"Show Developer Info"),e&&l("dialog",{ref:n},t.children))}function re(t){return l("div",{class:"dev-info-pane"},l("label",{for:"leechblock-config"},"LeechBlock Config"),l("textarea",{id:"leechblock-config"},`*
`,t.leechblockAllowPatterns.map(e=>"+"+e).join(`
`)))}function ne(t){const{config:e,query:o,onQuery:n,onSearchSubmitted:s}=t;return l(A,null,l("nav",{class:"menu"},e.menu.map((r,c)=>l("a",{href:r.destination,key:c},r.text))),l("div",{class:"podium"},l("div",{class:"omnisearch"},l("input",{type:"search",placeholder:"Search",autoFocus:!0,value:o,onKeyPress:r=>{r.key==="Enter"&&s(0)},onInput:r=>n(r.currentTarget.value)}),l("div",{class:"search-providers"},e.searchProviders.map((r,c)=>l(Nt,{key:c,onClick:()=>s(c)},r.name)))),l("article",null,e.categories.map(r=>l(Yt,{category:r}))),l("footer",null,l("hr",null),l("p",null,"Bastion is maintained by"," ",l("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),l("p",null,"The image that appears at the top of each page is"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"),"."),l("p",null,"Theme inspired by"," ",l("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."),l(oe,null,l(re,{leechblockAllowPatterns:e.leechblockAllowPatterns})))))}const X=Symbol(),Z=Symbol(),Q=Symbol(),j=Symbol();function b(t,e){function o(...n){if(n.length>=t.length)return t(...n);{const s=(...r)=>o(...n,...r);return s[X]=t,s[Z]=o,s[Q]=n,s[j]=o[j],s}}return o[X]=t,o[Z]=o,o[Q]=[],o[j]=e||ie(t),o}function I(t){return t[X]}function se(t){return t[Z]}function Y(t){return t[Q]||[]}function ie(t){return t[j]||t.name}class ce extends Error{constructor(e){super("Expectation failed"),this.expectArgs=e}}const ae=b(function(t,e){return t(e)},"which"),L=b(function(t,e){var o,n;if(le(t))return t(e);if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&t.every((s,r)=>L(t[r],e[r]));if(t instanceof Function&&e instanceof Function)return I(t)&&I(t)===I(e)?L(Y(t),Y(e)):t===e;if(t instanceof Date&&e instanceof Date)return t.toISOString()===e.toISOString();if(t instanceof Set&&e instanceof Set)return t.size===e.size&&[...t.values()].every(s=>e.has(s));if(t instanceof Error&&e instanceof Error)return t.message===e.message&&t.__proto__.constructor===e.__proto__.constructor;if(ft(t)&&ft(e)){const s=Object.keys(t),r=Object.keys(e);return s.length===r.length&&s.every(c=>L(t[c],e[c]))&&((o=t.__proto__)==null?void 0:o.constructor)===((n=e.__proto__)==null?void 0:n.constructor)}return t===e},"equals");b(function(t,e){return t===e},"is");b(function(t,e,...o){return!t(e,...o)},"not");b(function(t){return/^\s*$/.test(t)},"isBlank");function ft(t){return!!t&&typeof t=="object"}function le(t){return t instanceof Function&&se(t)===ae&&Y(t).length===1}b(function(e,o){return o.slice(0,e.length)===e?o.slice(e.length):o});b(function(e,o){return o instanceof ce&&L(e,o.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function ue(t){return t.replace(/^[^:]+:\/\//,"").replace(/^www\./,"").replace(/\/$/,"")}function Dt(t){const[e,o,n]=he(t);return{link:{text:e,destination:o},keywords:n}}function he(t){const e=t.indexOf("|");let o,n;e===-1?(o=void 0,n=t):(o=t.slice(0,e).trim(),n=t.slice(e+1).trim());const[s,...r]=n.split(/\s+/);return[o!=null?o:ue(s),s,r]}function $t(t){const e=t==null?void 0:t.trim();return e?e.split(/\s+/):[]}function jt(t){return Dt(t).link}const W=(t,...e)=>e.reduce((o,n)=>n(o),t);function _e(t){return t||[]}function S(t){return e=>e.map(t)}function gt(t){return e=>e.map(t).reduce(me,[])}function pe(t){const e=[...t].sort();return e.filter((o,n)=>o!==e[n-1])}function me(t,e){return t.concat(e)}function de(t){const e=fe(t.menu),o=ye(t.categories),n=ge(t.searchProviders);return{menu:e,searchProviders:n,categories:o,leechblockAllowPatterns:pe([...W(e,S(s=>s.destination),S(yt)),...W(n,S(s=>s.searchUrlFormat),S(Ce)),...W(_e(o),gt(s=>[s,...s.subCategories]),gt(s=>s.entries),S(s=>s.link.destination),S(yt)),...we(t.customLeechblockAllowPatterns)])}}function fe(t){return et(t).map(jt)}function ge(t){return et(t).map(jt).map(e=>({name:e.text,searchUrlFormat:e.destination}))}function ye(t){return(t!=null?t:[]).map(be)}function we(t){var e;return(e=t==null?void 0:t.trim().split(/\s+/))!=null?e:[]}function be(t){var o;const e=$t(t.keywords);return{title:t.title,entries:zt(t.entries,e),subCategories:((o=t.subCategories)!=null?o:[]).map(ke(e))}}const ke=b((t,e)=>({title:e.title,entries:zt(e.entries,t.concat($t(e.keywords)))}),"parseLeafCategory");function zt(t,e=[]){return et(t).map(Dt).map(o=>({...o,keywords:o.keywords.concat(e)}))}function et(t){return t?t.split(`
`).map(ve).filter(Boolean):[]}function ve(t){return t.trim()}function yt(t){return xe(()=>new URL(t).hostname,()=>t)}function Ce(t){const e=new URL(t),o=e.pathname==="/"?"":e.pathname;return e.hostname+o}function xe(t,e){try{return t()}catch{return e()}}const Se={menu:`
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
      `},{title:"Meditation",keywords:"meditation",entries:`
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
      `}]};function Le(t){return{...t,categories:t.categories.map(e=>({...e,subCategories:e.subCategories.map(o=>({...o,entries:o.entries.map(n=>n.link)})),entries:e.entries.map(o=>o.link)}))}}function Pe(t,e){return e.filter(Ae(t)).map(Ee(t))}const Ae=b((t,e)=>e.entries.some(R(t))||e.subCategories.some(Ut(t)),"categoryMatches"),Ee=b((t,e)=>({...e,entries:e.entries.filter(R(t)),subCategories:e.subCategories.filter(Ut(t)).map(Fe(t))})),Ut=b((t,e)=>e.entries.some(R(t))),Fe=b((t,e)=>({...e,entries:e.entries.filter(R(t))})),R=b((t,e)=>He(t).every(o=>e.link.destination.toLowerCase().includes(o)||e.link.text.toLowerCase().includes(o)||e.keywords.some(n=>n.toLowerCase().includes(o))),"entryMatches");function He(t){return t.toLowerCase().split(/\s+/)}function Me(){const[t,e]=Ht(""),o=de(Se),n={...o,categories:Pe(t,o.categories)};return l(ne,{config:Le(n),query:t,onQuery:e,onSearchSubmitted:s=>window.open(o.searchProviders[s].searchUrlFormat.replace("%s",t),"_self")})}b((t,e)=>L(new Set(t),new Set(e)),"isSameSetAs");b((t,e)=>{for(let o in t)if(!(o in e)||!L(t[o],e[o]))return!1;return!0},"hasProperties");var wt;(t=>{function e({title:o="",entries:n=[],subCategories:s=[]}){return{title:o,entries:n,subCategories:s}}t.category=e})(wt||(wt={}));Rt(l(Me,null),document.getElementById("preact-root"));
