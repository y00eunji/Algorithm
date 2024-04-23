function findMinHeightTrees(n, edges) {
  if (n === 1) return [0]; // 트리에 노드가 1개인 경우

  // 그래프 구성
  const graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  for (const [a, b] of edges) {
    graph.get(a).push(b);
    graph.get(b).push(a);
  }
  console.log(graph);

  // 리프 노드 찾기
  let leaves = [];
  for (const [node, neighbors] of graph) {
    if (neighbors.length === 1) {
      // 연결된 간선이 1개인 경우
      leaves.push(node);
    }
  }

  // 리프 노드 제거
  while (n > 2) {
    n -= leaves.length;
    const newLeaves = [];
    for (const leaf of leaves) {
      const neighbor = graph.get(leaf).pop(); // 연결된 노드
      graph.get(neighbor).splice(graph.get(neighbor).indexOf(leaf), 1); // 그래프에서 연결 제거
      if (graph.get(neighbor).length === 1) {
        // 새로운 리프 노드인 경우
        newLeaves.push(neighbor);
      }
    }
    leaves = newLeaves;
  }

  return leaves;
}

// 테스트
const n = 6;
const edges = [
  [0, 3],
  [1, 3],
  [2, 3],
  [4, 3],
  [5, 4],
];
findMinHeightTrees(n, edges);
// console.log(findMinHeightTrees(n, edges)); // [3, 4]
