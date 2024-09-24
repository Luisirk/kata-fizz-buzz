
export function add (expression: string) {

  let number = Number(expression);

  if(number !==  3){
    return expression;
  }
  return 'Fizz';

}
