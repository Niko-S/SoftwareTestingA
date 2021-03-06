import chai from 'chai'
import keys from '../src/keys.js'

const expect = chai.expect

function Foo() {
   this.a = 1
   this.b = 2
}

Foo.prototype.c = 3

let object1 = {};

describe("Test keys.js", () => {

   it("no parameter at all = []", () => expect(keys()).to.eql([]));
   it("object without properties = []", () => expect(keys(object1)).to.eql([]));


   it("key 1", () => expect(keys(new Foo)).to.eql,(['a', 'b']));
   it("Key 2", () => expect(keys('hi')).to.eql(['0', '1']));
   it("Key 3", () => expect(keys("123")).to.eql(['0', '1', '2']));
})