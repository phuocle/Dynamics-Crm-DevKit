// jest.setup.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Read the devkit.js file
const devkitPath = path.resolve(__dirname, './lib/devkit.js');
const devkitScript = fs.readFileSync(devkitPath, 'utf8');

// Create a script to be executed
const script = new vm.Script(devkitScript);

// Create a sandbox and execute the script
const sandbox = { devKit: undefined };
vm.createContext(sandbox);
script.runInContext(sandbox);

// Expose devKit to the global scope
global.devKit = sandbox.devKit;
