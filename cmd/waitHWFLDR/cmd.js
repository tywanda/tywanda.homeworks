//Create a function that takes some time to execute, used timer and Create a second function that does something once the first function has completed.

module.exports = function candy()  { 
    setTimeout(function(){ 
       console.log('heart');
     }, 3000);
    
    console.log('candy');
}

