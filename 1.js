// question - 1 :- sum of all natural numbers from 1 to n

// let n = 6;
// let sum = ( n * (n+1)) / 2;

// for(let i=1;i<=n;i++) {
//     sum = sum + i;
// }

// console.log(sum);


// function sumOfNaturals(n) {
//     return ( n * (n+1)) / 2;
// }

// console.log(sumOfNaturals(7));

// question - 2 :- sum of digits of a number 

// let n = 627;
// let rem, sum = 0;

// while(n>0) {
//     rem = n%10;
//     sum = sum + rem;
//     n = Math.floor(n/10);
// }

// console.log(sum);

// function digitSum(n) {
//     let rem, sum = 0;
//     while(n>0) {
//         rem = n%10;
//         sum = sum + rem;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }

// console.log(digitSum(533));

// question - 3 :- count the number of digits of a number

// function digitCount(n) {
//     n = Math.abs(n)
//     let count = 0;
//     while(n>0) {
//         n = Math.floor(n/10);
//         count++;
//     }
//     return count;
// }

// console.log(digitCount(2));

// question 4 :- check palaidrome number if it is pailaindrome or not

// function checkPailaidrome(n) {
//     let realNum = n,rem, sum = 0;
//     while(n>0) {
//         rem = n % 10;
//         sum = sum * 10 + rem;
//         n = Math.floor(n/10);
//     }
//     if(sum == realNum) return true;
//     else return false;
// }

// console.log(checkPailaidrome(7887))

// question :- find the fibbonicci series of given number

// function getFabonacci(n) {
//     let fib = [0, 1];
//     for(let i=0;i<n-2;i++) {
//         fib.push(fib[i] + fib[i+1])
//     }
//     return fib;
// }

// console.log(getFabonacci(10))

// question - missing number

// function missingNumber(arr) {
//     let arrSum = eval(arr.join('+'));
//     let arrLength = arr.length;
//     let sum = (arrLength * (arrLength+1))/2;
//     return sum - arrSum;
// }

// let arr = [0,1];

// console.log(missingNumber(arr));

// question of 2d matrix 

// let arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
// let sum = 0;

// for(let i = 0;i<arr.length;i++) {
//     for(let j=0;j<arr[i].length;j++) {
//         sum = sum + arr[i][j];
//     }
// }

// console.log(sum)

// question of sum of digits in any number

// function sumOfDigits(num) {
//     let sum = 0,rem;
//     while(num>0) {
//         rem = num % 10;
//         sum = sum + rem;
//         num = Math.floor(num/10);
//     }
//     return sum;
// }

// console.log(sumOfDigits(536373))  

//arrays on level that

let arr = [1,2,3,"vineet", {name : "chotu"}, true, 332.34]



