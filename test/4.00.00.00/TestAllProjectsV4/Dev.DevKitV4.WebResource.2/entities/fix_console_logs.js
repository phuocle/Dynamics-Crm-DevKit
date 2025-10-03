// Script to standardize console.log patterns in Account.js
// - Changes all "Test X:" patterns to "⚡ Test X:"
// - Removes console.log lines with just dashes

const fs = require('fs');

function fixConsoleLogs(content) {
    let fixed = content;
    
    // Pattern 1: console.log("Test X: -> console.log("⚡ Test X:
    fixed = fixed.replace(/console\.log\("Test (\d+):/g, 'console.log("⚡ Test $1:');
    
    // Pattern 2: console.log("*** Test X: -> console.log("⚡ Test X:
    fixed = fixed.replace(/console\.log\("\*\*\* Test (\d+):/g, 'console.log("⚡ Test $1:');
    
    // Pattern 3: console.log("?? Test X: -> console.log("⚡ Test X: (in case of encoding issues)
    fixed = fixed.replace(/console\.log\("\?\? Test (\d+):/g, 'console.log("⚡ Test $1:');
    
    // Pattern 4: Replace any other emoji with ⚡ (📋, 🔍, etc)
    fixed = fixed.replace(/console\.log\("[\u{1F300}-\u{1F9FF}] Test (\d+):/gu, 'console.log("⚡ Test $1:');
    
    // Pattern 5: Remove console.log lines with just dashes or equals
    // Match lines like: console.log("----------"); or console.log('---------');
    fixed = fixed.replace(/[\t ]*console\.log\(["\'][-=─]+["\']\);?\s*\n/g, '');
    
    return fixed;
}

function main() {
    const inputFile = 'Account.js';
    
    console.log(`Reading ${inputFile}...`);
    const content = fs.readFileSync(inputFile, 'utf8');
    
    const originalLength = content.length;
    
    console.log('Fixing console.log patterns...');
    const fixedContent = fixConsoleLogs(content);
    
    console.log(`Writing fixed content to ${inputFile}...`);
    fs.writeFileSync(inputFile, fixedContent, 'utf8');
    
    // Report changes
    const bytesRemoved = originalLength - fixedContent.length;
    console.log('\n✓ Done!');
    console.log(`  Original size: ${originalLength.toLocaleString()} bytes`);
    console.log(`  New size: ${fixedContent.length.toLocaleString()} bytes`);
    console.log(`  Difference: ${bytesRemoved.toLocaleString()} bytes`);
    
    // Count the ⚡ symbols
    const testCount = (fixedContent.match(/console\.log\("⚡ Test \d+:/g) || []).length;
    console.log(`  Total '⚡ Test X:' patterns: ${testCount}`);
    
    // Check for any remaining non-standard patterns
    const remainingPlain = (fixedContent.match(/console\.log\("Test \d+:/g) || []).length;
    const remainingStars = (fixedContent.match(/console\.log\("\*\*\* Test \d+:/g) || []).length;
    const remainingQuestion = (fixedContent.match(/console\.log\("\?\? Test \d+:/g) || []).length;
    const remainingDashes = (fixedContent.match(/console\.log\(["\'][-=]+["\']\)/g) || []).length;
    
    const totalRemaining = remainingPlain + remainingStars + remainingQuestion;
    if (totalRemaining > 0) {
        console.log(`\n⚠ Warning: Found ${totalRemaining} non-standard test patterns remaining!`);
    } else {
        console.log(`\n✓ All test logs are now standardized with ⚡ symbol!`);
    }
    
    if (remainingDashes > 0) {
        console.log(`⚠ Warning: Found ${remainingDashes} dash lines remaining!`);
    } else {
        console.log(`✓ All dash lines removed!`);
    }
}

main();
