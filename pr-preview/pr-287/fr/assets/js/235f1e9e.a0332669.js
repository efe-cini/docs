"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3050],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_label:"Installing Celestia App"},l="Celestia App",o={unversionedId:"developers/celestia-app",id:"developers/celestia-app",title:"Celestia App",description:"This tutorial will guide you through building Celestia App. This",source:"@site/docs/developers/celestia-app.md",sourceDirName:"developers",slug:"/developers/celestia-app",permalink:"/pr-preview/pr-287/fr/developers/celestia-app",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app.md",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia App"},sidebar:"developers",previous:{title:"Celestia App",permalink:"/pr-preview/pr-287/fr/category/celestia-app"},next:{title:"Creating A Wallet",permalink:"/pr-preview/pr-287/fr/developers/wallet"}},s={},p=[{value:"Install Celestia App",id:"install-celestia-app",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-app"},"Celestia App"),(0,a.kt)("p",null,"This tutorial will guide you through building Celestia App. This\ntutorial presumes you completed the steps in setting up your\nown environment ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-287/fr/developers/environment"},"here"),"."),(0,a.kt)("h2",{id:"install-celestia-app"},"Install Celestia App"),(0,a.kt)("p",null,"The steps below will create a binary file named ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-appd"),"\ninside ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," folder which will be used later to run the node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf celestia-app\ngit clone https://github.com/celestiaorg/celestia-app.git\ncd celestia-app/\nAPP_VERSION=$(curl -s \\\n  https://api.github.com/repos/celestiaorg/celestia-app/releases/latest \\\n  | jq -r ".tag_name")\ngit checkout tags/$APP_VERSION -b $APP_VERSION\nmake install\n')),(0,a.kt)("p",null,"To check if the binary was successfully compiled you can run the binary\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,a.kt)("p",null,"You should see a similar output (with helpful example commands):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'Start celestia app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, and application configuration files\n  keys                Manage your application\'s keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default location or at the location passed as an arg\n  version             Print the application binary version information\n\nFlags:\n  -h, --help                help for celestia-appd\n      --home string         directory for config and data (default "/root/.celestia-app")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "celestia-appd [command] --help" for more information about a command.\n')))}u.isMDXComponent=!0}}]);