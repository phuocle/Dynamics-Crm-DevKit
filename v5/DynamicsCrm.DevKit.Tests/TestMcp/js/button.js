var MCP = MCP || {};

// ── Form (PrimaryControl, PrimaryEntityTypeName, PrimaryItemIds) ──

MCP.buttonFormClick = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    alert("Form - MCP Button\nEntity: " + primaryEntityTypeName + "\nIds: " + primaryItemIds);
};

MCP.isButtonFormEnabled = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    return true;
};

// ── Homepage Grid (SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds) ──

MCP.buttonGridClick = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("Grid - MCP Button\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isButtonGridEnabled = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

// ── Sub Grid (SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds) ──

MCP.buttonSubGridClick = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("SubGrid - MCP Button\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isButtonSubGridEnabled = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};
