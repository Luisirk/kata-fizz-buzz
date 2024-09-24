
export function add (expression: string) {
    let number = Number(expression);
    if (number %3 === 0 && number %5 ===0) {
        return 'FizzFuzz'
    }
    if (number %3 === 0) {
        return 'Fizz'
    }
    if (number %5 === 0) {
        return 'Fuzz'
    }

    return expression


}