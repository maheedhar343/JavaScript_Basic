function fibonacci(n){
    const farr=[0,1]
    if(n==0||n==1){
        return farr[1]
    }
    if(n>=2){
        for(let i=2;i<n;i++){
            farr[i]=farr[i-1]+farr[i-2]
        }
    }else{
        return 'Input number should be greater than 2'
    }
    return farr;
}
console.log(fibonacci(0));
console.log(fibonacci(2));
function factorial(n){
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
            return f;
}
console.log(factorial(5));
function prime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
console.log(prime(9))
function linearsearch(n){
    let arr=[34,67,89,12,345];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n)return `Number ${n} is at position ${i+1}`
        }
        return "The Number isn't in the array"
}
console.log(linearsearch(34));
// binary search algorithm
function bsearch(arr,x){
    var s=0,e=arr.length-1;
    while(s<=e){
        var m=(s+e)/2|0;
        if(arr[m]===x)return m;
        else if(arr[m]>x) e=m-1;
        else s=m+1;
        }
        return -1;
}
console.log(bsearch([34,67,89,12,345],345));
//sorting
function sortasc(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
                return arr;
    }
}
console.log(sortasc([5,4,3,2,1]))

