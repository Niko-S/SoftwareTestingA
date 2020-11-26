import chai from 'chai'
import toNumber from '../src/toNumber.js'

const expect = chai.expect

describe("Test toNumber.js.", () => {
   it("no parameters = 0",
      () => expect(toNumber()).to.eql(NaN));

   it("(3.2) = 3.2",
      () => expect(toNumber(3.2)).to.equal(3.2));
   it("(-3.2) = -3.2",
      () => expect(toNumber(-3.2)).to.equal(-3.2));
   it("(Number.MIN_VALUE) = 5e-324",
      () => expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324));
   it("(Infinity) = Infinity",
      () => expect(toNumber(Infinity)).to.equal(Infinity));
   it("('3.2') = 3.2",
      () => expect(toNumber('3.2')).to.equal(3.2));
   it("(Symbol('test')) = NaN",
      () => expect(toNumber(Symbol('test'))).to.eql(NaN));
   it("('test') = NaN",
      () => expect(toNumber('test')).to.eql(NaN));
   it("('0b110') = 6",
      () => expect(toNumber('0b110')).to.equal(6));
   it("('0o17') = 15",
      () => expect(toNumber('0o17')).to.equal(15));
   it("('0x19') = 25",
      () => expect(toNumber('0x19')).to.equal(25));
})