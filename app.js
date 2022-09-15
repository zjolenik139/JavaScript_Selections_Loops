//exercise 1
for ( let i = 0; i < 100; i++){
    if ( i % 2 ==0){
        continue;
    } else {
        console.log(i);
    }
}

//exersice 2
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.Log("FIZZBUZZ");
    } else {
        if (i % 3 ==0)
    }
    if (i % 5 == 0){
        console.Log("BUZZ");
    }
}

//exercise 3
let i = 1;

while( i <= 100){
    let output = "";

    if(i % 3 ==0){
        output += "FIZZ";
    }
    if (i % 5 ==0){
        output += "BUZZ";
    }
    console.Log(`${i} ${output}`);
    i++
}

//exercse 4
let numberToFind = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (50 -100) +100);


for (let i = 1; i <= n; i ++){
    console.log(`Found ${numberToFind}!`);
    break;
}
if (i ==n){
    console.log(`Did not find ${numberToFind} within 1-${n}..`);
}

//exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++){
    let output = "";

    if ( i % fizzDivisor == 0){
        output += "FIZZ";
    }

    if ( i % buzzDivisor == 0){
        output += "BUZZ";
    }


    consolelog(`${i} ${output}`);
}




