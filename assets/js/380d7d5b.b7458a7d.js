"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[7900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="HDL",i={unversionedId:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL/@\u5e8f\u8a00",id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL/@\u5e8f\u8a00",title:"HDL",description:"Hardware Description Language",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL/@\u5e8f\u8a00.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL/@\u5e8f\u8a00",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL/@\u5e8f\u8a00",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"\u6742\u9879",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/99.\u6742\u9879"},next:{title:"VHDL",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/HDL/VHDL"}},p={},s=[{value:"VSCode\u7684EDA\u73af\u5883\u5b89\u88c5",id:"vscode\u7684eda\u73af\u5883\u5b89\u88c5",level:2},{value:"Quartus Prime Lite",id:"quartus-prime-lite",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hdl"},"HDL"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Hardware Description Language"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u786c\u4ef6\u63cf\u8ff0\u8bed\u8a00"))),(0,a.kt)("p",null,"\u7528\u4ee3\u7801\u4ee3\u66ff\u753b\u56fe"),(0,a.kt)("p",null,"\u8f6f\u4ef6\u7f16\u7a0b\u8bed\u8a00\u4e0d\u80fd\u63cf\u8ff0\u7535\u8def\u7684\u65f6\u5e8f\u6027\u8d28",(0,a.kt)("br",{parentName:"p"}),"\n","\u8f6f\u4ef6\u7f16\u7a0b\u8bed\u8a00\u4e0d\u80fd\u66ff\u4ee3\u4e13\u7528\u7684\u786c\u4ef6\u63cf\u8ff0\u8bed\u8a00"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u5efa\u6a21"),"\uff1a\u7528HDL\u63cf\u8ff0\u7535\u8def\u7684\u529f\u80fd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u4eff\u771f"),"\uff1a\u7528\u7535\u8111\u6a21\u62df\u7535\u8def\uff0c\u9a8c\u8bc1\u7535\u8def\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u73b0\u5b9e\u96be\u4ee5\u4f7f\u7528\u7684\u8c03\u8bd5\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7efc\u5408"),"\uff1a\u628a\u8f6f\u4ef6\u6a21\u578b\u8f6c\u5316\u4e3a\u786c\u4ef6\u7535\u8def\uff08\u76f8\u5f53\u4e8e\u7f16\u8bd1\uff09\uff0c\u7c7b\u4f3c\u4e8e\u83b7\u5f97\u4e00\u5f20\u8bbe\u8ba1\u56fe\u7684\u8fc7\u7a0b")),(0,a.kt)("h2",{id:"vscode\u7684eda\u73af\u5883\u5b89\u88c5"},"VSCode\u7684EDA\u73af\u5883\u5b89\u88c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5Python\uff0c\u5b89\u88c5VSCode\u63d2\u4ef6TerosHDL"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install therosHDL"),"\uff0c\u4ee5\u53ca\u5176\u4ed6\u7684py\u63d0\u793a\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ghdl/ghdl"},"GHDL"),"\uff0c\u5e76\u6dfb\u52a0Path"),(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,a.kt)("a",{parentName:"li",href:"https://github.com/yosyshq/fpga-toolchain"},"fpga-toolchain"),"\uff0c\u5e76\u6dfb\u52a0Path",(0,a.kt)("br",{parentName:"li"}),"Windows\u8981\u9009\u62e9\u8001\u4e00\u70b9\u7684\u7248\u672c\uff0c\u540d\u5b57\u5e26windows\u7684",(0,a.kt)("br",{parentName:"li"}),"\u5728VSCode\u7684TerosHDL\u8bbe\u7f6e\u7684Schematic viewer\u91cc\u9009\u62e9(GHDL+Yosys)",(0,a.kt)("br",{parentName:"li"}),"\u8fd9\u4e2a\u662f\u56e0\u4e3aNetlist\uff0c\u4e5f\u5c31\u662f\u53ef\u89c6\u5316\u56fe\u7684",(0,a.kt)("a",{parentName:"li",href:"https://terostechnology.github.io/terosHDLdoc/netlist/configuration.html"},"\u95ee\u9898")),(0,a.kt)("li",{parentName:"ol"},"\u628afpga-toolchain\u91cc\u7684ghdl.exe\u5220\u6389")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gnuwin32.sourceforge.net/packages/make.htm"},"GNU_make")),(0,a.kt)("h2",{id:"quartus-prime-lite"},"Quartus Prime Lite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.intel.cn/content/www/cn/zh/products/details/fpga/development-tools/quartus-prime/resource.html"},"\u4e0b\u8f7d"),"\u5e76\u6839\u636e\u9ed8\u8ba4\u8bbe\u7f6e\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ol"},"\u53bb",(0,a.kt)("a",{parentName:"li",href:"https://licensing.intel.com"},"Intel\u8bb8\u53ef\u81ea\u52a9\u4e2d\u5fc3"),"\u6ce8\u518c\u8d26\u53f7\u5e76\u70b9\u51fb\u53f3\u4fa7Enroll\uff08\u767b\u8bb0\uff09\uff0c\u586b\u5199\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ol"},"\u7b49\u786e\u8ba4\u90ae\u4ef6\u6536\u5230\u540e\uff0c\u70b9\u51fb\u5de6\u4fa7\u767b\u5165"),(0,a.kt)("li",{parentName:"ol"},"\u767b\u5165\u540e\u70b9\u51fb\u83dc\u5355\u6761\u7684",(0,a.kt)("a",{parentName:"li",href:"https://licensing.intel.com/psg/s/sales-signup-evaluationlicenses"},"\u6ce8\u518c\u8bc4\u4f30\u6216\u514d\u8d39\u8bb8\u53ef")),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9Questa\u8bb8\u53ef\u8bc1\uff0c\u9009\u62e9\u5750\u5e2d\u6570\u91cf\uff0c\u70b9\u51fb\u83b7\u53d6\u8bb8\u53ef"),(0,a.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u8ba1\u7b97\u673a\u5904\u9009\u62e9NIC ID\uff0c\u9009\u62e9Fixed\uff0c\u586b\u5199\u6b63\u5728\u4f7f\u7528\u7684\u7f51\u5361\u7684mac\u5730\u5740"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u6536\u5230\u90ae\u4ef6\u4e2d\u7684dat\u6587\u4ef6\u653e\u5165\u4efb\u610f\u4f4d\u7f6e\uff0c\u7136\u540e\u5c06\u6b64\u6587\u4ef6\u6dfb\u52a0\u5230Path\u7684\u7cfb\u7edf\u53d8\u91cfLM_LICENSE_FILE"),(0,a.kt)("li",{parentName:"ol"},"\u6a21\u62df\u65f6\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"-novopt"),"\u53c2\u6570\u524d\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"-suppress 12110"),"\uff0c",(0,a.kt)("a",{parentName:"li",href:"https://www.macnica.co.jp/business/semiconductor/support/faqs/intel/134162"},"\u5982\u679c\u4e0d\u52a0\u7684\u8bdd\u6a21\u62df\u4e0d\u4f1a\u51fa\u7ed3\u679c\uff0c\u6000\u7591\u662fnovopt\u5e26\u6765\u7684\u4f18\u5316\u95ee\u9898"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_46588746/article/details/108780967"},"Quartus\u8054\u5408Vscode\u5f00\u53d1\u6559\u7a0b")))}m.isMDXComponent=!0}}]);