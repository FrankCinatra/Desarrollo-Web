let arrayM = [5];
for(var k=0; k<5; k++){
    arrayM[k] = [5];
}

for(let j=0; j<arrayM.length; j++){
    for(let i=0; i<arrayM.length; i++){
        if(j==i){
            arrayM[j][i] = 1;
        }else{
            arrayM[j][i] = 0;
        }
    }
}

console.log(arrayM);