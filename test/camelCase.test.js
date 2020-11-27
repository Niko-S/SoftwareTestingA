import chai from 'chai'
import camelCase from '../src/camelCase.js'

const expect = chai.expect

describe("Test camelCase.js", () => {
   const foo = "Foo";
   const fooBar = "Foo Bar";

   it("Foo = foo", () => expect(camelCase(foo)).to.equal("foo"));
   it("Foo Bar = fooBar", () => expect(camelCase(fooBar)).to.equal("fooBar"));
})