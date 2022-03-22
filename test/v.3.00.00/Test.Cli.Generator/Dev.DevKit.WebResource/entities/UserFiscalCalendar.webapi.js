'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.UserFiscalCalendarApi = function (e) {
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
		var _userfiscalcalendar = {
			BusinessUnitId: { a: 'businessunitid', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EffectiveOn_UtcDateOnly: { a: 'effectiveon' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FiscalPeriodType: { a: 'fiscalperiodtype', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Period1: { a: 'period1' },
			Period1_Base: { a: 'period1_base', r: true },
			Period10: { a: 'period10' },
			Period10_Base: { a: 'period10_base', r: true },
			Period11: { a: 'period11' },
			Period11_Base: { a: 'period11_base', r: true },
			Period12: { a: 'period12' },
			Period12_Base: { a: 'period12_base', r: true },
			Period13: { a: 'period13' },
			Period13_Base: { a: 'period13_base', r: true },
			Period2: { a: 'period2' },
			Period2_Base: { a: 'period2_base', r: true },
			Period3: { a: 'period3' },
			Period3_Base: { a: 'period3_base', r: true },
			Period4: { a: 'period4' },
			Period4_Base: { a: 'period4_base', r: true },
			Period5: { a: 'period5' },
			Period5_Base: { a: 'period5_base', r: true },
			Period6: { a: 'period6' },
			Period6_Base: { a: 'period6_base', r: true },
			Period7: { a: 'period7' },
			Period7_Base: { a: 'period7_base', r: true },
			Period8: { a: 'period8' },
			Period8_Base: { a: 'period8_base', r: true },
			Period9: { a: 'period9' },
			Period9_Base: { a: 'period9_base', r: true },
			SalesPersonId: { b: 'salespersonid', a: '_salespersonid_value', c: 'systemusers', d: 'systemuser' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UserFiscalCalendarId: { a: 'userfiscalcalendarid' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var userfiscalcalendar = {};
		userfiscalcalendar.ODataEntity = e;
		userfiscalcalendar.FormattedValue = {};
		for (var field in _userfiscalcalendar) {
			var a = _userfiscalcalendar[field].a;
			var b = _userfiscalcalendar[field].b;
			var c = _userfiscalcalendar[field].c;
			var d = _userfiscalcalendar[field].d;
			var g = _userfiscalcalendar[field].g;
			var r = _userfiscalcalendar[field].r;
			webApiField(userfiscalcalendar, field, e, a, b, c, d, r, u, g);
		}
		userfiscalcalendar.Entity = u;
		userfiscalcalendar.EntityName = 'userfiscalcalendar';
		userfiscalcalendar.EntityCollectionName = 'userfiscalcalendars';
		userfiscalcalendar['@odata.etag'] = e['@odata.etag'];
		userfiscalcalendar.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		userfiscalcalendar.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return userfiscalcalendar;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UserFiscalCalendar = {
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