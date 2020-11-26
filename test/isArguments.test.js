import chai from 'chai'
import isArguments from '../src/isArguments.js'

const expect = chai.expect

const empty = [
      {}
]


describe("Test isArguments.js", () => {

   it("no parameter at all -> error", () => expect(() => isArguments()).to.throw());
   it("Empty array -> error", () => expect(() => isArguments(empty, "empty")).to.throw());

   it("argument => true", () => expect(isArguments(function() { return arguments }())).to.equal(true));
   it("not an argument 1 => false", () => expect(isArguments([1, 2, 3])).to.equal(false));
   it("not an argument 2 => false", () => expect(isArguments(null)).to.equal(false));
   it("not an argument 3 => false", () => expect(isArguments(true)).to.equal(false));
})