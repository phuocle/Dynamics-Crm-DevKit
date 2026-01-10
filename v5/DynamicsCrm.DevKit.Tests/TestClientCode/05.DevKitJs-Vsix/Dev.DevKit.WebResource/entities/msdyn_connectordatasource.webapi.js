'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.msdyn_connectordatasourceApi = function (e) {
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
		const _msdyn_connectordatasource = {
			msdyn_appsenvironment: { a: 'msdyn_appsenvironment' },
			msdyn_clientid: { a: 'msdyn_clientid' },
			msdyn_clientsecret: { a: 'msdyn_clientsecret' },
			msdyn_connectionreference: { a: 'msdyn_connectionreference' },
			msdyn_ConnectionReferenceId: { b: 'msdyn_ConnectionReferenceId', a: '_msdyn_connectionreferenceid_value', c: 'connectionreferences', d: 'connectionreference' },
			msdyn_connectordatasourceId: { a: 'msdyn_connectordatasourceid' },
			msdyn_connectortype: { a: 'msdyn_connectortype' },
			msdyn_dataset_unresolvedvalue: { a: 'msdyn_dataset_unresolvedvalue' },
			msdyn_dataset_value: { a: 'msdyn_dataset_value' },
			msdyn_hasacling: { a: 'msdyn_hasacling', g: 'Boolean' },
			msdyn_host: { a: 'msdyn_host' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_resource: { a: 'msdyn_resource' },
			msdyn_tenant: { a: 'msdyn_tenant' },
			msdyn_userauth: { a: 'msdyn_userauth', g: 'Boolean' }
		};
		if (e === undefined) e = {};
		const u = {};
		const msdyn_connectordatasource = {};
		msdyn_connectordatasource.ODataEntity = e;
		msdyn_connectordatasource.FormattedValue = {};
		for (const field in _msdyn_connectordatasource) {
			const fieldConfig = _msdyn_connectordatasource[field];
			webApiField(msdyn_connectordatasource, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		msdyn_connectordatasource.Entity = u;
		msdyn_connectordatasource.EntityName = 'msdyn_connectordatasource';
		msdyn_connectordatasource.EntityCollectionName = 'msdyn_connectordatasources';
		msdyn_connectordatasource['@odata.etag'] = e?.['@odata.etag'];
		msdyn_connectordatasource.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		msdyn_connectordatasource.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return msdyn_connectordatasource;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.msdyn_connectordatasource = {
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));