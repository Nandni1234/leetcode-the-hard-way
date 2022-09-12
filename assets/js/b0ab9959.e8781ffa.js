"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1765],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=i(a),d=r,k=h["".concat(p,".").concat(d)]||h[d]||c[d]||s;return a?n.createElement(k,o(o({ref:t},l),{},{components:a})):n.createElement(k,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},19849:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return h}});var n,r=a(87462),s=a(63366),o=(a(67294),a(3905)),m=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/handshakes-that-dont-cross/"},i="1259 - Handshakes That Don't Cross (Hard)",l={unversionedId:"1200-1299/handshakes-that-dont-cross-hard",id:"1200-1299/handshakes-that-dont-cross-hard",title:"1259 - Handshakes That Don't Cross (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/handshakes-that-dont-cross/",source:"@site/solutions/1200-1299/1259-handshakes-that-dont-cross-hard.md",sourceDirName:"1200-1299",slug:"/1200-1299/handshakes-that-dont-cross-hard",permalink:"/leetcode-the-hard-way/solutions/1200-1299/handshakes-that-dont-cross-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1259-handshakes-that-dont-cross-hard.md",tags:[],version:"current",sidebarPosition:1259,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/handshakes-that-dont-cross/"},sidebar:"tutorialSidebar",previous:{title:"1235 - Maximum Profit in Job Scheduling (Hard)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/maximum-profit-in-job-scheduling-hard"},next:{title:"1269 - Number of Ways to Stay in the Same Place After Some Steps (Hard)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/number-of-ways-to-stay-in-the-same-place-after-some-steps-hard"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],d=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),k={toc:h};function u(e){var t=e.components,a=(0,s.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1259---handshakes-that-dont-cross-hard"},"1259 - Handshakes That Don't Cross (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/handshakes-that-dont-cross/"},"https://leetcode.com/problems/handshakes-that-dont-cross/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an ",(0,o.kt)("strong",{parentName:"p"},"even")," number of people ",(0,o.kt)("inlineCode",{parentName:"p"},"numPeople")," that stand around a circle and each person shakes hands with someone else so that there are ",(0,o.kt)("inlineCode",{parentName:"p"},"numPeople / 2")," handshakes total."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the number of ways these handshakes could occur such that none of the handshakes cross"),"."),(0,o.kt)("p",null,"Since the answer could be very large, return it ",(0,o.kt)("strong",{parentName:"p"},"modulo")," ",(0,o.kt)("inlineCode",{parentName:"p"},"109 + 7"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/07/11/5125_example_2.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: numPeople = 4\nOutput: 2\nExplanation: There are two ways to do it, the first way is [(1,2),(3,4)] and the second one is [(2,3),(4,1)].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/07/11/5125_example_3.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: numPeople = 6\nOutput: 5\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= numPeople <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numPeople")," is even.")),(0,o.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,o.kt)("p",null,"Person 1 can shake hand with person with even number but not with odd number because every time we need to divide the group into two sets. For example, if person 1 shakes hand with person 2, then there is an empty set and a set of people with numbers from 3 to n. If person 1 shakes hand with person 4, then the first set is person 2 + person 3 and the second set is from 5 to n. At the end, we would have a set from person 2 to n - 1 and an empty set."),(0,o.kt)("p",null,"In general, let ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"d"),(0,o.kt)("mi",{parentName:"mrow"},"p"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,o.kt)("mi",{parentName:"mrow"},"i"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i]")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"["),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,o.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the number of ways these handshakes could occur such that none of the handshakes cross of for ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"i")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," people. If person ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"i")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," shakes hand with person ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"j")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"))))),", then we could divide into two sets - one from 2 to j - 1 and another one from j - 1 to i. The product of them would be the contribution to ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"d"),(0,o.kt)("mi",{parentName:"mrow"},"p"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,o.kt)("mi",{parentName:"mrow"},"i"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i]")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"["),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,o.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"."),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int numberOfWays(int n) {\n        int M = 1e9 + 7;\n        vector<long long> dp(n + 1, 0);\n        dp[0] = 1;\n        for (int i = 2; i <= n; i += 2) {\n            for (int j = 2; j <= i; j += 2) {\n                // two sets : \n                // 1. [2 .. j - 1] = j - 1 - 2 + 1 = j - 2\n                // 2. [j + 1 .. i] = i - (j + 1) + 1 = i - j\n                dp[i] = (dp[i] + (dp[j - 2] * dp[i - j])) % M;\n            }\n        }\n        return dp[n];\n    }\n};\n")))}u.isMDXComponent=!0}}]);