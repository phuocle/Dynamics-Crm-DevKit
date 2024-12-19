import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Utility to resolve the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the IIFE script into a simulated DOM environment
const dom = new JSDOM(``, { runScripts: "dangerously", resources: "usable" });
const scriptContent = fs.readFileSync(path.resolve(__dirname, '../lib/devkit.js'), 'utf8');
const scriptElement = dom.window.document.createElement('script');
scriptElement.textContent = scriptContent;
dom.window.document.body.appendChild(scriptElement);

describe('devKit', function() {
    it('should have a publicFunction defined', function() {
        expect(dom.window.devKit.publicFunction).to.be.a('function');
    });

    it('should have an add function defined', function() {
        expect(dom.window.devKit.add).to.be.a('function');
    });

    it('should have a subtract function defined', function() {
        expect(dom.window.devKit.subtract).to.be.a('function');
    });

    it('publicFunction should return the correct string', function() {
        expect(dom.window.devKit.publicFunction()).to.equal('I am a public function');
    });

    it('add should return the sum of two numbers', function() {
        expect(dom.window.devKit.add(2, 3)).to.equal(5);
        expect(dom.window.devKit.add(-1, 1)).to.equal(0);
    });

    it('subtract should return the difference of two numbers', function() {
        expect(dom.window.devKit.subtract(5, 3)).to.equal(2);
        expect(dom.window.devKit.subtract(2, 2)).to.equal(0);
    });
});
