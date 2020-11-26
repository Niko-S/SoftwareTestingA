import chai from 'chai'
import isObject from '../src/isObject.js'

const expect = chai.expect



describe("Test isObject.js", () => {

   it("no parameter at all -> error", () => expect(() => isObject()).to.throw());

   it("Is object 1", () => expect(isObject({})).to.equal(true));
   it("Is object 2", () => expect(isObject([1, 2, 3])).to.equal(true));
   it("Not object 1", () => expect(isObject(null)).to.equal(false));
   it("Not object 2", () => expect(isObject(1)).to.equal(false));
})