function anagram(s,t){
    var arr1 = s.split("");
    var arr2 = t.split("");
    if(arr1.length != arr2.length){
        return false;
    }
    arr1.sort();
    arr2.sort();
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
}
console.log(anagram("mary","army"));
