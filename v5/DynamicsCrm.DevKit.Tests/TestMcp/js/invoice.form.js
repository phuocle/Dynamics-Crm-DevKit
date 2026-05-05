var TestMcp = TestMcp || {};
TestMcp.Invoice = TestMcp.Invoice || {};

(function () {
    "use strict";

    TestMcp.Invoice.syncLineStatus = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
        var invoiceId = primaryControl.data.entity.getId().replace(/[{}]/g, "");
        var statusAttr = primaryControl.getAttribute("v5_invoicestatus");
        if (!statusAttr) return;
        var invoiceStatus = statusAttr.getValue();
        if (invoiceStatus === null || invoiceStatus === undefined) return;

        Xrm.WebApi.retrieveMultipleRecords(
            "v5_invoiceline",
            "?$select=v5_invoicelineid&$filter=_v5_invoice_value eq " + invoiceId
        ).then(function (result) {
            var updates = result.entities.map(function (line) {
                return Xrm.WebApi.updateRecord("v5_invoiceline", line.v5_invoicelineid, { v5_linestatus: invoiceStatus });
            });
            Promise.all(updates).then(function () {
                Xrm.Navigation.openAlertDialog({ text: "Line Status synced successfully." });
            });
        }).catch(function (error) {
            console.error("syncLineStatus error: " + error.message);
        });
    };

    TestMcp.Invoice.canSyncLineStatus = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
        var id = primaryControl.data.entity.getId();
        return !!id && id !== "";
    };

})();
