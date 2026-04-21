var MCP = MCP || {};

// ── Form (PrimaryControl, PrimaryEntityTypeName, PrimaryItemIds) ──

MCP.sendForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    alert("Form - Send (Main Action)\nEntity: " + primaryEntityTypeName + "\nIds: " + primaryItemIds);
};

MCP.isSendEnabledForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    return true;
};

MCP.sendEmailForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    alert("Form - Send Email\nEntity: " + primaryEntityTypeName + "\nIds: " + primaryItemIds);
};

MCP.isEmailEnabledForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    return true;
};

MCP.sendSmsForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    alert("Form - Send SMS\nEntity: " + primaryEntityTypeName + "\nIds: " + primaryItemIds);
};

MCP.isSmsEnabledForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    return true;
};

// ── Homepage Grid (SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds) ──

MCP.sendGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("Grid - Send (Main Action)\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isSendEnabledGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

MCP.sendEmailGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("Grid - Send Email\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isEmailEnabledGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

MCP.sendSmsGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("Grid - Send SMS\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isSmsEnabledGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

// ── Sub Grid (SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds) ──

MCP.sendSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("SubGrid - Send (Main Action)\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isSendEnabledSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

MCP.sendEmailSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("SubGrid - Send Email\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isEmailEnabledSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

MCP.sendSmsSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("SubGrid - Send SMS\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isSmsEnabledSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};
