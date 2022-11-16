"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2099],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const l={sidebar_label:"Module"},a="Creating the Wordle Module",i={unversionedId:"developers/wordle-module",id:"developers/wordle-module",title:"Creating the Wordle Module",description:"For the Wordle module, we can add dependencies offered by Cosmos-SDK.",source:"@site/docs/developers/wordle-module.md",sourceDirName:"developers",slug:"/developers/wordle-module",permalink:"/pr-preview/pr-318/developers/wordle-module",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-module.md",tags:[],version:"current",frontMatter:{sidebar_label:"Module"},sidebar:"developers",previous:{title:"Installing Rollmint",permalink:"/pr-preview/pr-318/developers/install-rollmint"},next:{title:"Messages",permalink:"/pr-preview/pr-318/developers/wordle-messages"}},s={},c=[{value:"Scaffolding A Module",id:"scaffolding-a-module",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-the-wordle-module"},"Creating the Wordle Module"),(0,o.kt)("p",null,"For the Wordle module, we can add dependencies offered by Cosmos-SDK."),(0,o.kt)("p",null,"From the Cosmos-SDK docs, a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/nameservice#cosmos-sdk-modules"},"module"),"\nis defined as the following:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In a Cosmos SDK blockchain, application-specific logic\nis implemented in separate modules. Modules keep code easy\nto understand and reuse. Each module contains its own message\nand transaction processor, while the Cosmos SDK is responsible\nfor routing each message to its respective module.")),(0,o.kt)("p",null,"Many modules exist for slashing, validating, auth."),(0,o.kt)("h2",{id:"scaffolding-a-module"},"Scaffolding A Module"),(0,o.kt)("p",null,"We will be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bank")," module dependency for transactions."),(0,o.kt)("p",null,"From the Cosmos-SDK docs, the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/modules/bank/"},(0,o.kt)("inlineCode",{parentName:"a"},"bank")),"\nmodule is defined as the following:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The bank module is responsible for handling multi-asset coin\ntransfers between accounts and tracking special-case pseudo-transfers\nwhich must work differently with particular kinds of accounts\n(notably delegating/undelegating for vesting accounts). It exposes\nseveral interfaces with varying capabilities for secure interaction\nwith other modules which must alter user balances.")),(0,o.kt)("p",null,"We build the module with the ",(0,o.kt)("inlineCode",{parentName:"p"},"bank")," dependency with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold module wordle --dep bank\n")),(0,o.kt)("p",null,"This will scaffold the Wordle module to our Wordle Chain project."))}u.isMDXComponent=!0}}]);