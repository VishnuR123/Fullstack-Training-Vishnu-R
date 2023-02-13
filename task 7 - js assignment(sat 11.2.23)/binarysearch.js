/*Binary search using js

Recursive Approach : 
 

BASE CONDITION: If starting index is greater than ending index return false.
Compute the middle index.
Compare the middle element with number x. If equal return true.
If greater, call the same function with ending index = middle-1 and repeat step 1.
If smaller, call the same function with starting index = middle+1 and repeat step 1.*/

const binary_search=(arr,val,low,high)=>{
let mid=Math.floor((low+high)/2);
if(arr[mid]===val)
return mid;
else if(arr[mid]<val)
return binary_search(arr,val,mid+1,high);
else
return binary_search(arr,val,low,mid-1);

}

const arr=[1,2,3,4,5,6];
val=3
let ans=binary_search(arr,val,0,arr.length-1);
console.log(ans);
