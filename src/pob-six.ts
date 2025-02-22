
////              ChatGpt- Generated

// interface Profile {
//     name: string;
//     age: number;
//     email: string;
// }


// function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
//     return { ...profile, ...updates };
// }


// const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };

// console.log(updateProfile(myProfile, { age: 28, email: "assdc" }));




////////////

{
    ////////////////////////////////////
    //problem-6

    // My Submission

    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface profileKeyTy {
        name: string;
        age: number;
        email: string
    }

    const myProfile: profileKeyTy = {
        name: "Sujait Ullah",
        age: 25,
        email: "sujait@gmail.com"
    }

    function updateObject<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
        return { ...obj, [key]: value };
    }

    const updateObj = updateObject(myProfile, "age" ,23)

    console.log(updateObj);


//     ////////////////////////////////////
}

