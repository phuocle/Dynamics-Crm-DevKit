'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_purchaseorderreceiptproductApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _msdyn_purchaseorderreceiptproduct = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AssociateToBooking: { b: 'msdyn_AssociateToBooking', a: '_msdyn_associatetobooking_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			msdyn_AssociateToWarehouse: { b: 'msdyn_AssociateToWarehouse', a: '_msdyn_associatetowarehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			msdyn_AssociateToWorkOrder: { b: 'msdyn_AssociateToWorkOrder', a: '_msdyn_associatetoworkorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PurchaseOrder: { b: 'msdyn_PurchaseOrder', a: '_msdyn_purchaseorder_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			msdyn_PurchaseOrderBill: { b: 'msdyn_PurchaseOrderBill', a: '_msdyn_purchaseorderbill_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			msdyn_PurchaseOrderProduct: { b: 'msdyn_PurchaseOrderProduct', a: '_msdyn_purchaseorderproduct_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			msdyn_PurchaseOrderReceipt: { b: 'msdyn_PurchaseOrderReceipt', a: '_msdyn_purchaseorderreceipt_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			msdyn_purchaseorderreceiptproductId: { a: 'msdyn_purchaseorderreceiptproductid' },
			msdyn_Quantity: { a: 'msdyn_quantity' },
			msdyn_TotalCost: { a: 'msdyn_totalcost' },
			msdyn_totalcost_Base: { a: 'msdyn_totalcost_base', r: true },
			msdyn_UnitCost: { a: 'msdyn_unitcost' },
			msdyn_unitcost_Base: { a: 'msdyn_unitcost_base', r: true },
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
		var msdyn_purchaseorderreceiptproduct = {};
		msdyn_purchaseorderreceiptproduct.ODataEntity = e;
		msdyn_purchaseorderreceiptproduct.FormattedValue = {};
		for (var field in _msdyn_purchaseorderreceiptproduct) {
			var a = _msdyn_purchaseorderreceiptproduct[field].a;
			var b = _msdyn_purchaseorderreceiptproduct[field].b;
			var c = _msdyn_purchaseorderreceiptproduct[field].c;
			var d = _msdyn_purchaseorderreceiptproduct[field].d;
			var g = _msdyn_purchaseorderreceiptproduct[field].g;
			var r = _msdyn_purchaseorderreceiptproduct[field].r;
			webApiField(msdyn_purchaseorderreceiptproduct, field, e, a, b, c, d, r, u, g);
		}
		msdyn_purchaseorderreceiptproduct.Entity = u;
		msdyn_purchaseorderreceiptproduct.EntityName = 'msdyn_purchaseorderreceiptproduct';
		msdyn_purchaseorderreceiptproduct.EntityCollectionName = 'msdyn_purchaseorderreceiptproducts';
		msdyn_purchaseorderreceiptproduct['@odata.etag'] = e['@odata.etag'];
		msdyn_purchaseorderreceiptproduct.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_purchaseorderreceiptproduct.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_purchaseorderreceiptproduct;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_purchaseorderreceiptproduct = {
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