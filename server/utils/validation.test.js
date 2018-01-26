const chai = require("chai");
const expect = chai.expect;

const {isRealString} = require("./validation.js");

describe("isRealString", () => {
    it("should reject non-string values", () => {
        var result = isRealString(98);
        expect(result).to.equal(false);
    });

    it("should reject string with only spaces", () => {
        var result = isRealString("    ");
        expect(result).to.equal(false);
    });

    it("should allow string with non-space characters", () => {
        var result = isRealString("A string here");
        expect(result).to.equal(true);
    });

});