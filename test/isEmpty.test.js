import chai from 'chai'
import isEmpty from '../src/isEmpty.js'

const expect = chai.expect

const empty = [
   {}
]


describe("Test isEmpty.js", () => {

   it("no parameter at all -> error", () => expect(() => isEmpty()).to.throw());
   it("Empty array -> error", () => expect(() => isEmpty(empty)).to.throw());

   it("Is empty true 1", () => expect(isEmpty((true))).to.equal(true));
   it("Is empty true 2", () => expect(isEmpty((null))).to.equal(true));
   it("Is empty true 3", () => expect(isEmpty((3))).to.equal(true));
   it("Is empty false 1", () => expect(isEmpty([1, 2, 3])).to.equal(false));
   it("Is empty false 2", () => expect(isEmpty('abc')).to.equal(false));
   it("Is empty false 3", () => expect(isEmpty({ 'a': 1 })).to.equal(false));
})