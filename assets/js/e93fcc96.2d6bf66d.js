"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[4120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,d=c["".concat(i,".").concat(k)]||c[k]||u[k]||p;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={},l="Dijkstra",o={unversionedId:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7b97\u6cd5/\u6700\u77ed\u8def/Dijkstra",id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7b97\u6cd5/\u6700\u77ed\u8def/Dijkstra",title:"Dijkstra",description:"\u8377\u5170\u8bed",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7b97\u6cd5/\u6700\u77ed\u8def/Dijkstra.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7b97\u6cd5/\u6700\u77ed\u8def",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7b97\u6cd5/\u6700\u77ed\u8def/Dijkstra",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7b97\u6cd5/\u6700\u77ed\u8def/Dijkstra",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"\u6700\u77ed\u8def",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7b97\u6cd5/\u6700\u77ed\u8def/@\u5e8f\u8a00"},next:{title:"\u901a\u4fe1\u539f\u7406",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u901a\u4fe1\u539f\u7406/@\u5e8f\u8a00"}},i={},s=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f18\u5316",id:"\u4f18\u5316",level:2},{value:"\u5806\u4f18\u5316\uff08\u4f18\u5148\u961f\u5217\uff09",id:"\u5806\u4f18\u5316\u4f18\u5148\u961f\u5217",level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u5806\u4f18\u5316\uff0c\u90bb\u63a5\u591a\u91cd\u8868",id:"\u5806\u4f18\u5316\u90bb\u63a5\u591a\u91cd\u8868",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dijkstra"},"Dijkstra"),(0,a.kt)("p",null,"\u8377\u5170\u8bed",(0,a.kt)("br",{parentName:"p"}),"\n","Dijkstra /\u02c8da\u026akstr\u0259/"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u8d77\u59cb\u9876\u70b9\u7684\u8def\u5f84\u957f\u5ea6\u6807\u8bb0\u4e3a0\uff0c\u5176\u4f59\u9876\u70b9\u6807\u8bb0\u4e3a",(0,a.kt)("span",{parentName:"li",className:"math math-inline"},(0,a.kt)("span",{parentName:"span",className:"katex"},(0,a.kt)("span",{parentName:"span",className:"katex-mathml"},(0,a.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,a.kt)("semantics",{parentName:"math"},(0,a.kt)("mrow",{parentName:"semantics"},(0,a.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e")),(0,a.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\infty")))),(0,a.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,a.kt)("span",{parentName:"span",className:"base"},(0,a.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,a.kt)("span",{parentName:"span",className:"mord"},"\u221e"))))),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u627e\u51fa\u672a\u6807\u8bb0\u9876\u70b9\u4e2d\u8ddd\u79bb\u8d77\u59cb\u8282\u70b9\u6700\u5c0f\u7684\u9876\u70b9V"),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0V\u7684\u90bb\u63a5\u70b9\u7684\u8def\u5f84\u8ddd\u79bb"),(0,a.kt)("li",{parentName:"ol"},"\u6807\u8bb0V"),(0,a.kt)("li",{parentName:"ol"},"\u8df3\u52301\uff0c\u76f4\u81f3\u65e0\u672a\u6807\u8bb0\u9876\u70b9")))),(0,a.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("p",null,"\uff1f",(0,a.kt)("br",{parentName:"p"}),"\n","\u975e\u5e38\u5947\u5999",(0,a.kt)("br",{parentName:"p"}),"\n","\u6211\u73b0\u5728\u624d\u60f3\u901a"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5b83\u662f\u52a8\u6001\u89c4\u5212",(0,a.kt)("br",{parentName:"p"}),"\n","\u5b83\u770b\u8d77\u6765\u5982\u6b64\u8be1\u5f02\uff0c\u5c31\u662f\u56e0\u4e3a\u5b83\u5bf9\u539f\u59cb\u7684dp\u505a\u4e86\u4e00\u70b9\u70b9\u4f18\u5316",(0,a.kt)("br",{parentName:"p"}),"\n","\u5b83\u53ef\u4ee5\u770b\u505a\u662fdp\u5e7f\u641c\u7684\u4f18\u5316\u7248\u672c\uff08\u6bcf\u8f6e\u53d6\u6700\u77ed\u8fdb\u884c\u66f4\u65b0\uff0c\u4f18\u5316\u4e86\u5e7f\u641c\u5bf9\u8282\u70b9\u7684\u91cd\u590d\u904d\u5386\uff09",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e5f\u53ef\u4ee5\u770b\u505a\u662f\u9012\u5f52dp\u7684 ",(0,a.kt)("em",{parentName:"p"},"\u53cd\u5411/\u4e0d\u4f7f\u7528\u6808")," \u7248\u672c\uff08\u9012\u5f52\u9996\u5148\u4ece\u6c47\u70b9\u5f00\u59cb\uff0cx=\u8be5\u70b9\uff0c\u904d\u5386x\u7684\u90bb\u63a5\u70b9\uff0c\u9009\u51fa\u6700\u77ed\u7684\u90a3\u6761\uff09"),(0,a.kt)("p",null,"\u6bcf\u6b21\u9009\u6700\u5c0f\u662f\u56e0\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u4e0d\u80fd\u4e71\u9009\uff0c\u56e0\u4e3a\u8981\u6309\u5c42\u7ea7\u6765\u66f4\u65b0\uff0c\u4e0d\u6309\u5c42\u7ea7\u66f4\u65b0\u5230\u540e\u9762\u4f1a\u6709\u540e\u6548\u6027\uff08\u66f4\u65b0\u4e00\u4e2a\u8282\u70b9\uff0c\u540e\u9762\u5927\u5c0f\u5173\u7cfb\u5168\u53d8\u4e86\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u9009\u6700\u5927\uff0c\u90a3\u4e48\u5728\u6743\u503c\u4e3a\u6b63\u7684\u60c5\u51b5\u4e0b\uff0c\u6bcf\u8f6e\u90fd\u4f1a\u9009\u62e9\u521a\u521a\u66f4\u65b0\u8fc7\u7684\u90a3\u4e2a\u8282\u70b9\uff08\u6700\u5927\u52a0\u5b8c\u6b63\u503c\u8fd8\u662f\u6700\u5927\uff09\uff0c\u76f4\u63a5\u4e00\u6761\u8def\u8d70\u5230\u9ed1\u4e86\uff0c\u8d2a\u4e86\uff0c\u6700\u540e\u4e5f\u4f1a\u6709\u540e\u6548\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u6700\u5c0f\u5e76\u4e0d\u662f\u5355\u7eaf\u5730\u9010\u5c42\u7ea7\u66f4\u65b0\uff0c\u5b83\u662f\u5728\u786e\u5b9a\u6700\u5c0f\u540e\u53ef\u80fd\u8df3\u8fc7\u4e86\u4e4b\u524d\u5c42\u7ea7\u7684\u8f83\u5927\u70b9\uff08\u56e0\u4e3a\u8f83\u5927\u70b9\u65e0\u8bba\u5982\u4f55\uff0c\u5230\u8fbe\u4e0b\u4e00\u5c42\u7ea7\u4e4b\u540e\u7684\u8def\u7a0b\u90fd\u4e0d\u53ef\u80fd\u6bd4\u8be5\u503c\u5c0f\uff09")),(0,a.kt)("p",null,"\u8bf4Dijkstra\u662f\u8d2a\u5fc3\uff0c\u4e0d\u5982\u8bf4\u5b83\u4e0d\u5f97\u4e0d\u8d2a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6211\u66f4\u503e\u5411\u4e8e\u50cf\u4e0a\u9762\u8fd9\u6837\u63cf\u8ff0Dijkstra",(0,a.kt)("br",{parentName:"p"}),"\n","\u5c31\u662f\u4e00\u822cdp\u7684\u4f18\u5316\u7248"),(0,a.kt)("h2",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,a.kt)("h3",{id:"\u5806\u4f18\u5316\u4f18\u5148\u961f\u5217"},"\u5806\u4f18\u5316\uff08\u4f18\u5148\u961f\u5217\uff09"),(0,a.kt)("p",null,"\u6b65\u9aa41\u7684\u5b9e\u73b0\u65b9\u5f0f\u4e3a\u7528\u5806\u83b7\u53d6\u6700\u5c0f\u503c"),(0,a.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("h3",{id:"\u5806\u4f18\u5316\u90bb\u63a5\u591a\u91cd\u8868"},"\u5806\u4f18\u5316\uff0c\u90bb\u63a5\u591a\u91cd\u8868"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.luogu.com.cn/record/96267527"},"\u6d1b\u8c37 P1119 \u707e\u540e\u91cd\u5efa - \u63d0\u4ea4\u8bb0\u5f55")),(0,a.kt)("p",null,"\u672c\u9875\u7f16\u8f91\u4e0d\u5b8c\u5168"))}u.isMDXComponent=!0}}]);