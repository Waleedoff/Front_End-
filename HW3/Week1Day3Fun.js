//summition HW3 part_1

function getSum(n) {
    let sum = 0;
    for (i = 1; i<=n; i++){
        sum = sum + i; // sum += i
        }
    return sum
}

console.log(getSum(5));

// summition EvenNumber HW3 part_2

function getSumEven(n) {
    let sum = 0;
    for (i = 1; i<=n; i++){
        if (i % 2 == 0) {
            sum = sum+i
        }
        else 
        {
            continue;
        }
         // sum += i
        }
    return sum
}

console.log(getSumEven(5));




