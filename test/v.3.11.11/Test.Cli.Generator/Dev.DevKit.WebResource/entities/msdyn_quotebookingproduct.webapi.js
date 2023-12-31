'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_quotebookingproductApi = function (e) {
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
		var _msdyn_quotebookingproduct = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_currency: { a: 'msdyn_currency' },
			msdyn_currency_Base: { a: 'msdyn_currency_base', r: true },
			msdyn_customerasset: { b: 'msdyn_customerasset', a: '_msdyn_customerasset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_EstimatedCost: { a: 'msdyn_estimatedcost' },
			msdyn_estimatedcost_Base: { a: 'msdyn_estimatedcost_base', r: true },
			msdyn_EstimatedSalesAmount: { a: 'msdyn_estimatedsalesamount' },
			msdyn_estimatedsalesamount_Base: { a: 'msdyn_estimatedsalesamount_base', r: true },
			msdyn_Internalflags: { a: 'msdyn_Internalflags' },
			msdyn_iscopied: { a: 'msdyn_iscopied' },
			msdyn_lineorder: { a: 'msdyn_lineorder' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_pricelist: { b: 'msdyn_pricelist', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_product: { b: 'msdyn_product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_qtytobill: { a: 'msdyn_qtytobill' },
			msdyn_quantity: { a: 'msdyn_quantity' },
			msdyn_quote: { b: 'msdyn_quote', a: '_msdyn_quote_value', c: 'quotes', d: 'quote' },
			msdyn_quotebookingincident: { b: 'msdyn_quotebookingincident', a: '_msdyn_quotebookingincident_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			msdyn_quotebookingproductId: { a: 'msdyn_quotebookingproductid' },
			msdyn_quotebookingsetup: { b: 'msdyn_quotebookingsetup', a: '_msdyn_quotebookingsetup_value', c: 'msdyn_quotebookingsetups', d: 'msdyn_quotebookingsetup' },
			msdyn_unit: { b: 'msdyn_unit', a: '_msdyn_unit_value', c: 'uoms', d: 'uom' },
			msdyn_unitamount: { a: 'msdyn_unitamount' },
			msdyn_unitamount_Base: { a: 'msdyn_unitamount_base', r: true },
			msdyn_unitcostamount: { a: 'msdyn_unitcostamount' },
			msdyn_unitcostamount_Base: { a: 'msdyn_unitcostamount_base', r: true },
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
		var msdyn_quotebookingproduct = {};
		msdyn_quotebookingproduct.ODataEntity = e;
		msdyn_quotebookingproduct.FormattedValue = {};
		for (var field in _msdyn_quotebookingproduct) {
			var a = _msdyn_quotebookingproduct[field].a;
			var b = _msdyn_quotebookingproduct[field].b;
			var c = _msdyn_quotebookingproduct[field].c;
			var d = _msdyn_quotebookingproduct[field].d;
			var g = _msdyn_quotebookingproduct[field].g;
			var r = _msdyn_quotebookingproduct[field].r;
			webApiField(msdyn_quotebookingproduct, field, e, a, b, c, d, r, u, g);
		}
		msdyn_quotebookingproduct.Entity = u;
		msdyn_quotebookingproduct.EntityName = 'msdyn_quotebookingproduct';
		msdyn_quotebookingproduct.EntityCollectionName = 'msdyn_quotebookingproducts';
		msdyn_quotebookingproduct['@odata.etag'] = e['@odata.etag'];
		msdyn_quotebookingproduct.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_quotebookingproduct.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_quotebookingproduct;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotebookingproduct = {
		OwnerIdType : {
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