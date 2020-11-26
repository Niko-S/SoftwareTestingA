import chai from 'chai'
import every from '../src/every.js'

const expect = chai.expect

describe("Test every.js", () => {
   it("no parameters = true",
      () => expect(every()).to.equal(true));
   it("([]) = true",
      () => expect(every([])).to.equal(true));
   it("([], true) = true",
      () => expect(every([], true)).to.equal(true));
   it("([], false) = true",
      () => expect(every([], false)).to.equal(true));
   it("([], e => e === 4) = true",
      () => expect(every([], e => e === 4)).to.equal(true));


   it("([true, 1, null, 'yes'], Boolean) = false",
      () => expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false));
   it("([true], Boolean) = true",
      () => expect(every([true], Boolean)).to.equal(true));
   it("([true, false], Boolean) = true",
      () => expect(every([true, false], e => typeof e === "boolean")).to.equal(true));
   it("([1,1,1,1], e => e === 1) = true",
      () => expect(every([1, 1, 1, 1], e => e === 1)).to.equal(true));
})