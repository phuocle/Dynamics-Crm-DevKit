'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_problematicassetApi = function (e) {
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
		var _msdyn_problematicasset = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Asset: { b: 'msdyn_Asset', a: '_msdyn_asset_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			msdyn_AssetId: { a: 'msdyn_assetid' },
			msdyn_BreakfixCost: { a: 'msdyn_breakfixcost' },
			msdyn_breakfixcost_Base: { a: 'msdyn_breakfixcost_base', r: true },
			msdyn_BreakfixSale: { a: 'msdyn_breakfixsale' },
			msdyn_breakfixsale_Base: { a: 'msdyn_breakfixsale_base', r: true },
			msdyn_BreakfixWorkOrderCount: { a: 'msdyn_breakfixworkordercount' },
			msdyn_Confidence: { a: 'msdyn_confidence' },
			msdyn_HigherTotalCost: { a: 'msdyn_highertotalcost' },
			msdyn_HigherWorkOrderCount: { a: 'msdyn_higherworkordercount' },
			msdyn_MaintenanceCost: { a: 'msdyn_maintenancecost' },
			msdyn_maintenancecost_Base: { a: 'msdyn_maintenancecost_base', r: true },
			msdyn_MaintenanceSale: { a: 'msdyn_maintenancesale' },
			msdyn_maintenancesale_Base: { a: 'msdyn_maintenancesale_base', r: true },
			msdyn_MaintenanceWorkOrderCount: { a: 'msdyn_maintenanceworkordercount' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_NumberofDays: { a: 'msdyn_numberofdays' },
			msdyn_problematicassetId: { a: 'msdyn_problematicassetid' },
			msdyn_ReplacementCost: { a: 'msdyn_replacementcost' },
			msdyn_replacementcost_Base: { a: 'msdyn_replacementcost_base', r: true },
			msdyn_ReplacementSale: { a: 'msdyn_replacementsale' },
			msdyn_replacementsale_Base: { a: 'msdyn_replacementsale_base', r: true },
			msdyn_RunId: { a: 'msdyn_runid' },
			msdyn_Score: { a: 'msdyn_score' },
			msdyn_Suggestion: { a: 'msdyn_suggestion' },
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
		var msdyn_problematicasset = {};
		msdyn_problematicasset.ODataEntity = e;
		msdyn_problematicasset.FormattedValue = {};
		for (var field in _msdyn_problematicasset) {
			var a = _msdyn_problematicasset[field].a;
			var b = _msdyn_problematicasset[field].b;
			var c = _msdyn_problematicasset[field].c;
			var d = _msdyn_problematicasset[field].d;
			var g = _msdyn_problematicasset[field].g;
			var r = _msdyn_problematicasset[field].r;
			webApiField(msdyn_problematicasset, field, e, a, b, c, d, r, u, g);
		}
		msdyn_problematicasset.Entity = u;
		msdyn_problematicasset.EntityName = 'msdyn_problematicasset';
		msdyn_problematicasset.EntityCollectionName = 'msdyn_problematicassets';
		msdyn_problematicasset['@odata.etag'] = e['@odata.etag'];
		msdyn_problematicasset.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_problematicasset.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_problematicasset;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_problematicasset = {
		msdyn_HigherTotalCost : {
			No: 0,
			Yes: 1
		},
		msdyn_HigherWorkOrderCount : {
			No: 0,
			Yes: 1
		},
		msdyn_NumberofDays : {
			_0: 192350000,
			_15: 192350001,
			_30: 192350002,
			_60: 192350003,
			_90: 192350004
		},
		msdyn_Suggestion : {
			None: 192350002,
			Repair: 192350000,
			Replace: 192350001
		},
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