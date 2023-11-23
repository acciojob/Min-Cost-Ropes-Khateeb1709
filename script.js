function mincost(arr)
{ 
//write your code here
// return the min cost
  let obj = {};
	
 // 4 3 2 6
  for(let i=0;i<arr.length;i++){
	  int ele = arr[i];
	  
	  if(obj.ele === undefined){
		  obj.ele = 1
	  }
	  else{
		 obj.ele += 1;	  
	}
  }

  let n = arr.length;
  let minCost = 0;

  while(n >= 2){
      let arr = Object.keys(obj);
	  
      // [4, 3, 2, 6]
	  
	  /* {
	     2 : 0,
	     3 : 0,
	     4 : 1,
	     6 : 1
	*/ 
      let f = 0;
	  let s = 0;
	  
	  if(obj[arr[0]] > 1){
		  f = arr[0];
		  s = arr[0];
	  }
	  else{
		  f = arr[0];
		  s = arr[1];
	  }
	  
	  minCost = minCost + f + s;

	  obj.f--;
	  if(obj.f === 0 )delete obj.f;
	  obj.s--;
      if(obj.s === 0 )delete obj.s;

	  if(obj.minCost === undefined){
         obj.minCost = 1;
	  }
	  else{
		  obj.minCost += 1;
	  }
	  n--;
  }
	
  return minCost;
}

module.exports=mincost; 
