'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_forecastdefinitionApi = function (e) {
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
		var _msdyn_forecastdefinition = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_fiscalmonth: { a: 'msdyn_fiscalmonth' },
			msdyn_fiscalquarter: { a: 'msdyn_fiscalquarter' },
			msdyn_fiscalyear: { a: 'msdyn_fiscalyear' },
			msdyn_forecastdefinitionId: { a: 'msdyn_forecastdefinitionid' },
			msdyn_forecastdefinitionname: { a: 'msdyn_forecastdefinitionname' },
			msdyn_forecastperiodtype: { a: 'msdyn_forecastperiodtype' },
			msdyn_metricid: { b: 'msdyn_metricid', a: '_msdyn_metricid_value', c: 'metrics', d: 'metric' },
			msdyn_numberofrecurrences: { a: 'msdyn_numberofrecurrences' },
			msdyn_quotasource: { a: 'msdyn_quotasource' },
			msdyn_rollupquery: { b: 'msdyn_rollupquery', a: '_msdyn_rollupquery_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			msdyn_validfrom_DateOnly: { a: 'msdyn_validfrom' },
			msdyn_validto_DateOnly: { a: 'msdyn_validto' },
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
		var msdyn_forecastdefinition = {};
		msdyn_forecastdefinition.ODataEntity = e;
		msdyn_forecastdefinition.FormattedValue = {};
		for (var field in _msdyn_forecastdefinition) {
			var a = _msdyn_forecastdefinition[field].a;
			var b = _msdyn_forecastdefinition[field].b;
			var c = _msdyn_forecastdefinition[field].c;
			var d = _msdyn_forecastdefinition[field].d;
			var g = _msdyn_forecastdefinition[field].g;
			var r = _msdyn_forecastdefinition[field].r;
			webApiField(msdyn_forecastdefinition, field, e, a, b, c, d, r, u, g);
		}
		msdyn_forecastdefinition.Entity = u;
		msdyn_forecastdefinition.EntityName = 'msdyn_forecastdefinition';
		msdyn_forecastdefinition.EntityCollectionName = 'msdyn_forecastdefinitions';
		msdyn_forecastdefinition['@odata.etag'] = e['@odata.etag'];
		msdyn_forecastdefinition.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_forecastdefinition.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_forecastdefinition;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_forecastdefinition = {
		msdyn_fiscalmonth : {
			April: 3,
			August: 7,
			December: 11,
			February: 1,
			January: 0,
			July: 6,
			June: 5,
			March: 2,
			May: 4,
			November: 10,
			October: 9,
			September: 8
		},
		msdyn_fiscalquarter : {
			Q1: 0,
			Q2: 1,
			Q3: 2,
			Q4: 3
		},
		msdyn_fiscalyear : {
			FY2018: 0,
			FY2019: 1,
			FY2020: 2,
			FY2021: 3,
			FY2022: 4,
			FY2023: 5,
			FY2024: 6,
			FY2025: 7,
			FY2026: 8,
			FY2027: 9,
			FY2028: 10,
			FY2029: 11,
			FY2030: 12,
			FY2031: 13,
			FY2032: 14,
			FY2033: 15,
			FY2034: 16,
			FY2035: 17,
			FY2036: 18,
			FY2037: 19,
			FY2038: 20,
			FY2039: 21,
			FY2040: 22
		},
		msdyn_forecastperiodtype : {
			Custom: 2,
			Monthly: 0,
			Quarterly: 1
		},
		msdyn_quotasource : {
			Goal_based: 192350000,
			Manual: 192350001
		},
		OwnerIdType : {
		},
		statecode : {
			Draft: 0,
			Published: 1
		},
		statuscode : {
			Draft: 1,
			Failed: 4,
			In_progress: 2,
			Success: 3
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