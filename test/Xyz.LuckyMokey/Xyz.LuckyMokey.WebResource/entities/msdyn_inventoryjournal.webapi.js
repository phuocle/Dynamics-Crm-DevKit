'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_inventoryjournalApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
                }
                return entity[logicalName + f];
            };
            var getValue = function () {
                if (entity[logicalName] === undefined || entity[logicalName] === null) {
                    return null;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName];
                    }
                    return null;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
                }
                return entity[logicalName];
            };
            var setValue = function (value) {
                if (isMultiOptionSet) value = value.join(',');
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var msdyn_inventoryjournal = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AllocatedToWorkOrder: { b: 'msdyn_AllocatedToWorkOrder', a: '_msdyn_allocatedtoworkorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_InventoryAdjustmentProduct: { b: 'msdyn_InventoryAdjustmentProduct', a: '_msdyn_inventoryadjustmentproduct_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			msdyn_inventoryjournalId: { a: 'msdyn_inventoryjournalid' },
			msdyn_JournalType: { a: 'msdyn_journaltype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_OriginatingJournal: { b: 'msdyn_OriginatingJournal', a: '_msdyn_originatingjournal_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			msdyn_Product: { b: 'msdyn_Product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_PurchaseOrderProduct: { b: 'msdyn_PurchaseOrderProduct', a: '_msdyn_purchaseorderproduct_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			msdyn_PurchaseOrderReceiptProduct: { b: 'msdyn_PurchaseOrderReceiptProduct', a: '_msdyn_purchaseorderreceiptproduct_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			msdyn_Quantity: { a: 'msdyn_quantity' },
			msdyn_Reversal: { a: 'msdyn_reversal' },
			msdyn_RMAReceiptProduct: { b: 'msdyn_RMAReceiptProduct', a: '_msdyn_rmareceiptproduct_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			msdyn_TransactionType: { a: 'msdyn_transactiontype' },
			msdyn_Unit: { b: 'msdyn_Unit', a: '_msdyn_unit_value', c: 'uoms', d: 'uom' },
			msdyn_Warehouse: { b: 'msdyn_Warehouse', a: '_msdyn_warehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			msdyn_WorkOrderProduct: { b: 'msdyn_WorkOrderProduct', a: '_msdyn_workorderproduct_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_inventoryjournal) {
			var a = msdyn_inventoryjournal[field].a;
			var b = msdyn_inventoryjournal[field].b;
			var c = msdyn_inventoryjournal[field].c;
			var d = msdyn_inventoryjournal[field].d;
			var g = msdyn_inventoryjournal[field].g;
			var r = msdyn_inventoryjournal[field].r;
			msdyn_inventoryjournal[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_inventoryjournal.Entity = u;
		msdyn_inventoryjournal.EntityName = 'msdyn_inventoryjournal';
		msdyn_inventoryjournal.EntityCollectionName = 'msdyn_inventoryjournals';
		msdyn_inventoryjournal['@odata.etag'] = e['@odata.etag'];
		msdyn_inventoryjournal.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_inventoryjournal.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_inventoryjournal;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_inventoryjournal = {
		msdyn_JournalType : {
			On_Hand: 690970000,
			On_Order: 690970001,
			Allocated: 690970002
		},
		msdyn_TransactionType : {
			Purchase_Order_Product: 690970000,
			Purchase_Order_Receipt: 690970001,
			WO_Product: 690970002,
			Inventory_Adjustment: 690970003,
			Inventory_Transfer: 690970004,
			RMA_Product: 690970005,
			Manual: 690970006
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
        RollupState : {
            NotCalculated: 0,
            Calculated: 1,
            OverflowError: 2,
            OtherError: 3,
            RetryLimitExceeded: 4,
            HierarchicalRecursionLimitReached: 5,
            LoopDetected: 6
        }

	};
})(OptionSet || (OptionSet = {}));