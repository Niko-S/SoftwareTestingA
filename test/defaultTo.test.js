import chai from 'chai'
import defaultTo from '../src/defaultTo.js'

const expect = chai.expect

describe("Test defaultTo.js", () => {

   it("no parameters = undefined", () => expect(defaultTo()).to.equal(undefined));

   it("(null, 10) = 10", () => expect(defaultTo(null, 10)).to.equal(10));
   it("(undefined, 10) = 10", () => expect(defaultTo(undefined, 10)).to.equal(10));
   it("(NaN, 10) = 10", () => expect(defaultTo(NaN, 10)).to.equal(10));
   it("(20, 10) = 20", () => expect(defaultTo(20, 10)).to.equal(20));

   // Unnecessary to do type checks?
   it("(null, 'test') = 'test'", () => expect(defaultTo(null, 'test')).to.equal('test'));
   it("(undefined, 'test') = 'test'", () => expect(defaultTo(undefined, 'test')).to.equal('test'));
   it("(NaN, 'test') = 'test'", () => expect(defaultTo(NaN, 'test')).to.equal('test'));
   it("('string', 'test') = 'string'", () => expect(defaultTo('string', 'test')).to.equal('string'));

   it("(null, true) = true", () => expect(defaultTo(null, true)).to.equal(true));
   it("(undefined, true) = true", () => expect(defaultTo(undefined, true)).to.equal(true));
   it("(NaN, true) = true", () => expect(defaultTo(NaN, true)).to.equal(true));
   it("(false, true) = false", () => expect(defaultTo(false, true)).to.equal(false));
})