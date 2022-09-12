"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1665],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},96472:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r,a=t(87462),i=t(63366),o=(t(67294),t(3905)),u=["components"],l={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/running-sum-of-1d-array/"},s="1480 - Running Sum of 1d Array (Easy)",p={unversionedId:"1400-1499/running-sum-of-1d-array-easy",id:"1400-1499/running-sum-of-1d-array-easy",title:"1480 - Running Sum of 1d Array (Easy)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/running-sum-of-1d-array/",source:"@site/solutions/1400-1499/1480-running-sum-of-1d-array-easy.md",sourceDirName:"1400-1499",slug:"/1400-1499/running-sum-of-1d-array-easy",permalink:"/leetcode-the-hard-way/solutions/1400-1499/running-sum-of-1d-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1480-running-sum-of-1d-array-easy.md",tags:[],version:"current",sidebarPosition:1480,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/running-sum-of-1d-array/"},sidebar:"tutorialSidebar",previous:{title:"1475 - Final Prices With a Special Discount in a Shop (Easy)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy"},next:{title:"1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/average-salary-excluding-the-minimum-and-maximum-salary-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 2: Partial Sum",id:"approach-2-partial-sum",level:2},{value:"Approach 3: Iteration",id:"approach-3-iteration",level:2}],d=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1480---running-sum-of-1d-array-easy"},"1480 - Running Sum of 1d Array (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/running-sum-of-1d-array/"},"https://leetcode.com/problems/running-sum-of-1d-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". We define a running sum of an array as ",(0,o.kt)("inlineCode",{parentName:"p"},"runningSum[i] = sum(nums[0]\u2026nums[i])"),"."),(0,o.kt)("p",null,"Return the running sum of ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4]\nOutput: [1,3,6,10]\nExplanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,1,1,1,1]\nOutput: [1,2,3,4,5]\nExplanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [3,1,2,10,1]\nOutput: [3,4,6,16,17] \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^6 <= nums[i] <= 10^6"))),(0,o.kt)("h1",{id:"approach-1-prefix-sum"},"Approach 1: Prefix Sum"),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    // for full tutorial, please go to\n    // https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/prefix-sum\n    vector<int> generatePrefixSum(vector<int>& a) {\n        int n = a.size();\n        // we need a vector of size n\n        vector<int> pref(n);\n        // the first element is same as that in `a`\n        pref[0] = a[0];\n        // starting the second one, we add the prefix sum `pref[i - 1]` and the current value `a[i]`\n        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];\n        return pref;\n    }\n    \n    vector<int> runningSum(vector<int>& nums) {\n        // use the pre-defined function directly\n        return generatePrefixSum(nums);\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-2-partial-sum"},"Approach 2: Partial Sum"),(0,o.kt)("p",null,"Using C++ STL. Bbasically it does the same thing mentioned above. See ",(0,o.kt)("a",{parentName:"p",href:"https://cplusplus.com/reference/numeric/partial_sum/"},"here")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"y0 = x0\ny1 = x0 + x1\ny2 = x0 + x1 + x2\ny3 = x0 + x1 + x2 + x3\ny4 = x0 + x1 + x2 + x3 + x4\n")),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> runningSum(vector<int>& nums) {\n        // use STL directly\n        partial_sum(nums.begin(), nums.end(), nums.begin());\n        return nums;\n    }\n};\n")),(0,o.kt)("h2",{id:"approach-3-iteration"},"Approach 3: Iteration"),(0,o.kt)("p",null,"We need to define an accumulator (",(0,o.kt)("inlineCode",{parentName:"p"},"running_sum")," in this problem) to save the sum of all numbers in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". After calculating the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"running_sum"),", we put that number to our result list."),(0,o.kt)("p",null,"The trick here is that we need to add the number from ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"running_sum")," first before adding ",(0,o.kt)("inlineCode",{parentName:"p"},"running_sum")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"result"),". This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," position from ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," should include the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," number in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," ."),(0,o.kt)(d,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def runningSum(self, nums: List[int]) -> List[int]:\n        \n        #initialize the running_sum\n        running_sum = 0\n        \n        #initialize the result list\n        result = []\n        \n        #we iterage each number in nums\n        for i in range(len(nums)):\n            \n            #the current number is defined by nums[i]\n            current_number = nums[i]\n            \n            #add the current_number to running_sum\n            running_sum += current_number\n            \n            #add the running_sum to the result list\n            result.append(running_sum)\n        \n        #return result\n        return result\n")),(0,o.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> runningSum(vector<int>& nums) {\n        // we don't actually need to generate a prefix sum vector\n        // instead we can modify the value in place.\n        for(int i = 1; i < nums.size(); i++) {\n            // add the previous result to the current element.\n            nums[i] += nums[i - 1];\n        }\n        return nums;\n    }\n};\n")))}f.isMDXComponent=!0}}]);