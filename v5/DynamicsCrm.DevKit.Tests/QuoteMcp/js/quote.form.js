// Quote MCP v1
var QuoteMcp = window.QuoteMcp || {};

(function () {
    "use strict";

    QuoteMcp.Quote = {
        OnLoad: function (executionContext) {
            Xrm.Navigation.openAlertDialog({ text: "Hello Quote" });
        },
        syncLineStatus: async function (primaryControl, primaryEntityTypeName, primaryItemIds) {
            var confirmResult = window.confirm("Are you sure you want to sync line status from this Quote to all its Quote Lines?");
            if (!confirmResult) {
                return;
            }

            var formContext = primaryControl;
            if (!formContext) {
                Xrm.Utility.alertDialog("Form context not available.");
                return;
            }

            var quoteId = formContext.data.entity.getId();
            if (!quoteId) {
                Xrm.Utility.alertDialog("Quote must be saved first.");
                return;
            }

            quoteId = quoteId.replace(/[{}]/g, "");

            try {
                var quoteResult = await Xrm.WebApi.retrieveRecord(primaryEntityTypeName, quoteId, "?$select=paz_quotestatus");
                var quoteStatus = quoteResult.paz_quotestatus;

                var linesResult = await Xrm.WebApi.retrieveMultipleRecords(
                    "paz_quoteline",
                    "?$select=paz_quotelineid,paz_linestatus&$filter=_paz_quote_value eq " + quoteId
                );

                if (linesResult.entities.length === 0) {
                    Xrm.Utility.alertDialog("No child Quote Lines found for this Quote.");
                    return;
                }

                var updatePromises = linesResult.entities.map(function (line) {
                    return Xrm.WebApi.updateRecord("paz_quoteline", line.paz_quotelineid, {
                        paz_linestatus: quoteStatus
                    });
                });

                await Promise.all(updatePromises);
                Xrm.Utility.alertDialog("Line status updated successfully for " + updatePromises.length + " line(s).");
            } catch (error) {
                Xrm.Utility.alertDialog("Error syncing line status: " + error.message);
            }
        },

        canSyncLineStatus: function (primaryControl, primaryEntityTypeName, primaryItemIds) {
            var formContext = primaryControl;
            if (!formContext || !formContext.data || !formContext.data.entity) {
                return false;
            }
            var entityId = formContext.data.entity.getId();
            return entityId !== null;
        }
    };
})();