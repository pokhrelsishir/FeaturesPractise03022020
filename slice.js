const person = {
    name: 'Sishir',
    age: 22,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];


const copiedArray = hobbies.slice();
const copiedArray2 = [hobbies];

console.log(copiedArray);
console.log(copiedArray2);

