"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2112],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5782:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=t(3117),a=(t(7294),t(3905));const o={sidebar_label:"Configurer l'Environnement du R\xe9seau"},s="Configurer votre environnement pour CosmWasm sur Celestia",l={unversionedId:"developers/cosmwasm-environment",id:"developers/cosmwasm-environment",title:"Configurer votre environnement pour CosmWasm sur Celestia",description:"Maintenant que le binaire wasmd est construit, nous devons configurer un r\xe9seau local qui communique entre wasmd et Rollmint.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/cosmwasm-environment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-environment",permalink:"/fr/developers/cosmwasm-environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Configurer l'Environnement du R\xe9seau"},sidebar:"developers",previous:{title:"Les D\xe9pendances CosmWasm",permalink:"/fr/developers/cosmwasm-dependency"},next:{title:"D\xe9ploiement de contrat",permalink:"/fr/developers/cosmwasm-contract-deployment"}},i={},u=[{value:"Construire le r\xe9seau Wasmd",id:"construire-le-r\xe9seau-wasmd",level:2},{value:"Lancer le r\xe9seau Wasmd",id:"lancer-le-r\xe9seau-wasmd",level:2}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurer-votre-environnement-pour-cosmwasm-sur-celestia"},"Configurer votre environnement pour CosmWasm sur Celestia"),(0,a.kt)("p",null,"Maintenant que le binaire ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," est construit, nous devons configurer un r\xe9seau local qui communique entre ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," et Rollmint."),(0,a.kt)("h2",{id:"construire-le-r\xe9seau-wasmd"},"Construire le r\xe9seau Wasmd"),(0,a.kt)("p",null,"Ex\xe9cuter la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_NAME=validator1\nCHAIN_ID=celeswasm\nwasmd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n")),(0,a.kt)("p",null,"Cela initialise une chaine appel\xe9e ",(0,a.kt)("inlineCode",{parentName:"p"},"celeswasm")," avec le fichier binaire ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd"),"."),(0,a.kt)("p",null,"La commande suivante nous aide \xe0 configurer des comptes pour le genesis :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"KEY_NAME=celeswasm-key\nwasmd keys add $KEY_NAME --keyring-backend test\n")),(0,a.kt)("p",null,"Make sure you store the output of the wallet generated for later reference if needed."),(0,a.kt)("p",null,"Maintenant, ajoutons un compte genesis et utilisons-le pour mettre \xe0 jour notre fichier genesis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'TOKEN_AMOUNT="10000000000000000000000000uwasm"\nwasmd add-genesis-account $KEY_NAME $TOKEN_AMOUNT --keyring-backend test\nSTAKING_AMOUNT=1000000000uwasm\nwasmd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID --keyring-backend test\n')),(0,a.kt)("p",null,"Gr\xe2ce \xe0 cela, nous avons cr\xe9\xe9 un fichier genesis sur le r\xe9seau local."),(0,a.kt)("p",null,"D'autres commandes encore plus utiles que nous pouvons configurer :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'export NODE="--chain-id ${CHAIN_ID}"\nexport TXFLAG="--chain-id ${CHAIN_ID} --gas-prices 0uwasm --gas auto --gas-adjustment 1.3"\n')),(0,a.kt)("h2",{id:"lancer-le-r\xe9seau-wasmd"},"Lancer le r\xe9seau Wasmd"),(0,a.kt)("p",null,"Nous pouvons ex\xe9cuter la commande suivante pour lancer le r\xe9seau ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'wasmd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"http://XXX.XXX.XXX.XXX:26659","timeout":60000000000,"gas_limit":6000000}\' --rollmint.namespace_id 000000000000FFFF --rollmint.da_start_height XXXXX\n')),(0,a.kt)("p",null,"Remarques:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE : Dans la commande du dessus, vous avez besoin de fournir une adresse IP d'un node Celestia poss\xe9dant des Tokens du Devnet Arabica \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"base_url"),". Suivre le tutoriel pour configurer un light node Celestia et cr\xe9er un wallet avec les tokens faucet du testnet dans la section n\u0153ud Celestia ",(0,a.kt)("a",{parentName:"p",href:"/fr/developers/node-tutorial"},"ici"),".")),(0,a.kt)("p",null,"Remarques compl\xe9mentaires :"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"IMPORTANT : Egalement dans la commande d'au dessus, vous avez besoin de sp\xe9cifier la derni\xe8re position du bloc dans le devnet Arabica par ",(0,a.kt)("inlineCode",{parentName:"p"},"da_height"),". Vous pouvez trouver le num\xe9ro du dernier bloc dans l'explorateur ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.celestia.observer/arabica"},"ici"),". Also, for the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--rollmint.namespace_id"),", you can generate a random Namespace ID using the playground ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/play/p/7ltvaj8lhRl"},"here"))),(0,a.kt)("p",null,"Gr\xe2ce \xe0 cet article, nous avons d\xe9marr\xe9 notre r\xe9seau ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," !"))}m.isMDXComponent=!0}}]);