'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.SyncAttributeMappingApi = function (e) {
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
		var syncattributemapping = {
			AllowedSyncDirection: { a: 'allowedsyncdirection' },
			AttributeCRMName: { a: 'attributecrmname' },
			AttributeExchangeName: { a: 'attributeexchangename' },
			ComponentState: { a: 'componentstate', r: true },
			ComputedProperties: { a: 'computedproperties' },
			DefaultSyncDirection: { a: 'defaultsyncdirection' },
			IsComputed: { a: 'iscomputed', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			MappingName: { a: 'mappingname' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: '', d: '', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			ParentSyncAttributeMappingId: { b: 'parentsyncattributemappingid', a: '_parentsyncattributemappingid_value', c: 'syncattributemappings', d: 'syncattributemapping' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			SyncAttributeMappingId: { a: 'syncattributemappingid' },
			SyncAttributeMappingIdUnique: { a: 'syncattributemappingidunique', r: true },
			SyncAttributeMappingProfileId: { b: 'syncattributemappingprofileid', a: '_syncattributemappingprofileid_value', c: 'syncattributemappingprofiles', d: 'syncattributemappingprofile' },
			SyncDirection: { a: 'syncdirection' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in syncattributemapping) {
			var a = syncattributemapping[field].a;
			var b = syncattributemapping[field].b;
			var c = syncattributemapping[field].c;
			var d = syncattributemapping[field].d;
			var g = syncattributemapping[field].g;
			var r = syncattributemapping[field].r;
			syncattributemapping[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		syncattributemapping.Entity = u;
		syncattributemapping.EntityName = 'syncattributemapping';
		syncattributemapping.EntityCollectionName = 'syncattributemappings';
		syncattributemapping['@odata.etag'] = e['@odata.etag'];
		syncattributemapping.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		syncattributemapping.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return syncattributemapping;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SyncAttributeMapping = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		DefaultSyncDirection : {
			None: 0,
			ToExchange: 1,
			ToCRM: 2,
			Bidirectional: 3
		},
		SyncDirection : {
			None: 0,
			ToExchange: 1,
			ToCRM: 2,
			Bidirectional: 3
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