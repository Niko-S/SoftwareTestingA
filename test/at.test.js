import chai from 'chai'
import at from '../src/at.js'

const expect = chai.expect

describe("Test at.js", () => {
   const testObject = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   
   it("at(null, ['a.b']) -> error", () => expect(at(null, ['a.b'])).to.eql([undefined]));
   it("at(object, null) -> error", () => expect(at(testObject, null)).to.eql([undefined]));

   it("object = { 'a': [{ 'b': { 'c': 3 } }, 4] }, at(object, ['a[0].b.c', 'a[1]']) -> [3, 4]", 
   () => expect(at(testObject, ['a[0].b.c', 'a[1]'])).to.eql([3,4]) );
})