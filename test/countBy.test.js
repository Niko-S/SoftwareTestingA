import chai from 'chai'
import countBy from '../src/countBy.js'

const expect = chai.expect

const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
   ]

const user = [
      { 'user': 'barney', 'active': true }
]


describe("Test countBy.js", () => {

   it("no parameter at all -> error", () => expect(() => countBy()).to.throw());
   
   it("1 true", () => expect(countBy(user, value => value.active)).to.eql({ 'true': 1}));
   it("2 true, 1 false", () => expect(countBy(users, value => value.active)).to.eql({ 'true': 2, 'false': 1 }));
})