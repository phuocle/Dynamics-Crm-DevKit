'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.RecurrenceRuleApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _recurrencerule = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DayOfMonth: { a: 'dayofmonth', g: 'Integer' },
			DaysOfWeekMask: { a: 'daysofweekmask', g: 'Integer' },
			Duration: { a: 'duration', g: 'Integer' },
			EffectiveEndDate_UtcDateAndTime: { a: 'effectiveenddate', g: 'DateTime' },
			EffectiveStartDate_UtcDateOnly: { a: 'effectivestartdate', g: 'DateTime' },
			EndTime_UtcDateAndTime: { a: 'endtime', g: 'DateTime' },
			FirstDayOfWeek: { a: 'firstdayofweek', g: 'Integer' },
			Instance: { a: 'instance', g: 'Integer' },
			Interval: { a: 'interval', g: 'Integer' },
			IsNthMonthly: { a: 'isnthmonthly', g: 'Boolean' },
			IsNthYearly: { a: 'isnthyearly', g: 'Boolean' },
			IsRegenerate: { a: 'isregenerate', g: 'Boolean' },
			IsWeekDayPattern: { a: 'isweekdaypattern', g: 'Boolean' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MonthOfYear: { a: 'monthofyear', g: 'Integer' },
			ObjectId: { b: 'objectid', a: '_objectid_value', c: 'activitypointers', d: 'activitypointer' },
			Occurrences: { a: 'occurrences', g: 'Integer' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PatternEndDate_UtcDateAndTime: { a: 'patternenddate', g: 'DateTime' },
			PatternEndType: { a: 'patternendtype', g: 'Integer' },
			PatternStartDate_UtcDateAndTime: { a: 'patternstartdate', g: 'DateTime' },
			RecurrencePatternType: { a: 'recurrencepatterntype', g: 'Integer' },
			RuleId: { a: 'ruleid' },
			StartTime_UtcDateAndTime: { a: 'starttime', g: 'DateTime' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const recurrencerule = {};
		recurrencerule.ODataEntity = e;
		recurrencerule.FormattedValue = {};
		for (const field in _recurrencerule) {
			const fieldConfig = _recurrencerule[field];
			webApiField(recurrencerule, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		recurrencerule.Entity = u;
		recurrencerule.EntityName = 'recurrencerule';
		recurrencerule.EntityCollectionName = 'recurrencerules';
		recurrencerule['@odata.etag'] = e?.['@odata.etag'];
		recurrencerule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		recurrencerule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return recurrencerule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurrenceRule = {
		Instance: { First: 1, Fourth: 4, Last: 5, Second: 2, Third: 3 },
		MonthOfYear: { April: 4, August: 8, December: 12, February: 2, Invalid_Month_Of_Year: 0, January: 1, July: 7, June: 6, March: 3, May: 5, November: 11, October: 10, September: 9 },
		ObjectTypeCode: { },
		PatternEndType: { No_End_Date: 1, Occurrences: 2, Pattern_End_Date: 3 },
		RecurrencePatternType: { Daily: 0, Monthly: 2, Weekly: 1, Yearly: 3 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));