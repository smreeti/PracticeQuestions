function fibonacciIterative(n){ //O(n)
    //0 1 1 2 3 5 8 13 21  34 55 89 144
    let array = [0,1, 1];
    
    for(let i = 3; i <=n; i++){
       array.push(array[i-1] + array[i -2]);    
    }
    
    return array[n];
 }
 
 function fibonacciRecursive(n){ //O(2^n)
      if(n < 2){
         return n;
     }
     
     return fibonacciIterative(n-1) + fibonacciIterative(n-2);
 }
 
 console.log(fibonacciIterative(7)); //return 13
 console.log(fibonacciRecursive(7));