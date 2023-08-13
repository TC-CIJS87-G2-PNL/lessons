/**
 * Write a function called calculateAge() which returns an array oj objects with new key (age).
 * The key 'age' equals the calculated years based on the birthYear and the current year. 
 * If the key 'birthYear' is null, the default value of 'age' is 18.
 * You have to use Object Destructuring on the objects in the array and Object Default Values for the age key.
 */

// Given arrays
const students = [
    {
        id: 'std001',
        name: 'Student 1',
        birthYear: 2001,
        sex: 'male'
    },
    {
        id: 'std002',
        name: 'Student 2',
        birthYear: 1996,
        sex: 'female'
    },
    {
        id: 'std003',
        name: 'Student 3',
        birthYear: null,
        sex: 'male'
    },
    {
        id: 'std004',
        name: 'Student 4',
        birthYear: 1999,
        sex: 'male'
    }
]

// CODE HERE



/**
 * Expect output: 
[
    {
        id: 'std001',
        name: 'Student 1',
        birthYear: 2001,
        sex: 'male',
        age: 22
    },
    {
        id: 'std002',
        name: 'Student 2',
        birthYear: 1996,
        sex: 'female',
        age: 27
    },
    {
        id: 'std003',
        name: 'Student 3',
        birthYear: null,
        sex: 'male',
        18
    },
    {
        id: 'std004',
        name: 'Student 4',
        birthYear: 1999,
        sex: 'male',
        age: 24
    }
]

 */