// Payment MCP v1
var PaymentMcp = window.PaymentMcp || {};

(function () {
    "use strict";

    function getFormContext(primaryControl) {
        return primaryControl && primaryControl.getFormContext
            ? primaryControl.getFormContext()
            : primaryControl;
    }

    function cleanId(id) {
        return (id || "").replace(/[{}]/g, "");
    }

    async function confirmSyncLineStatus() {
        var result = await Xrm.Navigation.openConfirmDialog({
            title: "Sync Line Status",
            text: "Update all Payment Lines with the current Payment Status?",
            confirmButtonLabel: "Sync",
            cancelButtonLabel: "Cancel"
        }, {
            height: 220,
            width: 450
        });

        return result && result.confirmed;
    }

    PaymentMcp.Payment = {
        OnLoad: async function () {
            await Xrm.Navigation.openAlertDialog({ text: "Hello Payment" });
        },

        syncLineStatus: async function (primaryControl, primaryEntityTypeName, primaryItemIds) {
            var formContext = getFormContext(primaryControl);
            if (!formContext || !formContext.data || !formContext.data.entity) {
                await Xrm.Navigation.openAlertDialog({ text: "Form context not available." });
                return;
            }

            var paymentId = cleanId(formContext.data.entity.getId());
            if (!paymentId) {
                await Xrm.Navigation.openAlertDialog({ text: "Save the Payment before syncing line status." });
                return;
            }

            var confirmed = await confirmSyncLineStatus();
            if (!confirmed) {
                return;
            }

            try {
                var payment = await Xrm.WebApi.retrieveRecord("xyz_payment", paymentId, "?$select=xyz_paymentstatus");
                var paymentStatus = payment.xyz_paymentstatus;

                if (paymentStatus === null || paymentStatus === undefined) {
                    await Xrm.Navigation.openAlertDialog({ text: "The Payment does not have a Payment Status value." });
                    return;
                }

                var query = "?$select=xyz_paymentlineid&$filter=_xyz_payment_value eq " + paymentId;
                var lines = await Xrm.WebApi.retrieveMultipleRecords("xyz_paymentline", query);
                var updates = lines.entities.map(function (line) {
                    return Xrm.WebApi.updateRecord("xyz_paymentline", line.xyz_paymentlineid, {
                        xyz_linestatus: paymentStatus
                    });
                });

                await Promise.all(updates);
                await Xrm.Navigation.openAlertDialog({ text: "Line Status synced for " + updates.length + " Payment Line(s)." });
            } catch (error) {
                await Xrm.Navigation.openAlertDialog({ text: "Error syncing line status: " + error.message });
            }
        },

        canSyncLineStatus: function (primaryControl, primaryEntityTypeName, primaryItemIds) {
            var formContext = getFormContext(primaryControl);
            return !!(formContext && formContext.data && formContext.data.entity && cleanId(formContext.data.entity.getId()));
        }
    };
})();
