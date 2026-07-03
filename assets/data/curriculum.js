/* ============================================================
   DSA Mastery - Curriculum Data
   Central data store for topics, phases, and search index
   ============================================================ */

const DSA_CURRICULUM = {
  phases: [
    {
      id: 'phase1',
      name: 'Phase 1',
      title: 'Programming Foundations',
      description: 'Build a strong base with variables, loops, functions, recursion, and complexity analysis.',
      topics: [
        { id: 'variables', title: 'Variables & Data Types', file: 'variables.html', difficulty: 'easy' },
        { id: 'loops', title: 'Loops & Iteration', file: 'loops.html', difficulty: 'easy' },
        { id: 'functions', title: 'Functions', file: 'functions.html', difficulty: 'easy' },
        { id: 'recursion', title: 'Recursion', file: 'recursion.html', difficulty: 'medium' },
        { id: 'complexity', title: 'Time & Space Complexity', file: 'complexity.html', difficulty: 'easy' }
      ]
    },
    {
      id: 'phase2',
      name: 'Phase 2',
      title: 'Arrays & Hashing',
      description: 'Master the most fundamental data structure and hash-based techniques.',
      topics: [
        { id: 'arrays', title: 'Arrays', file: 'arrays.html', difficulty: 'easy' },
        { id: 'strings', title: 'Strings', file: 'strings.html', difficulty: 'easy' },
        { id: 'matrix', title: 'Matrix (2D Arrays)', file: 'matrix.html', difficulty: 'medium' },
        { id: 'prefix-sum', title: 'Prefix Sum', file: 'prefix-sum.html', difficulty: 'medium' },
        { id: 'difference-array', title: 'Difference Array', file: 'difference-array.html', difficulty: 'medium' },
        { id: 'hashing', title: 'Hashing & HashMaps', file: 'hashing.html', difficulty: 'easy' },
        { id: 'frequency-array', title: 'Frequency Array', file: 'frequency-array.html', difficulty: 'easy' }
      ]
    },
    {
      id: 'phase3',
      name: 'Phase 3',
      title: 'Searching',
      description: 'Learn to search efficiently using linear and binary search techniques.',
      topics: [
        { id: 'linear-search', title: 'Linear Search', file: 'linear-search.html', difficulty: 'easy' },
        { id: 'binary-search', title: 'Binary Search', file: 'binary-search.html', difficulty: 'medium' },
        { id: 'binary-search-on-answer', title: 'Binary Search on Answer', file: 'binary-search-answer.html', difficulty: 'hard' },
        { id: 'lower-upper-bound', title: 'Lower & Upper Bound', file: 'lower-upper-bound.html', difficulty: 'medium' }
      ]
    },
    {
      id: 'phase4',
      name: 'Phase 4',
      title: 'Sorting',
      description: 'Understand every major sorting algorithm, from simple to advanced.',
      topics: [
        { id: 'bubble-sort', title: 'Bubble Sort', file: 'bubble-sort.html', difficulty: 'easy' },
        { id: 'selection-sort', title: 'Selection Sort', file: 'selection-sort.html', difficulty: 'easy' },
        { id: 'insertion-sort', title: 'Insertion Sort', file: 'insertion-sort.html', difficulty: 'easy' },
        { id: 'merge-sort', title: 'Merge Sort', file: 'merge-sort.html', difficulty: 'medium' },
        { id: 'quick-sort', title: 'Quick Sort', file: 'quick-sort.html', difficulty: 'medium' },
        { id: 'heap-sort', title: 'Heap Sort', file: 'heap-sort.html', difficulty: 'medium' },
        { id: 'counting-sort', title: 'Counting Sort', file: 'counting-sort.html', difficulty: 'medium' },
        { id: 'radix-sort', title: 'Radix Sort', file: 'radix-sort.html', difficulty: 'medium' },
        { id: 'bucket-sort', title: 'Bucket Sort', file: 'bucket-sort.html', difficulty: 'medium' }
      ]
    },
    {
      id: 'phase5',
      name: 'Phase 5',
      title: 'Two Pointers & Sliding Window',
      description: 'Powerful pointer techniques for optimizing array and string problems.',
      topics: [
        { id: 'two-pointers', title: 'Two Pointers', file: 'two-pointers.html', difficulty: 'medium' },
        { id: 'sliding-window', title: 'Sliding Window', file: 'sliding-window.html', difficulty: 'medium' },
        { id: 'fast-slow-pointer', title: 'Fast & Slow Pointer', file: 'fast-slow-pointer.html', difficulty: 'medium' }
      ]
    },
    {
      id: 'phase6',
      name: 'Phase 6',
      title: 'Linked Lists',
      description: 'Learn dynamic data structures with pointer-based node linking.',
      topics: [
        { id: 'singly-linked-list', title: 'Singly Linked List', file: 'singly-linked-list.html', difficulty: 'medium' },
        { id: 'doubly-linked-list', title: 'Doubly Linked List', file: 'doubly-linked-list.html', difficulty: 'medium' },
        { id: 'circular-linked-list', title: 'Circular Linked List', file: 'circular-linked-list.html', difficulty: 'medium' },
        { id: 'linked-list-cycle', title: 'Cycle Detection', file: 'linked-list-cycle.html', difficulty: 'medium' },
        { id: 'merge-linked-lists', title: 'Merge Linked Lists', file: 'merge-linked-lists.html', difficulty: 'medium' },
        { id: 'reverse-linked-list', title: 'Reverse Linked List', file: 'reverse-linked-list.html', difficulty: 'medium' }
      ]
    },
    {
      id: 'phase7',
      name: 'Phase 7',
      title: 'Stack',
      description: 'Master the LIFO data structure and its powerful applications.',
      topics: [
        { id: 'stack', title: 'Stack Fundamentals', file: 'stack.html', difficulty: 'easy' },
        { id: 'monotonic-stack', title: 'Monotonic Stack', file: 'monotonic-stack.html', difficulty: 'hard' },
        { id: 'expression-conversion', title: 'Expression Conversion', file: 'expression-conversion.html', difficulty: 'medium' },
        { id: 'balanced-parentheses', title: 'Balanced Parentheses', file: 'balanced-parentheses.html', difficulty: 'easy' },
        { id: 'next-greater-element', title: 'Next Greater Element', file: 'next-greater-element.html', difficulty: 'medium' }
      ]
    },
    {
      id: 'phase8',
      name: 'Phase 8',
      title: 'Queue',
      description: 'FIFO data structure and its advanced variants.',
      topics: [
        { id: 'queue', title: 'Queue Fundamentals', file: 'queue.html', difficulty: 'easy' },
        { id: 'deque', title: 'Double-ended Queue', file: 'deque.html', difficulty: 'medium' },
        { id: 'priority-queue', title: 'Priority Queue', file: 'priority-queue.html', difficulty: 'medium' },
        { id: 'monotonic-queue', title: 'Monotonic Queue', file: 'monotonic-queue.html', difficulty: 'hard' }
      ]
    },
    {
      id: 'phase9',
      name: 'Phase 9',
      title: 'Trees',
      description: 'Hierarchical data structures from binary trees to advanced variants.',
      topics: [
        { id: 'binary-tree', title: 'Binary Tree', file: 'binary-tree.html', difficulty: 'medium' },
        { id: 'tree-traversal', title: 'Tree Traversal', file: 'tree-traversal.html', difficulty: 'medium' },
        { id: 'bst', title: 'Binary Search Tree', file: 'bst.html', difficulty: 'medium' },
        { id: 'avl-tree', title: 'AVL Tree', file: 'avl-tree.html', difficulty: 'hard' },
        { id: 'heap', title: 'Heap / Priority Queue', file: 'heap.html', difficulty: 'medium' },
        { id: 'trie', title: 'Trie', file: 'trie.html', difficulty: 'medium' },
        { id: 'segment-tree', title: 'Segment Tree', file: 'segment-tree.html', difficulty: 'hard' },
        { id: 'fenwick-tree', title: 'Fenwick Tree (BIT)', file: 'fenwick-tree.html', difficulty: 'hard' },
        { id: 'lca', title: 'Lowest Common Ancestor', file: 'lca.html', difficulty: 'hard' }
      ]
    },
    {
      id: 'phase10',
      name: 'Phase 10',
      title: 'Graphs',
      description: 'Model real-world networks with graph algorithms.',
      topics: [
        { id: 'graph-basics', title: 'Graph Basics', file: 'graph-basics.html', difficulty: 'medium' },
        { id: 'dfs', title: 'Depth-First Search', file: 'dfs.html', difficulty: 'medium' },
        { id: 'bfs', title: 'Breadth-First Search', file: 'bfs.html', difficulty: 'medium' },
        { id: 'topological-sort', title: 'Topological Sort', file: 'topological-sort.html', difficulty: 'medium' },
        { id: 'dijkstra', title: "Dijkstra's Algorithm", file: 'dijkstra.html', difficulty: 'medium' },
        { id: 'bellman-ford', title: 'Bellman-Ford', file: 'bellman-ford.html', difficulty: 'hard' },
        { id: 'floyd-warshall', title: 'Floyd-Warshall', file: 'floyd-warshall.html', difficulty: 'hard' },
        { id: 'mst', title: 'Minimum Spanning Tree', file: 'mst.html', difficulty: 'medium' },
        { id: 'union-find', title: 'Union Find / Disjoint Set', file: 'union-find.html', difficulty: 'medium' }
      ]
    },
    {
      id: 'phase11',
      name: 'Phase 11',
      title: 'Greedy Algorithms',
      description: 'Make locally optimal choices for globally optimal solutions.',
      topics: [
        { id: 'greedy-intro', title: 'Greedy Fundamentals', file: 'greedy-intro.html', difficulty: 'medium' },
        { id: 'interval-scheduling', title: 'Interval Scheduling', file: 'interval-scheduling.html', difficulty: 'medium' },
        { id: 'activity-selection', title: 'Activity Selection', file: 'activity-selection.html', difficulty: 'medium' },
        { id: 'huffman-coding', title: 'Huffman Coding', file: 'huffman-coding.html', difficulty: 'hard' }
      ]
    },
    {
      id: 'phase12',
      name: 'Phase 12',
      title: 'Dynamic Programming',
      description: 'Break complex problems into overlapping subproblems.',
      topics: [
        { id: 'dp-intro', title: 'DP Introduction', file: 'dp-intro.html', difficulty: 'medium' },
        { id: 'memoization', title: 'Memoization (Top-Down)', file: 'memoization.html', difficulty: 'medium' },
        { id: 'tabulation', title: 'Tabulation (Bottom-Up)', file: 'tabulation.html', difficulty: 'medium' },
        { id: 'knapsack', title: '0/1 Knapsack', file: 'knapsack.html', difficulty: 'medium' },
        { id: 'lcs', title: 'Longest Common Subsequence', file: 'lcs.html', difficulty: 'medium' },
        { id: 'lis', title: 'Longest Increasing Subsequence', file: 'lis.html', difficulty: 'medium' },
        { id: 'grid-dp', title: 'Grid DP', file: 'grid-dp.html', difficulty: 'medium' },
        { id: 'tree-dp', title: 'Tree DP', file: 'tree-dp.html', difficulty: 'hard' },
        { id: 'bitmask-dp', title: 'Bitmask DP', file: 'bitmask-dp.html', difficulty: 'hard' },
        { id: 'digit-dp', title: 'Digit DP', file: 'digit-dp.html', difficulty: 'hard' }
      ]
    },
    {
      id: 'phase13',
      name: 'Phase 13',
      title: 'Backtracking',
      description: 'Explore all possibilities systematically to find solutions.',
      topics: [
        { id: 'backtracking-intro', title: 'Backtracking Fundamentals', file: 'backtracking-intro.html', difficulty: 'medium' },
        { id: 'permutations', title: 'Permutations', file: 'permutations.html', difficulty: 'medium' },
        { id: 'combinations', title: 'Combinations', file: 'combinations.html', difficulty: 'medium' },
        { id: 'subsets', title: 'Subsets', file: 'subsets.html', difficulty: 'medium' },
        { id: 'n-queens', title: 'N-Queens Problem', file: 'n-queens.html', difficulty: 'hard' },
        { id: 'sudoku-solver', title: 'Sudoku Solver', file: 'sudoku-solver.html', difficulty: 'hard' }
      ]
    },
    {
      id: 'phase14',
      name: 'Phase 14',
      title: 'Bit Manipulation',
      description: 'Use binary operations for elegant and efficient solutions.',
      topics: [
        { id: 'bit-basics', title: 'Bit Manipulation Basics', file: 'bit-basics.html', difficulty: 'medium' },
        { id: 'bitmask', title: 'Bitmask Techniques', file: 'bitmask.html', difficulty: 'medium' },
        { id: 'xor-tricks', title: 'XOR Tricks', file: 'xor-tricks.html', difficulty: 'medium' },
        { id: 'bit-shifts', title: 'Bit Shifts & Operations', file: 'bit-shifts.html', difficulty: 'medium' }
      ]
    },
    {
      id: 'phase15',
      name: 'Phase 15',
      title: 'Advanced Topics',
      description: 'Competitive programming and advanced algorithmic techniques.',
      topics: [
        { id: 'segment-tree-adv', title: 'Segment Tree & Lazy Propagation', file: 'segment-tree-adv.html', difficulty: 'hard' },
        { id: 'sparse-table', title: 'Sparse Table', file: 'sparse-table.html', difficulty: 'hard' },
        { id: 'binary-lifting', title: 'Binary Lifting', file: 'binary-lifting.html', difficulty: 'hard' },
        { id: 'hld', title: 'Heavy-Light Decomposition', file: 'hld.html', difficulty: 'hard' },
        { id: 'suffix-array', title: 'Suffix Array', file: 'suffix-array.html', difficulty: 'hard' },
        { id: 'kmp', title: 'KMP Algorithm', file: 'kmp.html', difficulty: 'hard' },
        { id: 'rabin-karp', title: 'Rabin-Karp', file: 'rabin-karp.html', difficulty: 'hard' },
        { id: 'z-algorithm', title: 'Z Algorithm', file: 'z-algorithm.html', difficulty: 'hard' },
        { id: 'aho-corasick', title: 'Aho-Corasick', file: 'aho-corasick.html', difficulty: 'hard' },
        { id: 'rolling-hash', title: 'Rolling Hash', file: 'rolling-hash.html', difficulty: 'hard' },
        { id: 'convex-hull', title: 'Convex Hull', file: 'convex-hull.html', difficulty: 'hard' }
      ]
    }
  ],

  specialPages: [
    { id: 'patterns', title: 'Pattern Recognition', file: '../patterns/index.html', icon: '🎯' },
    { id: 'cheatsheets', title: 'Cheat Sheets', file: '../cheatsheets/index.html', icon: '📋' },
    { id: 'challenges', title: '150-Day Challenge', file: '../challenges/index.html', icon: '🏆' },
    { id: 'tips', title: 'Tips & Tricks', file: '../tips/index.html', icon: '💡' }
  ]
};

// Build a flat search index from all topics
const SEARCH_INDEX = [];

DSA_CURRICULUM.phases.forEach(phase => {
  phase.topics.forEach(topic => {
    SEARCH_INDEX.push({
      title: topic.title,
      category: phase.title,
      phase: phase.name,
      url: `topics/${topic.file}`,
      id: topic.id,
      difficulty: topic.difficulty
    });
  });
});

// Add special pages to search
DSA_CURRICULUM.specialPages.forEach(page => {
  SEARCH_INDEX.push({
    title: page.title,
    category: 'Resources',
    phase: '',
    url: page.file.replace('../', ''),
    id: page.id,
    difficulty: ''
  });
});

// Additional search keywords
const SEARCH_KEYWORDS = [
  { term: 'Big O', topicId: 'complexity' },
  { term: 'O(n)', topicId: 'complexity' },
  { term: 'O(log n)', topicId: 'complexity' },
  { term: 'O(n^2)', topicId: 'complexity' },
  { term: 'HashMap', topicId: 'hashing' },
  { term: 'Hash Table', topicId: 'hashing' },
  { term: 'Dictionary', topicId: 'hashing' },
  { term: 'Fibonacci', topicId: 'recursion' },
  { term: 'Tower of Hanoi', topicId: 'recursion' },
  { term: 'Tree Traversal', topicId: 'tree-traversal' },
  { term: 'Inorder', topicId: 'tree-traversal' },
  { term: 'Preorder', topicId: 'tree-traversal' },
  { term: 'Postorder', topicId: 'tree-traversal' },
  { term: 'BFS', topicId: 'bfs' },
  { term: 'DFS', topicId: 'dfs' },
  { term: 'Dynamic Programming', topicId: 'dp-intro' },
  { term: 'Memoization', topicId: 'memoization' },
  { term: 'Tabulation', topicId: 'tabulation' },
  { term: 'Two Sum', topicId: 'hashing' },
  { term: 'Cycle Detection', topicId: 'linked-list-cycle' },
  { term: "Floyd's Algorithm", topicId: 'linked-list-cycle' },
  { term: 'Kadane', topicId: 'arrays' },
  { term: 'MST', topicId: 'mst' },
  { term: "Kruskal's", topicId: 'mst' },
  { term: "Prim's", topicId: 'mst' },
  { term: 'Shortest Path', topicId: 'dijkstra' }
];

// 150-Day Challenge data
const CHALLENGE_DATA = [
  { day: 1, topic: 'Variables & Data Types', theory: 'Primitive types, reference types', problems: [
    { name: 'Running Sum of 1d Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/running-sum-of-1d-array/' },
    { name: 'Richest Customer Wealth', difficulty: 'Easy', link: 'https://leetcode.com/problems/richest-customer-wealth/' },
    { name: 'Number of Good Pairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/number-of-good-pairs/' }
  ]},
  { day: 2, topic: 'Loops & Iteration', theory: 'For loops, while loops, nested loops', problems: [
    { name: 'Fizz Buzz', difficulty: 'Easy', link: 'https://leetcode.com/problems/fizz-buzz/' },
    { name: 'Count Odd Numbers in Range', difficulty: 'Easy', link: 'https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/' },
    { name: 'Palindrome Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/palindrome-number/' }
  ]},
  { day: 3, topic: 'Functions', theory: 'Function declaration, parameters, return values', problems: [
    { name: 'Add Two Integers', difficulty: 'Easy', link: 'https://leetcode.com/problems/add-two-integers/' },
    { name: 'Subtract Product and Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/' },
    { name: 'Maximum Count of Positive/Negative', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/' }
  ]},
  { day: 4, topic: 'Recursion Basics', theory: 'Base case, recursive case, call stack', problems: [
    { name: 'Power of Two', difficulty: 'Easy', link: 'https://leetcode.com/problems/power-of-two/' },
    { name: 'Fibonacci Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/fibonacci-number/' },
    { name: 'Power of Three', difficulty: 'Easy', link: 'https://leetcode.com/problems/power-of-three/' }
  ]},
  { day: 5, topic: 'Time Complexity', theory: 'Big O notation, common complexities', problems: [
    { name: 'Contains Duplicate', difficulty: 'Easy', link: 'https://leetcode.com/problems/contains-duplicate/' },
    { name: 'Single Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/single-number/' },
    { name: 'Missing Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/missing-number/' }
  ]},
  { day: 6, topic: 'Arrays - Basics', theory: 'Declaration, traversal, basic operations', problems: [
    { name: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
    { name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
    { name: 'Maximum Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-subarray/' }
  ]},
  { day: 7, topic: 'Arrays - Intermediate', theory: 'Rotation, rearrangement, in-place operations', problems: [
    { name: 'Rotate Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-array/' },
    { name: 'Move Zeroes', difficulty: 'Easy', link: 'https://leetcode.com/problems/move-zeroes/' },
    { name: 'Product of Array Except Self', difficulty: 'Medium', link: 'https://leetcode.com/problems/product-of-array-except-self/' },
    { name: 'First Missing Positive', difficulty: 'Hard', link: 'https://leetcode.com/problems/first-missing-positive/' }
  ]},
  { day: 8, topic: 'Strings - Basics', theory: 'String manipulation, comparison, iteration', problems: [
    { name: 'Valid Anagram', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-anagram/' },
    { name: 'Valid Palindrome', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-palindrome/' },
    { name: 'Longest Common Prefix', difficulty: 'Easy', link: 'https://leetcode.com/problems/longest-common-prefix/' }
  ]},
  { day: 9, topic: 'Strings - Intermediate', theory: 'Substrings, pattern matching basics', problems: [
    { name: 'Reverse Words in a String', difficulty: 'Medium', link: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
    { name: 'String to Integer (atoi)', difficulty: 'Medium', link: 'https://leetcode.com/problems/string-to-integer-atoi/' },
    { name: 'Longest Palindromic Substring', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-palindromic-substring/' }
  ]},
  { day: 10, topic: 'Hashing', theory: 'Hash functions, collision handling, HashMap/HashSet', problems: [
    { name: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
    { name: 'Group Anagrams', difficulty: 'Medium', link: 'https://leetcode.com/problems/group-anagrams/' },
    { name: 'Top K Frequent Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
    { name: 'Longest Consecutive Sequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-consecutive-sequence/' }
  ]},
  { day: 11, topic: 'Prefix Sum', theory: 'Prefix sum array, range queries', problems: [
    { name: 'Range Sum Query - Immutable', difficulty: 'Easy', link: 'https://leetcode.com/problems/range-sum-query-immutable/' },
    { name: 'Subarray Sum Equals K', difficulty: 'Medium', link: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
    { name: 'Contiguous Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/contiguous-array/' }
  ]},
  { day: 12, topic: 'Matrix', theory: '2D array traversal, rotation, spiral', problems: [
    { name: 'Reshape the Matrix', difficulty: 'Easy', link: 'https://leetcode.com/problems/reshape-the-matrix/' },
    { name: 'Spiral Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/spiral-matrix/' },
    { name: 'Rotate Image', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-image/' },
    { name: 'Set Matrix Zeroes', difficulty: 'Medium', link: 'https://leetcode.com/problems/set-matrix-zeroes/' }
  ]},
  { day: 13, topic: 'Linear Search', theory: 'Sequential search, sentinel search', problems: [
    { name: 'Find Numbers with Even Digits', difficulty: 'Easy', link: 'https://leetcode.com/problems/find-numbers-with-even-number-of-digits/' },
    { name: 'Find Smallest Letter Greater Than Target', difficulty: 'Easy', link: 'https://leetcode.com/problems/find-smallest-letter-greater-than-target/' },
    { name: 'Peak Index in a Mountain Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/peak-index-in-a-mountain-array/' }
  ]},
  { day: 14, topic: 'Binary Search - Basics', theory: 'Search space, mid calculation, convergence', problems: [
    { name: 'Binary Search', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-search/' },
    { name: 'Search Insert Position', difficulty: 'Easy', link: 'https://leetcode.com/problems/search-insert-position/' },
    { name: 'Find First and Last Position', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' }
  ]},
  { day: 15, topic: 'Binary Search - Advanced', theory: 'Binary search on answer, rotated arrays', problems: [
    { name: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
    { name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
    { name: 'Koko Eating Bananas', difficulty: 'Medium', link: 'https://leetcode.com/problems/koko-eating-bananas/' },
    { name: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' }
  ]},
  { day: 16, topic: 'Bubble Sort', theory: 'Adjacent swaps, optimization with flag', problems: [
    { name: 'Sort an Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-an-array/' },
    { name: 'Sort Colors', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-colors/' },
    { name: 'Squares of a Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/squares-of-a-sorted-array/' }
  ]},
  { day: 17, topic: 'Selection & Insertion Sort', theory: 'Find min and place, insert in sorted portion', problems: [
    { name: 'Insertion Sort List', difficulty: 'Medium', link: 'https://leetcode.com/problems/insertion-sort-list/' },
    { name: 'Majority Element', difficulty: 'Easy', link: 'https://leetcode.com/problems/majority-element/' },
    { name: 'Largest Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/largest-number/' }
  ]},
  { day: 18, topic: 'Merge Sort', theory: 'Divide and conquer, merging sorted arrays', problems: [
    { name: 'Sort an Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-an-array/' },
    { name: 'Merge Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-sorted-array/' },
    { name: 'Count of Smaller Numbers After Self', difficulty: 'Hard', link: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/' }
  ]},
  { day: 19, topic: 'Quick Sort', theory: 'Partitioning, pivot selection, Lomuto/Hoare', problems: [
    { name: 'Sort Colors', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-colors/' },
    { name: 'Kth Largest Element', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
    { name: 'Wiggle Sort II', difficulty: 'Medium', link: 'https://leetcode.com/problems/wiggle-sort-ii/' }
  ]},
  { day: 20, topic: 'Counting & Radix Sort', theory: 'Non-comparison sorts, digit-based sorting', problems: [
    { name: 'Sort Characters By Frequency', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-characters-by-frequency/' },
    { name: 'Maximum Gap', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-gap/' },
    { name: 'H-Index', difficulty: 'Medium', link: 'https://leetcode.com/problems/h-index/' }
  ]},
  { day: 21, topic: 'Two Pointers - Basics', theory: 'Opposite direction, same direction pointers', problems: [
    { name: 'Valid Palindrome', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-palindrome/' },
    { name: 'Two Sum II - Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
    { name: '3Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/' },
    { name: 'Container With Most Water', difficulty: 'Medium', link: 'https://leetcode.com/problems/container-with-most-water/' }
  ]},
  { day: 22, topic: 'Two Pointers - Advanced', theory: 'Merging, partitioning with two pointers', problems: [
    { name: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
    { name: 'Sort Colors', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-colors/' },
    { name: '4Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/4sum/' },
    { name: 'Trapping Rain Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/trapping-rain-water/' }
  ]},
  { day: 23, topic: 'Sliding Window - Fixed', theory: 'Fixed-size window technique', problems: [
    { name: 'Maximum Average Subarray I', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-average-subarray-i/' },
    { name: 'Maximum Number of Vowels in Substring', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/' },
    { name: 'Permutation in String', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutation-in-string/' }
  ]},
  { day: 24, topic: 'Sliding Window - Variable', theory: 'Variable-size window, shrinking condition', problems: [
    { name: 'Longest Substring Without Repeating', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    { name: 'Minimum Size Subarray Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-size-subarray-sum/' },
    { name: 'Minimum Window Substring', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-window-substring/' }
  ]},
  { day: 25, topic: 'Fast & Slow Pointer', theory: "Floyd's cycle detection, middle finding", problems: [
    { name: 'Middle of the Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
    { name: 'Linked List Cycle', difficulty: 'Easy', link: 'https://leetcode.com/problems/linked-list-cycle/' },
    { name: 'Linked List Cycle II', difficulty: 'Medium', link: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
    { name: 'Find the Duplicate Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-the-duplicate-number/' }
  ]},
  { day: 26, topic: 'Singly Linked List', theory: 'Node structure, insertion, deletion, traversal', problems: [
    { name: 'Reverse Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/' },
    { name: 'Merge Two Sorted Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
    { name: 'Remove Nth Node From End', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' }
  ]},
  { day: 27, topic: 'Linked List - Advanced', theory: 'Reversal in groups, intersection, sorting', problems: [
    { name: 'Palindrome Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/palindrome-linked-list/' },
    { name: 'Reorder List', difficulty: 'Medium', link: 'https://leetcode.com/problems/reorder-list/' },
    { name: 'Merge k Sorted Lists', difficulty: 'Hard', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' }
  ]},
  { day: 28, topic: 'Stack Basics', theory: 'LIFO, push, pop, peek, stack applications', problems: [
    { name: 'Valid Parentheses', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-parentheses/' },
    { name: 'Min Stack', difficulty: 'Medium', link: 'https://leetcode.com/problems/min-stack/' },
    { name: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' }
  ]},
  { day: 29, topic: 'Monotonic Stack', theory: 'Next greater/smaller element patterns', problems: [
    { name: 'Daily Temperatures', difficulty: 'Medium', link: 'https://leetcode.com/problems/daily-temperatures/' },
    { name: 'Next Greater Element I', difficulty: 'Easy', link: 'https://leetcode.com/problems/next-greater-element-i/' },
    { name: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' }
  ]},
  { day: 30, topic: 'Queue Basics', theory: 'FIFO, enqueue, dequeue, circular queue', problems: [
    { name: 'Implement Queue using Stacks', difficulty: 'Easy', link: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
    { name: 'Implement Stack using Queues', difficulty: 'Easy', link: 'https://leetcode.com/problems/implement-stack-using-queues/' },
    { name: 'Number of Recent Calls', difficulty: 'Easy', link: 'https://leetcode.com/problems/number-of-recent-calls/' }
  ]},
  { day: 31, topic: 'Priority Queue / Heap', theory: 'Min heap, max heap, heapify', problems: [
    { name: 'Kth Largest Element in a Stream', difficulty: 'Easy', link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/' },
    { name: 'Last Stone Weight', difficulty: 'Easy', link: 'https://leetcode.com/problems/last-stone-weight/' },
    { name: 'Find Median from Data Stream', difficulty: 'Hard', link: 'https://leetcode.com/problems/find-median-from-data-stream/' }
  ]},
  { day: 32, topic: 'Binary Tree - Basics', theory: 'Structure, terminology, properties', problems: [
    { name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
    { name: 'Invert Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/invert-binary-tree/' },
    { name: 'Same Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/same-tree/' }
  ]},
  { day: 33, topic: 'Tree Traversal', theory: 'Inorder, preorder, postorder, level order', problems: [
    { name: 'Binary Tree Inorder Traversal', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
    { name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
    { name: 'Binary Tree Zigzag Level Order', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/' }
  ]},
  { day: 34, topic: 'BST Basics', theory: 'BST property, search, insert, delete', problems: [
    { name: 'Search in a BST', difficulty: 'Easy', link: 'https://leetcode.com/problems/search-in-a-binary-search-tree/' },
    { name: 'Validate BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
    { name: 'Kth Smallest Element in BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' }
  ]},
  { day: 35, topic: 'Tree Problems', theory: 'Path sum, diameter, balanced tree', problems: [
    { name: 'Diameter of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
    { name: 'Balanced Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/balanced-binary-tree/' },
    { name: 'Path Sum II', difficulty: 'Medium', link: 'https://leetcode.com/problems/path-sum-ii/' },
    { name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' }
  ]},
  { day: 36, topic: 'Trie', theory: 'Prefix tree, insert, search, startsWith', problems: [
    { name: 'Implement Trie', difficulty: 'Medium', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
    { name: 'Design Add and Search Words', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/' },
    { name: 'Word Search II', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-search-ii/' }
  ]},
  { day: 37, topic: 'Heap - Advanced', theory: 'Building heap, heap sort, k-way merge', problems: [
    { name: 'Top K Frequent Elements', difficulty: 'Medium', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
    { name: 'K Closest Points to Origin', difficulty: 'Medium', link: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
    { name: 'Merge k Sorted Lists', difficulty: 'Hard', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' }
  ]},
  { day: 38, topic: 'Graph Basics', theory: 'Representation, adjacency list/matrix', problems: [
    { name: 'Find Center of Star Graph', difficulty: 'Easy', link: 'https://leetcode.com/problems/find-center-of-star-graph/' },
    { name: 'Find if Path Exists in Graph', difficulty: 'Easy', link: 'https://leetcode.com/problems/find-if-path-exists-in-graph/' },
    { name: 'Clone Graph', difficulty: 'Medium', link: 'https://leetcode.com/problems/clone-graph/' }
  ]},
  { day: 39, topic: 'DFS', theory: 'Stack-based traversal, recursive DFS, iterative DFS', problems: [
    { name: 'Number of Islands', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-islands/' },
    { name: 'Max Area of Island', difficulty: 'Medium', link: 'https://leetcode.com/problems/max-area-of-island/' },
    { name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' }
  ]},
  { day: 40, topic: 'BFS', theory: 'Queue-based traversal, level-order, shortest path in unweighted', problems: [
    { name: 'Rotting Oranges', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotting-oranges/' },
    { name: 'Walls and Gates', difficulty: 'Medium', link: 'https://leetcode.com/problems/walls-and-gates/' },
    { name: 'Word Ladder', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-ladder/' }
  ]},
  { day: 41, topic: 'Topological Sort', theory: "Kahn's algorithm, DFS-based topo sort, cycle detection", problems: [
    { name: 'Course Schedule', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule/' },
    { name: 'Course Schedule II', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule-ii/' },
    { name: 'Alien Dictionary', difficulty: 'Hard', link: 'https://leetcode.com/problems/alien-dictionary/' }
  ]},
  { day: 42, topic: "Dijkstra's Algorithm", theory: 'Weighted shortest path, priority queue approach', problems: [
    { name: 'Network Delay Time', difficulty: 'Medium', link: 'https://leetcode.com/problems/network-delay-time/' },
    { name: 'Path with Maximum Probability', difficulty: 'Medium', link: 'https://leetcode.com/problems/path-with-maximum-probability/' },
    { name: 'Cheapest Flights Within K Stops', difficulty: 'Medium', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' }
  ]},
  { day: 43, topic: 'Union Find', theory: 'Disjoint set, union by rank, path compression', problems: [
    { name: 'Number of Provinces', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-provinces/' },
    { name: 'Redundant Connection', difficulty: 'Medium', link: 'https://leetcode.com/problems/redundant-connection/' },
    { name: 'Accounts Merge', difficulty: 'Medium', link: 'https://leetcode.com/problems/accounts-merge/' }
  ]},
  { day: 44, topic: 'MST - Kruskal & Prim', theory: 'Minimum spanning tree algorithms', problems: [
    { name: 'Min Cost to Connect All Points', difficulty: 'Medium', link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/' },
    { name: 'Connecting Cities With Minimum Cost', difficulty: 'Medium', link: 'https://leetcode.com/problems/connecting-cities-with-minimum-cost/' }
  ]},
  { day: 45, topic: 'Greedy - Basics', theory: 'Greedy choice property, optimal substructure', problems: [
    { name: 'Assign Cookies', difficulty: 'Easy', link: 'https://leetcode.com/problems/assign-cookies/' },
    { name: 'Jump Game', difficulty: 'Medium', link: 'https://leetcode.com/problems/jump-game/' },
    { name: 'Jump Game II', difficulty: 'Medium', link: 'https://leetcode.com/problems/jump-game-ii/' }
  ]},
  { day: 46, topic: 'Greedy - Intervals', theory: 'Interval scheduling, merging intervals', problems: [
    { name: 'Merge Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/merge-intervals/' },
    { name: 'Non-overlapping Intervals', difficulty: 'Medium', link: 'https://leetcode.com/problems/non-overlapping-intervals/' },
    { name: 'Meeting Rooms II', difficulty: 'Medium', link: 'https://leetcode.com/problems/meeting-rooms-ii/' }
  ]},
  { day: 47, topic: 'DP - Introduction', theory: 'Overlapping subproblems, optimal substructure', problems: [
    { name: 'Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/climbing-stairs/' },
    { name: 'Min Cost Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/min-cost-climbing-stairs/' },
    { name: 'House Robber', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/' }
  ]},
  { day: 48, topic: 'DP - 1D Problems', theory: 'State definition, transition, base case', problems: [
    { name: 'House Robber II', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber-ii/' },
    { name: 'Decode Ways', difficulty: 'Medium', link: 'https://leetcode.com/problems/decode-ways/' },
    { name: 'Coin Change', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/' },
    { name: 'Word Break', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-break/' }
  ]},
  { day: 49, topic: 'DP - Knapsack', theory: '0/1 knapsack, unbounded knapsack', problems: [
    { name: 'Partition Equal Subset Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
    { name: 'Target Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/target-sum/' },
    { name: 'Coin Change 2', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change-2/' }
  ]},
  { day: 50, topic: 'DP - LCS & LIS', theory: 'Longest common subsequence, longest increasing subsequence', problems: [
    { name: 'Longest Common Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-common-subsequence/' },
    { name: 'Longest Increasing Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
    { name: 'Edit Distance', difficulty: 'Medium', link: 'https://leetcode.com/problems/edit-distance/' }
  ]},
  { day: 51, topic: 'DP - Grid Problems', theory: 'Grid traversal with memoization', problems: [
    { name: 'Unique Paths', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths/' },
    { name: 'Minimum Path Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-path-sum/' },
    { name: 'Dungeon Game', difficulty: 'Hard', link: 'https://leetcode.com/problems/dungeon-game/' }
  ]},
  { day: 52, topic: 'Backtracking - Basics', theory: 'Decision tree, pruning, state space', problems: [
    { name: 'Subsets', difficulty: 'Medium', link: 'https://leetcode.com/problems/subsets/' },
    { name: 'Permutations', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutations/' },
    { name: 'Combination Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum/' }
  ]},
  { day: 53, topic: 'Backtracking - Advanced', theory: 'Constraint satisfaction, board problems', problems: [
    { name: 'N-Queens', difficulty: 'Hard', link: 'https://leetcode.com/problems/n-queens/' },
    { name: 'Sudoku Solver', difficulty: 'Hard', link: 'https://leetcode.com/problems/sudoku-solver/' },
    { name: 'Word Search', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-search/' }
  ]},
  { day: 54, topic: 'Bit Manipulation', theory: 'AND, OR, XOR, shifts, common tricks', problems: [
    { name: 'Single Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/single-number/' },
    { name: 'Number of 1 Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/number-of-1-bits/' },
    { name: 'Counting Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/counting-bits/' },
    { name: 'Reverse Bits', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-bits/' }
  ]},
  { day: 55, topic: 'Review & Practice Day 1', theory: 'Arrays, Strings, Hashing review', problems: [
    { name: 'Encode and Decode Strings', difficulty: 'Medium', link: 'https://leetcode.com/problems/encode-and-decode-strings/' },
    { name: 'Longest Consecutive Sequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-consecutive-sequence/' },
    { name: 'Product of Array Except Self', difficulty: 'Medium', link: 'https://leetcode.com/problems/product-of-array-except-self/' }
  ]},
  { day: 56, topic: 'Review & Practice Day 2', theory: 'Two Pointers, Sliding Window review', problems: [
    { name: 'Container With Most Water', difficulty: 'Medium', link: 'https://leetcode.com/problems/container-with-most-water/' },
    { name: 'Trapping Rain Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/trapping-rain-water/' },
    { name: 'Minimum Window Substring', difficulty: 'Hard', link: 'https://leetcode.com/problems/minimum-window-substring/' }
  ]},
  { day: 57, topic: 'Review & Practice Day 3', theory: 'Linked Lists, Stacks, Queues review', problems: [
    { name: 'LRU Cache', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/' },
    { name: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
    { name: 'Copy List with Random Pointer', difficulty: 'Medium', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/' }
  ]},
  { day: 58, topic: 'Review & Practice Day 4', theory: 'Trees and Graphs review', problems: [
    { name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
    { name: 'Graph Valid Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/graph-valid-tree/' },
    { name: 'Course Schedule II', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule-ii/' }
  ]},
  { day: 59, topic: 'Review & Practice Day 5', theory: 'DP and Backtracking review', problems: [
    { name: 'Longest Palindromic Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-palindromic-subsequence/' },
    { name: 'Regular Expression Matching', difficulty: 'Hard', link: 'https://leetcode.com/problems/regular-expression-matching/' },
    { name: 'Palindrome Partitioning', difficulty: 'Medium', link: 'https://leetcode.com/problems/palindrome-partitioning/' }
  ]},
  { day: 60, topic: 'Mock Interview 1', theory: 'Simulate a full interview with mixed topics', problems: [
    { name: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/' },
    { name: 'LRU Cache', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/' },
    { name: 'Merge k Sorted Lists', difficulty: 'Hard', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' }
  ]}
];

// Extend to 150 days by repeating pattern with harder problems
for (let d = 61; d <= 150; d++) {
  const themes = [
    { topic: 'Arrays & Hashing Practice', problems: [
      { name: 'Subarray Sum Equals K', difficulty: 'Medium', link: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
      { name: 'Brick Wall', difficulty: 'Medium', link: 'https://leetcode.com/problems/brick-wall/' }
    ]},
    { topic: 'Binary Search Practice', problems: [
      { name: 'Time Based Key-Value Store', difficulty: 'Medium', link: 'https://leetcode.com/problems/time-based-key-value-store/' },
      { name: 'Split Array Largest Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/split-array-largest-sum/' }
    ]},
    { topic: 'Sliding Window Practice', problems: [
      { name: 'Sliding Window Maximum', difficulty: 'Hard', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
      { name: 'Fruit Into Baskets', difficulty: 'Medium', link: 'https://leetcode.com/problems/fruit-into-baskets/' }
    ]},
    { topic: 'Stack & Queue Practice', problems: [
      { name: 'Online Stock Span', difficulty: 'Medium', link: 'https://leetcode.com/problems/online-stock-span/' },
      { name: 'Asteroid Collision', difficulty: 'Medium', link: 'https://leetcode.com/problems/asteroid-collision/' }
    ]},
    { topic: 'Tree Practice', problems: [
      { name: 'Lowest Common Ancestor', difficulty: 'Medium', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
      { name: 'Binary Tree Right Side View', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-right-side-view/' }
    ]},
    { topic: 'Graph Practice', problems: [
      { name: 'Surrounded Regions', difficulty: 'Medium', link: 'https://leetcode.com/problems/surrounded-regions/' },
      { name: 'Swim in Rising Water', difficulty: 'Hard', link: 'https://leetcode.com/problems/swim-in-rising-water/' }
    ]},
    { topic: 'DP Practice', problems: [
      { name: 'Palindrome Substrings', difficulty: 'Medium', link: 'https://leetcode.com/problems/palindromic-substrings/' },
      { name: 'Interleaving String', difficulty: 'Medium', link: 'https://leetcode.com/problems/interleaving-string/' }
    ]},
    { topic: 'Greedy & Intervals Practice', problems: [
      { name: 'Gas Station', difficulty: 'Medium', link: 'https://leetcode.com/problems/gas-station/' },
      { name: 'Hand of Straights', difficulty: 'Medium', link: 'https://leetcode.com/problems/hand-of-straights/' }
    ]},
    { topic: 'Backtracking Practice', problems: [
      { name: 'Letter Combinations of a Phone Number', difficulty: 'Medium', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
      { name: 'Restore IP Addresses', difficulty: 'Medium', link: 'https://leetcode.com/problems/restore-ip-addresses/' }
    ]},
    { topic: 'Mixed Review', problems: [
      { name: 'Design Twitter', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-twitter/' },
      { name: 'Task Scheduler', difficulty: 'Medium', link: 'https://leetcode.com/problems/task-scheduler/' }
    ]}
  ];
  const t = themes[(d - 61) % themes.length];
  CHALLENGE_DATA.push({
    day: d,
    topic: t.topic,
    theory: 'Practice and reinforce concepts',
    problems: t.problems
  });
}
