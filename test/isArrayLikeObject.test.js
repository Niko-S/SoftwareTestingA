import chai from 'chai'
import isArrayLikeObject from '../src/isArrayLikeObject.js'

const expect = chai.expect

const empty = [
      {}
]

describe("Test isArrayLikeObject.js", () => {

   it("Empty array = false", () => expect(isArrayLikeObject(empty)).to.equal(true));
   it("Object([]) = true", () => expect(isArrayLikeObject(Object([]))).to.equal(true));

   it("Can be used in an array + is an object 1", () => expect(isArrayLikeObject([1, 2, 3])).to.equal(true));
   it("Can be used in an array + is an object 2", () => expect(isArrayLikeObject([null])).to.equal(true));
   it("Not an object 1", () => expect(isArrayLikeObject(null)).to.equal(false));
   it("Not an object 2", () => expect(isArrayLikeObject(Function)).to.equal(false));
   it("Not an object 3", () => expect(isArrayLikeObject("abc")).to.equal(false));
})