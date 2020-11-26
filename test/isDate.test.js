import chai from 'chai'
import isDate from '../src/isDate.js'

const expect = chai.expect


describe("Test isDate.js", () => {

   it("no parameter at all -> error", () => expect(() => isDate()).to.throw());

   it("Not a date 1", () => expect(isDate(('Mon April 23 2012'))).to.equal(false));
   it("Not a date 2", () => expect(isDate((null))).to.equal(false));
   it("True date", () => expect(isDate(new Date)).to.equal(true));
})