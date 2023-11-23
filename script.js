function mincost(arr)
{ 
  let minimumCost = 0;

  while (arr.length > 1) {
    arr.sort((a, b) => a - b);

    const smallestA = arr.shift();
    const smallestB = arr.shift();

    const length = smallestA + smallestB;
    minimumCost += length;

    arr.push(length);
  }

  return minimumCost;
}

module.exports=mincost; 
