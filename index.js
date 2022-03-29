class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`
    }
}

let abc = new Cat('Lucy')
console.log(abc.speak())

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        //If bird is male return It's me! name, the parrot!".
        //If not return "name says squawk!".
        if (this.sex == 'male') {
            return `It's me! ${this.name}, the parrot!`;
          } else {
            return `${this.name} says squawk!`;
          }
    }
    
}
