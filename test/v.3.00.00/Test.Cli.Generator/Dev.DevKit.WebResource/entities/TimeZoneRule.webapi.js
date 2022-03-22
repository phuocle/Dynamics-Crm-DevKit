﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.TimeZoneRuleApi = function (e) {
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
		var _timezonerule = {
			Bias: { a: 'bias' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DaylightBias: { a: 'daylightbias' },
			DaylightDay: { a: 'daylightday' },
			DaylightDayOfWeek: { a: 'daylightdayofweek' },
			DaylightHour: { a: 'daylighthour' },
			DaylightMinute: { a: 'daylightminute' },
			DaylightMonth: { a: 'daylightmonth' },
			DaylightSecond: { a: 'daylightsecond' },
			DaylightYear: { a: 'daylightyear' },
			EffectiveDateTime_UtcDateOnly: { a: 'effectivedatetime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			StandardBias: { a: 'standardbias' },
			StandardDay: { a: 'standardday' },
			StandardDayOfWeek: { a: 'standarddayofweek' },
			StandardHour: { a: 'standardhour' },
			StandardMinute: { a: 'standardminute' },
			StandardMonth: { a: 'standardmonth' },
			StandardSecond: { a: 'standardsecond' },
			StandardYear: { a: 'standardyear' },
			TimeZoneDefinitionId: { b: 'timezonedefinitionid', a: '_timezonedefinitionid_value', c: 'timezonedefinitions', d: 'timezonedefinition' },
			TimeZoneRuleId: { a: 'timezoneruleid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var timezonerule = {};
		timezonerule.ODataEntity = e;
		timezonerule.FormattedValue = {};
		for (var field in _timezonerule) {
			var a = _timezonerule[field].a;
			var b = _timezonerule[field].b;
			var c = _timezonerule[field].c;
			var d = _timezonerule[field].d;
			var g = _timezonerule[field].g;
			var r = _timezonerule[field].r;
			webApiField(timezonerule, field, e, a, b, c, d, r, u, g);
		}
		timezonerule.Entity = u;
		timezonerule.EntityName = 'timezonerule';
		timezonerule.EntityCollectionName = 'timezonerules';
		timezonerule['@odata.etag'] = e['@odata.etag'];
		timezonerule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		timezonerule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return timezonerule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.TimeZoneRule = {
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