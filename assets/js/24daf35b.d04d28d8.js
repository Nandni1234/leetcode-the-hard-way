"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6295],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,h=c["".concat(u,".").concat(d)]||c[d]||s[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/two-sum/",tags:["Array","Hash Table"]},u="0001 - Two Sum (Easy)",m={unversionedId:"0000-0099/two-sum",id:"0000-0099/two-sum",title:"0001 - Two Sum (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/two-sum/",source:"@site/solutions/0000-0099/0001-two-sum.md",sourceDirName:"0000-0099",slug:"/0000-0099/two-sum",permalink:"/leetcode-the-hard-way/solutions/0000-0099/two-sum",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0001-two-sum.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Hash Table",permalink:"/leetcode-the-hard-way/solutions/tags/hash-table"}],version:"current",sidebarPosition:1,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/two-sum/",tags:["Array","Hash Table"]},sidebar:"tutorialSidebar",previous:{title:"0000 - 0099",permalink:"/leetcode-the-hard-way/solutions/category/0000---0099"},next:{title:"0003 - Longest Substring Without Repeating Characters (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/longest-substring-without-repeating-characters-medium"}},p={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2},{value:"Approach 2: Hash Table",id:"approach-2-hash-table",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},d=c("Tabs"),h=c("TabItem"),g=c("SolutionAuthor"),k={toc:s};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0001---two-sum-easy"},"0001 - Two Sum (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-sum/"},"https://leetcode.com/problems/two-sum/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,o.kt)("em",{parentName:"p"},"indices of the two numbers such that they add up to ",(0,o.kt)("inlineCode",{parentName:"em"},"target")),"."),(0,o.kt)("p",null,"You may assume that each input would have ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"exactly")),(0,o.kt)("strong",{parentName:"p"}," one solution"),", and you may not use the ",(0,o.kt)("em",{parentName:"p"},"same")," element twice."),(0,o.kt)("p",null,"You can return the answer in any order."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [3,2,4], target = 6\nOutput: [1,2]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [3,3], target = 6\nOutput: [0,1]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= nums.length <= 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^9 <= nums[i] <= 10^9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^9 <= target <= 10^9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Only one valid answer exists."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow-up:")," Can you come up with an algorithm that is less than ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n^2)")," time complexity?"),(0,o.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,o.kt)("p",null,"Since this is an easy problem, most of the time brute force solutions would work due to the loose constraints. However, this solution gives O(n^2) time complexity and O(1) space complexity."),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        int n = (int) nums.size();\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = i + 1; j < n; j++) {\n                if (nums[i] + nums[j] == target) {\n                    return {i, j};\n                }\n            }\n        }\n        return {-1, -1};\n    }\n};\n"))),(0,o.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        n = len(nums)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if nums[i] + nums[j] == target:\n                    return [i, j]\n        return [-1, -1]\n"))),(0,o.kt)(h,{value:"go",label:"Go",mdxType:"TabItem"},(0,o.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func twoSum(nums []int, target int) []int {\n    n := len(nums)\n    for i := 0; i < n; i++ {\n        for j := i + 1; j < n; j++ {\n            if nums[i] + nums[j] == target {\n                return []int{i, j}\n            }\n        }\n    }\n    return []int{-1, -1}\n}\n")))),(0,o.kt)("h2",{id:"approach-2-hash-table"},"Approach 2: Hash Table"),(0,o.kt)("p",null,"A better way to do it is using one-pass hash table approach. We iterate each element and insert it into the hash table. We also check if the complement already exists in the hash table or not. If so, we can return the answer immediately. This solution gives O(n) time complexity and O(n) space complexity."),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        int n = (int) nums.size();\n        unordered_map<int, int> m;\n        for (int i = 0; i < n; i++) {\n            int complement = target - nums[i];\n            if (m.count(complement)) {\n                return {i, m[complement]};\n            }\n            m[nums[i]] = i;\n        }\n        return {-1, -1};\n    }\n};\n"))),(0,o.kt)(h,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        n = len(nums)\n        d = {}\n        for i in range(n):\n            complement = target - nums[i]\n            if complement in d:\n                return [i, d[complement]]\n            d[nums[i]] = i\n        return [-1, -1]\n"))),(0,o.kt)(h,{value:"go",label:"Go",mdxType:"TabItem"},(0,o.kt)(g,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func twoSum(nums []int, target int) []int {\n    n := len(nums)\n    m := make(map[int]int)\n    for i := 0; i < n; i++ {\n        if j, ok := m[target - nums[i]]; ok {\n            return []int{i, j}\n        }\n        m[nums[i]] = i\n    }\n    return []int{-1, -1}\n}\n")))))}y.isMDXComponent=!0}}]);