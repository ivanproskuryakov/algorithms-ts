### Data Structures

```
Set
	Store unique values, without any particular order
	Dynamic/mutable sets
	Allow insertion and deletion of elements from the set
	Static
	Unordered, unchangeable, and unindexed collection
		HashSet
		HashSet stores unique elements without any associated values

List<Set>
	Finite number of ordered values, where the same value may occur more than once
		append O(1)
		space O(n)

Stack<List>
	A linear structure that stores items in LIFO manner
		push O(1)
		pop O(1)
		space O(n)

Queue<List>
	A linear structure that stores items in FIFO manner
		enqueue O(1)
		dequeue O(1)
		space O(n)
		Priority queue

Map
	A Map holds key-value pairs where the keys can be any datatype.
	A Map remembers the original insertion order of the keys.
		search O(1)
		insert O(1)
		delete O(1)
		space O(n)

Hash Map/Hash Table 
	HashMap stores key-value pairs where the keys are unique identifiers and the values are associated data
		UnOrdered Map
		Ordered Map
		Tree Map
		Linked Hash Map
		Bloom Filter Map

Hash
	Bloom filter
	Rate Limit Nullifier
	DHT (Distributed hash table)

Graph
	A graph can be connected or disconnected, can have cycles or loops, and does not necessarily have a root node

	Tree
		A tree is a type of graph that is connected, acyclic (meaning it has no cycles or loops), and has a single root node.

		- Search O(log _n_)
		- Insert O(log _n_)
		- Delete O(log _n_)

		Binary Tree
			Balanced binary tree (BST)
		Merkel Tree
		Heap
			A Heap is a special Tree-based data structure in which the tree is a complete binary tree.
```

### Algorythms

```
Search
	Graph
		Dijkstra's algorithm
		Minimum spanning tree
	List
		Linear Search
		Linear Search Sentinel
		Jump search
		Binary Search
		Interpolation search
		Exponential Search
		Jump search
		Ternary search
		Tree traversal
	Sort
		List
			Heapsort
			Merge sort
			Selection sort
			Smooth sort
	Hashing
		Bloom filters
		Merkel Trees
		BFS & DFS
	Recursive
		Divide and conquer
		Greedy algorithm
		Backtracking
		Dynamic programming
	Algorithm design paradigm
		Branch and bound
		Brute-force search
		Recursion
		Prune and search

Optimisation
	Linear programming

```
