function augmentingPath(graph, start, end) {
    let path = [];
    let visited = [];
    for (let [node, connections] of Object.entries(graph)) visited[node] = false;
    if (augp(graph, start, end, path, visited)) return path;
    return [];
}

function augp(graph, current, end, path, visited) {
    visited[current] = true;
    path.push(current);
    if (current == end) return 1;
    for (let [next, weight] of Object.entries(graph[current])) {
        if (!visited[next]) {
            if (augp(graph, next, end, path, visited)) return 1;
        }
    }
    path.pop();
}
