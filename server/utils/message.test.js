const chai = require("chai");
const expect = chai.expect;

var {generateMessage} = require("./message");

describe("generateMessage", () => {
    it("should generate the correct message object", () => {
        var from = "John";
        var text = "Hello everyone!";
        var message = generateMessage(from, text);

        expect(message.from).to.equal(from);
        expect(message.text).to.equal(text);
        expect(message.createdAt).to.be.a("number");
    });
});
