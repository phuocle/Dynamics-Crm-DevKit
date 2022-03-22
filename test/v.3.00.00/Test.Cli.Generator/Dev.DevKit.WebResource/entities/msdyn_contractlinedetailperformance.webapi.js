'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_contractlinedetailperformanceApi = function (e) {
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
		var _msdyn_contractlinedetailperformance = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_BilledAmount: { a: 'msdyn_billedamount' },
			msdyn_billedamount_Base: { a: 'msdyn_billedamount_base', r: true },
			msdyn_BilledQuantity: { a: 'msdyn_billedquantity' },
			msdyn_Category: { a: 'msdyn_category' },
			msdyn_ContractId: { a: 'msdyn_contractid' },
			msdyn_contractlinedetailperformanceId: { a: 'msdyn_contractlinedetailperformanceid' },
			msdyn_ContractLineId: { a: 'msdyn_contractlineid' },
			msdyn_ContractPerformanceId: { b: 'msdyn_ContractPerformanceId', a: '_msdyn_contractperformanceid_value', c: 'msdyn_contractperformances', d: 'msdyn_contractperformance' },
			msdyn_CostIncurred: { a: 'msdyn_costincurred' },
			msdyn_costincurred_Base: { a: 'msdyn_costincurred_base', r: true },
			msdyn_LoggedHours: { a: 'msdyn_loggedhours' },
			msdyn_LoggedQuantity: { a: 'msdyn_loggedquantity' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Role: { a: 'msdyn_role' },
			msdyn_TransactionClass: { a: 'msdyn_transactionclass' },
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
		var msdyn_contractlinedetailperformance = {};
		msdyn_contractlinedetailperformance.ODataEntity = e;
		msdyn_contractlinedetailperformance.FormattedValue = {};
		for (var field in _msdyn_contractlinedetailperformance) {
			var a = _msdyn_contractlinedetailperformance[field].a;
			var b = _msdyn_contractlinedetailperformance[field].b;
			var c = _msdyn_contractlinedetailperformance[field].c;
			var d = _msdyn_contractlinedetailperformance[field].d;
			var g = _msdyn_contractlinedetailperformance[field].g;
			var r = _msdyn_contractlinedetailperformance[field].r;
			webApiField(msdyn_contractlinedetailperformance, field, e, a, b, c, d, r, u, g);
		}
		msdyn_contractlinedetailperformance.Entity = u;
		msdyn_contractlinedetailperformance.EntityName = 'msdyn_contractlinedetailperformance';
		msdyn_contractlinedetailperformance.EntityCollectionName = 'msdyn_contractlinedetailperformances';
		msdyn_contractlinedetailperformance['@odata.etag'] = e['@odata.etag'];
		msdyn_contractlinedetailperformance.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_contractlinedetailperformance.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_contractlinedetailperformance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_contractlinedetailperformance = {
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