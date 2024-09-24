import { expect } from "vitest";
import{add} from "./main" ;

describe("fizz-fuzz", () => {

  it ('returns 1 when expression is 1',()=>{

    expect(add("1")).toBe('1');
  });
  it ('returns 2 when expression is 2',()=>{

    expect(add("2")).toBe('2');
  });
  it ('returns Fizz when expression is 3',()=>{

    expect(add("3")).toBe('Fizz');
  });
  it ('returns 4 when expression is 4',()=>{

    expect(add("4")).toBe('4');
  });
  it ('returns Buzz when expression is 5',()=>{

    expect(add("5")).toBe('Buzz');
  });
  it ('returns Fizz when expression is multiple of 3',()=>{

    expect(add("6")).toBe('Fizz');
  });

});
