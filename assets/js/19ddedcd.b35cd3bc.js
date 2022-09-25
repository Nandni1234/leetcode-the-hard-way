"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[12605],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(t),h=u,p=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return t?r.createElement(p,i(i({ref:n},d),{},{components:t})):r.createElement(p,i({ref:n},d))}));function h(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:u,i[1]=l;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1667:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=t(87462),u=t(63366),a=(t(67294),t(3905)),i=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/design-circular-queue/",tags:["Array","Linked List","Design","Queue"]},s="0622 - Design Circular Queue (Medium)",o={unversionedId:"0600-0699/design-circular-queue-medium",id:"0600-0699/design-circular-queue-medium",title:"0622 - Design Circular Queue (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/design-circular-queue/",source:"@site/solutions/0600-0699/0622-design-circular-queue-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/design-circular-queue-medium",permalink:"/leetcode-the-hard-way/solutions/0600-0699/design-circular-queue-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0622-design-circular-queue-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Linked List",permalink:"/leetcode-the-hard-way/solutions/tags/linked-list"},{label:"Design",permalink:"/leetcode-the-hard-way/solutions/tags/design"},{label:"Queue",permalink:"/leetcode-the-hard-way/solutions/tags/queue"}],version:"current",sidebarPosition:622,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/design-circular-queue/",tags:["Array","Linked List","Design","Queue"]},sidebar:"tutorialSidebar",previous:{title:"0609 - Find Duplicate File in System (Medium)",permalink:"/leetcode-the-hard-way/solutions/0600-0699/find-duplicate-file-in-system-medium"},next:{title:"0633 - Sum of Square Numbers (Medium)",permalink:"/leetcode-the-hard-way/solutions/0600-0699/sum-of-square-numbers-medium"}},d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Array",id:"approach-1-array",level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},h=m("Tabs"),p=m("TabItem"),f=m("SolutionAuthor"),b={toc:c};function y(e){var n=e.components,t=(0,u.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0622---design-circular-queue-medium"},"0622 - Design Circular Queue (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/design-circular-queue/"},"https://leetcode.com/problems/design-circular-queue/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,'Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".'),(0,a.kt)("p",null,"One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values."),(0,a.kt)("p",null,"Implementation the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCircularQueue")," class:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MyCircularQueue(k)")," Initializes the object with the size of the queue to be ",(0,a.kt)("inlineCode",{parentName:"li"},"k"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int Front()")," Gets the front item from the queue. If the queue is empty, return ",(0,a.kt)("inlineCode",{parentName:"li"},"-1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int Rear()")," Gets the last item from the queue. If the queue is empty, return ",(0,a.kt)("inlineCode",{parentName:"li"},"-1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean enQueue(int value)")," Inserts an element into the circular queue. Return ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if the operation is successful."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean deQueue()")," Deletes an element from the circular queue. Return ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if the operation is successful."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean isEmpty()")," Checks whether the circular queue is empty or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean isFull()")," Checks whether the circular queue is full or not.")),(0,a.kt)("p",null,"You must solve the problem without using the built-in queue data structure in your programming language."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input\n["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]\n[[3], [1], [2], [3], [4], [], [], [], [4], []]\nOutput\n[null, true, true, true, false, 3, true, true, true, 4]\n\nExplanation\nMyCircularQueue myCircularQueue = new MyCircularQueue(3);\nmyCircularQueue.enQueue(1); // return True\nmyCircularQueue.enQueue(2); // return True\nmyCircularQueue.enQueue(3); // return True\nmyCircularQueue.enQueue(4); // return False\nmyCircularQueue.Rear();     // return 3\nmyCircularQueue.isFull();   // return True\nmyCircularQueue.deQueue();  // return True\nmyCircularQueue.enQueue(4); // return True\nmyCircularQueue.Rear();     // return 4\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= k <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= value <= 1000")),(0,a.kt)("li",{parentName:"ul"},"At most ",(0,a.kt)("inlineCode",{parentName:"li"},"3000")," calls will be made to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"enQueue"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"deQueue"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Front"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Rear"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"isEmpty"),", and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"isFull"),".")),(0,a.kt)("h2",{id:"approach-1-array"},"Approach 1: Array"),(0,a.kt)(h,{mdxType:"Tabs"},(0,a.kt)(p,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass MyCircularQueue {\npublic:\n    MyCircularQueue(int k) {\n        // the queue holding the elements for the circular queue\n        q.resize(k);\n        // the number of elements in the circular queue\n        cnt = 0;\n        // queue size\n        sz = k;\n        // the idx of the head element\n        headIdx = 0;\n    }\n    \n    bool enQueue(int value) {\n        // handle full case\n        if (isFull()) return false;\n        // Given an array of size of 4, we can find the position to be inserted using the formula\n        // targetIdx = (headIdx + cnt) % sz\n        // e.g. [1, 2, 3, _]\n        // headIdx = 0, cnt = 3, sz = 4, targetIdx = (0 + 3) % 4 = 3\n        // e.g. [_, 2, 3, 4]\n        // headIdx = 1, cnt = 3, sz = 4, targetIdx = (1 + 3) % 4 = 0\n        q[(headIdx + cnt) % sz] = value;\n        // increase the number of elements by 1\n        cnt += 1;\n        return true;\n    }\n    \n    bool deQueue() {\n        // handle empty case\n        if (isEmpty()) return false;\n        // update the head index\n        headIdx = (headIdx + 1) % sz;\n        // decrease the number of elements by 1\n        cnt -= 1;\n        return true;\n    }\n    \n    int Front() {\n        // handle empty queue case\n        if (isEmpty()) return -1;\n        // return the head element\n        return q[headIdx];\n    }\n    \n    int Rear() {\n        // handle empty queue case\n        if (isEmpty()) return -1;\n        // Given an array of size of 4, we can find the tailIdx using the formula\n        // tailIdx = (headIdx + cnt - 1) % sz\n        // e.g. [0 1 2] 3\n        // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2\n        // e.g. 0 [1 2 3]\n        // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3\n        // e.g. 0] 1 [2 3\n        // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0\n        return q[(headIdx + cnt - 1) % sz];\n    }\n    \n    bool isEmpty() {\n        // no element in the queue\n        return cnt == 0;\n    }\n    \n    bool isFull() {\n        // return true if the count is equal to the queue size\n        // else return false\n        return cnt == sz;\n    }\n    \nprivate:\n    int cnt, sz, headIdx;\n    vector<int> q;\n};\n\n/**\n * Your MyCircularQueue object will be instantiated and called as such:\n * MyCircularQueue* obj = new MyCircularQueue(k);\n * bool param_1 = obj->enQueue(value);\n * bool param_2 = obj->deQueue();\n * int param_3 = obj->Front();\n * int param_4 = obj->Rear();\n * bool param_5 = obj->isEmpty();\n * bool param_6 = obj->isFull();\n */\n"))),(0,a.kt)(p,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass MyCircularQueue {\n\n    public MyCircularQueue(int k) {\n        // the queue holding the elements for the circular queue\n        q = new int[k];\n        // the number of elements in the circular queue\n        cnt = 0;\n        // queue size\n        sz = k;\n        // the idx of the head element\n        headIdx = 0;\n    }\n    \n    public boolean enQueue(int value) {\n         // handle full case\n        if (isFull()) return false;\n        // set the value \n        // Given an array of size of 4, we can find the position to be inserted using the formula\n        // targetIdx = (headIdx + cnt) % sz\n        // e.g. [1, 2, 3, _]\n        // headIdx = 0, cnt = 3, sz = 4, targetIdx = (0 + 3) % 4 = 3\n        // e.g. [_, 2, 3, 4]\n        // headIdx = 1, cnt = 3, sz = 4, targetIdx = (1 + 3) % 4 = 0\n        q[(headIdx + cnt) % sz] = value;\n        // increase the number of elements by 1\n        cnt += 1;\n        return true;\n    }\n    \n    public boolean deQueue() {\n        // handle empty case\n        if (isEmpty()) return false;\n        // update the head index\n        headIdx = (headIdx + 1) % sz;\n        // decrease the number of elements by 1\n        cnt -= 1;\n        return true;\n    }\n    \n    public int Front() {\n        // handle empty queue case\n        if (isEmpty()) return -1;\n        // return the head element\n        return q[headIdx];\n    }\n    \n    public int Rear() {\n        // handle empty queue case\n        if (isEmpty()) return -1;\n        // Given an array of size of 4, we can find the tailIdx using the formula\n        // tailIdx = (headIdx + cnt - 1) % sz\n        // e.g. [0 1 2] 3\n        // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2\n        // e.g. 0 [1 2 3]\n        // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3\n        // e.g. 0] 1 [2 3\n        // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0\n        return q[(headIdx + cnt - 1) % sz];\n    }\n    \n    public boolean isEmpty() {\n        // no element in the queue\n        return cnt == 0;\n    }\n    \n    public boolean isFull() {\n        // return true if the count is equal to the queue size\n        // else return false\n        return cnt == sz;\n    }\n    \n    private int[] q;\n    private int headIdx, cnt, sz;\n}\n\n/**\n * Your MyCircularQueue object will be instantiated and called as such:\n * MyCircularQueue obj = new MyCircularQueue(k);\n * boolean param_1 = obj.enQueue(value);\n * boolean param_2 = obj.deQueue();\n * int param_3 = obj.Front();\n * int param_4 = obj.Rear();\n * boolean param_5 = obj.isEmpty();\n * boolean param_6 = obj.isFull();\n */\n"))),(0,a.kt)(p,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Time Complexity: O(N)\n# Space Complexity: O(1)\nclass MyCircularQueue:\n\n    def __init__(self, k: int):\n        # the queue holding the elements for the circular queue\n        self.q = [0] * k\n        # the number of elements in the circular queue\n        self.cnt = 0\n        # queue size\n        self.sz = k\n        # the idx of the head element\n        self.headIdx = 0\n        \n\n    def enQueue(self, value: int) -> bool:\n        # handle full case\n        if self.isFull(): return False\n        # Given an array of size of 4, we can find the position to be inserted using the formula\n        # targetIdx = (headIdx + cnt) % sz\n        # e.g. [1, 2, 3, _]\n        # headIdx = 0, cnt = 3, sz = 4, targetIdx = (0 + 3) % 4 = 3\n        # e.g. [_, 2, 3, 4]\n        # headIdx = 1, cnt = 3, sz = 4, targetIdx = (1 + 3) % 4 = 0\n        self.q[(self.headIdx + self.cnt) % self.sz] = value\n        # increase the number of elements by 1\n        self.cnt += 1\n        return True\n\n    def deQueue(self) -> bool:\n        # handle empty case\n        if self.isEmpty(): return False\n        # update the head index\n        self.headIdx = (self.headIdx + 1) % self.sz\n        # decrease the number of elements by 1\n        self.cnt -= 1\n        return True\n\n    def Front(self) -> int:\n        # handle empty queue case\n        if self.isEmpty(): return -1\n        # return the head element\n        return self.q[self.headIdx]\n        \n    def Rear(self) -> int:\n        # handle empty queue case\n        if self.isEmpty(): return -1\n        # Given an array of size of 4, we can find the tail using the formula\n        # tailIdx = (headIdx + cnt - 1) % sz\n        # e.g. [0 1 2] 3\n        # headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2\n        # e.g. 0 [1 2 3]\n        # headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3\n        # e.g. 0] 1 [2 3\n        # headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0\n        return self.q[(self.headIdx + self.cnt - 1) % self.sz]\n\n    def isEmpty(self) -> bool:\n        # no element in the queue\n        return self.cnt == 0\n\n    def isFull(self) -> bool:\n        # return True if the count is equal to the queue size\n        # else return False\n        return self.cnt == self.sz\n\n\n# Your MyCircularQueue object will be instantiated and called as such:\n# obj = MyCircularQueue(k)\n# param_1 = obj.enQueue(value)\n# param_2 = obj.deQueue()\n# param_3 = obj.Front()\n# param_4 = obj.Rear()\n# param_5 = obj.isEmpty()\n# param_6 = obj.isFull()\n"))),(0,a.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass MyCircularQueue {\n    private q: number[]\n    private cnt: number\n    private sz: number\n    private headIdx: number\n\n    constructor(k: number) {\n        // the queue holding the elements for the circular queue\n        this.q = []\n        // the number of elements in the circular queue\n        this.cnt = 0\n        // queue size\n        this.sz = k\n        // the idx of the head element\n        this.headIdx = 0\n    }\n\n    enQueue(value: number): boolean {\n        // handle full case\n        if (this.isFull()) return false\n        // set the value \n        this.q[(this.headIdx + this.cnt) % this.sz] = value\n        // increase the number of elements by 1\n        this.cnt += 1\n        return true\n    }\n\n    deQueue(): boolean {\n        // handle empty case\n        if (this.isEmpty()) return false\n        // update the head index\n        this.headIdx = (this.headIdx + 1) % this.sz\n        // decrease the number of elements by 1\n        this.cnt -= 1\n        return true\n    }\n\n    Front(): number {\n        // handle empty queue case\n        if (this.isEmpty()) return -1\n        // return the head element\n        return this.q[this.headIdx]\n    }\n\n    Rear(): number {\n        // handle empty queue case\n        if (this.isEmpty()) return -1\n        // Given an array of size of 4, we can find the tail using the formula\n        // tailIdx = (headIdx + cnt - 1) % sz\n        // e.g. [0 1 2] 3\n        // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2\n        // e.g. 0 [1 2 3]\n        // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3\n        // e.g. 0] 1 [2 3\n        // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0\n        return this.q[(this.headIdx + this.cnt - 1) % this.sz]\n    }\n\n    isEmpty(): boolean {\n        // no element in the queue\n        return this.cnt == 0\n    }\n\n    isFull(): boolean {\n        // return true if the count is equal to the queue size\n        // else return false\n        return this.cnt == this.sz\n    }    \n}\n\n/**\n * Your MyCircularQueue object will be instantiated and called as such:\n * var obj = new MyCircularQueue(k)\n * var param_1 = obj.enQueue(value)\n * var param_2 = obj.deQueue()\n * var param_3 = obj.Front()\n * var param_4 = obj.Rear()\n * var param_5 = obj.isEmpty()\n * var param_6 = obj.isFull()\n */\n"))),(0,a.kt)(p,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Time Complexity: O(N)\n// Space Complexity: O(1)\n\ntype MyCircularQueue struct {\n    q []int\n    cnt, sz, headIdx int\n}\n\n\nfunc Constructor(k int) MyCircularQueue {\n    return MyCircularQueue {\n        // the queue holding the elements for the circular queue\n        q: make([]int, k),\n        // the number of elements in the circular queue\n        cnt: 0,\n        // queue size\n        sz: k,\n        // the idx of the head element\n        headIdx: 0,\n    }\n}\n\n\nfunc (this *MyCircularQueue) EnQueue(value int) bool {\n     // handle full case\n    if this.IsFull() {\n        return false\n    }\n     // set the value \n    this.q[(this.headIdx + this.cnt) % this.sz] = value\n    // increase the number of elements by 1\n    this.cnt += 1\n    return true\n}\n\n\nfunc (this *MyCircularQueue) DeQueue() bool {\n    // handle empty case\n    if this.IsEmpty() {\n        return false\n    }\n    // update the head index\n    this.headIdx = (this.headIdx + 1) % this.sz\n    // decrease the number of elements by 1\n    this.cnt -= 1\n    return true\n}\n\n\nfunc (this *MyCircularQueue) Front() int {\n    // handle empty queue case\n    if this.IsEmpty() {\n        return -1\n    }\n    // return the head element\n    return this.q[this.headIdx]\n}\n\n\nfunc (this *MyCircularQueue) Rear() int {\n    // handle empty queue case\n    if this.IsEmpty() {\n        return -1\n    }\n    // Given an array of size of 4, we can find the tail using the formula\n    // tailIdx = (headIdx + cnt - 1) % sz\n    // e.g. [0 1 2] 3\n    // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2\n    // e.g. 0 [1 2 3]\n    // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3\n    // e.g. 0] 1 [2 3\n    // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0\n    return this.q[(this.headIdx + this.cnt - 1) % this.sz]\n}\n\n\nfunc (this *MyCircularQueue) IsEmpty() bool {\n    // no element in the queue\n    return this.cnt == 0\n}\n\n\nfunc (this *MyCircularQueue) IsFull() bool {\n    // return true if the count is equal to the queue size\n    // else return false\n    return this.cnt == this.sz\n}\n\n\n/**\n * Your MyCircularQueue object will be instantiated and called as such:\n * obj := Constructor(k);\n * param_1 := obj.EnQueue(value);\n * param_2 := obj.DeQueue();\n * param_3 := obj.Front();\n * param_4 := obj.Rear();\n * param_5 := obj.IsEmpty();\n * param_6 := obj.IsFull();\n */\n")))))}y.isMDXComponent=!0}}]);