import chai from 'chai'
import isSymbol from '../src/isSymbol.js'

const expect = chai.expect



describe("Test isSymbol.js", () => {

   it("no parameter at all -> error", () => expect(() => isSymbol()).to.throw());

   it("Is symbol 1", () => expect(isSymbol(Symbol.iterator)).to.equal(true));
   it("Not symbol 1", () => expect(isSymbol([])).to.equal(false));
   it("Not symbol 2", () => expect(isSymbol(1)).to.equal(false));
   it("Not symbol 3", () => expect(isSymbol("1")).to.equal(false));
   it("Not symbol 3", () => expect(isSymbol('A')).to.equal(false));
})