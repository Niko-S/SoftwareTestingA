import chai from 'chai'
import upperFirst from '../src/upperFirst.js'

const expect = chai.expect

describe("Test upperFirst.js.", () => {
   it("no parameters = ''",
      () => expect(upperFirst()).to.eql(''));
   it("(123) -> error",
      () => expect(() => upperFirst(123)).to.throw());


   it("('fred') = 'Fred'",
      () => expect(upperFirst('fred')).to.eql('Fred'));
   it("('FRED') = 'FRED'",
      () => expect(upperFirst('FRED')).to.eql('FRED'));
})