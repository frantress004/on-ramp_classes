function addition() {

    let newNum = 5 + 5

    return newNum

}

 

const callFunction = addition()

console.log(callFunction)

 

function showIdentity(name, age, phone) {

    const id = `my name is ${name}, i am ${age} years old and my Phone_Number is ${phone}`

    return id

}

 

console.log(showIdentity("Sam", "20", "09044523368"))

const myArr = [2, 'elias', 'fish', 44, false, 'salmon'];

 

const onlyNumbers = myArr.filter(

    item => typeof item === 'boolean'

);

console.log(onlyNumbers)

 

function onlyNum(arr) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if (typeof myArr[i] === 'number') {

            newArr.unshift(arr[i])

        }

 

    }

    return newArr

}

numb = myArr.reverse()

console.log(onlyNum(numb))

 

// sort method of an array

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const sortA = fruits.sort();

console.log(sortA)

const sortReverse = sortA.reverse()

console.log(sortReverse)

 

// sort with argument

const sortB = fruits.sort((a, b) => a - b)

console.log(sortB)