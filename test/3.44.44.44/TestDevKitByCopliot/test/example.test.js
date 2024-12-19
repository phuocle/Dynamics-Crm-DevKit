const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load the IIFE script into a simulated DOM environment
const dom = new JSDOM(``, { runScripts: "dangerously", resources: "usable" });
const scriptContent = fs.readFileSync(path.resolve(__dirname, './example.js'), 'utf8');
const scriptElement = dom.window.document.createElement('script');
scriptElement.textContent = scriptContent;
dom.window.document.body.appendChild(scriptElement);

describe('myModule', function() {
    it('should have a publicFunction defined', function() {
        expect(dom.window.myModule.publicFunction).to.be.a('function');
    });

    it('should have an add function defined', function() {
        expect(dom.window.myModule.add).to.be.a('function');
    });

    it('should have a subtract function defined', function() {
        expect(dom.window.myModule.subtract).to.be.a('function');
    });

    it('publicFunction should return the correct string', function() {
        expect(dom.window.myModule.publicFunction()).to.equal('I am a public function');
    });

    it('add should return the sum of two numbers', function() {
        expect(dom.window.myModule.add(2, 3)).to.equal(5);
        expect(dom.window.myModule.add(-1, 1)).to.equal(0);
    });

    it('subtract should return the difference of two numbers', function() {
        expect(dom.window.myModule.subtract(5, 3)).to.equal(2);
        expect(dom.window.myModule.subtract(2, 2)).to.equal(0);
    });
});

