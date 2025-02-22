
////              ChatGpt- Generated

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}


const person = { name: "Alice", age: 25, email: "alice@example.com", gender: "female" };

console.log(validateKeys(person, ["name", "age"])); 
console.log(validateKeys(person, ["name", "gender"]));
console.log(validateKeys(person, ["email", "age"]));
console.log(validateKeys(person, ["email"])); 


// {
//     //////////////////////////////////
//     //Problem-8

// My Submission




//     // Create a Function ValidateKey(Obj:Text,Key:(Keyof T)[]) that takes an object obj and an array of keys MediaKeySession.The Function should return true if all of the specified keys exist in the objects , otherwise, it should return false.
    
//     const Obj = { name: "Sujait",age:23};
    
    
//     function validateKey<T extends object>(Obj: T, Keys: (keyof T)[]): boolean {
//         for (const key of Keys) {
//           if (!(key in Obj)) {
//             return false; 
//           }
//         }
//         return true; 
//       }
      
    
//       console.log(validateKey(Obj, ["name","age"]));
//       console.log(validateKey(Obj, ["age"])); 
//     //   console.log(validateKey(Obj, ["ID"])); 
    
//     ///////////////////////////////////
//     }
