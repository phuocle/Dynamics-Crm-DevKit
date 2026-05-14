// Order MCP v1
(function (global) {
    "use strict";

    var OrderMcp = global.OrderMcp || {};
    OrderMcp.Order = OrderMcp.Order || {};

    function getFormContext(primaryControl) {
        return primaryControl && primaryControl.getFormContext
            ? primaryControl.getFormContext()
            : primaryControl;
    }

    function cleanId(id) {
        return (id || "").replace(/[{}]/g, "");
    }

    function getXrm(formContext) {
        return (formContext && formContext.context && formContext.context.getClientUrl)
            ? formContext.context
            : global.Xrm;
    }

    OrderMcp.Order.canSyncLineStatus = function (primaryControl, primaryEntityTypeName, primaryItemIds) {
        var formContext = getFormContext(primaryControl);
        return !!(formContext && formContext.data && formContext.data.entity && cleanId(formContext.data.entity.getId()));
    };

    OrderMcp.Order.OnLoad = function (executionContext) {
        var formContext = executionContext && executionContext.getFormContext
            ? executionContext.getFormContext()
            : null;
        var xrm = getXrm(formContext);

        xrm.Navigation.openAlertDialog({ text: "Hello Order" });
    };

    OrderMcp.Order.syncLineStatus = async function (primaryControl, primaryEntityTypeName, primaryItemIds) {
        var formContext = getFormContext(primaryControl);
        var xrm = getXrm(formContext);
        var orderId = cleanId(formContext.data.entity.getId());

        if (!orderId) {
            await xrm.Navigation.openAlertDialog({ text: "Save the Order before syncing line status." });
            return;
        }

        var confirmed = await xrm.Navigation.openConfirmDialog({
            title: "Sync Line Status",
            text: "Update all Order Lines with the current Order Status?"
        });

        if (!confirmed.confirmed) {
            return;
        }

        var order = await xrm.WebApi.retrieveRecord("devkitv5_order", orderId, "?$select=devkitv5_orderstatus");
        var orderStatus = order.devkitv5_orderstatus;

        if (orderStatus === null || orderStatus === undefined) {
            await xrm.Navigation.openAlertDialog({ text: "The Order does not have an Order Status value." });
            return;
        }

        var query = "?$select=devkitv5_orderlineid&$filter=_devkitv5_order_value eq " + orderId;
        var lines = await xrm.WebApi.retrieveMultipleRecords("devkitv5_orderline", query);

        for (var i = 0; i < lines.entities.length; i += 1) {
            await xrm.WebApi.updateRecord("devkitv5_orderline", lines.entities[i].devkitv5_orderlineid, {
                devkitv5_linestatus: orderStatus
            });
        }

        await xrm.Navigation.openAlertDialog({ text: "Line Status synced for " + lines.entities.length + " Order Line(s)." });
    };

    global.OrderMcp = OrderMcp;
}(window));
