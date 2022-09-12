"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2870],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),N=o(t),k=r,h=N["".concat(i,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,s(s({ref:a},l),{},{components:t})):n.createElement(h,s({ref:a},l))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=N;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<m;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},96384:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return N}});var n,r=t(87462),m=t(63366),s=(t(67294),t(3905)),p=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/recover-the-original-array/"},o="2122 - Recover the Original Array (Hard)",l={unversionedId:"2100-2199/recover-the-original-array-hard",id:"2100-2199/recover-the-original-array-hard",title:"2122 - Recover the Original Array (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/recover-the-original-array/",source:"@site/solutions/2100-2199/2122-recover-the-original-array-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/recover-the-original-array-hard",permalink:"/leetcode-the-hard-way/solutions/2100-2199/recover-the-original-array-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2122-recover-the-original-array-hard.md",tags:[],version:"current",sidebarPosition:2122,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/recover-the-original-array/"},sidebar:"tutorialSidebar",previous:{title:"2121 - Intervals Between Identical Elements (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/intervals-between-identical-elements-medium"},next:{title:"2127 - Maximum Employees to Be Invited to a Meeting (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximum-employees-to-be-invited-to-a-meeting-hard"}},c={},N=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Try all possible k",id:"approach-1-try-all-possible-k",level:2}],k=(n="SolutionAuthor",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),h={toc:N};function u(e){var a=e.components,t=(0,m.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2122---recover-the-original-array-hard"},"2122 - Recover the Original Array (Hard)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/recover-the-original-array/"},"https://leetcode.com/problems/recover-the-original-array/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Alice had a ",(0,s.kt)("strong",{parentName:"p"},"0-indexed")," array ",(0,s.kt)("inlineCode",{parentName:"p"},"arr")," consisting of ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," ",(0,s.kt)("strong",{parentName:"p"},"positive")," integers. She chose an arbitrary ",(0,s.kt)("strong",{parentName:"p"},"positive integer")," ",(0,s.kt)("inlineCode",{parentName:"p"},"k")," and created two new ",(0,s.kt)("strong",{parentName:"p"},"0-indexed")," integer arrays ",(0,s.kt)("inlineCode",{parentName:"p"},"lower")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"higher")," in the following manner:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"lower[i] = arr[i] - k"),", for every index ",(0,s.kt)("inlineCode",{parentName:"li"},"i")," where ",(0,s.kt)("inlineCode",{parentName:"li"},"0 <= i < n")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"higher[i] = arr[i] + k"),", for every index ",(0,s.kt)("inlineCode",{parentName:"li"},"i")," where ",(0,s.kt)("inlineCode",{parentName:"li"},"0 <= i < n"))),(0,s.kt)("p",null,"Unfortunately, Alice lost all three arrays. However, she remembers the integers that were present in the arrays ",(0,s.kt)("inlineCode",{parentName:"p"},"lower")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"higher"),", but not the array each integer belonged to. Help Alice and recover the original array."),(0,s.kt)("p",null,"Given an array ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," consisting of ",(0,s.kt)("inlineCode",{parentName:"p"},"2n")," integers, where ",(0,s.kt)("strong",{parentName:"p"},"exactly")," ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," of the integers were present in ",(0,s.kt)("inlineCode",{parentName:"p"},"lower")," and the remaining in ",(0,s.kt)("inlineCode",{parentName:"p"},"higher"),", return ",(0,s.kt)("em",{parentName:"p"},"the ",(0,s.kt)("strong",{parentName:"em"},"original")," array")," ",(0,s.kt)("inlineCode",{parentName:"p"},"arr"),". In case the answer is not unique, return ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"any")," valid array"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," The test cases are generated such that there exists ",(0,s.kt)("strong",{parentName:"p"},"at least one")," valid array ",(0,s.kt)("inlineCode",{parentName:"p"},"arr"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [2,10,6,4,8,12]\nOutput: [3,7,11]\nExplanation:\nIf arr = [3,7,11] and k = 1, we get lower = [2,6,10] and higher = [4,8,12].\nCombining lower and higher gives us [2,6,10,4,8,12], which is a permutation of nums.\nAnother valid possibility is that arr = [5,7,9] and k = 3. In that case, lower = [2,4,6] and higher = [8,10,12]. \n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [1,1,3,3]\nOutput: [2,2]\nExplanation:\nIf arr = [2,2] and k = 1, we get lower = [1,1] and higher = [3,3].\nCombining lower and higher gives us [1,1,3,3], which is equal to nums.\nNote that arr cannot be [1,3] because in that case, the only possible way to obtain [1,1,3,3] is with k = 0.\nThis is invalid since k must be positive.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [5,435]\nOutput: [220]\nExplanation:\nThe only possible combination is arr = [220] and k = 215. Using them, we get lower = [5] and higher = [435].\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"2 * n == nums.length")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^9")),(0,s.kt)("li",{parentName:"ul"},"The test cases are generated such that there exists ",(0,s.kt)("strong",{parentName:"li"},"at least one")," valid array ",(0,s.kt)("inlineCode",{parentName:"li"},"arr"),".")),(0,s.kt)("h2",{id:"approach-1-try-all-possible-k"},"Approach 1: Try all possible k"),(0,s.kt)("p",null,"In short, we just need to try all possible ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),". If we sort ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),", the smallest element must be in the lower array. It is easy to see ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),"k can be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(nums[i]\u2212nums[0])/2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"])"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/2"))))),". We try each ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"k")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," to see if we can match all the pairs. If the size of lower array is same as that of higher array, then the answer would be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"j"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ans[j]=(l[j]+r[j])/2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"])"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/2"))))),"."),(0,s.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> recoverArray(vector<int>& nums) {\n        int n = nums.size();\n        sort(nums.begin(), nums.end());\n        for (int i = 0; i < nums.size(); i++) {\n            unordered_map<int, int> m;\n            int d = nums[i] - nums.front();\n            if (d == 0 || d & 1) {\n                continue;\n            }\n            vector<int> l, r;\n            for (int j = 0; j < n; j++) {\n                if (m.count(nums[j] - d)) {\n                    r.push_back(nums[j]);\n                    if (--m[nums[j] - d] == 0) {\n                        m.erase(nums[j] - d);\n                    }\n                } else {\n                    l.push_back(nums[j]);\n                    m[nums[j]]++;\n                }\n            }\n            if (l.size() == r.size()) {\n                vector<int> ans;\n                for (int j = 0; j < n / 2; j++) {\n                    ans.push_back((l[j] + r[j]) / 2);\n                }\n                return ans;\n            }\n        }\n        return {};\n    }\n};\n")))}u.isMDXComponent=!0}}]);