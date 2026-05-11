"use strict";

var ProductionMcp = ProductionMcp || {};
ProductionMcp.Invoice = (function () {
    function cleanId(id) {
        return id ? id.replace(/[{}]/g, "") : "";
    }

    function getFormContext(primaryControl) {
        return primaryControl && primaryControl.getAttribute ? primaryControl : null;
    }

    function canSyncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) {
        var formContext = getFormContext(primaryControl);
        return !!(formContext && cleanId(formContext.data.entity.getId()));
    }

    function syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) {
        var formContext = getFormContext(primaryControl);
        if (!formContext) {
            return Promise.resolve();
        }

        var invoiceId = cleanId(formContext.data.entity.getId());
        var statusAttribute = formContext.getAttribute("devkit_invoicestatus");
        var invoiceStatus = statusAttribute ? statusAttribute.getValue() : null;

        if (!invoiceId || invoiceStatus === null || invoiceStatus === undefined) {
            return Promise.resolve();
        }

        var query = "?$select=devkit_linestatus&$filter=_devkit_invoice_value eq " + invoiceId;
        return Xrm.WebApi.retrieveMultipleRecords("devkit_invoiceline", query).then(function (result) {
            var updates = result.entities.map(function (line) {
                return Xrm.WebApi.updateRecord("devkit_invoiceline", line.devkit_invoicelineid, {
                    devkit_linestatus: invoiceStatus
                });
            });

            return Promise.all(updates);
        });
    }

    return {
        syncLineStatus: syncLineStatus,
        canSyncLineStatus: canSyncLineStatus
    };
})();
