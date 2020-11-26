import chai from 'chai'
import countBy from '../src/countBy.js'

const expect = chai.expect

const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
   ]

const singleuser1 = [
      { 'user': 'barney', 'active': true }
]

const singleuser2 = [
   { 'user': 'barney', 'active': false }
]

const empty = [
   {}
]

describe("Test countBy.js", () => {

   it("no parameter at all -> error", () => expect(() => countBy()).to.throw());
   it("Empty array -> error", () => expect(() => countBy(empty, value => value.active)).to.throw());
   
   it("1 true", () => expect(countBy(singleuser1, value => value.active)).to.eql({ 'true': 1}));
   it("2 true, 1 false", () => expect(countBy(users, value => value.active)).to.eql({ 'true': 2, 'false': 1 }));
   it("1 false", () => expect(countBy(singleuser2, value => value.active)).to.eql({ 'false': 1}));
})