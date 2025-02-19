function countWordOccurrences(sentence: string, word: string): number {

    let lowerSentence = sentence.toLowerCase();
    let lowerWord = word.toLowerCase();


    let wordsArray = lowerSentence.split(" ");


    let count = wordsArray.filter(w => w === lowerWord).length;

    return count;
}


console.log(countWordOccurrences("I love typescript", "typescripts"));
console.log(countWordOccurrences("JavaScript is great, and I love JavaScript", "javascript")); // Output: 2
console.log(countWordOccurrences("HELLO hello HeLLo", "hello")); 
console.log(countWordOccurrences("TypeScript is powerful", "java")); 




// {
//     //Problem - 3
//     //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
    
    
//     function countWordOccurrences(fullsentence : string ) {
//         const sentenceChack = fullsentence.toLowerCase().match(/\b\w+\b/g) || [];
    
//         const countWord = sentenceChack.reduce((count:{[key:string]:number},word:string) =>{
//             count[word] = (count[word] || 0) + 1;
//     return count;
//         },{});
    
//         const mostWord = Object.keys(countWord).reduce((x,y) =>
//         countWord[x] > countWord[y] ? x:y
//         );
    
//         return { MostWord:mostWord , count:countWord[mostWord] }
//     }
    
//     const fullsentence = "I love love Typescript typescript";
    
//     console.log(countWordOccurrences(fullsentence))
//     //
//     }