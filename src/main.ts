
export function add (expression: string) {
    let number = Number(expression);
    let result = ''

    if ( number %3 ===0){
        result +='Fizz'
    }
    if ( number %5 ===0){
        result +='Fuzz'
    }
    return result || expression;


}