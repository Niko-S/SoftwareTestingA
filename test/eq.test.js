import chai from 'chai'
import eq from '../src/eq.js'

const expect = chai.expect

describe("Test eq.js", () => {
   const object1 = { 'a': 1 }
   const object2 = { 'a': 1 }

   it("(object1) = false", () => expect(eq(object1)).to.equal(false));
   it("(undefined, object1) = false", () => expect(eq(undefined, object2)).to.equal(false));

   it("(object1, object1) = true", () => expect(eq(object1, object1)).to.equal(true));
   it("(object1, object2) = false", () => expect(eq(object1, object2)).to.equal(false));

   it("('a', 'a') = true", () => expect(eq('a', 'a')).to.equal(true));
   it("('a', Object('a')) = false", () => expect(eq('a', Object('a'))).to.equal(false));
})