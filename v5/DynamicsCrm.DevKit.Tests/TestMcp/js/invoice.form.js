var TestMcp = TestMcp || {};
TestMcp.Invoice = TestMcp.Invoice || {};

(function (namespace) {
    "use strict";

    var INVOICE_ENTITY = "v4_invoice";
    var INVOICE_LINE_ENTITY = "v4_invoiceline";
    var INVOICE_STATUS_FIELD = "v4_invoicestatus";
    var LINE_STATUS_FIELD = "v4_linestatus";
    var LINE_INVOICE_LOOKUP_VALUE = "_v4_invoice_value";

    function getFormContext(primaryControl) {
        if (primaryControl && typeof primaryControl.getFormContext === "function") {
            return primaryControl.getFormContext();
        }

        return primaryControl;
    }

    function cleanId(id) {
        return id ? id.replace(/[{}]/g, "") : "";
    }

    function getInvoiceId(primaryControl, primaryItemIds) {
        var ids = primaryItemIds || [];
        var formContext;

        if (typeof ids === "string") {
            ids = ids ? ids.split(",") : [];
        }

        if (ids.length > 0) {
            return cleanId(ids[0]);
        }

        formContext = getFormContext(primaryControl);
        if (!formContext || !formContext.data || !formContext.data.entity) {
            return "";
        }

        return cleanId(formContext.data.entity.getId());
    }

    function showMessage(message) {
        if (Xrm && Xrm.Navigation && typeof Xrm.Navigation.openAlertDialog === "function") {
            return Xrm.Navigation.openAlertDialog({ text: message });
        }

        alert(message);
        return Promise.resolve();
    }

    function updateLines(invoiceId, lineStatus) {
        var query = "?$select=v4_invoicelineid&$filter=" + LINE_INVOICE_LOOKUP_VALUE + " eq " + invoiceId;

        return Xrm.WebApi.retrieveMultipleRecords(INVOICE_LINE_ENTITY, query).then(function (result) {
            var updates = result.entities.map(function (line) {
                var payload = {};
                payload[LINE_STATUS_FIELD] = lineStatus;

                return Xrm.WebApi.updateRecord(
                    INVOICE_LINE_ENTITY,
                    cleanId(line.v4_invoicelineid),
                    payload
                );
            });

            return Promise.all(updates).then(function () {
                return result.entities.length;
            });
        });
    }

    namespace.canSyncLineStatus = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
        return !!getInvoiceId(primaryControl, primaryItemIds);
    };

    namespace.syncLineStatus = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
        var invoiceId = getInvoiceId(primaryControl, primaryItemIds);

        if (!invoiceId) {
            return showMessage("Save the Invoice before syncing line status.");
        }

        return Xrm.WebApi.retrieveRecord(INVOICE_ENTITY, invoiceId, "?$select=" + INVOICE_STATUS_FIELD)
            .then(function (invoice) {
                var invoiceStatus = invoice[INVOICE_STATUS_FIELD];

                if (invoiceStatus === null || invoiceStatus === undefined) {
                    return showMessage("Invoice Status is empty.");
                }

                return updateLines(invoiceId, invoiceStatus).then(function (updatedCount) {
                    return showMessage("Synced Line Status for " + updatedCount + " Invoice Line record(s).");
                });
            })
            .catch(function (error) {
                return showMessage(error && error.message ? error.message : "Unable to sync line status.");
            });
    };
})(TestMcp.Invoice);
