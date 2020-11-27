import chai from 'chai'
import map from '../src/map.js'

const expect = chai.expect

function square(n) {
   return n * n
}

describe("Test map.js", () => {

   it("no parameter at all -> error", () => expect(() => map()).to.throw());

   it("Map 1", () => expect(map([4, 8], square)).to.eql([16, 64]));
   it("Map 2", () => expect(map([2, 4], square)).to.eql([4, 16]));
})