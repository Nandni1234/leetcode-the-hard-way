"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[846],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9980:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r,i=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-it-is-a-straight-line/"},c="1232 - Check If It Is a Straight Line (Easy)",p={unversionedId:"1200-1299/check-if-it-is-a-straight-line-easy",id:"1200-1299/check-if-it-is-a-straight-line-easy",title:"1232 - Check If It Is a Straight Line (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/check-if-it-is-a-straight-line/",source:"@site/solutions/1200-1299/1232-check-if-it-is-a-straight-line-easy.md",sourceDirName:"1200-1299",slug:"/1200-1299/check-if-it-is-a-straight-line-easy",permalink:"/leetcode-the-hard-way/solutions/1200-1299/check-if-it-is-a-straight-line-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1232-check-if-it-is-a-straight-line-easy.md",tags:[],version:"current",sidebarPosition:1232,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/check-if-it-is-a-straight-line/"},sidebar:"tutorialSidebar",previous:{title:"1202 - Smallest String With Swaps (Medium)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/smallest-string-with-swaps-medium"},next:{title:"1235 - Maximum Profit in Job Scheduling (Hard)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/maximum-profit-in-job-scheduling-hard"}},u={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check the Slope",id:"approach-1-check-the-slope",level:2}],h=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1232---check-if-it-is-a-straight-line-easy"},"1232 - Check If It Is a Straight Line (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/check-if-it-is-a-straight-line/"},"https://leetcode.com/problems/check-if-it-is-a-straight-line/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an array ",(0,a.kt)("inlineCode",{parentName:"p"},"coordinates"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"coordinates[i] = [x, y]"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"[x, y]")," represents the coordinate of a point. Check if these points make a straight line in the XY plane."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/15/untitled-diagram-2.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]\nOutput: true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/09/untitled-diagram-1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]\nOutput: false\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= coordinates.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"coordinates[i].length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"coordinates")," contains no duplicate point.")),(0,a.kt)("h2",{id:"approach-1-check-the-slope"},"Approach 1: Check the Slope"),(0,a.kt)("p",null,"First we calculate the slope between the first two points. Then starting from the third one, we check if the slope with the previous point is same as the target one. To compare the slope, we can use multiplication instead of division to avoid divide-by-zero and precision issue."),(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool checkStraightLine(vector<vector<int>>& coordinates) {\n        // slope for first two points: dy0 / dx0\n        int dx0 = coordinates[1][0] - coordinates[0][0];\n        int dy0 = coordinates[1][1] - coordinates[0][1];\n        for (int i = 2; i < coordinates.size(); i++) {\n            // slope for the current point and the previous point\n            // = dy / dx\n            int dx = coordinates[i][0] - coordinates[i - 1][0];\n            int dy = coordinates[i][1] - coordinates[i - 1][1];\n            // is dy0 / dx0 = dy / dx ?\n            // it is same as dy * dx0 = dy0 * dx\n            if (dy * dx0 != dy0 * dx) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n")))}f.isMDXComponent=!0}}]);