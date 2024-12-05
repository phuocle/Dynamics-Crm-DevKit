'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RecurrenceRuleApi = function (e) {
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
		var _recurrencerule = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DayOfMonth: { a: 'dayofmonth' },
			DaysOfWeekMask: { a: 'daysofweekmask' },
			Duration: { a: 'duration' },
			EffectiveEndDate_UtcDateAndTime: { a: 'effectiveenddate' },
			EffectiveStartDate_UtcDateOnly: { a: 'effectivestartdate' },
			EndTime_UtcDateAndTime: { a: 'endtime' },
			FirstDayOfWeek: { a: 'firstdayofweek' },
			Instance: { a: 'instance' },
			Interval: { a: 'interval' },
			IsNthMonthly: { a: 'isnthmonthly' },
			IsNthYearly: { a: 'isnthyearly' },
			IsRegenerate: { a: 'isregenerate' },
			IsWeekDayPattern: { a: 'isweekdaypattern' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MonthOfYear: { a: 'monthofyear' },
			ObjectId: { b: 'objectid', a: '_objectid_value', c: 'activitypointers', d: 'activitypointer' },
			Occurrences: { a: 'occurrences' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PatternEndDate_UtcDateAndTime: { a: 'patternenddate' },
			PatternEndType: { a: 'patternendtype' },
			PatternStartDate_UtcDateAndTime: { a: 'patternstartdate' },
			RecurrencePatternType: { a: 'recurrencepatterntype' },
			RuleId: { a: 'ruleid' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var recurrencerule = {};
		recurrencerule.ODataEntity = e;
		recurrencerule.FormattedValue = {};
		for (var field in _recurrencerule) {
			var a = _recurrencerule[field].a;
			var b = _recurrencerule[field].b;
			var c = _recurrencerule[field].c;
			var d = _recurrencerule[field].d;
			var g = _recurrencerule[field].g;
			var r = _recurrencerule[field].r;
			webApiField(recurrencerule, field, e, a, b, c, d, r, u, g);
		}
		recurrencerule.Entity = u;
		recurrencerule.EntityName = 'recurrencerule';
		recurrencerule.EntityCollectionName = 'recurrencerules';
		recurrencerule['@odata.etag'] = e['@odata.etag'];
		recurrencerule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		recurrencerule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return recurrencerule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurrenceRule = {
		Instance : {
			First: 1,
			Fourth: 4,
			Last: 5,
			Second: 2,
			Third: 3
		},
		MonthOfYear : {
			April: 4,
			August: 8,
			December: 12,
			February: 2,
			Invalid_Month_Of_Year: 0,
			January: 1,
			July: 7,
			June: 6,
			March: 3,
			May: 5,
			November: 11,
			October: 10,
			September: 9
		},
		ObjectTypeCode : {
		},
		PatternEndType : {
			No_End_Date: 1,
			Occurrences: 2,
			Pattern_End_Date: 3
		},
		RecurrencePatternType : {
			Daily: 0,
			Monthly: 2,
			Weekly: 1,
			Yearly: 3
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