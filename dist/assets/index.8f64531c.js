(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();var V,u,kt,D,rt,$={},bt=[],Bt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(t,e){for(var o in e)t[o]=e[o];return t}function wt(t){var e=t.parentNode;e&&e.removeChild(t)}function l(t,e,o){var n,i,r,c={};for(r in e)r=="key"?n=e[r]:r=="ref"?i=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?V.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)c[r]===void 0&&(c[r]=t.defaultProps[r]);return T(t,c,n,i,null)}function T(t,e,o,n,i){var r={type:t,props:e,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++kt:i};return i==null&&u.vnode!=null&&u.vnode(r),r}function L(t){return t.children}function H(t,e){this.props=t,this.context=e}function P(t,e){if(e==null)return t.__?P(t.__,t.__.__k.indexOf(t)+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?P(t):null}function vt(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return vt(t)}}function nt(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!z.__r++||rt!==u.debounceRendering)&&((rt=u.debounceRendering)||setTimeout)(z)}function z(){for(var t;z.__r=D.length;)t=D.sort(function(e,o){return e.__v.__b-o.__v.__b}),D=[],t.some(function(e){var o,n,i,r,c,_;e.__d&&(c=(r=(o=e).__v).__e,(_=o.__P)&&(n=[],(i=C({},r)).__v=r.__v+1,J(_,r,i,o.__n,_.ownerSVGElement!==void 0,r.__h!=null?[c]:null,n,c==null?P(r):c,r.__h),Pt(n,r),r.__e!=c&&vt(r)))})}function Ct(t,e,o,n,i,r,c,_,m,d){var s,f,h,a,p,x,g,k=n&&n.__k||bt,v=k.length;for(o.__k=[],s=0;s<e.length;s++)if((a=o.__k[s]=(a=e[s])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?T(null,a,null,null,a):Array.isArray(a)?T(L,{children:a},null,null,null):a.__b>0?T(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=o,a.__b=o.__b+1,(h=k[s])===null||h&&a.key==h.key&&a.type===h.type)k[s]=void 0;else for(f=0;f<v;f++){if((h=k[f])&&a.key==h.key&&a.type===h.type){k[f]=void 0;break}h=null}J(t,a,h=h||$,i,r,c,_,m,d),p=a.__e,(f=a.ref)&&h.ref!=f&&(g||(g=[]),h.ref&&g.push(h.ref,null,a),g.push(f,a.__c||p,a)),p!=null?(x==null&&(x=p),typeof a.type=="function"&&a.__k===h.__k?a.__d=m=xt(a,m,t):m=St(t,a,h,k,p,m),typeof o.type=="function"&&(o.__d=m)):m&&h.__e==m&&m.parentNode!=t&&(m=P(h))}for(o.__e=x,s=v;s--;)k[s]!=null&&(typeof o.type=="function"&&k[s].__e!=null&&k[s].__e==o.__d&&(o.__d=P(n,s+1)),At(k[s],k[s]));if(g)for(s=0;s<g.length;s++)Lt(g[s],g[++s],g[++s])}function xt(t,e,o){for(var n,i=t.__k,r=0;i&&r<i.length;r++)(n=i[r])&&(n.__=t,e=typeof n.type=="function"?xt(n,e,o):St(o,n,n,i,n.__e,e));return e}function St(t,e,o,n,i,r){var c,_,m;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(o==null||i!=r||i.parentNode==null)t:if(r==null||r.parentNode!==t)t.appendChild(i),c=null;else{for(_=r,m=0;(_=_.nextSibling)&&m<n.length;m+=2)if(_==i)break t;t.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function Ot(t,e,o,n,i){var r;for(r in o)r==="children"||r==="key"||r in e||B(t,r,null,o[r],n);for(r in e)i&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||o[r]===e[r]||B(t,r,e[r],o[r],n)}function st(t,e,o){e[0]==="-"?t.setProperty(e,o):t[e]=o==null?"":typeof o!="number"||Bt.test(e)?o:o+"px"}function B(t,e,o,n,i){var r;t:if(e==="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)o&&e in o||st(t.style,e,"");if(o)for(e in o)n&&o[e]===n[e]||st(t.style,e,o[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=o,o?n||t.addEventListener(e,r?ct:it,r):t.removeEventListener(e,r?ct:it,r);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=o==null?"":o;break t}catch{}typeof o=="function"||(o!=null&&(o!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,o):t.removeAttribute(e))}}function it(t){this.l[t.type+!1](u.event?u.event(t):t)}function ct(t){this.l[t.type+!0](u.event?u.event(t):t)}function J(t,e,o,n,i,r,c,_,m){var d,s,f,h,a,p,x,g,k,v,A,ot,M,w=e.type;if(e.constructor!==void 0)return null;o.__h!=null&&(m=o.__h,_=e.__e=o.__e,e.__h=null,r=[_]),(d=u.__b)&&d(e);try{t:if(typeof w=="function"){if(g=e.props,k=(d=w.contextType)&&n[d.__c],v=d?k?k.props.value:d.__:n,o.__c?x=(s=e.__c=o.__c).__=s.__E:("prototype"in w&&w.prototype.render?e.__c=s=new w(g,v):(e.__c=s=new H(g,v),s.constructor=w,s.render=qt),k&&k.sub(s),s.props=g,s.state||(s.state={}),s.context=v,s.__n=n,f=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),w.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=C({},s.__s)),C(s.__s,w.getDerivedStateFromProps(g,s.__s))),h=s.props,a=s.state,f)w.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(w.getDerivedStateFromProps==null&&g!==h&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,v),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,v)===!1||e.__v===o.__v){s.props=g,s.state=s.__s,e.__v!==o.__v&&(s.__d=!1),s.__v=e,e.__e=o.__e,e.__k=o.__k,e.__k.forEach(function(E){E&&(E.__=e)}),s.__h.length&&c.push(s);break t}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,v),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(h,a,p)})}if(s.context=v,s.props=g,s.__v=e,s.__P=t,A=u.__r,ot=0,"prototype"in w&&w.prototype.render)s.state=s.__s,s.__d=!1,A&&A(e),d=s.render(s.props,s.state,s.context);else do s.__d=!1,A&&A(e),d=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++ot<25);s.state=s.__s,s.getChildContext!=null&&(n=C(C({},n),s.getChildContext())),f||s.getSnapshotBeforeUpdate==null||(p=s.getSnapshotBeforeUpdate(h,a)),M=d!=null&&d.type===L&&d.key==null?d.props.children:d,Ct(t,Array.isArray(M)?M:[M],e,o,n,i,r,c,_,m),s.base=e.__e,e.__h=null,s.__h.length&&c.push(s),x&&(s.__E=s.__=null),s.__e=!1}else r==null&&e.__v===o.__v?(e.__k=o.__k,e.__e=o.__e):e.__e=Vt(o.__e,e,o,n,i,r,c,m);(d=u.diffed)&&d(e)}catch(E){e.__v=null,(m||r!=null)&&(e.__e=_,e.__h=!!m,r[r.indexOf(_)]=null),u.__e(E,e,o)}}function Pt(t,e){u.__c&&u.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(n){n.call(o)})}catch(n){u.__e(n,o.__v)}})}function Vt(t,e,o,n,i,r,c,_){var m,d,s,f=o.props,h=e.props,a=e.type,p=0;if(a==="svg"&&(i=!0),r!=null){for(;p<r.length;p++)if((m=r[p])&&"setAttribute"in m==!!a&&(a?m.localName===a:m.nodeType===3)){t=m,r[p]=null;break}}if(t==null){if(a===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,h.is&&h),r=null,_=!1}if(a===null)f===h||_&&t.data===h||(t.data=h);else{if(r=r&&V.call(t.childNodes),d=(f=o.props||$).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!_){if(r!=null)for(f={},p=0;p<t.attributes.length;p++)f[t.attributes[p].name]=t.attributes[p].value;(s||d)&&(s&&(d&&s.__html==d.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(Ot(t,h,f,i,_),s)e.__k=[];else if(p=e.props.children,Ct(t,Array.isArray(p)?p:[p],e,o,n,i&&a!=="foreignObject",r,c,r?r[0]:o.__k&&P(o,0),_),r!=null)for(p=r.length;p--;)r[p]!=null&&wt(r[p]);_||("value"in h&&(p=h.value)!==void 0&&(p!==t.value||a==="progress"&&!p||a==="option"&&p!==f.value)&&B(t,"value",p,f.value,!1),"checked"in h&&(p=h.checked)!==void 0&&p!==t.checked&&B(t,"checked",p,f.checked,!1))}return t}function Lt(t,e,o){try{typeof t=="function"?t(e):t.current=e}catch(n){u.__e(n,o)}}function At(t,e,o){var n,i;if(u.unmount&&u.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||Lt(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){u.__e(r,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&At(n[i],e,typeof t.type!="function");o||t.__e==null||wt(t.__e),t.__=t.__e=t.__d=void 0}function qt(t,e,o){return this.constructor(t,o)}function Wt(t,e,o){var n,i,r;u.__&&u.__(t,e),i=(n=typeof o=="function")?null:o&&o.__k||e.__k,r=[],J(e,t=(!n&&o||e).__k=l(L,null,[t]),i||$,$,e.ownerSVGElement!==void 0,!n&&o?[o]:i?null:e.firstChild?V.call(e.childNodes):null,r,!n&&o?o:i?i.__e:e.firstChild,n),Pt(r,t)}V=bt.slice,u={__e:function(t,e,o,n){for(var i,r,c;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),c=i.__d),c)return i.__E=i}catch(_){t=_}throw t}},kt=0,H.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof t=="function"&&(t=t(C({},o),this.props)),t&&C(o,t),t!=null&&this.__v&&(e&&this.__h.push(e),nt(this))},H.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),nt(this))},H.prototype.render=L,D=[],z.__r=0;var q,y,R,at,O=0,Ft=[],j=[],lt=u.__b,ut=u.__r,ht=u.diffed,pt=u.__c,_t=u.unmount;function tt(t,e){u.__h&&u.__h(y,t,O||e),O=0;var o=y.__H||(y.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({__V:j}),o.__[t]}function Dt(t){return O=1,Rt(Et,t)}function Rt(t,e,o){var n=tt(q++,2);if(n.t=t,!n.__c&&(n.__=[o?o(e):Et(void 0,e),function(r){var c=n.__N?n.__N[0]:n.__[0],_=n.t(c,r);c!==_&&(n.__N=[_,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,c,_){if(!n.__c.__H)return!0;var m=n.__c.__H.__.filter(function(s){return s.__c});if(m.every(function(s){return!s.__N}))return!i||i.call(this,r,c,_);var d=!1;return m.forEach(function(s){if(s.__N){var f=s.__[0];s.__=s.__N,s.__N=void 0,f!==s.__[0]&&(d=!0)}}),!!d&&(!i||i.call(this,r,c,_))}}return n.__N||n.__}function Gt(t,e){var o=tt(q++,3);!u.__s&&Mt(o.__H,e)&&(o.__=t,o.i=e,y.__H.__h.push(o))}function It(t){return O=5,Kt(function(){return{current:t}},[])}function Kt(t,e){var o=tt(q++,7);return Mt(o.__H,e)?(o.__V=t(),o.i=e,o.__h=t,o.__V):o.__}function Zt(){for(var t;t=Ft.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(N),t.__H.__h.forEach(K),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){typeof t.type!="function"||t.o||t.type===L?t.o||(t.o=t.__&&t.__.o?t.__.o:""):t.o=(t.__&&t.__.o?t.__.o:"")+(t.__&&t.__.__k?t.__.__k.indexOf(t):0),y=null,lt&&lt(t)},u.__r=function(t){ut&&ut(t),q=0;var e=(y=t.__c).__H;e&&(R===y?(e.__h=[],y.__h=[],e.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=j,o.__N=o.i=void 0})):(e.__h.forEach(N),e.__h.forEach(K),e.__h=[])),R=y},u.diffed=function(t){ht&&ht(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ft.push(e)!==1&&at===u.requestAnimationFrame||((at=u.requestAnimationFrame)||Xt)(Zt)),e.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==j&&(o.__=o.__V),o.i=void 0,o.__V=j})),R=y=null},u.__c=function(t,e){e.some(function(o){try{o.__h.forEach(N),o.__h=o.__h.filter(function(n){return!n.__||K(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],u.__e(n,o.__v)}}),pt&&pt(t,e)},u.unmount=function(t){_t&&_t(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{N(n)}catch(i){e=i}}),o.__H=void 0,e&&u.__e(e,o.__v))};var mt=typeof requestAnimationFrame=="function";function Xt(t){var e,o=function(){clearTimeout(n),mt&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(o,100);mt&&(e=requestAnimationFrame(o))}function N(t){var e=y,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),y=e}function K(t){var e=y;t.__c=t.__(),y=e}function Mt(t,e){return!t||t.length!==e.length||e.some(function(o,n){return o!==t[n]})}function Et(t,e){return typeof e=="function"?e(t):e}function Qt({link:t}){return l("li",{class:"directory-link"},l("a",{href:t.destination},t.text))}function Yt({category:t}){const{title:e,entries:o,subCategories:n}=t,i=o.map(dt);return l("section",{class:"category"},l("h2",null,e),l("div",{class:"columns "+Jt(te(t))},i.length>0&&l("section",null,l("ul",null,i)),n.map(({title:r,entries:c})=>l("section",null,l("h3",null,r),l("ul",null,c.map(dt))))))}function Jt(t){switch(!0){case t>=12:return"columns-3";case t>=6:return"columns-2";default:return"columns-1"}}function dt(t){return l(Qt,{link:t})}function te(t){return t.entries.length+t.subCategories.map(({entries:e})=>e.length).reduce(ee,0)}function ee(t,e){return t+e}function Tt(t){return l("button",{class:"raised-button",...t})}function oe(t){const[e,o]=Dt(!1),n=It(null);return Gt(()=>{if(!e)return;function i(){o(!1)}const r=n.current;return r==null||r.addEventListener("close",i),r==null||r.showModal(),()=>r==null?void 0:r.removeEventListener("close",i)},[e]),l("div",{class:"dev-info-pane-opener"},l(Tt,{onClick:()=>o(!0)},"Show Developer Info"),e&&l("dialog",{ref:n},t.children))}function re(t){return l("div",{class:"dev-info-pane"},l("label",{for:"leechblock-config"},"LeechBlock Config"),l("textarea",{id:"leechblock-config"},`*
`,t.leechblockAllowPatterns.map(e=>"+"+e).join(`
`)))}function ne(t){const{config:e,query:o,onQuery:n,onSearchSubmitted:i}=t;return l(L,null,l("nav",{class:"menu"},e.menu.map((r,c)=>l("a",{href:r.destination,key:c},r.text))),l("div",{class:"podium"},l("div",{class:"omnisearch"},l("input",{type:"search",placeholder:"Search",autoFocus:!0,value:o,onKeyPress:r=>{r.key==="Enter"&&i(0)},onInput:r=>n(r.currentTarget.value)}),l("div",{class:"search-providers"},e.searchProviders.map((r,c)=>l(Tt,{key:c,onClick:()=>i(c)},r.name)))),l("article",null,e.categories.map(r=>l(Yt,{category:r}))),l("footer",null,l("hr",null),l("p",null,"Bastion is maintained by"," ",l("a",{href:"https://github.com/benchristel"},"Ben Christel"),"."),l("p",null,"The image that appears at the top of each page is"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05/49396214307"},"619 | Elizabeth Terry | Untitled Double Landscape | Watercolor | 20x22.25"),'" by'," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.flickr.com/photos/23730371@N05"},"theartleaguegallery"),", and is marked with"," ",l("a",{target:"_blank",rel:"noopener noreferrer",href:"https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"},"Public Domain Mark 1.0"),"."),l("p",null,"Theme inspired by"," ",l("a",{href:"https://www.palemoon.org/"},"The Pale Moon Browser"),"."),l(oe,null,l(re,{leechblockAllowPatterns:e.leechblockAllowPatterns})))))}const Z=Symbol(),X=Symbol(),Q=Symbol(),U=Symbol();function b(t,e){function o(...n){if(n.length>=t.length)return t(...n);{const i=(...r)=>o(...n,...r);return i[Z]=t,i[X]=o,i[Q]=n,i[U]=o[U],i}}return o[Z]=t,o[X]=o,o[Q]=[],o[U]=e||ie(t),o}function G(t){return t[Z]}function se(t){return t[X]}function Y(t){return t[Q]||[]}function ie(t){return t[U]||t.name}class ce extends Error{constructor(e){super("Expectation failed"),this.expectArgs=e}}const ae=b(function(t,e){return t(e)},"which"),S=b(function(t,e){var o,n;if(le(t))return t(e);if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&t.every((i,r)=>S(t[r],e[r]));if(t instanceof Function&&e instanceof Function)return G(t)&&G(t)===G(e)?S(Y(t),Y(e)):t===e;if(t instanceof Date&&e instanceof Date)return t.toISOString()===e.toISOString();if(t instanceof Set&&e instanceof Set)return t.size===e.size&&[...t.values()].every(i=>e.has(i));if(t instanceof Error&&e instanceof Error)return t.message===e.message&&t.__proto__.constructor===e.__proto__.constructor;if(ft(t)&&ft(e)){const i=Object.keys(t),r=Object.keys(e);return i.length===r.length&&i.every(c=>S(t[c],e[c]))&&((o=t.__proto__)==null?void 0:o.constructor)===((n=e.__proto__)==null?void 0:n.constructor)}return t===e},"equals");b(function(t,e){return t===e},"is");b(function(t,e,...o){return!t(e,...o)},"not");b(function(t){return/^\s*$/.test(t)},"isBlank");function ft(t){return!!t&&typeof t=="object"}function le(t){return t instanceof Function&&se(t)===ae&&Y(t).length===1}b(function(e,o){return o.slice(0,e.length)===e?o.slice(e.length):o});b(function(e,o){return o instanceof ce&&S(e,o.expectArgs)});Object.freeze({test:{subject:"a thing",scenario:"does something",fn(){}},error:void 0,instrumentLog:[]});function ue(t){return t.replace(/^[^:]+:\/\//,"").replace(/^www\./,"").replace(/\/$/,"")}function Ht(t){const[e,o,n]=he(t);return{link:{text:e,destination:o},keywords:n}}function he(t){const e=t.indexOf("|");let o,n;e===-1?(o=void 0,n=t):(o=t.slice(0,e).trim(),n=t.slice(e+1).trim());const[i,...r]=n.split(/\s+/);return[o!=null?o:ue(i),i,r]}function jt(t){const e=t==null?void 0:t.trim();return e?e.split(/\s+/):[]}function Nt(t){return Ht(t).link}const I=(t,...e)=>e.reduce((o,n)=>n(o),t);function pe(t){return t||[]}function F(t){return e=>e.map(t)}function gt(t){return e=>e.map(t).reduce(me,[])}function _e(t){const e=[...t].sort();return e.filter((o,n)=>o!==e[n-1])}function me(t,e){return t.concat(e)}function de(t){const e=fe(t.menu),o=ye(t.categories),n=ge(t.searchProviders),i=ke(e,n,o,t.customLeechblockAllowPatterns);return{menu:e,searchProviders:n,categories:o,leechblockAllowPatterns:i}}function fe(t){return et(t).map(Nt)}function ge(t){return et(t).map(Nt).map(e=>({name:e.text,searchUrlFormat:e.destination}))}function ye(t){return(t!=null?t:[]).map(ve)}function ke(t,e,o,n){const i=[...t,...I(pe(o),gt(c=>[c,...c.subCategories]),gt(c=>c.entries),F(c=>c.link))],r=[...I(i,F(c=>c.destination),F($t)),...I(e,F(c=>c.searchUrlFormat),F(Pe)),...we(n)];return _e([...r,...be(r)])}function be(t){return t.filter(Se).map($t).filter(Le).map(e=>"*."+e)}function we(t){var e;return(e=t==null?void 0:t.trim().split(/\s+/))!=null?e:[]}function ve(t){var o;const e=jt(t.keywords);return{title:t.title,entries:Ut(t.entries,e),subCategories:((o=t.subCategories)!=null?o:[]).map(Ce(e))}}const Ce=b((t,e)=>({title:e.title,entries:Ut(e.entries,t.concat(jt(e.keywords)))}),"parseLeafCategory");function Ut(t,e=[]){return et(t).map(Ht).map(o=>({...o,keywords:o.keywords.concat(e)}))}function et(t){return t?t.split(`
`).map(xe).filter(Boolean):[]}function xe(t){return t.trim()}function $t(t){return Ae(()=>new URL(t).hostname,()=>t.split("/")[0])}function Se(t){try{const e=/^https?:\/\//.test(t)?t:"https://"+t;return new URL(e).pathname==="/"}catch{return!0}}function Pe(t){const e=new URL(t),o=e.pathname==="/"?"":e.pathname;return e.hostname+o}function Le(t){return t.split(".").length===2}function Ae(t,e){try{return t()}catch{return e()}}const Fe={menu:`
    TV      | https://benchristel.github.io/tv
    Portal  | https://benchristel.com/portal.html
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
    10.0.0.1
    youtube.com/channel*
    youtube.com/@*
    youtube.com/playlist*
    youtube.com/results*
    youtube.com/watch*
    youtube-nocookie.com
    dasichuanrestaurant.com
    doordash.com
    yelp.com
    opentable.com
    fidelity.com
    sfcu.org
    etrade.com
    allrecipes.com
    google.com
    *.google.com
    duckduckgo.com
    *.duckduckgo.com
    antfu.me
    bookmarkbeat.substack.com
    bigpencil.net
    github.com
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
            Pivotal Alumni Codex | https://alumni-codex.github.io
            C2 Wiki | https://wiki.c2.com Ward Cunningham
          `},{title:"Web Programming",keywords:"web programming",entries:`
            NPM | https://npmjs.com node package manager javascript
            MDN | https://developer.mozilla.org network html css javascript js
            https://nodejs.org
            https://yarnpkg.com
            https://pnpm.io
            https://eslint.org
            https://cssreference.io
            https://css-tricks.com
            https://moderncss.dev
            https://marked.js.org
            https://vitejs.dev
            https://preactjs.com
            https://react.dev
            https://mdxjs.com
            https://eslint.style
            https://daisyui.com
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
            https://uxdesign.cc
            https://jsdelivr.com
          `},{title:"Package Repositories",entries:`
            https://rubygems.org
            NPM | https://npmjs.com node package manager javascript
          `},{title:"Domain Registrars",entries:`
            https://namecheap.com
            https://squarespace.com
          `},{title:"Languages",entries:"Zig | https://ziglang.org"},{title:"Hosting",keywords:"hosting",entries:`
            https://gitlab.com
            https://surge.sh/
            fly.io | https://fly.io
            render.com | https://render.com
            cloudflare.com | https://cloudflare.com
            supabase.com | https://supabase.com
            digitalocean.com | https://digitalocean.com
            https://hub.docker.com
            https://ipfs.tech
            https://pinata.cloud
          `},{title:"Help",keywords:"help",entries:`
            stackoverflow.com | https://stackoverflow.com
            exercism.org | https://exercism.org
          `},{title:"On Mac OS",keywords:"apple macintosh",entries:`
            Homebrew | https://brew.sh
          `}]},{title:"Food",keywords:"food",entries:`
        https://cedardownfarm.ca
      `,subCategories:[{title:"Merchants",entries:`
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
            https://www.wolframalpha.com
          `},{title:"Creating",entries:`
            https://excalidraw.com
            https://dillinger.io
            https://fontstruct.com/
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
            https://steampowered.com
            https://steamdb.info
            https://steamcommunity.com
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
            heroesofmightandmagic.com | http://www.heroesofmightandmagic.com
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
        https://wasdkeyboards.com
      `},{title:"Computer Habitability",keywords:"computing computers browsers extensions",entries:`
        addons.mozilla.org | https://addons.mozilla.org
        LeechBlock NG | https://www.proginosko.com/leechblock/
        uBlock Origin for Firefox | https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
        New Tab Override for Firefox | https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/
        darkreader.org | https://darkreader.org
        https://href.li
        https://alternativeto.net
      `},{title:"Typography",keywords:"typography fonts",entries:`
        David Jonathan Ross Fonts | https://djr.com
        https://fonts.google.com
        https://fontstruct.com/
      `},{title:"Images",keywords:"images",entries:`
        https://images.freeimages.com
        https://flickr.com
        https://cliparts.co
        https://search.creativecommons.org/
        https://openverse.org
        Wikimedia Commons | https://commons.wikimedia.org
        Pattern Monster SVGs | https://pattern.monster
        heropatterns.com SVGs | https://heropatterns.com
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
      `},{title:"Finance",keywords:"banking stocks savings accounts investments",entries:`
        Stanford Federal Credit Union | https://sfcu.org
        Fidelity | https://fidelity.com
        eTrade | https://etrade.com
        Capital One | https://capitalone.com
        Venmo | https://venmo.com
      `},{title:"Archives, Archiving, and Cataloguing",keywords:"archives",entries:`
        wiki.archiveteam.org | https://wiki.archiveteam.org/index.php/Main_Page
      `,subCategories:[{title:"Archives",entries:`
            https://archive.org
            https://ghostarchive.org
            https://versionmuseum.com  
          `},{title:"Archiving Tools",keywords:"archiving tools",entries:`
            Wayback Machine Downloader (ruby) | https://rubygems.org/gems/wayback_machine_downloader
          `},{title:"Classification Systems",keywords:"cataloging cataloguing classification systems",entries:`
            https://dewey.org
            https://oclc.org
            Universal Decimal Classification | https://udcc.org
            UDC on Wikipedia | https://en.wikipedia.org/wiki/Universal_Decimal_Classification
          `}]},{title:"Books",keywords:"books",entries:`
        https://books.google.com
        https://betterworldbooks.com
        https://www.ebooks.com
        https://evertype.com
        https://terebess.hu
        https://exclassics.com
        https://en.wikibooks.org
        https://libretexts.org
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
        The Language Construction Kit | https://zompist.com/kit.html
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
        U.S. Bureau of Labor Statistics Database | data.bls.gov
      `}]};function De(t){return{...t,categories:t.categories.map(e=>({...e,subCategories:e.subCategories.map(o=>({...o,entries:o.entries.map(n=>n.link)})),entries:e.entries.map(o=>o.link)}))}}function Me(t,e){return e.filter(Ee(t)).map(Te(t))}const Ee=b((t,e)=>e.entries.some(W(t))||e.subCategories.some(zt(t)),"categoryMatches"),Te=b((t,e)=>({...e,entries:e.entries.filter(W(t)),subCategories:e.subCategories.filter(zt(t)).map(He(t))})),zt=b((t,e)=>e.entries.some(W(t))),He=b((t,e)=>({...e,entries:e.entries.filter(W(t))})),W=b((t,e)=>je(t).every(o=>e.link.destination.toLowerCase().includes(o)||e.link.text.toLowerCase().includes(o)||e.keywords.some(n=>n.toLowerCase().includes(o))),"entryMatches");function je(t){return t.toLowerCase().split(/\s+/)}function Ne(){const[t,e]=Dt(""),o=de(Fe),n={...o,categories:Me(t,o.categories)};return l(ne,{config:De(n),query:t,onQuery:e,onSearchSubmitted:i=>window.open(o.searchProviders[i].searchUrlFormat.replace("%s",t),"_self")})}b((t,e)=>S(new Set(t),new Set(e)),"isSameSetAs");b((t,e)=>{for(let o in t)if(!(o in e)||!S(t[o],e[o]))return!1;return!0},"hasProperties");var yt;(t=>{function e({title:o="",entries:n=[],subCategories:i=[]}){return{title:o,entries:n,subCategories:i}}t.category=e})(yt||(yt={}));Wt(l(Ne,null),document.getElementById("preact-root"));
