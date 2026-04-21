var MCP = MCP || {};

// ── Form (PrimaryControl, PrimaryEntityTypeName, PrimaryItemIds) ──

MCP.exportExcelForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    alert("Form - Export to Excel\nEntity: " + primaryEntityTypeName + "\nIds: " + primaryItemIds);
};

MCP.isExcelEnabledForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    return true;
};

MCP.exportPdfForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    alert("Form - Export to PDF\nEntity: " + primaryEntityTypeName + "\nIds: " + primaryItemIds);
};

MCP.isPdfEnabledForm = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
    return true;
};

// ── Homepage Grid (SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds) ──

MCP.exportExcelGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("Grid - Export to Excel\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isExcelEnabledGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

MCP.exportPdfGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("Grid - Export to PDF\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isPdfEnabledGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

// ── Sub Grid (SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds) ──

MCP.exportExcelSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("SubGrid - Export to Excel\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isExcelEnabledSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};

MCP.exportPdfSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    alert("SubGrid - Export to PDF\nEntity: " + selectedEntityTypeName + "\nFirst: " + firstSelectedItemId + "\nIds: " + selectedControlSelectedItemIds);
};

MCP.isPdfEnabledSubGrid = function (selectedControl, selectedEntityTypeName, firstSelectedItemId, selectedControlSelectedItemIds) {
    return true;
};
