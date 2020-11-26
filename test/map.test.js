import chai from 'chai'
import map from '../src/map.js'

const expect = chai.expect



describe("Test map.js", () => {

   it("no parameter at all -> error", () => expect(() => map()).to.throw());

   it("Is symbol 1", () => expect(map(Symbol.iterator)).to.equal(true));
   it("Not symbol 1", () => expect(map([])).to.equal(false));
   it("Not symbol 2", () => expect(map(1)).to.equal(false));
   it("Not symbol 3", () => expect(map("1")).to.equal(false));
   it("Not symbol 3", () => expect(map('A')).to.equal(false));
})