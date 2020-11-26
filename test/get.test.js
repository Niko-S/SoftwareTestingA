import chai from 'chai'
import get from '../src/get.js'

const expect = chai.expect

const object = { 'a': [{ 'b': { 'c': 3 } }] }

const empty = [
      {}
]


describe("Test get.js", () => {

   it("no parameter at all -> error", () => expect(() => get()).to.throw());
   it("Empty array -> error", () => expect(() => get(empty, "empty")).to.throw());

   it("=> 3", () => expect(get(object, 'a[0].b.c')).to.equal(3));
   it("=> 3 ver 2", () => expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3));
   it("=> default", () => expect(get(object, 'a.b.c', 'default')).to.equal('default'));
})