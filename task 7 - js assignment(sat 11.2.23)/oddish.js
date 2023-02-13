/*Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.*/

var a = 121;
const evenishororoddish=(x)=>{
    var ans = 0;
    while(x>0){
        var rem = x%10;
        ans = ans+rem;
        x=Math.round(x/10);
    }
    if(ans%2==0){
        return "evenish";
    }else{
        return "oddish";
    }
}
var ans = evenishororoddish(a);
console.log(ans);
