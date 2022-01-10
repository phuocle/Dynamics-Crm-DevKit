'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.GoalApi = function (e) {
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
		var goal = {
			ActualDecimal: { a: 'actualdecimal' },
			ActualInteger: { a: 'actualinteger' },
			ActualMoney: { a: 'actualmoney' },
			ActualMoney_Base: { a: 'actualmoney_base', r: true },
			ActualString: { a: 'actualstring', r: true },
			AmountDataType: { a: 'amountdatatype' },
			ComputedTargetAsOfTodayDecimal: { a: 'computedtargetasoftodaydecimal', r: true },
			ComputedTargetAsOfTodayInteger: { a: 'computedtargetasoftodayinteger', r: true },
			ComputedTargetAsOfTodayMoney: { a: 'computedtargetasoftodaymoney', r: true },
			ComputedTargetAsOfTodayMoney_Base: { a: 'computedtargetasoftodaymoney_base', r: true },
			ComputedTargetAsOfTodayPercentageAchieved: { a: 'computedtargetasoftodaypercentageachieved', r: true },
			ConsiderOnlyGoalOwnersRecords: { a: 'consideronlygoalownersrecords' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomRollupFieldDecimal: { a: 'customrollupfielddecimal' },
			CustomRollupFieldInteger: { a: 'customrollupfieldinteger' },
			CustomRollupFieldMoney: { a: 'customrollupfieldmoney' },
			CustomRollupFieldMoney_Base: { a: 'customrollupfieldmoney_base', r: true },
			CustomRollupFieldString: { a: 'customrollupfieldstring', r: true },
			Depth: { a: 'depth', r: true },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			FiscalPeriod: { a: 'fiscalperiod' },
			FiscalYear: { a: 'fiscalyear' },
			GoalEndDate_UtcDateOnly: { a: 'goalenddate' },
			GoalId: { a: 'goalid' },
			goalownerid_systemuser: { b: 'goalownerid_systemuser', a: '_goalownerid_value', c: 'systemusers', d: 'systemuser' },
			goalownerid_team: { b: 'goalownerid_team', a: '_goalownerid_value', c: 'teams', d: 'team' },
			GoalStartDate_UtcDateOnly: { a: 'goalstartdate' },
			GoalWithErrorId: { b: 'goalwitherrorid', a: '_goalwitherrorid_value', c: 'goals', d: 'goal' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InProgressDecimal: { a: 'inprogressdecimal' },
			InProgressInteger: { a: 'inprogressinteger' },
			InProgressMoney: { a: 'inprogressmoney' },
			InProgressMoney_Base: { a: 'inprogressmoney_base', r: true },
			InProgressString: { a: 'inprogressstring', r: true },
			IsAmount: { a: 'isamount' },
			IsFiscalPeriodGoal: { a: 'isfiscalperiodgoal' },
			IsOverridden: { a: 'isoverridden' },
			IsOverride: { a: 'isoverride' },
			LastRolledupDate_UtcDateAndTime: { a: 'lastrolledupdate' },
			MetricId: { b: 'metricid', a: '_metricid_value', c: 'metrics', d: 'metric' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentGoalId: { b: 'parentgoalid', a: '_parentgoalid_value', c: 'goals', d: 'goal' },
			Percentage: { a: 'percentage' },
			RollupErrorCode: { a: 'rolluperrorcode' },
			RollupOnlyFromChildGoals: { a: 'rolluponlyfromchildgoals' },
			RollUpQueryActualDecimalId: { b: 'rollupqueryactualdecimalid', a: '_rollupqueryactualdecimalid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollupQueryActualIntegerId: { b: 'rollupqueryactualintegerid', a: '_rollupqueryactualintegerid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryActualMoneyId: { b: 'rollupqueryactualmoneyid', a: '_rollupqueryactualmoneyid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryCustomDecimalId: { b: 'rollupquerycustomdecimalid', a: '_rollupquerycustomdecimalid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryCustomIntegerId: { b: 'rollupquerycustomintegerid', a: '_rollupquerycustomintegerid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryCustomMoneyId: { b: 'rollupquerycustommoneyid', a: '_rollupquerycustommoneyid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryInprogressDecimalId: { b: 'rollupqueryinprogressdecimalid', a: '_rollupqueryinprogressdecimalid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryInprogressIntegerId: { b: 'rollupqueryinprogressintegerid', a: '_rollupqueryinprogressintegerid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			RollUpQueryInprogressMoneyId: { b: 'rollupqueryinprogressmoneyid', a: '_rollupqueryinprogressmoneyid_value', c: 'goalrollupqueries', d: 'goalrollupquery' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			StretchTargetDecimal: { a: 'stretchtargetdecimal' },
			StretchTargetInteger: { a: 'stretchtargetinteger' },
			StretchTargetMoney: { a: 'stretchtargetmoney' },
			StretchTargetMoney_Base: { a: 'stretchtargetmoney_base', r: true },
			StretchTargetString: { a: 'stretchtargetstring', r: true },
			TargetDecimal: { a: 'targetdecimal' },
			TargetInteger: { a: 'targetinteger' },
			TargetMoney: { a: 'targetmoney' },
			TargetMoney_Base: { a: 'targetmoney_base', r: true },
			TargetString: { a: 'targetstring', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			TreeId: { a: 'treeid', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in goal) {
			var a = goal[field].a;
			var b = goal[field].b;
			var c = goal[field].c;
			var d = goal[field].d;
			var g = goal[field].g;
			var r = goal[field].r;
			goal[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		goal.Entity = u;
		goal.EntityName = 'goal';
		goal.EntityCollectionName = 'goals';
		goal['@odata.etag'] = e['@odata.etag'];
		goal.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		goal.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return goal;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Goal = {
		AmountDataType : {
			Decimal: 1,
			Integer: 2,
			Money: 0
		},
		FiscalPeriod : {
			Annual: 301,
			April: 104,
			August: 108,
			December: 112,
			February: 102,
			January: 101,
			July: 107,
			June: 106,
			March: 103,
			May: 105,
			November: 111,
			October: 110,
			P1: 401,
			P10: 410,
			P11: 411,
			P12: 412,
			P13: 413,
			P2: 402,
			P3: 403,
			P4: 404,
			P5: 405,
			P6: 406,
			P7: 407,
			P8: 408,
			P9: 409,
			Quarter_1: 1,
			Quarter_2: 2,
			Quarter_3: 3,
			Quarter_4: 4,
			Semester_1: 201,
			Semester_2: 202,
			September: 109
		},
		FiscalYear : {
			FY1970: 1970,
			FY1971: 1971,
			FY1972: 1972,
			FY1973: 1973,
			FY1974: 1974,
			FY1975: 1975,
			FY1976: 1976,
			FY1977: 1977,
			FY1978: 1978,
			FY1979: 1979,
			FY1980: 1980,
			FY1981: 1981,
			FY1982: 1982,
			FY1983: 1983,
			FY1984: 1984,
			FY1985: 1985,
			FY1986: 1986,
			FY1987: 1987,
			FY1988: 1988,
			FY1989: 1989,
			FY1990: 1990,
			FY1991: 1991,
			FY1992: 1992,
			FY1993: 1993,
			FY1994: 1994,
			FY1995: 1995,
			FY1996: 1996,
			FY1997: 1997,
			FY1998: 1998,
			FY1999: 1999,
			FY2000: 2000,
			FY2001: 2001,
			FY2002: 2002,
			FY2003: 2003,
			FY2004: 2004,
			FY2005: 2005,
			FY2006: 2006,
			FY2007: 2007,
			FY2008: 2008,
			FY2009: 2009,
			FY2010: 2010,
			FY2011: 2011,
			FY2012: 2012,
			FY2013: 2013,
			FY2014: 2014,
			FY2015: 2015,
			FY2016: 2016,
			FY2017: 2017,
			FY2018: 2018,
			FY2019: 2019,
			FY2020: 2020,
			FY2021: 2021,
			FY2022: 2022,
			FY2023: 2023,
			FY2024: 2024,
			FY2025: 2025,
			FY2026: 2026,
			FY2027: 2027,
			FY2028: 2028,
			FY2029: 2029,
			FY2030: 2030,
			FY2031: 2031,
			FY2032: 2032,
			FY2033: 2033,
			FY2034: 2034,
			FY2035: 2035,
			FY2036: 2036,
			FY2037: 2037,
			FY2038: 2038
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Closed: 1,
			Discarded: 2,
			Open: 0
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