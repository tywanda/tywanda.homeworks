// * make two functions one that does complicated math and then on that waits for the math to get returned
// complicated math
function someMath(){}
    for( i = 0; i<1000000; 1++){
        if(i =1000000){
            return i;

        }
    }
// where we put our promise
function waitForMath(){
    return new Promise((resolve, reject) => {
        try{
            resolve(someMath());
        } catch(error){
            reject("error: arent real");
        }
    })
}

    waitForMath().then
    
    (res => {
        console.log(res);
    });