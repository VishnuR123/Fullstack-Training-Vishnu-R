function reverse(str){
   var rev= str.split("").reverse().join("");
   var ans=rev.split(" ").reverse().join(" ");
   return ans;
}

var str="Welcome to javascript training";
console.log(reverse(str));
