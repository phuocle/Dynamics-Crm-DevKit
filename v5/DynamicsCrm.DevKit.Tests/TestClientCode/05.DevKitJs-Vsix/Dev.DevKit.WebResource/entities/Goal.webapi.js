'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.GoalApi = function (e) {
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
		const _goal = {
			ActualDecimal: { a: 'actualdecimal', g: 'Number' },
			ActualInteger: { a: 'actualinteger', g: 'Integer' },
			ActualMoney: { a: 'actualmoney', g: 'Number' },
			ActualMoney_Base: { a: 'actualmoney_base', r: true, g: 'Number' },
			ActualString: { a: 'actualstring', r: true },
			AmountDataType: { a: 'amountdatatype', g: 'Integer' },
			ComputedTargetAsOfTodayDecimal: { a: 'computedtargetasoftodaydecimal', r: true, g: 'Number' },
			ComputedTargetAsOfTodayInteger: { a: 'computedtargetasoftodayinteger', r: true, g: 'Integer' },
			ComputedTargetAsOfTodayMoney: { a: 'computedtargetasoftodaymoney', r: true, g: 'Number' },
			ComputedTargetAsOfTodayMoney_Base: { a: 'computedtargetasoftodaymoney_base', r: true, g: 'Number' },
			ComputedTargetAsOfTodayPercentageAchieved: { a: 'computedtargetasoftodaypercentageachieved', r: true, g: 'Number' },
			ConsiderOnlyGoalOwnersRecords: { a: 'consideronlygoalownersrecords', g: 'Boolean' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomRollupFieldDecimal: { a: 'customrollupfielddecimal', g: 'Number' },
			CustomRollupFieldInteger: { a: 'customrollupfieldinteger', g: 'Integer' },
			CustomRollupFieldMoney: { a: 'customrollupfieldmoney', g: 'Number' },
			CustomRollupFieldMoney_Base: { a: 'customrollupfieldmoney_base', r: true, g: 'Number' },
			CustomRollupFieldString: { a: 'customrollupfieldstring', r: true },
			Depth: { a: 'depth', r: true, g: 'Integer' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			FiscalPeriod: { a: 'fiscalperiod', g: 'Integer' },
			FiscalYear: { a: 'fiscalyear', g: 'Integer' },
			GoalEndDate_UtcDateOnly: { a: 'goalenddate', g: 'DateTime' },
			GoalId: { a: 'goalid' },
			GoalStartDate_UtcDateOnly: { a: 'goalstartdate', g: 'DateTime' },
			GoalWithErrorId: { b: 'goalwitherrorid', a: '_goalwitherrorid_value', c: 'goals', d: 'goal' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			InProgressDecimal: { a: 'inprogressdecimal', g: 'Number' },
			InProgressInteger: { a: 'inprogressinteger', g: 'Integer' },
			InProgressMoney: { a: 'inprogressmoney', g: 'Number' },
			InProgressMoney_Base: { a: 'inprogressmoney_base', r: true, g: 'Number' },
			InProgressString: { a: 'inprogressstring', r: true },
			IsAmount: { a: 'isamount', g: 'Boolean' },
			IsFiscalPeriodGoal: { a: 'isfiscalperiodgoal', g: 'Boolean' },
			IsOverridden: { a: 'isoverridden', g: 'Boolean' },
			IsOverride: { a: 'isoverride', g: 'Boolean' },
			LastRolledupDate_UtcDateAndTime: { a: 'lastrolledupdate', g: 'DateTime' },
			MetricId: { b: 'metricid', a: '_metricid_value', c: 'metrics', d: 'metric' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentGoalId: { b: 'parentgoalid', a: '_parentgoalid_value', c: 'goals', d: 'goal' },
			Percentage: { a: 'percentage', g: 'Number' },
			RollupErrorCode: { a: 'rolluperrorcode', g: 'Integer' },
			RollupOnlyFromChildGoals: { a: 'rolluponlyfromchildgoals', g: 'Boolean' },
			RollUpQueryActualDecimalId: { b: 'rollupqueryactualdecimalid', a: '_rollupqueryactualdecimalid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollupQueryActualIntegerId: { b: 'rollupqueryactualintegerid', a: '_rollupqueryactualintegerid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryActualMoneyId: { b: 'rollupqueryactualmoneyid', a: '_rollupqueryactualmoneyid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryCustomDecimalId: { b: 'rollupquerycustomdecimalid', a: '_rollupquerycustomdecimalid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryCustomIntegerId: { b: 'rollupquerycustomintegerid', a: '_rollupquerycustomintegerid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryCustomMoneyId: { b: 'rollupquerycustommoneyid', a: '_rollupquerycustommoneyid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryInprogressDecimalId: { b: 'rollupqueryinprogressdecimalid', a: '_rollupqueryinprogressdecimalid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryInprogressIntegerId: { b: 'rollupqueryinprogressintegerid', a: '_rollupqueryinprogressintegerid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryInprogressMoneyId: { b: 'rollupqueryinprogressmoneyid', a: '_rollupqueryinprogressmoneyid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			StretchTargetDecimal: { a: 'stretchtargetdecimal', g: 'Number' },
			StretchTargetInteger: { a: 'stretchtargetinteger', g: 'Integer' },
			StretchTargetMoney: { a: 'stretchtargetmoney', g: 'Number' },
			StretchTargetMoney_Base: { a: 'stretchtargetmoney_base', r: true, g: 'Number' },
			StretchTargetString: { a: 'stretchtargetstring', r: true },
			TargetDecimal: { a: 'targetdecimal', g: 'Number' },
			TargetInteger: { a: 'targetinteger', g: 'Integer' },
			TargetMoney: { a: 'targetmoney', g: 'Number' },
			TargetMoney_Base: { a: 'targetmoney_base', r: true, g: 'Number' },
			TargetString: { a: 'targetstring', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			TreeId: { a: 'treeid', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const goal = {};
		goal.ODataEntity = e;
		goal.FormattedValue = {};
		for (const field in _goal) {
			const fieldConfig = _goal[field];
			webApiField(goal, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		goal.Entity = u;
		goal.EntityName = 'goal';
		goal.EntityCollectionName = 'goals';
		goal['@odata.etag'] = e?.['@odata.etag'];
		goal.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		goal.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return goal;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Goal = {
		AmountDataType: { Decimal: 1, Integer: 2, Money: 0 },
		FiscalPeriod: { Annual: 301, April: 104, August: 108, December: 112, February: 102, January: 101, July: 107, June: 106, March: 103, May: 105, November: 111, October: 110, P1: 401, P10: 410, P11: 411, P12: 412, P13: 413, P2: 402, P3: 403, P4: 404, P5: 405, P6: 406, P7: 407, P8: 408, P9: 409, Quarter_1: 1, Quarter_2: 2, Quarter_3: 3, Quarter_4: 4, Semester_1: 201, Semester_2: 202, September: 109 },
		FiscalYear: { FY1970: 1970, FY1971: 1971, FY1972: 1972, FY1973: 1973, FY1974: 1974, FY1975: 1975, FY1976: 1976, FY1977: 1977, FY1978: 1978, FY1979: 1979, FY1980: 1980, FY1981: 1981, FY1982: 1982, FY1983: 1983, FY1984: 1984, FY1985: 1985, FY1986: 1986, FY1987: 1987, FY1988: 1988, FY1989: 1989, FY1990: 1990, FY1991: 1991, FY1992: 1992, FY1993: 1993, FY1994: 1994, FY1995: 1995, FY1996: 1996, FY1997: 1997, FY1998: 1998, FY1999: 1999, FY2000: 2000, FY2001: 2001, FY2002: 2002, FY2003: 2003, FY2004: 2004, FY2005: 2005, FY2006: 2006, FY2007: 2007, FY2008: 2008, FY2009: 2009, FY2010: 2010, FY2011: 2011, FY2012: 2012, FY2013: 2013, FY2014: 2014, FY2015: 2015, FY2016: 2016, FY2017: 2017, FY2018: 2018, FY2019: 2019, FY2020: 2020, FY2021: 2021, FY2022: 2022, FY2023: 2023, FY2024: 2024, FY2025: 2025, FY2026: 2026, FY2027: 2027, FY2028: 2028, FY2029: 2029, FY2030: 2030, FY2031: 2031, FY2032: 2032, FY2033: 2033, FY2034: 2034, FY2035: 2035, FY2036: 2036, FY2037: 2037, FY2038: 2038 },
		GoalOwnerIdType: { },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Closed: 1, Discarded: 2, Open: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));