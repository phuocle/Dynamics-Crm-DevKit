'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RollupPropertiesApi = function (e) {
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
		var _rollupproperties = {
			AggregateAttributeLogicalName: { a: 'aggregateattributelogicalname', r: true },
			AggregateEntityLogicalName: { a: 'aggregateentitylogicalname', r: true },
			AggregateEntityTypeCode: { a: 'aggregateentitytypecode', r: true },
			AggregateFilterAttributes: { a: 'aggregatefilterattributes', r: true },
			AggregateRelationshipName: { a: 'aggregaterelationshipname', r: true },
			AggregateType: { a: 'aggregatetype', r: true },
			AllowHierarchyOnSource: { a: 'allowhierarchyonsource', r: true },
			BootstrapCurrentDepth: { a: 'bootstrapcurrentdepth', r: true },
			BootstrapRetryCount: { a: 'bootstrapretrycount', r: true },
			BootstrapRollupAsyncJobId: { a: 'bootstraprollupasyncjobid', r: true },
			BootstrapStepNumber: { a: 'bootstrapstepnumber', r: true },
			BootstrapTargetPointer: { a: 'bootstraptargetpointer', r: true },
			DataType: { a: 'datatype', r: true },
			IncrementalRollupAsyncJobId: { a: 'incrementalrollupasyncjobid', r: true },
			InitialValueCalculationStatus: { a: 'initialvaluecalculationstatus', r: true },
			IsActivityPartyIncluded: { a: 'isactivitypartyincluded', r: true },
			LastCalculationTime_UtcDateAndTime: { a: 'lastcalculationtime', r: true },
			RollupAttributeLogicalName: { a: 'rollupattributelogicalname', r: true },
			RollupEntityBaseTableName: { a: 'rollupentitybasetablename', r: true },
			RollupEntityLogicalName: { a: 'rollupentitylogicalname', r: true },
			RollupEntityPrimaryKeyPhysicalName: { a: 'rollupentityprimarykeyphysicalname', r: true },
			RollupEntityTypeCode: { a: 'rollupentitytypecode', r: true },
			RollupFilterAttributes: { a: 'rollupfilterattributes', r: true },
			RollupPropertiesId: { a: 'rolluppropertiesid', r: true },
			RollupStateAttributePhysicalName: { a: 'rollupstateattributephysicalname', r: true },
			SourceHierarchicalRelationshipName: { a: 'sourcehierarchicalrelationshipname', r: true },
			StateCode: { a: 'statecode', r: true },
			StatusCode: { a: 'statuscode', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var rollupproperties = {};
		rollupproperties.ODataEntity = e;
		rollupproperties.FormattedValue = {};
		for (var field in _rollupproperties) {
			var a = _rollupproperties[field].a;
			var b = _rollupproperties[field].b;
			var c = _rollupproperties[field].c;
			var d = _rollupproperties[field].d;
			var g = _rollupproperties[field].g;
			var r = _rollupproperties[field].r;
			webApiField(rollupproperties, field, e, a, b, c, d, r, u, g);
		}
		rollupproperties.Entity = u;
		rollupproperties.EntityName = 'rollupproperties';
		rollupproperties.EntityCollectionName = 'rolluppropertiescollection';
		rollupproperties['@odata.etag'] = e['@odata.etag'];
		rollupproperties.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		rollupproperties.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return rollupproperties;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupProperties = {
		AggregateType : {
			Average: 2,
			Count: 0,
			Max: 4,
			Min: 3,
			Sum: 1
		},
		InitialValueCalculationStatus : {
			Completed: 3,
			Failed: 4,
			In_Progress: 1,
			Paused: 2,
			Pending: 0
		},
		StateCode : {
			Invalid: 1,
			Valid: 0
		},
		StatusCode : {
			Invalid: 2,
			Valid: 1
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