import chai from 'chai'
import castArray from '../src/castArray.js'

const expect = chai.expect

describe("Test castArray.js", () => {

   it("no parameter = [undefined]", () => expect(castArray()).to.eql([undefined]));

   it("1 = [1]", () => expect(castArray(1)).to.eql([1]));
   it("{'a':1} = [{'a':1}]", () => expect(castArray({ 'a': 1 })).to.eql([{ 'a': 1 }]));
   it("abc = [abc]", () => expect(castArray("abc")).to.eql(["abc"]));
   it("null = [null]", () => expect(castArray(null)).to.eql([null]));
   it("undefined = [undefined]", () => expect(castArray(undefined)).to.eql([undefined]));
   it("[1,2,3] = [1,2,3]", () => expect(castArray([1,2,3])).to.eql([1,2,3]));
})