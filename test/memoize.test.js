import chai from 'chai'
import memoize from '../src/memoize.js'

const expect = chai.expect

describe("Test eq.js. Memoize func () => a + b, where a=1 and b=2", () => {
   let a = 1;
   let b = 2;

   const testFunc = () => a + b;
   const memoizedFunc = memoize(testFunc);

   it("no parameters -> error", () => expect(() => memoize()).to.throw());
   it("(undefined, 1) -> error", () => expect(() => memoize(undefined, 'a')).to.throw());

   it("memoizedFunc() = 3", () => expect(memoizedFunc()).to.equal(3));
   it("a = 5; memoizedFunc() = 3", () => {
      a = 5;
      expect(memoizedFunc()).to.equal(3)
   });
})