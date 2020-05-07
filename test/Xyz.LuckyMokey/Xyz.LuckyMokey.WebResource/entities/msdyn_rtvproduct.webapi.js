'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_rtvproductApi = function (e) {
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
		var msdyn_rtvproduct = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_LineOrder: { a: 'msdyn_lineorder' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Product: { b: 'msdyn_Product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_Quantity: { a: 'msdyn_quantity' },
			msdyn_RMA: { b: 'msdyn_RMA', a: '_msdyn_rma_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			msdyn_RMAProduct: { b: 'msdyn_RMAProduct', a: '_msdyn_rmaproduct_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			msdyn_RTV: { b: 'msdyn_RTV', a: '_msdyn_rtv_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			msdyn_rtvproductId: { a: 'msdyn_rtvproductid' },
			msdyn_TotalCreditAmount: { a: 'msdyn_totalcreditamount' },
			msdyn_totalcreditamount_Base: { a: 'msdyn_totalcreditamount_base', r: true },
			msdyn_Unit: { b: 'msdyn_Unit', a: '_msdyn_unit_value', c: 'uoms', d: 'uom' },
			msdyn_UnitCreditAmount: { a: 'msdyn_unitcreditamount' },
			msdyn_unitcreditamount_Base: { a: 'msdyn_unitcreditamount_base', r: true },
			msdyn_Warehouse: { b: 'msdyn_Warehouse', a: '_msdyn_warehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
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
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_rtvproduct) {
			var a = msdyn_rtvproduct[field].a;
			var b = msdyn_rtvproduct[field].b;
			var c = msdyn_rtvproduct[field].c;
			var d = msdyn_rtvproduct[field].d;
			var g = msdyn_rtvproduct[field].g;
			var r = msdyn_rtvproduct[field].r;
			msdyn_rtvproduct[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_rtvproduct.Entity = u;
		msdyn_rtvproduct.EntityName = 'msdyn_rtvproduct';
		msdyn_rtvproduct.EntityCollectionName = 'msdyn_rtvproducts';
		msdyn_rtvproduct['@odata.etag'] = e['@odata.etag'];
		msdyn_rtvproduct.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_rtvproduct.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_rtvproduct;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_rtvproduct = {
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