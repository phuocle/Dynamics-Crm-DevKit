'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.msdyn_odatav4dsApi = function (e) {
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
		const _msdyn_odatav4ds = {
			msdyn_description: { a: 'msdyn_description' },
			msdyn_isparameter10header: { a: 'msdyn_isparameter10header', g: 'Boolean' },
			msdyn_isparameter1header: { a: 'msdyn_isparameter1header', g: 'Boolean' },
			msdyn_isparameter2header: { a: 'msdyn_isparameter2header', g: 'Boolean' },
			msdyn_isparameter3header: { a: 'msdyn_isparameter3header', g: 'Boolean' },
			msdyn_isparameter4header: { a: 'msdyn_isparameter4header', g: 'Boolean' },
			msdyn_isparameter5header: { a: 'msdyn_isparameter5header', g: 'Boolean' },
			msdyn_isparameter6header: { a: 'msdyn_isparameter6header', g: 'Boolean' },
			msdyn_isparameter7header: { a: 'msdyn_isparameter7header', g: 'Boolean' },
			msdyn_isparameter8header: { a: 'msdyn_isparameter8header', g: 'Boolean' },
			msdyn_isparameter9header: { a: 'msdyn_isparameter9header', g: 'Boolean' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_odatav4dsId: { a: 'msdyn_odatav4dsid' },
			msdyn_paginationmode: { a: 'msdyn_paginationmode', g: 'Boolean' },
			msdyn_paginationtype: { a: 'msdyn_paginationtype', g: 'Integer' },
			msdyn_parameter10name: { a: 'msdyn_parameter10name' },
			msdyn_parameter10value: { a: 'msdyn_parameter10value' },
			msdyn_parameter1name: { a: 'msdyn_parameter1name' },
			msdyn_parameter1value: { a: 'msdyn_parameter1value' },
			msdyn_parameter2name: { a: 'msdyn_parameter2name' },
			msdyn_parameter2value: { a: 'msdyn_parameter2value' },
			msdyn_parameter3name: { a: 'msdyn_parameter3name' },
			msdyn_parameter3value: { a: 'msdyn_parameter3value' },
			msdyn_parameter4name: { a: 'msdyn_parameter4name' },
			msdyn_parameter4value: { a: 'msdyn_parameter4value' },
			msdyn_parameter5name: { a: 'msdyn_parameter5name' },
			msdyn_parameter5value: { a: 'msdyn_parameter5value' },
			msdyn_parameter6name: { a: 'msdyn_parameter6name' },
			msdyn_parameter6value: { a: 'msdyn_parameter6value' },
			msdyn_parameter7name: { a: 'msdyn_parameter7name' },
			msdyn_parameter7value: { a: 'msdyn_parameter7value' },
			msdyn_parameter8name: { a: 'msdyn_parameter8name' },
			msdyn_parameter8value: { a: 'msdyn_parameter8value' },
			msdyn_parameter9name: { a: 'msdyn_parameter9name' },
			msdyn_parameter9value: { a: 'msdyn_parameter9value' },
			msdyn_returninlinecount: { a: 'msdyn_returninlinecount', g: 'Boolean' },
			msdyn_timeout: { a: 'msdyn_timeout', g: 'Integer' },
			msdyn_uri: { a: 'msdyn_uri' }
		};
		if (e === undefined) e = {};
		const u = {};
		const msdyn_odatav4ds = {};
		msdyn_odatav4ds.ODataEntity = e;
		msdyn_odatav4ds.FormattedValue = {};
		for (const field in _msdyn_odatav4ds) {
			const fieldConfig = _msdyn_odatav4ds[field];
			webApiField(msdyn_odatav4ds, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		msdyn_odatav4ds.Entity = u;
		msdyn_odatav4ds.EntityName = 'msdyn_odatav4ds';
		msdyn_odatav4ds.EntityCollectionName = 'msdyn_odatav4dses';
		msdyn_odatav4ds['@odata.etag'] = e?.['@odata.etag'];
		msdyn_odatav4ds.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		msdyn_odatav4ds.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return msdyn_odatav4ds;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_odatav4ds = {
		msdyn_paginationtype: { Client_side_Paging: 0, Server_side_Paging: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));