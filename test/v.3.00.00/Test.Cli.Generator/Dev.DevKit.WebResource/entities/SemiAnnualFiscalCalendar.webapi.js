'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SemiAnnualFiscalCalendarApi = function (e) {
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
		var _semiannualfiscalcalendar = {
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit', r: true },
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
			Period1: { a: 'firsthalf' },
			Period1_Base: { a: 'firsthalf_base', r: true },
			Period7: { a: 'secondhalf' },
			Period7_Base: { a: 'secondhalf_base', r: true },
			SalesPersonId: { b: 'salespersonid', a: '_salespersonid_value', c: 'systemusers', d: 'systemuser' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UserFiscalCalendarId: { a: 'userfiscalcalendarid' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var semiannualfiscalcalendar = {};
		semiannualfiscalcalendar.ODataEntity = e;
		semiannualfiscalcalendar.FormattedValue = {};
		for (var field in _semiannualfiscalcalendar) {
			var a = _semiannualfiscalcalendar[field].a;
			var b = _semiannualfiscalcalendar[field].b;
			var c = _semiannualfiscalcalendar[field].c;
			var d = _semiannualfiscalcalendar[field].d;
			var g = _semiannualfiscalcalendar[field].g;
			var r = _semiannualfiscalcalendar[field].r;
			webApiField(semiannualfiscalcalendar, field, e, a, b, c, d, r, u, g);
		}
		semiannualfiscalcalendar.Entity = u;
		semiannualfiscalcalendar.EntityName = 'semiannualfiscalcalendar';
		semiannualfiscalcalendar.EntityCollectionName = 'semiannualfiscalcalendars';
		semiannualfiscalcalendar['@odata.etag'] = e['@odata.etag'];
		semiannualfiscalcalendar.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		semiannualfiscalcalendar.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return semiannualfiscalcalendar;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SemiAnnualFiscalCalendar = {
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