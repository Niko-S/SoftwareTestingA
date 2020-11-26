import chai from 'chai'
import keys from '../src/keys.js'

const expect = chai.expect



describe("Test keys.js", () => {

   it("no parameter at all -> error", () => expect(() => keys()).to.throw());

   it("Is symbol 1", () => expect(keys(Symbol.iterator)).to.equal(true));
   it("Not symbol 1", () => expect(keys([])).to.equal(false));
   it("Not symbol 2", () => expect(keys(1)).to.equal(false));
   it("Not symbol 3", () => expect(keys("1")).to.equal(false));
   it("Not symbol 3", () => expect(keys('A')).to.equal(false));
})