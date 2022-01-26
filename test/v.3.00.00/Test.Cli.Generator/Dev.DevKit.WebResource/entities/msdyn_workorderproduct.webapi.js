'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workorderproductApi = function (e) {
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
		var msdyn_workorderproduct = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AdditionalCost: { a: 'msdyn_additionalcost' },
			msdyn_additionalcost_Base: { a: 'msdyn_additionalcost_base', r: true },
			msdyn_AgreementBookingProduct: { b: 'msdyn_AgreementBookingProduct', a: '_msdyn_agreementbookingproduct_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			msdyn_Allocated: { a: 'msdyn_allocated' },
			msdyn_Booking: { b: 'msdyn_Booking', a: '_msdyn_booking_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			msdyn_CommissionCosts: { a: 'msdyn_commissioncosts' },
			msdyn_commissioncosts_Base: { a: 'msdyn_commissioncosts_base', r: true },
			msdyn_CustomerAsset: { b: 'msdyn_CustomerAsset', a: '_msdyn_customerasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_DisableEntitlement: { a: 'msdyn_disableentitlement' },
			msdyn_DiscountAmount: { a: 'msdyn_discountamount' },
			msdyn_discountamount_Base: { a: 'msdyn_discountamount_base', r: true },
			msdyn_DiscountPercent: { a: 'msdyn_discountpercent' },
			msdyn_Entitlement: { b: 'msdyn_Entitlement', a: '_msdyn_entitlement_value', c: 'entitlements', d: 'entitlement' },
			msdyn_EstimateDiscountAmount: { a: 'msdyn_estimatediscountamount' },
			msdyn_estimatediscountamount_Base: { a: 'msdyn_estimatediscountamount_base', r: true },
			msdyn_EstimateDiscountPercent: { a: 'msdyn_estimatediscountpercent' },
			msdyn_EstimateQuantity: { a: 'msdyn_estimatequantity' },
			msdyn_EstimateSubtotal: { a: 'msdyn_estimatesubtotal' },
			msdyn_estimatesubtotal_Base: { a: 'msdyn_estimatesubtotal_base', r: true },
			msdyn_EstimateTotalAmount: { a: 'msdyn_estimatetotalamount' },
			msdyn_estimatetotalamount_Base: { a: 'msdyn_estimatetotalamount_base', r: true },
			msdyn_EstimateTotalCost: { a: 'msdyn_estimatetotalcost' },
			msdyn_estimatetotalcost_Base: { a: 'msdyn_estimatetotalcost_base', r: true },
			msdyn_EstimateUnitAmount: { a: 'msdyn_estimateunitamount' },
			msdyn_estimateunitamount_Base: { a: 'msdyn_estimateunitamount_base', r: true },
			msdyn_EstimateUnitCost: { a: 'msdyn_estimateunitcost' },
			msdyn_estimateunitcost_Base: { a: 'msdyn_estimateunitcost_base', r: true },
			msdyn_InternalDescription: { a: 'msdyn_internaldescription' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_LineOrder: { a: 'msdyn_lineorder' },
			msdyn_LineStatus: { a: 'msdyn_linestatus' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PriceList: { b: 'msdyn_PriceList', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_Product: { b: 'msdyn_Product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_PurchaseOrderReceiptProduct: { b: 'msdyn_PurchaseOrderReceiptProduct', a: '_msdyn_purchaseorderreceiptproduct_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			msdyn_QtyToBill: { a: 'msdyn_qtytobill' },
			msdyn_Quantity: { a: 'msdyn_quantity' },
			msdyn_Subtotal: { a: 'msdyn_subtotal' },
			msdyn_subtotal_Base: { a: 'msdyn_subtotal_base', r: true },
			msdyn_Taxable: { a: 'msdyn_taxable' },
			msdyn_TotalAmount: { a: 'msdyn_totalamount' },
			msdyn_totalamount_Base: { a: 'msdyn_totalamount_base', r: true },
			msdyn_TotalCost: { a: 'msdyn_totalcost' },
			msdyn_totalcost_Base: { a: 'msdyn_totalcost_base', r: true },
			msdyn_Unit: { b: 'msdyn_Unit', a: '_msdyn_unit_value', c: 'uoms', d: 'uom' },
			msdyn_UnitAmount: { a: 'msdyn_unitamount' },
			msdyn_unitamount_Base: { a: 'msdyn_unitamount_base', r: true },
			msdyn_UnitCost: { a: 'msdyn_unitcost' },
			msdyn_unitcost_Base: { a: 'msdyn_unitcost_base', r: true },
			msdyn_Warehouse: { b: 'msdyn_Warehouse', a: '_msdyn_warehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_WorkOrderIncident: { b: 'msdyn_WorkOrderIncident', a: '_msdyn_workorderincident_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			msdyn_workorderproductId: { a: 'msdyn_workorderproductid' },
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
		for (var field in msdyn_workorderproduct) {
			var a = msdyn_workorderproduct[field].a;
			var b = msdyn_workorderproduct[field].b;
			var c = msdyn_workorderproduct[field].c;
			var d = msdyn_workorderproduct[field].d;
			var g = msdyn_workorderproduct[field].g;
			var r = msdyn_workorderproduct[field].r;
			msdyn_workorderproduct[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_workorderproduct.Entity = u;
		msdyn_workorderproduct.EntityName = 'msdyn_workorderproduct';
		msdyn_workorderproduct.EntityCollectionName = 'msdyn_workorderproducts';
		msdyn_workorderproduct['@odata.etag'] = e['@odata.etag'];
		msdyn_workorderproduct.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workorderproduct.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_workorderproduct;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workorderproduct = {
		msdyn_LineStatus : {
			Estimated: 690970000,
			Used: 690970001
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