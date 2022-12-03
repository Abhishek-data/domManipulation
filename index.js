// funtion currying
let multiply = function(a, b){
    console.log(a * b)
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5)

// funtion currying with the help of closure

let multiply1 = function(a){
    return function(b){
        console.log(a * b)
    }
}

let multiplyByFour = multiply1(4);
multiplyByFour(5)
