import chai from 'chai'
import capitalize from '../src/capitalize.js'

const expect = chai.expect

describe("Test capitalize.js", () => {
   const lowerCapitalize = "capitalize";
   const upperCapitalize = "CAPITALIZE";
   const randomCapitalize = "cApItAlIzE"
   const str = "capitalize THIS";

   it("no parameter -> error", () => expect(() => capitalize()).to.throw());

   it("capitalize = Capitalize", () => expect(capitalize(lowerCapitalize)).to.equal("Capitalize"));
   it("CAPITALIZE = Capitalize", () => expect(capitalize(upperCapitalize)).to.equal("Capitalize"));
   it("cApItAlIzE = Capitalize", () => expect(capitalize(randomCapitalize)).to.equal("Capitalize"));
   it("capitalize THIS = Capitalize this", () => expect(capitalize(str)).to.equal("Capitalize this"));

})