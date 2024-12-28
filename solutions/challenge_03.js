const findNodes = (network) => {
  const safeNodes = [];
  const connections = {};
  network.forEach((link) => {
    connections[link[0]] ??= 0;
    connections[link[0]]++;
    connections[link[1]] ??= 0;
    connections[link[1]]++;
  });
  for (const [init, end] of network) {
    if (connections[init] === 1 && connections[end] === 1)
      safeNodes.push(init, end);
  }
  return safeNodes.toSorted((a, b) => a - b).join(",");
};

fetch("https://codember.dev/network.txt")
  .then((res) => res.json())
  .then((log) => console.log(findNodes(log)));
