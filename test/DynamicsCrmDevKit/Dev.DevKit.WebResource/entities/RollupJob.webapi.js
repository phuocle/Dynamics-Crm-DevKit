'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RollupJobApi = function (e) {
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
		var rollupjob = {
			DepthProcessed: { a: 'depthprocessed', r: true },
			PostponeUntil_UtcDateAndTime: { a: 'postponeuntil', r: true },
			RecordCreatedOn_UtcDateAndTime: { a: 'recordcreatedon', r: true },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: '', d: '', r: true },
			RetryCount: { a: 'retrycount', r: true },
			RollupJobId: { a: 'rollupjobid', r: true },
			RollupPropertiesId: { b: 'rolluppropertiesid', a: '_rolluppropertiesid_value', c: 'rolluppropertiescollection', d: 'rollupproperties', r: true },
			SourceEntityTypeCode: { a: 'sourceentitytypecode', r: true },
			StateCode: { a: 'statecode', r: true },
			StatusCode: { a: 'statuscode', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in rollupjob) {
			var a = rollupjob[field].a;
			var b = rollupjob[field].b;
			var c = rollupjob[field].c;
			var d = rollupjob[field].d;
			var g = rollupjob[field].g;
			var r = rollupjob[field].r;
			rollupjob[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		rollupjob.Entity = u;
		rollupjob.EntityName = 'rollupjob';
		rollupjob.EntityCollectionName = 'rollupjobs';
		rollupjob['@odata.etag'] = e['@odata.etag'];
		rollupjob.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		rollupjob.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return rollupjob;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupJob = {
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