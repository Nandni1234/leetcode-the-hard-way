"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6492],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,m=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(n),d=r,h=l["".concat(m,".").concat(d)]||l[d]||c[d]||o;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},11486:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return l}});var a,r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"},p="1281 - Subtract the Product and Sum of Digits of an Integer (Easy)",u={unversionedId:"1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy",id:"1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy",title:"1281 - Subtract the Product and Sum of Digits of an Integer (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/",source:"@site/solutions/1200-1299/1281-subtract-the-product-and-sum-of-digits-of-an-integer-easy.md",sourceDirName:"1200-1299",slug:"/1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy",permalink:"/leetcode-the-hard-way/solutions/1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1281-subtract-the-product-and-sum-of-digits-of-an-integer-easy.md",tags:[],version:"current",sidebarPosition:1281,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"},sidebar:"tutorialSidebar",previous:{title:"1269 - Number of Ways to Stay in the Same Place After Some Steps (Hard)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/number-of-ways-to-stay-in-the-same-place-after-some-steps-hard"},next:{title:"1300 - 1399",permalink:"/leetcode-the-hard-way/solutions/category/1300---1399"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: <strong>Product &amp; Sum of Digits</strong>",id:"approach-1-product--sum-of-digits",level:2}],d=(a="SolutionAuthor",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}),h={toc:l};function g(t){var e=t.components,n=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1281---subtract-the-product-and-sum-of-digits-of-an-integer-easy"},"1281 - Subtract the Product and Sum of Digits of an Integer (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"},"https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an integer number ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", return the difference between the product of its digits and the sum of its digits."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 234\nOutput: 15 \nExplanation: \nProduct of digits = 2 * 3 * 4 = 24 \nSum of digits = 2 + 3 + 4 = 9 \nResult = 24 - 9 = 15\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: n = 4421\nOutput: 21\nExplanation: \nProduct of digits = 4 * 4 * 2 * 1 = 32 \nSum of digits = 4 + 4 + 2 + 1 = 11 \nResult = 32 - 11 = 21\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5"))),(0,i.kt)("h2",{id:"approach-1-product--sum-of-digits"},"Approach 1: ",(0,i.kt)("strong",{parentName:"h2"},"Product & Sum of Digits")),(0,i.kt)("p",null,"If you have done ",(0,i.kt)("a",{parentName:"p",href:"../0200-0299/add-digits-easy"},"0258 - Add Digits (Easy)"),", then you should know how to calculate the sum of digits. If not, it is recommended to solve 0258 before solving this problem. To recap, here's how to calculate the sum of digits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int digitSum(int n) {\n    int sum = 0;\n    while (n > 0) {\n        // get the last digit and add it to sum\n        // e.g. 123 % 10 = 3. Add 3 to sum\n        sum += n % 10;\n        // dividing by 10 for the next run\n        // e.g. 123 / 10 -> 12\n        n /= 10;\n    }\n    return sum;\n}\n")),(0,i.kt)("p",null,"We can use the same idea to calculate the product of each digit. Instead of adding each digit to ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"s"),(0,i.kt)("mi",{parentName:"mrow"},"u"),(0,i.kt)("mi",{parentName:"mrow"},"m")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sum")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),", we multiply it with ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"p"),(0,i.kt)("mi",{parentName:"mrow"},"r"),(0,i.kt)("mi",{parentName:"mrow"},"o"),(0,i.kt)("mi",{parentName:"mrow"},"d"),(0,i.kt)("mi",{parentName:"mrow"},"u"),(0,i.kt)("mi",{parentName:"mrow"},"c"),(0,i.kt)("mi",{parentName:"mrow"},"t")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"product")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"ro"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int digitProduct(int n) {\n    int product = 1;\n    while (n > 0) {\n        // get the last digit and multiply with product\n        // e.g. 123 % 10 = 3. product = product * 3\n        product *= n % 10;\n        // dividing by 10 for the next run\n        // e.g. 123 / 10 -> 12\n        n /= 10;\n    }\n    return product;\n}\n")),(0,i.kt)("p",null,"At the end, we just subtract the product and sum."),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int digitSum(int n) {\n        int sum = 0;\n        while (n > 0) {\n            // get the last digit and add it to sum\n            // e.g. 123 % 10 = 3. Add 3 to sum\n            sum += n % 10;\n            // dividing by 10 for the next run\n            // e.g. 123 / 10 -> 12\n            n /= 10;\n        }\n        return sum;\n    }\n    \n    int digitProduct(int n) {\n        int product = 1;\n        while (n > 0) {\n            // get the last digit and multiply with product\n            // e.g. 123 % 10 = 3. product = product * 3\n            product *= n % 10;\n            // dividing by 10 for the next run\n            // e.g. 123 / 10 -> 12\n            n /= 10;\n        }\n        return product;\n    }\n    \n    int subtractProductAndSum(int n) {\n        return digitProduct(n) - digitSum(n);\n    }\n};\n")),(0,i.kt)("p",null,"Once you got the idea, you should realise that they can be combined together."),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int subtractProductAndSum(int n) {\n        int product = 1, sum = 0;\n        while (n) {\n            product *= n % 10;\n            sum += n % 10;\n            n /= 10;\n        }\n        return product - sum;\n    }\n};\n")),(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func subtractProductAndSum(n int) int {\n    product, sum := 1, 0\n    for n > 0 {\n        product *= n % 10\n        sum += n % 10\n        n /= 10\n    }\n    return product - sum\n}\n")))}g.isMDXComponent=!0}}]);