'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.UserFiscalCalendarApi = function (e) {
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
		const _userfiscalcalendar = {
			BusinessUnitId: { a: 'businessunitid', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EffectiveOn_UtcDateOnly: { a: 'effectiveon', g: 'DateTime' },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			FiscalPeriodType: { a: 'fiscalperiodtype', r: true, g: 'Integer' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Period1: { a: 'period1', g: 'Number' },
			Period1_Base: { a: 'period1_base', r: true, g: 'Number' },
			Period10: { a: 'period10', g: 'Number' },
			Period10_Base: { a: 'period10_base', r: true, g: 'Number' },
			Period11: { a: 'period11', g: 'Number' },
			Period11_Base: { a: 'period11_base', r: true, g: 'Number' },
			Period12: { a: 'period12', g: 'Number' },
			Period12_Base: { a: 'period12_base', r: true, g: 'Number' },
			Period13: { a: 'period13', g: 'Number' },
			Period13_Base: { a: 'period13_base', r: true, g: 'Number' },
			Period2: { a: 'period2', g: 'Number' },
			Period2_Base: { a: 'period2_base', r: true, g: 'Number' },
			Period3: { a: 'period3', g: 'Number' },
			Period3_Base: { a: 'period3_base', r: true, g: 'Number' },
			Period4: { a: 'period4', g: 'Number' },
			Period4_Base: { a: 'period4_base', r: true, g: 'Number' },
			Period5: { a: 'period5', g: 'Number' },
			Period5_Base: { a: 'period5_base', r: true, g: 'Number' },
			Period6: { a: 'period6', g: 'Number' },
			Period6_Base: { a: 'period6_base', r: true, g: 'Number' },
			Period7: { a: 'period7', g: 'Number' },
			Period7_Base: { a: 'period7_base', r: true, g: 'Number' },
			Period8: { a: 'period8', g: 'Number' },
			Period8_Base: { a: 'period8_base', r: true, g: 'Number' },
			Period9: { a: 'period9', g: 'Number' },
			Period9_Base: { a: 'period9_base', r: true, g: 'Number' },
			SalesPersonId: { b: 'salespersonid', a: '_salespersonid_value', c: 'systemusers', d: 'systemuser' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UserFiscalCalendarId: { a: 'userfiscalcalendarid' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const userfiscalcalendar = {};
		userfiscalcalendar.ODataEntity = e;
		userfiscalcalendar.FormattedValue = {};
		for (const field in _userfiscalcalendar) {
			const fieldConfig = _userfiscalcalendar[field];
			webApiField(userfiscalcalendar, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		userfiscalcalendar.Entity = u;
		userfiscalcalendar.EntityName = 'userfiscalcalendar';
		userfiscalcalendar.EntityCollectionName = 'userfiscalcalendars';
		userfiscalcalendar['@odata.etag'] = e?.['@odata.etag'];
		userfiscalcalendar.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		userfiscalcalendar.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return userfiscalcalendar;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.UserFiscalCalendar = {
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));