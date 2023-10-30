"use strict";(self.webpackChunkd_note=self.webpackChunkd_note||[]).push([[2054],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},l="\u6761\u4ef6\u8bed\u53e5",i={unversionedId:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5",id:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5",title:"\u6761\u4ef6\u8bed\u53e5",description:"if ... then ... else ...",source:"@site/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5.md",sourceDirName:"notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell",slug:"/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/6.\u6761\u4ef6\u8bed\u53e5",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"noteSidebar",previous:{title:"\u6a21\u5f0f\u5339\u914d",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/5.\u6a21\u5f0f\u5339\u914d"},next:{title:"\u5217\u8868\u64cd\u4f5c",permalink:"/DNote/docs/notes/\u7b14\u8bb0/\u8ba1\u7b97\u673a\u57fa\u7840/\u7f16\u7a0b\u8bed\u8a00/Haskell/7.\u5217\u8868\u64cd\u4f5c"}},c={},s=[{value:"if ... then ... else ...",id:"if--then--else-",level:2},{value:"case ... of ...",id:"case--of-",level:2},{value:"guard",id:"guard",level:2},{value:"\u4e3e\u4e2a\u4f8b\u5b50",id:"\u4e3e\u4e2a\u4f8b\u5b50",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6761\u4ef6\u8bed\u53e5"},"\u6761\u4ef6\u8bed\u53e5"),(0,a.kt)("h2",{id:"if--then--else-"},"if ... then ... else ..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'describeNumber :: Int -> String\ndescribeNumber x = if x > 0\n    then "Positive"\n    else if x < 0\n        then "Negative"\n        else "Zero"\n')),(0,a.kt)("h2",{id:"case--of-"},"case ... of ..."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u6a21\u5f0f\u5339\u914d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'describeOddEven :: Int -> String\ndescribeOddEven n = case n `mod` 2 of\n    0 -> "Even"\n    1 -> "Odd"\n    _ -> "This shouldn\'t happen for integers!"\n')),(0,a.kt)("h2",{id:"guard"},"guard"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"if ... then ... else ... \u7684\u6269\u5c55")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"otherwise"),"\u5e76\u4e0d\u5c5e\u4e8eguard\u8bed\u6cd5\uff0c\u800c\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"True"),"\u7684\u7ed1\u5b9a\uff08\u4e5f\u5c31\u662f\u8bf4",(0,a.kt)("inlineCode",{parentName:"p"},"otherwise"),"\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"True"),"\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'describeNumber :: Int -> String\ndescribeNumber x\n    | x > 0     = "Positive"\n    | x < 0     = "Negative"\n    | otherwise = "Zero"\n')),(0,a.kt)("h2",{id:"\u4e3e\u4e2a\u4f8b\u5b50"},"\u4e3e\u4e2a\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"-- \u6df7\u5408\u4f7f\u7528\u4e09\u79cd\u8bed\u6cd5\n\n-- \u5b9a\u4e49\u4e0d\u540c\u7684\u7535\u5f71\u7c7b\u578b\ndata MovieType = Standard | ThreeD | IMAX\n\n-- \u5b9a\u4e49\u4e0d\u540c\u7684\u96f6\u98df\u9009\u9879\ndata Snack = Popcorn | Soda | Combo\n\n-- \u8ba1\u7b97\u7535\u5f71\u548c\u96f6\u98df\u7684\u603b\u4ef7\ncalculatePrice :: MovieType -> Maybe Snack -> Int\ncalculatePrice movieType snackOption = moviePrice + snackPrice\n  where\n    -- \u6839\u636e\u7535\u5f71\u7c7b\u578b\u8ba1\u7b97\u7535\u5f71\u7968\u4ef7\n    moviePrice = case movieType of\n      Standard -> 10   -- \u6807\u51c6\u7535\u5f71\u7968\u4ef7\u4e3a10\n      ThreeD   -> 15   -- 3D\u7535\u5f71\u7968\u4ef7\u4e3a15\n      IMAX     -> 20   -- IMAX\u7535\u5f71\u7968\u4ef7\u4e3a20\n\n    -- \u6839\u636e\u96f6\u98df\u9009\u9879\u8ba1\u7b97\u96f6\u98df\u4ef7\u683c\n    snackPrice \n      | Just Popcorn <- snackOption = 5        -- \u7206\u7c73\u82b1\u4ef7\u683c\u4e3a5\n      | Just Soda     <- snackOption = 3       -- \u6c7d\u6c34\u4ef7\u683c\u4e3a3\n      | Just Combo    <- snackOption = \n          if movieType == IMAX \n            then 5                             -- \u5982\u679c\u9009\u62e9IMAX\u7535\u5f71\uff0c\u5957\u9910\u4ef7\u683c\u4e3a5\n            else 7                             -- \u5176\u4ed6\u7535\u5f71\u7c7b\u578b\uff0c\u5957\u9910\u4ef7\u683c\u4e3a7\n      | otherwise                    = 0       -- \u6ca1\u6709\u9009\u62e9\u96f6\u98df\uff0c\u4ef7\u683c\u4e3a0\n")))}d.isMDXComponent=!0}}]);