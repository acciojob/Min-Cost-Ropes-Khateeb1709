function mincost(arr)
{ 
//write your code here
// return the min cost
  let obj = {};
	
 // 4 3 2 6
  arr.forEach((element) => {
	  if(obj["element"] === undefined){
		  obj["element"] = 1;
	  }
	  else{
		  obj["element"] += 1;
	  }
  });

  let n = arr.length;
  let minCost = 0;

  while(n >= 2){
      let [f, s] = Object.keys(x);
	  
      // [4, 3, 2, 6]
	  
	  /* {
	     2 : 0,
	     3 : 0,
	     4 : 1,
	     6 : 1
	*/ 
	  
	  minCost = minCost + f + s;

	  obj["f"]--;
	  obj["s"]--;

	  n--;
  }
	
  return minCost;
}

module.exports=mincost; 
