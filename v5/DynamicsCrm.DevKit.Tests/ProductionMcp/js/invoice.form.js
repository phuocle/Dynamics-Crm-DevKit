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

    async function confirmSyncLineStatus() {
        if (typeof Xrm === "undefined" || !Xrm.Navigation || !Xrm.Navigation.openConfirmDialog) {
            return true;
        }

        var result = await Xrm.Navigation.openConfirmDialog({
            title: "Sync Line Status",
            text: "Update all Invoice Lines to match this Invoice Status?",
            confirmButtonLabel: "Sync",
            cancelButtonLabel: "Cancel"
        }, {
            height: 220,
            width: 450
        });

        return result && result.confirmed;
    }

    async function syncLineStatus(primaryControl, primaryEntityTypeName, primaryItemIds) {
        var formContext = getFormContext(primaryControl);
        if (!formContext) {
            return;
        }

        var invoiceId = cleanId(formContext.data.entity.getId());
        var statusAttribute = formContext.getAttribute("devkit_invoicestatus");
        var invoiceStatus = statusAttribute ? statusAttribute.getValue() : null;

        if (!invoiceId || invoiceStatus === null || invoiceStatus === undefined) {
            return;
        }

        var confirmed = await confirmSyncLineStatus();
        if (!confirmed) {
            return;
        }

        var query = "?$select=devkit_linestatus&$filter=_devkit_invoice_value eq " + invoiceId;
        var result = await Xrm.WebApi.retrieveMultipleRecords("devkit_invoiceline", query);
        var updates = result.entities.map(function (line) {
            return Xrm.WebApi.updateRecord("devkit_invoiceline", line.devkit_invoicelineid, {
                devkit_linestatus: invoiceStatus
            });
        });

        await Promise.all(updates);
    }

    return {
        syncLineStatus: syncLineStatus,
        canSyncLineStatus: canSyncLineStatus
    };
})();
