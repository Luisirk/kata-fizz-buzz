
export function add (expression: string) {

  let number = Number(expression);

  if(number !==  3){
    return expression;
  }
  return 'Fizz';
  // if(expression === '2') {
  //   return '2';
  // }
  // if(expression === '3') {
  //   return 'Fizz';
  // }
  // if(expression === '4') {
  //   return '4';
  // }
  //
  // return '1';
}
