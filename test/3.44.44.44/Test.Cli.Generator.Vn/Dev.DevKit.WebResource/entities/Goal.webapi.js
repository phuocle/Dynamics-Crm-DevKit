'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.GoalApi = function (e) {
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
		var _goal = {
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
		var goal = {};
		goal.ODataEntity = e;
		goal.FormattedValue = {};
		for (var field in _goal) {
			var a = _goal[field].a;
			var b = _goal[field].b;
			var c = _goal[field].c;
			var d = _goal[field].d;
			var g = _goal[field].g;
			var r = _goal[field].r;
			webApiField(goal, field, e, a, b, c, d, r, u, g);
		}
		goal.Entity = u;
		goal.EntityName = 'goal';
		goal.EntityCollectionName = 'goals';
		goal['@odata.etag'] = e['@odata.etag'];
		goal.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		goal.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
			Loai_tien: 0,
			So_nguyen: 2,
			Thap_phan: 1
		},
		FiscalPeriod : {
			Hang_nam: 301,
			Ky_1: 401,
			Ky_10: 410,
			Ky_11: 411,
			Ky_12: 412,
			Ky_13: 413,
			Ky_2: 402,
			Ky_3: 403,
			Ky_4: 404,
			Ky_5: 405,
			Ky_6: 406,
			Ky_7: 407,
			Ky_8: 408,
			Ky_9: 409,
			Ky_sau_thang_1: 201,
			Ky_sau_thang_2: 202,
			Quy_1: 1,
			Quy_2: 2,
			Quy_3: 3,
			Quy_4: 4,
			Thang_1: 101,
			Thang_10: 110,
			Thang_11: 111,
			Thang_12: 112,
			Thang_2: 102,
			Thang_3: 103,
			Thang_4: 104,
			Thang_5: 105,
			Thang_6: 106,
			Thang_7: 107,
			Thang_8: 108,
			Thang_9: 109
		},
		FiscalYear : {
			Nam_Tai_chinh1970: 1970,
			Nam_Tai_chinh1971: 1971,
			Nam_Tai_chinh1972: 1972,
			Nam_Tai_chinh1973: 1973,
			Nam_Tai_chinh1974: 1974,
			Nam_Tai_chinh1975: 1975,
			Nam_Tai_chinh1976: 1976,
			Nam_Tai_chinh1977: 1977,
			Nam_Tai_chinh1978: 1978,
			Nam_Tai_chinh1979: 1979,
			Nam_Tai_chinh1980: 1980,
			Nam_Tai_chinh1981: 1981,
			Nam_Tai_chinh1982: 1982,
			Nam_Tai_chinh1983: 1983,
			Nam_Tai_chinh1984: 1984,
			Nam_Tai_chinh1985: 1985,
			Nam_Tai_chinh1986: 1986,
			Nam_Tai_chinh1987: 1987,
			Nam_Tai_chinh1988: 1988,
			Nam_Tai_chinh1989: 1989,
			Nam_Tai_chinh1990: 1990,
			Nam_Tai_chinh1991: 1991,
			Nam_Tai_chinh1992: 1992,
			Nam_Tai_chinh1993: 1993,
			Nam_Tai_chinh1994: 1994,
			Nam_Tai_chinh1995: 1995,
			Nam_Tai_chinh1996: 1996,
			Nam_Tai_chinh1997: 1997,
			Nam_Tai_chinh1998: 1998,
			Nam_Tai_chinh1999: 1999,
			Nam_Tai_chinh2000: 2000,
			Nam_Tai_chinh2001: 2001,
			Nam_Tai_chinh2002: 2002,
			Nam_Tai_chinh2003: 2003,
			Nam_Tai_chinh2004: 2004,
			Nam_Tai_chinh2005: 2005,
			Nam_Tai_chinh2006: 2006,
			Nam_Tai_chinh2007: 2007,
			Nam_Tai_chinh2008: 2008,
			Nam_Tai_chinh2009: 2009,
			Nam_Tai_chinh2010: 2010,
			Nam_Tai_chinh2011: 2011,
			Nam_Tai_chinh2012: 2012,
			Nam_Tai_chinh2013: 2013,
			Nam_Tai_chinh2014: 2014,
			Nam_Tai_chinh2015: 2015,
			Nam_Tai_chinh2016: 2016,
			Nam_Tai_chinh2017: 2017,
			Nam_Tai_chinh2018: 2018,
			Nam_Tai_chinh2019: 2019,
			Nam_Tai_chinh2020: 2020,
			Nam_Tai_chinh2021: 2021,
			Nam_Tai_chinh2022: 2022,
			Nam_Tai_chinh2023: 2023,
			Nam_Tai_chinh2024: 2024,
			Nam_Tai_chinh2025: 2025,
			Nam_Tai_chinh2026: 2026,
			Nam_Tai_chinh2027: 2027,
			Nam_Tai_chinh2028: 2028,
			Nam_Tai_chinh2029: 2029,
			Nam_Tai_chinh2030: 2030,
			Nam_Tai_chinh2031: 2031,
			Nam_Tai_chinh2032: 2032,
			Nam_Tai_chinh2033: 2033,
			Nam_Tai_chinh2034: 2034,
			Nam_Tai_chinh2035: 2035,
			Nam_Tai_chinh2036: 2036,
			Nam_Tai_chinh2037: 2037,
			Nam_Tai_chinh2038: 2038
		},
		GoalOwnerIdType : {
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Da_dong: 1,
			Da_loai_bo: 2,
			Mo: 0
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