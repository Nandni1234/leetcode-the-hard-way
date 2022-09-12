"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3818],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76002:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r,i=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/calculate-digit-sum-of-a-string/"},u="2243 - Calculate Digit Sum of a String (Easy)",p={unversionedId:"2200-2299/calculate-digit-sum-of-a-string-easy",id:"2200-2299/calculate-digit-sum-of-a-string-easy",title:"2243 - Calculate Digit Sum of a String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/calculate-digit-sum-of-a-string/",source:"@site/solutions/2200-2299/2243-calculate-digit-sum-of-a-string-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/calculate-digit-sum-of-a-string-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/calculate-digit-sum-of-a-string-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2243-calculate-digit-sum-of-a-string-easy.md",tags:[],version:"current",sidebarPosition:2243,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/calculate-digit-sum-of-a-string/"},sidebar:"tutorialSidebar",previous:{title:"2242 - Maximum Score of a Node Sequence (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-score-of-a-node-sequence-hard"},next:{title:"2244 - Minimum Rounds to Complete All Tasks (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-rounds-to-complete-all-tasks-medium"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2243---calculate-digit-sum-of-a-string-easy"},"2243 - Calculate Digit Sum of a String (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/calculate-digit-sum-of-a-string/"},"https://leetcode.com/problems/calculate-digit-sum-of-a-string/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," consisting of digits and an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"round")," can be completed if the length of ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," is greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),". In one round, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Divide")," ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," into ",(0,o.kt)("strong",{parentName:"li"},"consecutive groups")," of size ",(0,o.kt)("inlineCode",{parentName:"li"},"k")," such that the first ",(0,o.kt)("inlineCode",{parentName:"li"},"k")," characters are in the first group, the next ",(0,o.kt)("inlineCode",{parentName:"li"},"k")," characters are in the second group, and so on. ",(0,o.kt)("strong",{parentName:"li"},"Note")," that the size of the last group can be smaller than ",(0,o.kt)("inlineCode",{parentName:"li"},"k"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Replace")," each group of ",(0,o.kt)("inlineCode",{parentName:"li"},"s")," with a string representing the sum of all its digits. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},'"346"')," is replaced with ",(0,o.kt)("inlineCode",{parentName:"li"},'"13"')," because ",(0,o.kt)("inlineCode",{parentName:"li"},"3 + 4 + 6 = 13"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Merge")," consecutive groups together to form a new string. If the length of the string is greater than ",(0,o.kt)("inlineCode",{parentName:"li"},"k"),", repeat from step ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," ",(0,o.kt)("em",{parentName:"p"},"after all rounds have been completed"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "11111222223", k = 3\nOutput: "135"\nExplanation: \n- For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".\n  \u200b\u200b\u200b\u200b\u200bThen we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5. \n  So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.\n- For the second round, we divide s into "346" and "5".\n  Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5. \n  So, s becomes "13" + "5" = "135" after second round. \nNow, s.length <= k, so we return "135" as the answer.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "00000000", k = 3\nOutput: "000"\nExplanation: \nWe divide s into "000", "000", and "00".\nThen we calculate the digit sum of each group: 0 + 0 + 0 = 0, 0 + 0 + 0 = 0, and 0 + 0 = 0. \ns becomes "0" + "0" + "0" = "000", whose length is equal to k, so we return "000".\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= k <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consists of digits only.")),(0,o.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,o.kt)("p",null,"Just following the instructions."),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string digitSum(string s, int k) {\n        while (s.size() > k) {\n            string ns = \"\";\n            for (int i = 0; i < s.size(); i += k) {\n                // Divide s into a group of size k\n                string t = s.substr(i, k);\n                // Calulate the digit sum in the current group\n                int sum = 0;\n                for (int j = 0; j < min((int) t.size(), k); j++) {\n                    sum += t[j] - '0';\n                }\n                // merge back together\n                ns += to_string(sum);\n            }\n            // replace s and do the next round\n            s = ns;\n        }\n        return s;\n    }\n};\n")))}f.isMDXComponent=!0}}]);