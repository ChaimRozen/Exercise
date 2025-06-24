// //1
// function doubleValuess(arr1){
//     return arr1.map (num => num*2)
// }

// const numbers = [1,2,3,4,5];
// console.log(doubleValues(numbers));

// //2
// arr2 = [1,2,3,4,5,6,7,8,9,10];

// onlyEvenValues = arr2.filter(num => num % 2 ==0);

// console.log(onlyEvenValues);

// //3
// array = ["a", 123, "b", 456, "cd"];

// function showFirstAndLast(arr3){
//     newArr = [];
//     if (typeof arr3[0] === "string"){
//     newArr.push(arr3[0]);
//     }
//     if (typeof arr3[arr3.length-1] === "string"){
//         newArr.push(arr3[arr3.length-1])
//     }
//     return newArr;
// }
//  console.log(showFirstAndLast(array));

// //4
// string1 = "abcafkbdsghdsboanzcxlkfjegwfywneufhf";
// function vowelCount(str){
//     const dict4 = {'a':0,'e':0,'i':0,'o':0,'u':0};
//     //const vowels = ['a', 'e', 'i', 'o', 'u']
//     str = str.toLowerCase();
//     for (let char of str){
//         if (char in dict4){
//             dict4[char]+=1;
//         }
//     }
//     return dict4;
// }
// console.log(vowelCount(string1));

//5
function capitalize(str5){
    return str5.toUpperCase();
}
const stringi = "hElLo wOrlD";
console.log(capitalize(stringi))