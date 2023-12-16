function numberCalculation() {
    let i = 0;
    return function (number) {
        return i += number;
    }
}

const sum = numberCalculation();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));