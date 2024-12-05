'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_quotebookingserviceApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _msdyn_quotebookingservice = {
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
			msdyn_duration: { a: 'msdyn_duration' },
			msdyn_durationtobill: { a: 'msdyn_durationtobill' },
			msdyn_EstimatedCostAmount: { a: 'msdyn_estimatedcostamount' },
			msdyn_estimatedcostamount_Base: { a: 'msdyn_estimatedcostamount_base', r: true },
			msdyn_EstimatedSalesAmount: { a: 'msdyn_estimatedsalesamount' },
			msdyn_estimatedsalesamount_Base: { a: 'msdyn_estimatedsalesamount_base', r: true },
			msdyn_Internalflags: { a: 'msdyn_Internalflags' },
			msdyn_iscopied: { a: 'msdyn_iscopied' },
			msdyn_lineorder: { a: 'msdyn_lineorder' },
			msdyn_minimumchargeamount: { a: 'msdyn_minimumchargeamount' },
			msdyn_minimumchargeamount_Base: { a: 'msdyn_minimumchargeamount_base', r: true },
			msdyn_minimumchargeduration: { a: 'msdyn_minimumchargeduration' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_pricelist: { b: 'msdyn_pricelist', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_quote: { b: 'msdyn_quote', a: '_msdyn_quote_value', c: 'quotes', d: 'quote' },
			msdyn_quotebookingincident: { b: 'msdyn_quotebookingincident', a: '_msdyn_quotebookingincident_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			msdyn_quotebookingserviceId: { a: 'msdyn_quotebookingserviceid' },
			msdyn_quotebookingsetup: { b: 'msdyn_quotebookingsetup', a: '_msdyn_quotebookingsetup_value', c: 'msdyn_quotebookingsetups', d: 'msdyn_quotebookingsetup' },
			msdyn_Service: { b: 'msdyn_Service', a: '_msdyn_service_value', c: 'products', d: 'product' },
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
		var msdyn_quotebookingservice = {};
		msdyn_quotebookingservice.ODataEntity = e;
		msdyn_quotebookingservice.FormattedValue = {};
		for (var field in _msdyn_quotebookingservice) {
			var a = _msdyn_quotebookingservice[field].a;
			var b = _msdyn_quotebookingservice[field].b;
			var c = _msdyn_quotebookingservice[field].c;
			var d = _msdyn_quotebookingservice[field].d;
			var g = _msdyn_quotebookingservice[field].g;
			var r = _msdyn_quotebookingservice[field].r;
			webApiField(msdyn_quotebookingservice, field, e, a, b, c, d, r, u, g);
		}
		msdyn_quotebookingservice.Entity = u;
		msdyn_quotebookingservice.EntityName = 'msdyn_quotebookingservice';
		msdyn_quotebookingservice.EntityCollectionName = 'msdyn_quotebookingservices';
		msdyn_quotebookingservice['@odata.etag'] = e['@odata.etag'];
		msdyn_quotebookingservice.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_quotebookingservice.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_quotebookingservice;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotebookingservice = {
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