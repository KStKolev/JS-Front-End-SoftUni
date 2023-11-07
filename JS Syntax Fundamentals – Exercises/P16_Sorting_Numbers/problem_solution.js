function ascendedArray(array) {
    
   array.sort(function(a,b) {
    return a - b;
   });
   let sortedArray = [];
   while(array.length > 0) {
        sortedArray.push(array.shift());
        if (array.length == 0) {
            break;
        }
        sortedArray.push(array.pop());
   }
   return sortedArray;

}