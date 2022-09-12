"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2036],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(m,".").concat(d)]||c[d]||l[d]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return c}});var r,o=n(87462),i=n(63366),a=(n(67294),n(3905)),u=["components"],m={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition"},p="2358 - Maximum Number of Groups Entering a Competition (Medium)",s={unversionedId:"2300-2399/maximum-number-of-groups-entering-a-competition-medium",id:"2300-2399/maximum-number-of-groups-entering-a-competition-medium",title:"2358 - Maximum Number of Groups Entering a Competition (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition",source:"@site/solutions/2300-2399/2358-maximum-number-of-groups-entering-a-competition-medium.md",sourceDirName:"2300-2399",slug:"/2300-2399/maximum-number-of-groups-entering-a-competition-medium",permalink:"/leetcode-the-hard-way/solutions/2300-2399/maximum-number-of-groups-entering-a-competition-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2358-maximum-number-of-groups-entering-a-competition-medium.md",tags:[],version:"current",sidebarPosition:2358,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition"},sidebar:"tutorialSidebar",previous:{title:"2357 - Make Array Zero by Subtracting Equal Amounts (Easy)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/make-array-zero-by-subtracting-equal-amounts-easy"},next:{title:"2359 - Find Closest Node to Given Two Nodes (Medium)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/find-closest-node-to-given-two-nodes-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach: Math",id:"approach-math",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),g={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2358---maximum-number-of-groups-entering-a-competition-medium"},"2358 - Maximum Number of Groups Entering a Competition (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition"},"https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given a positive integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"grades")," which represents the grades of students in a university. You would like to enter ",(0,a.kt)("strong",{parentName:"p"},"all")," these students into a competition in ",(0,a.kt)("strong",{parentName:"p"},"ordered")," non-empty groups, such that the ordering meets the following conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The sum of the grades of students in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ith")," group is ",(0,a.kt)("strong",{parentName:"li"},"less than")," the sum of the grades of students in the ",(0,a.kt)("inlineCode",{parentName:"li"},"(i + 1)th")," group, for all groups (except the last)."),(0,a.kt)("li",{parentName:"ul"},"The total number of students in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ith")," group is ",(0,a.kt)("strong",{parentName:"li"},"less than")," the total number of students in the ",(0,a.kt)("inlineCode",{parentName:"li"},"(i + 1)th")," group, for all groups (except the last).")),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"maximum")," number of groups that can be formed"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grades = [10,6,12,7,3,5]\nOutput: 3\nExplanation: The following is a possible way to form 3 groups of students:\n- 1st group has the students with grades = [12]. Sum of grades: 12. Student count: 1\n- 2nd group has the students with grades = [6,7]. Sum of grades: 6 + 7 = 13. Student count: 2\n- 3rd group has the students with grades = [10,3,5]. Sum of grades: 10 + 3 + 5 = 18. Student count: 3\nIt can be shown that it is not possible to form more than 3 groups.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grades = [8,8]\nOutput: 1\nExplanation: We can only form 1 group, since forming 2 groups would lead to an equal number of students in both groups.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= grades.length <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= grades[i] <= 10^5"))),(0,a.kt)("h2",{id:"approach-math"},"Approach: Math"),(0,a.kt)("p",null,"We need to form groups of ",(0,a.kt)("inlineCode",{parentName:"p"},"1, 2, 3, ...")," students in order to maximize the number of groups. We can use the formula ",(0,a.kt)("inlineCode",{parentName:"p"},"i * (i + 1) / 2")," to find out the number of students in ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," groups."),(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumGroups(vector<int>& grades) {\n        int n = grades.size(), i = 0;\n        while (i * (i + 1) / 2 <= n) i++;\n        return i - 1;\n    }\n};\n")))}f.isMDXComponent=!0}}]);