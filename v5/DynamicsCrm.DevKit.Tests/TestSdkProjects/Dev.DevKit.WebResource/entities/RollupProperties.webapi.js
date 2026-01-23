'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.RollupPropertiesApi = function (e) {
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
		const _rollupproperties = {
			AggregateAttributeLogicalName: { a: 'aggregateattributelogicalname', r: true },
			AggregateEntityLogicalName: { a: 'aggregateentitylogicalname', r: true },
			AggregateEntityTypeCode: { a: 'aggregateentitytypecode', r: true, g: 'Integer' },
			AggregateFilterAttributes: { a: 'aggregatefilterattributes', r: true },
			AggregateRelationshipName: { a: 'aggregaterelationshipname', r: true },
			AggregateType: { a: 'aggregatetype', r: true, g: 'Integer' },
			AllowHierarchyOnSource: { a: 'allowhierarchyonsource', r: true, g: 'Boolean' },
			BootstrapCurrentDepth: { a: 'bootstrapcurrentdepth', r: true, g: 'Integer' },
			BootstrapRetryCount: { a: 'bootstrapretrycount', r: true, g: 'Integer' },
			BootstrapRollupAsyncJobId: { a: 'bootstraprollupasyncjobid', r: true },
			BootstrapStepNumber: { a: 'bootstrapstepnumber', r: true, g: 'Integer' },
			BootstrapTargetPointer: { a: 'bootstraptargetpointer', r: true, g: 'Integer' },
			DataType: { a: 'datatype', r: true },
			IncrementalRollupAsyncJobId: { a: 'incrementalrollupasyncjobid', r: true },
			InitialValueCalculationStatus: { a: 'initialvaluecalculationstatus', r: true, g: 'Integer' },
			IsActivityPartyIncluded: { a: 'isactivitypartyincluded', r: true, g: 'Integer' },
			LastCalculationTime_UtcDateAndTime: { a: 'lastcalculationtime', r: true, g: 'DateTime' },
			RollupAttributeLogicalName: { a: 'rollupattributelogicalname', r: true },
			RollupEntityBaseTableName: { a: 'rollupentitybasetablename', r: true },
			RollupEntityLogicalName: { a: 'rollupentitylogicalname', r: true },
			RollupEntityPrimaryKeyPhysicalName: { a: 'rollupentityprimarykeyphysicalname', r: true },
			RollupEntityTypeCode: { a: 'rollupentitytypecode', r: true, g: 'Integer' },
			RollupFilterAttributes: { a: 'rollupfilterattributes', r: true },
			RollupPropertiesId: { a: 'rolluppropertiesid', r: true },
			RollupStateAttributePhysicalName: { a: 'rollupstateattributephysicalname', r: true },
			SourceHierarchicalRelationshipName: { a: 'sourcehierarchicalrelationshipname', r: true },
			StateCode: { a: 'statecode', r: true, g: 'Integer' },
			StatusCode: { a: 'statuscode', r: true, g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const rollupproperties = {};
		rollupproperties.ODataEntity = e;
		rollupproperties.FormattedValue = {};
		for (const field in _rollupproperties) {
			const fieldConfig = _rollupproperties[field];
			webApiField(rollupproperties, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		rollupproperties.Entity = u;
		rollupproperties.EntityName = 'rollupproperties';
		rollupproperties.EntityCollectionName = 'rolluppropertiescollection';
		rollupproperties['@odata.etag'] = e?.['@odata.etag'];
		rollupproperties.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		rollupproperties.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return rollupproperties;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.RollupProperties = {
		AggregateType: { Average: 2, Count: 0, Max: 4, Min: 3, Sum: 1 },
		InitialValueCalculationStatus: { Completed: 3, Failed: 4, In_Progress: 1, Paused: 2, Pending: 0 },
		StateCode: { Invalid: 1, Valid: 0 },
		StatusCode: { Invalid: 2, Valid: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));