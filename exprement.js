num_arr2=[2,4,6];
array_sum2=num_arr2.reduce((a,b)=>{
    console.log(`accumalater: ${a} , current val : ${b}`);
  return a+b
},5)
console.log(array_sum2);

