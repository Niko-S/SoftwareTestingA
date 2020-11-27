import chai from 'chai'
import isArguments from '../src/isArguments.js'

const expect = chai.expect

describe("Test isArguments.js", () => {
      it("no parameter at all = false", () => expect(isArguments()).to.equal(false));
      
      it("argument => true", () => expect(isArguments(function () { return arguments }())).to.equal(true));
      it("not an argument 1 => false", () => expect(isArguments([1, 2, 3])).to.equal(false));
      it("not an argument 2 => false", () => expect(isArguments(null)).to.equal(false));
      it("not an argument 3 => false", () => expect(isArguments(true)).to.equal(false));
})