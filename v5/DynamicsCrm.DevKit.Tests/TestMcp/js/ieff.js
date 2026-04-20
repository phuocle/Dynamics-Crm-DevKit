// TestMcp - ieff.js
// Web resource for testing build_ribbon_xml MCP tool

var Ieff = Ieff || {};

/**
 * Called when the ribbon button is clicked.
 * Shows a JS alert to confirm the ribbon button works via MCP.
 * @param {object} primaryControl - The primary control (form or grid context)
 */
Ieff.onButtonClick = function (primaryControl) {
    alert("hello mcp");
};

/**
 * Enable rule for the ribbon button.
 * Always returns true so the button is always enabled.
 * @param {object} primaryControl - The primary control (form or grid context)
 * @returns {boolean}
 */
Ieff.isButtonEnabled = function (primaryControl) {
    return true;
};
