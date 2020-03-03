const person = {
    name: 'Sishir',
    age: 22,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies); 
const copiedArray = [...hobbies];            //Spread
console.log(copiedArray);

const toArray = (...args) => {               //Rest
    return args;
};

console.log(toArray(1, 2, 3, 4));
