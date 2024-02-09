let myArray=[5,2,8,1,4];
myArray.sort(function(a,b){
    return a-b;
})
console.log("sorted Array",myArray);

for (let i=0;i<myArray.length;i++){
    console.log("elemnt at index",i,";",myArray[i]);
    
}



