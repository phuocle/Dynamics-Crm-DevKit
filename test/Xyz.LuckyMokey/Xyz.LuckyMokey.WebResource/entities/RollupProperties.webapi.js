'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.RollupPropertiesApi = function (e) {
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
		var rollupproperties = {
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
		for (var field in rollupproperties) {
			var a = rollupproperties[field].a;
			var b = rollupproperties[field].b;
			var c = rollupproperties[field].c;
			var d = rollupproperties[field].d;
			var g = rollupproperties[field].g;
			var r = rollupproperties[field].r;
			rollupproperties[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		rollupproperties.Entity = u;
		rollupproperties.EntityName = 'rollupproperties';
		rollupproperties.EntityCollectionName = 'rolluppropertiescollection';
		rollupproperties['@odata.etag'] = e['@odata.etag'];
		rollupproperties.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		rollupproperties.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return rollupproperties;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupProperties = {
		AggregateType : {
			Count: 0,
			Sum: 1,
			Average: 2,
			Min: 3,
			Max: 4
		},
		InitialValueCalculationStatus : {
			Pending: 0,
			In_Progress: 1,
			Paused: 2,
			Completed: 3,
			Failed: 4
		},
		StateCode : {
			Valid: 0,
			Invalid: 1
		},
		StatusCode : {
			Valid: 1,
			Invalid: 2
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