import chai from 'chai'
import isLength from '../src/isLength.js'

const expect = chai.expect



describe("Test isLength.js", () => {

   it("no parameter at all = false", () => expect(isLength()).to.equal(false));

   it("Can be used in array 1", () => expect(isLength(3)).to.equal(true));
   it("Can be used in array 2", () => expect(isLength(1234567890)).to.equal(true));
   it("Can't be used in array 1", () => expect(isLength(Number.MAX_VALUE)).to.equal(false));
   it("Can't be used in array 2", () => expect(isLength(Number.MIN_VALUE)).to.equal(false));
   it("Can't be used in array 2", () => expect(isLength(Infinity)).to.equal(false));
   it("Can't be used in array 3", () => expect(isLength("ABC")).to.equal(false));
   it("Can't be used in array 3", () => expect(isLength('3')).to.equal(false));
})