'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_forecastrecurrenceApi = function (e) {
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
		var msdyn_forecastrecurrence = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_actualparticipatingrecordsfetchxml: { a: 'msdyn_actualparticipatingrecordsfetchxml' },
			msdyn_failureinfo: { a: 'msdyn_failureinfo' },
			msdyn_forecastdefinitionid: { b: 'msdyn_forecastdefinitionid', a: '_msdyn_forecastdefinitionid_value', c: 'msdyn_forecastdefinitions', d: 'msdyn_forecastdefinition' },
			msdyn_forecastrecurrenceId: { a: 'msdyn_forecastrecurrenceid' },
			msdyn_inprogressparticipatingrecordsfetchxml: { a: 'msdyn_inprogressparticipatingrecordsfetchxml' },
			msdyn_ishierarchylocked: { a: 'msdyn_ishierarchylocked' },
			msdyn_lastrecalculatedon_UtcDateAndTime: { a: 'msdyn_lastrecalculatedon' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_recalculatestatuschangedon_UtcDateAndTime: { a: 'msdyn_recalculatestatuschangedon' },
			msdyn_recalculationstarttime_UtcDateAndTime: { a: 'msdyn_recalculationstarttime' },
			msdyn_recalculationstatus: { a: 'msdyn_recalculationstatus' },
			msdyn_recalculationstatusdescription: { a: 'msdyn_recalculationstatusdescription' },
			msdyn_recurrenceindex: { a: 'msdyn_recurrenceindex' },
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
		for (var field in msdyn_forecastrecurrence) {
			var a = msdyn_forecastrecurrence[field].a;
			var b = msdyn_forecastrecurrence[field].b;
			var c = msdyn_forecastrecurrence[field].c;
			var d = msdyn_forecastrecurrence[field].d;
			var g = msdyn_forecastrecurrence[field].g;
			var r = msdyn_forecastrecurrence[field].r;
			msdyn_forecastrecurrence[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_forecastrecurrence.Entity = u;
		msdyn_forecastrecurrence.EntityName = 'msdyn_forecastrecurrence';
		msdyn_forecastrecurrence.EntityCollectionName = 'msdyn_forecastrecurrences';
		msdyn_forecastrecurrence['@odata.etag'] = e['@odata.etag'];
		msdyn_forecastrecurrence.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_forecastrecurrence.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_forecastrecurrence;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_forecastrecurrence = {
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