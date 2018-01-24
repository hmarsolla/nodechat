const chai = require("chai");
const expect = chai.expect;

var {generateMessage, generateLocationMessage} = require("./message");

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

describe("generateLocationMessage", () => {
    it("should generate location message object", () => {
        var from = "Deb";
        var latitude = 28;
        var longitude = 84;
        var url = "https://www.google.com/maps?q=28,84"
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.from).to.equal(from);
        expect(message.url).to.equal(url);
        expect(message.createdAt).to.be.a("number");
    });
});
