import chai from 'chai'
import isObjectLike from '../src/isObjectLike.js'

const expect = chai.expect



describe("Test isObjectLike.js", () => {

   it("no parameter at all = false", () => expect(isObjectLike()).to.equal(false));

   it("Is objectlike 1", () => expect(isObjectLike({})).to.equal(true));
   it("Is objectlike 2", () => expect(isObjectLike([1, 2, 3])).to.equal(true));
   it("Not objectlike 1", () => expect(isObjectLike(null)).to.equal(false));
   it("Not objectlike 2", () => expect(isObjectLike(1)).to.equal(false));
   it("Not objectlike 3", () => expect(isObjectLike(Function)).to.equal(false));
})