"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[1626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=o(n),s=l,c=d["".concat(u,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(c,p(p({ref:t},k),{},{components:n})):r.createElement(c,p({ref:t},k))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<a;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const a={},p="\u667a\u80fd\u6307\u9488",i={unversionedId:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u667a\u80fd\u6307\u9488",id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u667a\u80fd\u6307\u9488",title:"\u667a\u80fd\u6307\u9488",description:"Smart Pointer",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u667a\u80fd\u6307\u9488.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u667a\u80fd\u6307\u9488",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u667a\u80fd\u6307\u9488",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"\u6742\u9879",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/C++/\u73b0\u4ee3C++/\u6742\u9879"},next:{title:"Haskell",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/0.\u5e8f\u8a00"}},u={},o=[{value:"\u58f0\u660e\u548c\u521d\u59cb\u5316",id:"\u58f0\u660e\u548c\u521d\u59cb\u5316",level:2},{value:"unique_ptr",id:"unique_ptr",level:2},{value:"\u903b\u8f91",id:"\u903b\u8f91",level:3},{value:"shared_ptr",id:"shared_ptr",level:2},{value:"\u903b\u8f91",id:"\u903b\u8f91-1",level:3},{value:"weak_ptr",id:"weak_ptr",level:3},{value:"\u903b\u8f91",id:"\u903b\u8f91-2",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:4},{value:"\u58f0\u660e\u548c\u521d\u59cb\u5316",id:"\u58f0\u660e\u548c\u521d\u59cb\u5316-1",level:5},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",level:6},{value:"\u5c0f\u4e1c\u897f",id:"\u5c0f\u4e1c\u897f",level:2},{value:"auto_ptr",id:"auto_ptr",level:3},{value:"boost",id:"boost",level:3},{value:"shared_from_this",id:"shared_from_this",level:3},{value:"\u6210\u5458\u51fd\u6570",id:"\u6210\u5458\u51fd\u6570",level:3},{value:"\u81ea\u5b9a\u4e49\u5220\u9664\u884c\u4e3a",id:"\u81ea\u5b9a\u4e49\u5220\u9664\u884c\u4e3a",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5faa\u73af\u5f15\u7528",id:"\u5faa\u73af\u5f15\u7528",level:3}],k={toc:o},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u667a\u80fd\u6307\u9488"},"\u667a\u80fd\u6307\u9488"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Smart Pointer"))),(0,l.kt)("p",null,"\u4e0e\u667a\u80fd\u6307\u9488\u5bf9\u5e94\u7684\u662f\u88f8\u6307\u9488",(0,l.kt)("br",{parentName:"p"}),"\n","\u667a\u80fd\u6307\u9488\u7684\u51fa\u73b0\u4e3b\u8981\u662f\u4e3a\u4e86\u89e3\u51b3\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898",(0,l.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u81ea\u52a8\u91ca\u653e\u5185\u5b58",(0,l.kt)("br",{parentName:"p"}),"\n","\u5934\u6587\u4ef6\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"<memory>")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make_***"),"\u7684\u8bed\u6cd5\u5728C++14\u4e4b\u540e\u624d\u5f15\u5165"),(0,l.kt)("li",{parentName:"ul"},"auto_ptr\u5728C++11\u4e4b\u540e\u88ab\u820d\u5f03"),(0,l.kt)("li",{parentName:"ul"},"\u667a\u80fd\u6307\u9488\u548c\u91ce\u6307\u9488\u4e0d\u8981\u6df7\u7528\u6307\u4ee3\u540c\u4e00\u4e2a\u5bf9\u8c61")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u58f0\u660e\u548c\u521d\u59cb\u5316"},"\u58f0\u660e\u548c\u521d\u59cb\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <memory>\n\nvoid main(void)\n{\n    //unique_ptr\n    std::unique_ptr<int> p1;\n    p1 = make_unique<int>(100);//100\u4e3a\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\uff08\u521d\u59cb\u5316\uff09\n\n    std::unique_ptr<int> p2 {new int(100)};\n\n    std::unique_ptr<int> p3 {make_unique<int>(100)};//\u5982\u4e0a\uff0c\u4f46\u662f\u6548\u7387\u66f4\u9ad8\uff0c\u572811\u4e4b\u524d\u7684\u7248\u672c\u66f4\u5b89\u5168\n    //\u4e5f\u53ef\u4ee5\u4f7f\u7528new shared_ptr<int>(new int(100), delfunc)\u8fd9\u79cd\u6b8b\u75be\u6a21\u5f0f\u6765\u521d\u59cb\u5316\n    //\u6216\u8005shared_ptr<int> p(new int(100), delfunc);\n    \n    //shared_ptr\n    std::shared_ptr<int> p4;\n    p4 = make_shared<int>(100);\n\n    std::shared_ptr<int> p5 {new int(100)};\n\n    std::shared_ptr<int> p6 {make_shared<int>(100)};\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/rubikchen/article/details/121888274"},"\u5173\u4e8e{}\u7684\u521d\u59cb\u5316\u5e94\u7528"),"<\u2014\u2014",(0,l.kt)("del",{parentName:"p"},"\u5176\u5b9e\u8fd9\u7bc7\u6587\u7ae0\u7ed3\u6784\u662f\u4e00\u62d6\u56db\uff0c\u4e0d\u8fc7\u6211\u6682\u65f6\u6ca1\u6709\u6253\u7b97\u5199\u8fd9\u90e8\u5206\u5185\u5bb9\uff0c\u6240\u4ee5\u5c06\u5c31\u7528\u4e00\u4e0b")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"unique_ptr"},"unique_ptr"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u552f\u4e00\u6307\u9488")),(0,l.kt)("h3",{id:"\u903b\u8f91"},"\u903b\u8f91"),(0,l.kt)("p",null,"\u4e0d\u80fd\u590d\u5236\uff0c\u72ec\u5360",(0,l.kt)("br",{parentName:"p"}),"\n","\u5220\u9664\u5668\u5728\u7f16\u8bd1\u65f6\u7ed1\u5b9a\uff0c0\u989d\u5916\u5f00\u9500"),(0,l.kt)("p",null,"\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unique_ptr<int> p2(p1.release())")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unique_ptr<int> p2 = move(p1)"))),(0,l.kt)("p",null,"\u6765\u8f6c\u79fb\u63a7\u5236\u6743"),(0,l.kt)("h2",{id:"shared_ptr"},"shared_ptr"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5171\u4eab\u6307\u9488")),(0,l.kt)("h3",{id:"\u903b\u8f91-1"},"\u903b\u8f91"),(0,l.kt)("p",null,"\u5171\u4eab\u6307\u9488\u4f1a\u8bb0\u5f55\u6307\u5411\u540c\u4e00\u4e2a\u5185\u5b58\u7a7a\u95f4\u7684\u5171\u4eab\u6307\u9488\u4e2a\u6570",(0,l.kt)("br",{parentName:"p"}),"\n","\u5f53\u6700\u540e\u4e00\u4e2a\u5171\u4eab\u6307\u9488\u88ab\u91ca\u653e\u65f6\uff0c\u5176\u6307\u5411\u7684\u7a7a\u95f4\u4e5f\u4f1a\u88ab\u91ca\u653e",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("del",{parentName:"p"},"\u5176\u5b9e\u542c\u8d77\u6765\u86ee\u7b80\u5355\u7684\uff0c\u5b9e\u73b0\u597d\u50cf\u4e5f\u86ee\u7b80\u5355\u7684\uff0c\u63d0\u793a\uff1a\u81ea\u5b9a\u4e49\u6307\u9488\u8fd0\u7b97\u7b26\uff0c\u6a21\u677f\u7c7b\uff0c\u6784\u9020\u51fd\u6570\uff0c\u6790\u6784\u51fd\u6570")),(0,l.kt)("h3",{id:"weak_ptr"},"weak_ptr"),(0,l.kt)("h4",{id:"\u903b\u8f91-2"},"\u903b\u8f91"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3",(0,l.kt)("a",{parentName:"p",href:"#%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8"},"\u5faa\u73af\u5f15\u7528"),(0,l.kt)("br",{parentName:"p"}),"\n","\u4e0d\u62e5\u6709\u8d44\u6e90\uff0c\u65e0\u6cd5\u91ca\u653e",(0,l.kt)("br",{parentName:"p"}),"\n","\u82e5\u9700\u8bbf\u95ee\u8d44\u6e90\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"wp.lock()"),"\u53d6\u51fa\u4e00\u4e2ashared_ptr\u6765\u8bbf\u95ee"),(0,l.kt)("h4",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("h5",{id:"\u58f0\u660e\u548c\u521d\u59cb\u5316-1"},"\u58f0\u660e\u548c\u521d\u59cb\u5316"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"weak_ptr<int> p = make_shared<int>(100)"),(0,l.kt)("br",{parentName:"p"}),"\n","\u9700\u8981\u4efb\u610fshared_ptr\u8fdb\u884c\u8d4b\u503c"),(0,l.kt)("h6",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wp.lock()"),"\u8fd4\u56de\u88f8\u6307\u9488\u7684shared_ptr\uff0c\u5982\u679c\u8ba1\u6570\u4e3a0\uff0c\u8fd4\u56denullptr"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wp.use_count()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expired()"),"\u5224\u65ad\u6240\u89c2\u5bdf\u8d44\u6e90\u662f\u5426\u5df2\u7ecf\u91ca\u653e")),(0,l.kt)("p",null,"\u4f7f\u7528weak_ptr\u4f5c\u4e3a\u6210\u5458\u53d8\u91cf\u7684\u7c7b\u578b\u5373\u53ef\u89e3\u51b3",(0,l.kt)("a",{parentName:"p",href:"#%E5%BE%AA%E7%8E%AF%E5%BC%95%E7%94%A8"},"\u5faa\u73af\u5f15\u7528"),"  "),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u5c0f\u4e1c\u897f"},"\u5c0f\u4e1c\u897f"),(0,l.kt)("h3",{id:"auto_ptr"},"auto_ptr"),(0,l.kt)("p",null,"\u5f85\u5199"),(0,l.kt)("h3",{id:"boost"},"boost"),(0,l.kt)("p",null,"\u5f85\u5199"),(0,l.kt)("h3",{id:"shared_from_this"},"shared_from_this"),(0,l.kt)("p",null,"\u5f85\u5199"),(0,l.kt)("h3",{id:"\u6210\u5458\u51fd\u6570"},"\u6210\u5458\u51fd\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ptr.get()"),"\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u5e94\u7684\u88f8\u6307\u9488"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ptr.reset()"),"\u4f1a\u5c06ptr\u6307\u5411NULL\uff0c\uff08\u5e76\u4e14\u539fshare\u8ba1\u6570\u51cf1\uff09",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reset()"),"\u53ef\u4ee5\u6709\u53c2\u6570\uff0c\u53c2\u6570\u4e3a\u6307\u5411\u7684\u65b0\u7a7a\u95f4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ptr.release()"),"\u89e3\u7ed1\uff0c\u8fd4\u56de\u88f8\u6307\u9488\uff08\u5e76\u4e14\u539fshare\u8ba1\u6570\u51cf1\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ptr.swap(x)"),"\u4e0ex\u4e92\u6362"))),(0,l.kt)("li",{parentName:"ul"},"shared_ptr",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str.use_count()"),"\u8fd4\u56de\u5f15\u7528\u8ba1\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str.unique()"),"\u68c0\u67e5\u662f\u5426\u72ec\u5360")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/a777122/article/details/124051672"},"CSDN - C++ \u667a\u80fd\u6307\u9488")),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5220\u9664\u884c\u4e3a"},"\u81ea\u5b9a\u4e49\u5220\u9664\u884c\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void close_file(FILE* fp){\n    if(fp == nullptr) return;\n    fclose(fp);\n    cout << "File closed." << endl;\n}\nint main(){\n    FILE* fp = fopen("data.txt","w");\n    \n    //unique_ptr\n    unique_ptr<FILE,decltype(&close_file)> ufp {fp,close_file};//\u6a21\u677f\u7c7b\u578b\u7b2c\u4e8c\u4e2a\u8981\u5199\u5220\u9664\u5668\u7c7b\u578b\uff0c\u5728\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5199\u4e0a\u5220\u9664\u5668\n\n    //shared_ptr\n    shared_ptr<FILE> sfp {fp,close_file};//\u76f4\u63a5\u5728\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5199\u4e0a\u5220\u9664\u5668\n    \n}\n')),(0,l.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u5206\u914d\u4efb\u4f55\u503c\u65f6\u4e3anullptr")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ec5\u63d0\u4f9b->\uff0c*\uff0c==\u8fd0\u7b97\u7b26\uff0c\u6ca1\u6709+\uff0c-\uff0c++\uff0c--\uff0c[]\u7b49\u8fd0\u7b97\u7b26")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u8981\u4f7f\u7528\u6808\u6307\u9488\uff08\u56e0\u4e3a\u667a\u80fd\u6307\u9488\u4f7f\u7528delete\u91ca\u653e\u7a7a\u95f4\uff0c\u6240\u4ee5\u5728\u6784\u9020\u65f6\u4e5f\u9700\u8981new\u51fa\u6765\u7684\u7a7a\u95f4\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7a7a\u6307\u9488\u8bf7\u7528nullptr\u8868\u793a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"nullptr\u662fC++11\u4e4b\u540e\u7684\u5173\u952e\u5b57\uff0c\u800cNULL\u662f\u5b8f\u5b9a\u4e49\u4e3a0\uff0c\u5728\u7c7b\u578b\u63a8\u5bfc\u65f6\u53ef\u80fd\u4f1a\u51fa\u9519"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"unique_ptr"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u628aunique_ptr\u8d4b\u503c\u4e3anullptr\u4f1a\u91ca\u653e\u539f\u6307\u9488\u7a7a\u95f4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"shared_ptr"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528\u540c\u4e00\u4e2a\u539f\u59cb\u6307\u9488\u8fdb\u884c\u9ed8\u8ba4\u6784\u9020",(0,l.kt)("inlineCode",{parentName:"li"},"shared_ptr<int> p2(num)")),(0,l.kt)("li",{parentName:"ul"},"\u6b63\u786e\u65b9\u6cd5\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"shared_ptr<int> p2(p1)")),(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u6709\u4e00\u70b9\u70b9\u989d\u5916\u6027\u80fd\u5f00\u9500")))),(0,l.kt)("h3",{id:"\u5faa\u73af\u5f15\u7528"},"\u5faa\u73af\u5f15\u7528"),(0,l.kt)("p",null,"\u4e24\u4e2a\u7c7b\u4e92\u76f8\u62e5\u6709\u4e00\u4e2a\u5bf9\u65b9\u7684shared_ptr\u6210\u5458\u53d8\u91cf",(0,l.kt)("br",{parentName:"p"}),"\n","\u5206\u522b\u5efa\u7acb\u4e24\u4e2a\u7c7b\u7684shared_ptr\u5bf9\u8c61\uff0c\u628a\u6210\u5458\u53d8\u91cf\u8bbe\u4e3a\u5f7c\u6b64",(0,l.kt)("br",{parentName:"p"}),"\n","\u5c31\u4f1a\u9020\u6210\u6b7b\u9501",(0,l.kt)("br",{parentName:"p"}),"\n","\u65e0\u6cd5\u91ca\u653e"))}m.isMDXComponent=!0}}]);