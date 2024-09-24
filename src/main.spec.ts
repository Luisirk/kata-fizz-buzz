import { expect } from "vitest";
import{add} from "./main" ;

describe("fizz-fuzz", () => {

  it ('returns 1 when expression is 1',()=>{

    expect(add("1")).toBe('1');
  });
});
