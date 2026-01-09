// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const isDAG = () => {
    const graph = {};
    const inDegree = {};

    nodes.forEach((node) => {
      graph[node.id] = [];
      inDegree[node.id] = 0;
    });

    edges.forEach((edge) => {
      graph[edge.source].push(edge.target);
      inDegree[edge.target] += 1;
    });

    const queue = [];
    Object.keys(inDegree).forEach((nodeId) => {
      if (inDegree[nodeId] === 0) queue.push(nodeId);
    });

    let visitedCount = 0;

    while (queue.length > 0) {
      const current = queue.shift();
      visitedCount++;

      graph[current].forEach((neighbor) => {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      });
    }

    return visitedCount === nodes.length;
  };

  const handleSubmit = () => {
    const result = {
      num_nodes: nodes.length,
      num_edges: edges.length,
      is_dag: isDAG(),
    };

    console.log('Pipeline Result:', result);
    alert(
      `Nodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
