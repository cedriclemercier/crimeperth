(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2xp/":function(e,t,n){e.exports={Logo:"Logo-module--Logo--3k5rb",img:"Logo-module--img--2fVYx"}},"3Aql":function(e,t,n){e.exports=n.p+"static/logo-white-7480a0032da6af32225f6ce990e8795b.png"},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},AOg7:function(e,t,n){e.exports={burgerContainer:"burger-module--burgerContainer--2aW5S",burger:"burger-module--burger---Tbqj"}},ATp1:function(e,t,n){e.exports=n.p+"static/logo-08e872811123da918076df6704a38cd4.png"},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=(n("FyuP"),n("IdFE")),c=n("bNAV"),l=n.n(c),s=function(e){var t=[l.a.backdrop,l.a.close];return e.show&&(t=[l.a.backdrop,l.a.show]),a.a.createElement("div",{className:t.join(" "),onClick:e.onPress,onKeyDown:e.onPress,role:"presentation"})},u=n("ma3e"),f=n("xIlb"),d=n.n(f),m=function(e){return a.a.createElement("li",{className:d.a.navigationItem},a.a.createElement(o.Link,{to:e.link,activeClassName:d.a.active},e.label," ",e.child&&a.a.createElement(u.a,{style:{color:"#B11F24",fontSize:15,paddingTop:5}})),e.children)},p=n("cHSi"),h=n.n(p),y=n("x1fG"),b=n.n(y),g=function(e){return a.a.createElement("ul",{className:b.a.subNavigationItems},e.children)},v=n("cD1m"),E=n.n(v),T=function(e){return a.a.createElement("li",{className:E.a.item},a.a.createElement(o.Link,{to:e.link},a.a.createElement(i.a,{onClick:e.sidebarClose,color:"#B11F24",style:{fontSize:14}}),e.children))},w=function(e){var t=Object(o.useStaticQuery)("844577719");return a.a.createElement("ul",{className:h.a.navigationItems},t.wpMenu.menuItems.nodes.map((function(e){return null===e.parentId?a.a.createElement(m,{link:e.path,label:e.label,key:e.path,child:e.childItems.nodes.length>0},a.a.createElement(g,{key:e.path+"-sub"},e.childItems.nodes.map((function(e){return a.a.createElement(T,{link:e.path,key:e.path},e.label)})))):null})))},C=n("AOg7"),A=n.n(C),O=function(e){return a.a.createElement("div",{className:A.a.burgerContainer},a.a.createElement(i.e,{onClick:e.sidebarToggle,className:A.a.burger,style:{fontSize:36,cursor:"pointer",textAlign:"right"}}))},S=n("ZRwE"),N=n.n(S),k=function(e){var t=[N.a.sidebar,N.a.close];return e.show&&(t=[N.a.sidebar,N.a.open]),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(i.b,{onClick:e.sidebarClose,style:{fontSize:36,cursor:"pointer",textAlign:"right"}})),a.a.createElement("nav",null,a.a.createElement(w,null)))},I=n("ATp1"),x=n.n(I),j=n("2xp/"),P=n.n(j),L=function(e){return a.a.createElement("div",{className:P.a.Logo},a.a.createElement("img",{src:x.a,alt:e.alt,className:P.a.img}))},R=n("fz57"),M=n.n(R),z=function(e){return a.a.createElement("a",{className:M.a.social,href:e.href,target:"_blank",rel:"noreferrer nofollow"},e.children)},q=n("aOmW"),B=n.n(q),H=function(e){var t=Object(r.useState)(!1),n=t[0],c=t[1],l=function(){c(!1)};return a.a.createElement("header",{className:B.a.headerContainer},a.a.createElement(s,{show:n,onPress:l}),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:B.a.header},a.a.createElement("div",{className:B.a.headerItem},a.a.createElement(o.Link,{to:"/"},a.a.createElement(L,{alt:"Perth Crime Logo",style:B.a.logo}))),a.a.createElement("div",{className:[B.a.tagline,B.a.desktopOnly].join(" ")},a.a.createElement("h3",null,"Experienced Bio-Recovery Technicians"),a.a.createElement("h3",null,"1300 ",a.a.createElement("strong",null,"BIO HAZ"))),a.a.createElement("div",{className:[B.a.social,B.a.desktopOnly].join(" ")},a.a.createElement(z,{href:"https://facebook.com/forensiccleaningmelbourne"},a.a.createElement(i.c,{color:"#a0a0a0",size:32})),a.a.createElement(z,{href:"https://www.reddit.com/user/Forensic_Cleaning"},a.a.createElement(i.d,{color:"#a0a0a0",size:32})))),a.a.createElement(O,{sidebarToggle:function(){c(!n)}})),a.a.createElement(k,{show:n,sidebarClose:l}),a.a.createElement("nav",{className:B.a.desktopOnly},a.a.createElement("div",{className:[B.a.nav,"container"].join(" ")},a.a.createElement(w,null))))};H.defaultProps={siteTitle:""};var D=H,F=n("3Aql"),W=n.n(F),_=n("SxA4"),Y=n.n(_),U=function(e){var t=Object(o.useStaticQuery)("3662988260"),n=a.a.createElement("div",{className:Y.a.footer},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row-flex"},a.a.createElement("div",{className:"col-1"},a.a.createElement("img",{src:W.a,style:{width:"80%"},alt:"Crime Scene Cleaning Perth Logo"}),a.a.createElement("h3",null,"CONTACT CRIME SCENE CLEANER PERTH"),a.a.createElement("p",null,"PHONE 1300 246 429"),a.a.createElement("p",null,"The team at Crime Scene Cleaner Perth understand the importance of discretion and professionalism. All of our staff have been trained to ensure that our work is conducted in an appropriate manner to ensure the minimum disruption while delivering a first className forensic and biological cleaning service.")),a.a.createElement("div",{className:"col-1"},a.a.createElement("h3",null,"CRIME SCENE CLEANER PERTH SERVICES"),a.a.createElement("p",null,"Crime Scene Cleaners Perth Western Australia Death & Suicide Cleaning Perth Western Australia Forensic Cleaning Perth Western Australia Gross Filth & Hoarders Clean Ups Perth Western Australia Sharps & Needles Sweeps Perth Western Australia Sewage & Water Restoration Perth Western Australia Meth Lab Remediation Perth Western Australia.")),a.a.createElement("div",{className:"col-1"},a.a.createElement("h3",null,"CRIME SCENE CLEANER SERVICE AREAS"),a.a.createElement("p",null,"ALL WESTERN AUSTRALIAN REGIONS INCLUDING Perth | Rockingham | Mandurah | Kalgoorlie | Geraldton | Albany | Kwinana | Broome | Busselton | Port Hedland | Karratha | Esperance | Carnarvon | Collie | Northam | Donnybrook | Derby | Exmouth | Dampier | Kununurra | Yanchep.")))));if(e.content){for(var r=e.content.numberOfColumns,i=[],c=0,l=0,s=Object.entries(e.content);l<s.length;l++){var u=s[l],f=u[0],d=u[1];if("numberOfColumns"!==f){if(c===r)break;i.push({col:d}),c++}}i.reverse(),n=a.a.createElement("div",{className:Y.a.footer},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row-flex"},i.map((function(e,t){return a.a.createElement("div",{className:"col-1",key:t,dangerouslySetInnerHTML:{__html:e.col}})})))))}return a.a.createElement("div",{className:Y.a.footerContainer},n,a.a.createElement("hr",{style:{margin:0}}),a.a.createElement("div",{className:Y.a.copyright},a.a.createElement("div",{className:"container"},a.a.createElement("p",{className:"no-padding"},"© Copyright 2020 | All Rights Reserved | Melbourne Forensic Cleaning"," ",t.wpMenu.menuItems.nodes.map((function(e){return a.a.createElement(o.Link,{key:e.path,to:e.path},"| ",e.label," ")}))))))};n("XjQp"),t.a=function(e){var t=e.children,n=e.footerContent,r=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{siteTitle:r.site.siteMetadata.title}),a.a.createElement("div",null,a.a.createElement("main",null,t),a.a.createElement(U,{content:n})))}},FyuP:function(e,t,n){},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,l=e.title,s=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},SxA4:function(e,t,n){e.exports={footerContainer:"footer-module--footerContainer--3zXLR",footer:"footer-module--footer--cvZzG",copyright:"footer-module--copyright--6g7tT",link:"footer-module--link--1uHwi"}},XjQp:function(e,t,n){},ZRwE:function(e,t,n){e.exports={sidebar:"sidebarNav-module--sidebar--10Az8",open:"sidebarNav-module--open--3BvUT",close:"sidebarNav-module--close--3riVd"}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},aOmW:function(e,t,n){e.exports={headerContainer:"header-module--headerContainer--1QaAy",header:"header-module--header--2NYIJ",nav:"header-module--nav--3VpUY",tagline:"header-module--tagline--1u-bj",headerItem:"header-module--headerItem--2xJeW",social:"header-module--social--Actdo",desktopOnly:"header-module--desktopOnly--36b05"}},bNAV:function(e,t,n){e.exports={backdrop:"Backdrop-module--backdrop--1WprH",show:"Backdrop-module--show--3hJma",close:"Backdrop-module--close--2pqkr"}},cD1m:function(e,t,n){e.exports={item:"SubnavigationItem-module--item--2_e3A"}},cHSi:function(e,t,n){e.exports={navigationItems:"navigationItems-module--navigationItems--SzkMv"}},fz57:function(e,t,n){e.exports={social:"SocialIcon-module--social--NnifL"}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,o,i,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),f=n("ZhWT"),d=n.n(f),m=n("q1tI"),p=n.n(m),h=n("6qGY"),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",C="href",A="http-equiv",O="innerHTML",S="itemprop",N="name",k="property",I="rel",x="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",R="defer",M="encodeSpecialCharacters",z="onChangeClientState",q="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[E.NOSCRIPT,E.SCRIPT,E.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,E.TITLE),n=X(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,L);return t||r||void 0},G=function(e){return X(e,z)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===I&&"canonical"===e[n].toLowerCase()||l===I&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(E.BODY,r),le(E.HTML,a),ce(f,d);var m={baseTag:se(E.BASE,n),linkTags:se(E.LINK,o),metaTags:se(E.META,i),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,u)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[p.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(g,a,r),link:de(E.LINK,o,r),meta:de(E.META,i,r),noscript:de(E.NOSCRIPT,c,r),script:de(E.SCRIPT,l,r),style:de(E.STYLE,s,r),title:de(E.TITLE,{title:f,titleAttributes:d},r)}},pe=u()((function(e){return{baseTag:J([C,j],e),bodyAttributes:Q(b,e),defer:X(e,R),encode:X(e,M),htmlAttributes:Q(g,e),linkTags:Z(E.LINK,[I,C],e),metaTags:Z(E.META,[N,T,A,k,S],e),noscriptTags:Z(E.NOSCRIPT,[O],e),onChangeClientState:G(e),scriptTags:Z(E.SCRIPT,[x,O],e),styleTags:Z(E.STYLE,[w],e),title:V(e),titleAttributes:Q(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),he=(a=pe,i=o=function(e){function t(){return F(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return _({},a,((t={})[r.type]=i,t.titleAttributes=_({},o),t));case E.BODY:return _({},a,{bodyAttributes:_({},o)});case E.HTML:return _({},a,{htmlAttributes:_({},o)})}return _({},a,((n={})[r.type]=_({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=_({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},W(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,l=e.yoast,s=Object(i.useStaticQuery)("4010371116"),u=s.site,f=s.wp,d=t||u.siteMetadata.description,m="website",p=d;return l&&(d=l.metaDesc,m=l.opengraphDescription,p=l.opengraphType),a.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:p},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(r)},a.a.createElement("link",{rel:"icon",href:f.seo.schema.logo.mediaItemUrl}))}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},x1fG:function(e,t,n){e.exports={subNavigationItems:"SubnavigationItems-module--subNavigationItems--39IfR",item:"SubnavigationItems-module--item--weXA3"}},xIlb:function(e,t,n){e.exports={navigationItem:"navigationItem-module--navigationItem--zLicf"}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-bf78803051c740567387.js.map