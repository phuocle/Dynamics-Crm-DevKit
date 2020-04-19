'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.RecurrenceRuleApi = function (e) {
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
		var recurrencerule = {
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
		for (var field in recurrencerule) {
			var a = recurrencerule[field].a;
			var b = recurrencerule[field].b;
			var c = recurrencerule[field].c;
			var d = recurrencerule[field].d;
			var g = recurrencerule[field].g;
			var r = recurrencerule[field].r;
			recurrencerule[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		recurrencerule.Entity = u;
		recurrencerule.EntityName = 'recurrencerule';
		recurrencerule.EntityCollectionName = 'recurrencerules';
		recurrencerule['@odata.etag'] = e['@odata.etag'];
		recurrencerule.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		recurrencerule.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return recurrencerule;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurrenceRule = {
		Instance : {
			First: 1,
			Second: 2,
			Third: 3,
			Fourth: 4,
			Last: 5
		},
		MonthOfYear : {
			Invalid_Month_Of_Year: 0,
			January: 1,
			February: 2,
			March: 3,
			April: 4,
			May: 5,
			June: 6,
			July: 7,
			August: 8,
			September: 9,
			October: 10,
			November: 11,
			December: 12
		},
		PatternEndType : {
			No_End_Date: 1,
			Occurrences: 2,
			Pattern_End_Date: 3
		},
		RecurrencePatternType : {
			Daily: 0,
			Weekly: 1,
			Monthly: 2,
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