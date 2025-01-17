function solution(T) {
  if (T == null) return 0;
  return longestZigZag(T, "N", 0);
}

function longestZigZag(node, pos, count) {
  let max = count;
  
  if (node.l != null) {

    let newCount = count;

    if (pos === 'R') newCount++;

    max = Math.max(max, longestZigZag(node.l, "L", newCount));
  }

  if (node.r != null) {
    let newCount = count;

    if (pos === "L") newCount++;

    max = Math.max(max, longestZigZag(node.r, "R", newCount));
  }

  return max;
}