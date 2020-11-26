import chai from 'chai'
import toString from '../src/toString.js'

const expect = chai.expect

describe("Test toString.js.", () => {
   it("no parameters = ''",
      () => expect(toString()).to.eql(''));
   it("null = ''",
      () => expect(toString(null)).to.eql(''));

   it("(-0) = '-0'",
      () => expect(toString(-0)).to.eql('-0'));
   it("([1, 2, 3]) = '1,2,3'",
      () => expect(toString([1, 2, 3])).to.eql('1,2,3'));
   it("('test') = 'test'",
      () => expect(toString('test')).to.eql('test'));
})