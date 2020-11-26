import chai from 'chai'
import endsWith from '../src/endsWith.js'

const expect = chai.expect

describe("Test endsWith.js", () => {

   it("no parameters -> error", () => expect(() => endsWith()).to.throw());
   it("('abc') -> error", () => expect(() => endsWith('abc')).to.throw());
   it("(undefined, 'a') -> error", () => expect(() => endsWith(undefined, 'a')).to.throw());

   it("('abc', 'c') = true", () => expect(endsWith('abc', 'c')).to.equal(true));
   it("('abc', 'c', 0) = false", () => expect(endsWith('abc', 'c', 0)).to.equal(false));
   it("('abc', 'b') = false", () => expect(endsWith('abc', 'b')).to.equal(false));
   it("('abc', 'b', 2) = true", () => expect(endsWith('abc', 'b', 2)).to.equal(true));
   it("('abcd', 'bc', 3) = true", () => expect(endsWith('abcd', 'bc', 3)).to.equal(true));
   it("('abcd', 'abcd', 10) = true", () => expect(endsWith('abcd', 'abcd', 10)).to.equal(true));
})