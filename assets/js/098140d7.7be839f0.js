"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5825],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r,a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/graph-valid-tree/",tags:["DSU","Graph","DFS","BFS"]},s="0261 - Graph Valid Tree (Medium)",u={unversionedId:"0200-0299/graph-valid-tree-medium",id:"0200-0299/graph-valid-tree-medium",title:"0261 - Graph Valid Tree (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/graph-valid-tree/",source:"@site/solutions/0200-0299/0261-graph-valid-tree-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/graph-valid-tree-medium",permalink:"/leetcode-the-hard-way/solutions/0200-0299/graph-valid-tree-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0261-graph-valid-tree-medium.md",tags:[{label:"DSU",permalink:"/leetcode-the-hard-way/solutions/tags/dsu"},{label:"Graph",permalink:"/leetcode-the-hard-way/solutions/tags/graph"},{label:"DFS",permalink:"/leetcode-the-hard-way/solutions/tags/dfs"},{label:"BFS",permalink:"/leetcode-the-hard-way/solutions/tags/bfs"}],version:"current",sidebarPosition:261,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/graph-valid-tree/",tags:["DSU","Graph","DFS","BFS"]},sidebar:"tutorialSidebar",previous:{title:"0258 - Add Digits (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/add-digits-easy"},next:{title:"0268 - Missing Number (Easy)",permalink:"/leetcode-the-hard-way/solutions/0200-0299/missing-number-easy"}},d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DSU",id:"approach-1-dsu",level:2}],m=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0261---graph-valid-tree-medium"},"0261 - Graph Valid Tree (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/graph-valid-tree/"},"https://leetcode.com/problems/graph-valid-tree/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You have a graph of ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," nodes labeled from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"n - 1"),". You are given an integer n and a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"edges")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"edges[i] = [ai, bi]")," indicates that there is an undirected edge between nodes ",(0,o.kt)("inlineCode",{parentName:"p"},"ai")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bi")," in the graph."),(0,o.kt)("p",null,"Return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," ",(0,o.kt)("em",{parentName:"p"},"if the edges of the given graph make up a valid tree, and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," ",(0,o.kt)("em",{parentName:"p"},"otherwise"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/03/12/tree1-graph.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]\nOutput: true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/03/12/tree2-graph.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]\nOutput: false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 2000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= edges.length <= 5000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"edges[i].length == 2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= ai, bi < n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ai != bi")),(0,o.kt)("li",{parentName:"ul"},"There are no self-loops or repeated edges.")),(0,o.kt)("h2",{id:"approach-1-dsu"},"Approach 1: DSU"),(0,o.kt)("p",null,"If a graph is a valid tree, it must have exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"n - 1")," edges. Besides, it cannot be fully connected and contain any cycles. Therefore, we just need check if there are n - 1 edges and any cycles. We can use DSU to check if element A and element B share the same parent. If so, it means that they are united, a cycle wound be there. Hence, we can return false immediately as a valid tree cannot have a  cycle. Otherwise, we unite both element. If there is no cycle after iterating all elements, then we can simply check if there are ",(0,o.kt)("inlineCode",{parentName:"p"},"n - 1")," edges. There are other ways such as DFS and BFS to solve it."),(0,o.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class dsu {\n public:\n  vector<int> root, rank;\n  int n;\n  int cnt;\n\n  dsu(int _n) : n(_n) {\n    root.resize(n);\n    rank.resize(n);\n    for(int i = 0; i < n; i++) {\n        root[i] = i;\n        rank[i] = 1;\n    }\n    cnt = n;\n  }\n\n  inline int getCount() { return cnt; }\n\n  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }\n\n  inline bool unite(int x, int y) {\n    x = get(x);\n    y = get(y);\n    if (x != y) {\n        if (rank[x] > rank[y]) {\n            root[y] = x;\n        } else if (rank[x] < rank[y]) {\n            root[x] = y;\n        } else {\n            root[y] = x;\n            rank[x] += 1;\n        }\n        cnt--;\n      return true;\n    }\n    return false;\n  }\n};\n\nclass Solution {\npublic:\n    bool validTree(int n, vector<vector<int>>& edges) {\n        dsu d(n);\n        for (auto x : edges) {\n            if (!d.unite(x[0], x[1])) {\n                return false;\n            }\n        }\n        return (int) edges.size() == n - 1;\n    }\n};\n")))}g.isMDXComponent=!0}}]);