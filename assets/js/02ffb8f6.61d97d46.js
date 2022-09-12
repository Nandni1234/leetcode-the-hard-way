"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5267],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),f=o,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||l;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},51213:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r,o=t(87462),l=t(63366),a=(t(67294),t(3905)),i=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-flowers-in-full-bloom/"},s="2251 - Number of Flowers in Full Bloom (Hard)",u={unversionedId:"2200-2299/number-of-flowers-in-full-bloom-hard",id:"2200-2299/number-of-flowers-in-full-bloom-hard",title:"2251 - Number of Flowers in Full Bloom (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-flowers-in-full-bloom/",source:"@site/solutions/2200-2299/2251-number-of-flowers-in-full-bloom-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/number-of-flowers-in-full-bloom-hard",permalink:"/leetcode-the-hard-way/solutions/2200-2299/number-of-flowers-in-full-bloom-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2251-number-of-flowers-in-full-bloom-hard.md",tags:[],version:"current",sidebarPosition:2251,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-flowers-in-full-bloom/"},sidebar:"tutorialSidebar",previous:{title:"2250 - Count Number of Rectangles Containing Each Point (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-number-of-rectangles-containing-each-point-medium"},next:{title:"2255 - Count Prefixes of a Given String (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-prefixes-of-a-given-string-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Line Sweep",id:"approach-1-line-sweep",level:2}],f=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),d={toc:c};function h(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2251---number-of-flowers-in-full-bloom-hard"},"2251 - Number of Flowers in Full Bloom (Hard)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-flowers-in-full-bloom/"},"https://leetcode.com/problems/number-of-flowers-in-full-bloom/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," 2D integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"flowers"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"flowers[i] = [starti, endi]")," means the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," flower will be in ",(0,a.kt)("strong",{parentName:"p"},"full bloom")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"starti")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"endi")," (",(0,a.kt)("strong",{parentName:"p"},"inclusive"),"). You are also given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"persons")," of size ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"persons[i]")," is the time that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," person will arrive to see the flowers."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"an integer array")," ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," ",(0,a.kt)("em",{parentName:"p"},"of size")," ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),(0,a.kt)("em",{parentName:"p"},", where")," ",(0,a.kt)("inlineCode",{parentName:"p"},"answer[i]")," ",(0,a.kt)("em",{parentName:"p"},"is the ",(0,a.kt)("strong",{parentName:"em"},"number")," of flowers that are in full bloom when the")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," ",(0,a.kt)("em",{parentName:"p"},"person arrives.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/ex1new.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: flowers = [[1,6],[3,7],[9,12],[4,13]], persons = [2,3,7,11]\nOutput: [1,2,2,2]\nExplanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.\nFor each person, we return the number of flowers in full bloom during their arrival.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/02/ex2new.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: flowers = [[1,10],[3,3]], persons = [3,3,2]\nOutput: [2,2,1]\nExplanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.\nFor each person, we return the number of flowers in full bloom during their arrival.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= flowers.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flowers[i].length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= starti <= endi <= 10^9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= persons.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= persons[i] <= 10^9"))),(0,a.kt)("h2",{id:"approach-1-line-sweep"},"Approach 1: Line Sweep"),(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> fullBloomFlowers(vector<vector<int>>& flowers, vector<int>& persons) {\n        int n = persons.size();\n        vector<int> ans(n);\n        vector<array<int, 3>> v; // {time, idx, val}\n        for (auto& flower : flowers) {\n            // in\n            v.push_back({flower[0], -1, 1});\n            // out\n            v.push_back({flower[1] + 1, -1, -1});\n        }\n        // include persons\n        for (int i = 0; i < n; i++) v.push_back({persons[i], i, 0});\n        // sort in ascending\n        sort(v.begin(), v.end());\n        int sum = 0;\n        for (auto& [time, idx, val] : v) {\n            // calculate the prefix sum\n            sum += val;\n            // idx is not -1, set the answer for person[idx]\n            if (idx != -1) {\n                ans[idx] = sum;\n            }\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);