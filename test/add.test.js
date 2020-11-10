import chai from 'chai'
import add from '../src/add.js'

const expect = chai.expect

describe("Test add.js", () => {
   it("no parameters = 0", () => expect(add()).to.equal(0));

   it("0 + 0 = 0", () => expect(add(0, 0)).to.equal(0));
   it("0 + MAX = MAX", () => expect(add(0, Number.MAX_VALUE)).to.equal(Number.MAX_VALUE));
   it("0 + MAX NEGATIVE = MAX NEGATIVE", () => expect(add(0, -Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE));
   it("0 + Infinity = Infinity", () => expect(add(0, Number.POSITIVE_INFINITY)).to.equal(Number.POSITIVE_INFINITY));
   it("0 + -Infinity = -Infinity", () => expect(add(0, Number.NEGATIVE_INFINITY)).to.equal(Number.NEGATIVE_INFINITY));

   it("MAX + MAX = Infinity", () => expect(add(Number.MAX_VALUE, Number.MAX_VALUE)).to.equal(Infinity));
   it("MAX + Infinity = Infinity", () => expect(add(Number.MAX_VALUE, Number.POSITIVE_INFINITY)).to.equal(Number.POSITIVE_INFINITY));
   it("MAX + -Infinity = -Infinity", () => expect(add(Number.MAX_VALUE, Number.NEGATIVE_INFINITY)).to.equal(Number.NEGATIVE_INFINITY));
   it("MAX + 0 = MAX", () => expect(add(Number.MAX_VALUE, 0)).to.equal(Number.MAX_VALUE));

   it("MAX NEGATIVE + MAX NEGATIVE = -Infinity", () => expect(add(-Number.MAX_VALUE, -Number.MAX_VALUE)).to.equal(Number.NEGATIVE_INFINITY));

   it("Infinity + Infinity = Infinity", () => expect(add(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)).to.equal(Number.POSITIVE_INFINITY));
   it("-Infinity + -Infinity = -Infinity", () => expect(add(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)).to.equal(Number.NEGATIVE_INFINITY));
})
