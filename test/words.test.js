import chai from 'chai'
import words from '../src/words.js'

const expect = chai.expect

describe("Test words.js.", () => {
   it("no parameters -> error",
      () => expect(() => words()).to.throw());
   it("(undefined, /[^, ]+/g) -> error",
      () => expect(() => words(undefined, /[^, ]+/g)).to.throw());
   it("(null, /[^, ]+/g) -> error",
      () => expect(() => words(null, /[^, ]+/g)).to.throw());
   it("('foo bar', undefined) -> error",
      () => expect(words('foo bar', undefined)).to.eql(['foo', 'bar']));
   it("('foo bar', null) = []",
      () => expect(words('foo bar', null)).to.eql([]));
   it("(123) -> error",
      () => expect(() => words(123)).to.throw());


   it("('foo bar') = ['foo', 'bar']",
      () => expect(words('foo bar')).to.eql(['foo', 'bar']));
   it("('fred, barney, & pebbles') = ['fred', 'barney', 'pebbles']",
      () => expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles']));
   it("('fred, barney, & pebbles', /[^, ]+/g) = ['fred', 'barney', '&', 'pebbles']",
      () => expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.eql(['fred', 'barney', '&', 'pebbles']));
})