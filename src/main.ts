
export function add (expression: string) {

  let number = Number(expression);

  if( number % 3 === 0){
    return 'Fizz';
  }

  // if(number == 3 ){
  //   return 'Fizz';
  // }
  if(number == 5 ){
    return 'Buzz';
  }
  return expression;

  }


