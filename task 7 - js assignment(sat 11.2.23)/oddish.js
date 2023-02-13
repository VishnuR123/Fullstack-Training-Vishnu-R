/*Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.*/

function oddishevenish(x){
    let num=0;    
    while(x>0){
        let temp=x%10;
        num+=temp;
        x/=10;     
    }num=Math.round(num);
    num=num-1;    
    if(num%2==0){
        return "evenish";
    }else{
        return "oddish";
    }console.log(num);
}console.log(oddishevenish(121));
