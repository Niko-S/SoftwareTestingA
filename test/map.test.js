import chai from 'chai'
import map from '../src/map.js'

const expect = chai.expect

function square(n) {
   return n * n
}

describe("Test map.js", () => {

   it("no parameter at all = []", () => expect(map()).to.eql([]));
   it("([1,2,3]) -> error", () => expect(() => map([1,2,3])).to.throw());

   it("Map 1", () => expect(map([4, 8], square)).to.eql([16, 64]));
})