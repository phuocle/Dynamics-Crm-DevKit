'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.MonthlyFiscalCalendarApi = function (e) {
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
		var monthlyfiscalcalendar = {
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EffectiveOn_UtcDateOnly: { a: 'effectiveon' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FiscalPeriodType: { a: 'fiscalperiodtype', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Period1: { a: 'month1' },
			Period1_Base: { a: 'month1_base', r: true },
			Period10: { a: 'month10' },
			Period10_Base: { a: 'month10_base', r: true },
			Period11: { a: 'month11' },
			Period11_Base: { a: 'month11_base', r: true },
			Period12: { a: 'month12' },
			Period12_Base: { a: 'month12_base', r: true },
			Period2: { a: 'month2' },
			Period2_Base: { a: 'month2_base', r: true },
			Period3: { a: 'month3' },
			Period3_Base: { a: 'month3_base', r: true },
			Period4: { a: 'month4' },
			Period4_Base: { a: 'month4_base', r: true },
			Period5: { a: 'month5' },
			Period5_Base: { a: 'month5_base', r: true },
			Period6: { a: 'month6' },
			Period6_Base: { a: 'month6_base', r: true },
			Period7: { a: 'month7' },
			Period7_Base: { a: 'month7_base', r: true },
			Period8: { a: 'month8' },
			Period8_Base: { a: 'month8_base', r: true },
			Period9: { a: 'month9' },
			Period9_Base: { a: 'month9_base', r: true },
			SalesPersonId: { b: 'salespersonid', a: '_salespersonid_value', c: 'systemusers', d: 'systemuser' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UserFiscalCalendarId: { a: 'userfiscalcalendarid' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in monthlyfiscalcalendar) {
			var a = monthlyfiscalcalendar[field].a;
			var b = monthlyfiscalcalendar[field].b;
			var c = monthlyfiscalcalendar[field].c;
			var d = monthlyfiscalcalendar[field].d;
			var g = monthlyfiscalcalendar[field].g;
			var r = monthlyfiscalcalendar[field].r;
			monthlyfiscalcalendar[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		monthlyfiscalcalendar.Entity = u;
		monthlyfiscalcalendar.EntityName = 'monthlyfiscalcalendar';
		monthlyfiscalcalendar.EntityCollectionName = 'monthlyfiscalcalendars';
		monthlyfiscalcalendar['@odata.etag'] = e['@odata.etag'];
		monthlyfiscalcalendar.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		monthlyfiscalcalendar.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return monthlyfiscalcalendar;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.MonthlyFiscalCalendar = {
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