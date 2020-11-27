import chai from 'chai'
import isArrayLike from '../src/isArrayLike.js'

const expect = chai.expect

const empty = [
      {}
]


describe("Test isArrayLike.js", () => {

      it("no parameter at all = false", () => expect(isArrayLike()).to.equal(false));
      it("Empty array = true", () => expect(isArrayLike(empty)).to.equal(true));

      it("Can be used in an array 1", () => expect(isArrayLike([1, 2, 3])).to.equal(true));
      it("Can be used in an array 2", () => expect(isArrayLike("1")).to.equal(true));
      it("Can't be used in an array 1", () => expect(isArrayLike(null)).to.equal(false));
      it("Can't be used in an array 2", () => expect(isArrayLike(Function)).to.equal(false));
})