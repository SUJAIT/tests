
////              ChatGpt- Generated

// function removeDuplicates(arr: number[]): number[] {
//     let uniqueNumbers: number[] = [];
//     let seen = new Set<number>(); /

//     for (let num of arr) {
//         if (!seen.has(num)) {
//             uniqueNumbers.push(num); 
//             seen.add(num); 
//         }
//     }

//     return uniqueNumbers;
// }


// console.log(removeDuplicates([12,1, 2, 2, 3, 4, 4, 5,11,11,11,11,12,19]));

//////

// My Submission

const averageArr: number[] = [1,1,1,2,3,3,6,9,9,8,9,6,7,4,3,1,2,3,4,5,6,9,87,7,7]
    
const filterDuplicater : number[] = [...new Set(averageArr)]


console.log(filterDuplicater)

