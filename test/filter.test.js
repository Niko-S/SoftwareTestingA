import chai from 'chai'
import filter from '../src/filter.js'

const expect = chai.expect

const users = [
   { 'user': 'barney', 'active': true },
   { 'user': 'fred',   'active': true }
]

const empty = [
      {}
]

const singleuser = [
   { 'user': 'barney', 'active': true }
]

describe("Test filter.js", () => {

   it("no parameter at all -> error", () => expect(() => filter()).to.throw());
   it("Empty array -> error", () => expect(() => filter(empty, value => value.active)).to.throw());

   it("Barney, Fred", () => expect(filter(users, ({ active }) => active)).to.eql(['active: true', 'user: barney']['active: true', 'user: fred']));
   it("Barney", () => expect(filter(singleuser, ({ active }) => active)).to.eql(['"active": true', '"user": "barney"']));
})