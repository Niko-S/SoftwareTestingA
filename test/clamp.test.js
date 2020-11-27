import chai from 'chai'
import clamp from '../src/clamp.js'

const expect = chai.expect

describe("Test clamp.js", () => {

   it("B, A, D => NaN", () => expect(clamp("B", "A", "D")).to.eql(NaN));
   it("-10, -5, 5 => -5", () => expect(clamp(-10, -5, 5)).to.equal(-5));
   it("10, -5, 5 => 5", () => expect(clamp(10, -5, 5)).to.equal(5));
   it("-100, -50, 50 => -50", () => expect(clamp(-100, -50, 50)).to.equal(-50));
   it("100, -50, 50 => 50", () => expect(clamp(100, -50, 50)).to.equal(50));
   it("1.5, -50, 0.5 => 0.5", () => expect(clamp(1.5, -50, 0.5)).to.equal(0.5));
   it("1.5, 0.5, -50 => 0.5. Lower bound higher than upper bound, should throw error?",
      () => expect(clamp(1.5, 0.5, -50)).to.equal(0.5));
})