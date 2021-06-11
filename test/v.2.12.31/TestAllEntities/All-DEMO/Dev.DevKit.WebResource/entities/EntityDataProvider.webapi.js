'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.EntityDataProviderApi = function (e) {
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
		var entitydataprovider = {
			ComponentState: { a: 'componentstate', r: true },
			CreateMultiplePlugin: { a: 'createmultipleplugin' },
			CreatePlugin: { a: 'createplugin' },
			DataSourceLogicalName: { a: 'datasourcelogicalname' },
			DeletePlugin: { a: 'deleteplugin' },
			Description: { a: 'description' },
			EntityDataProviderId: { a: 'entitydataproviderid' },
			EntityDataProviderIdUnique: { a: 'entitydataprovideridunique', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			Name: { a: 'name' },
			OrganizationId: { a: 'organizationid', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			RetrieveEntityChangesPlugin: { a: 'retrieveentitychangesplugin' },
			RetrieveMultiplePlugin: { a: 'retrievemultipleplugin' },
			RetrievePlugin: { a: 'retrieveplugin' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			UpdateMultiplePlugin: { a: 'updatemultipleplugin' },
			UpdatePlugin: { a: 'updateplugin' },
			UpsertMultiplePlugin: { a: 'upsertmultipleplugin' },
			UpsertPlugin: { a: 'upsertplugin' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in entitydataprovider) {
			var a = entitydataprovider[field].a;
			var b = entitydataprovider[field].b;
			var c = entitydataprovider[field].c;
			var d = entitydataprovider[field].d;
			var g = entitydataprovider[field].g;
			var r = entitydataprovider[field].r;
			entitydataprovider[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		entitydataprovider.Entity = u;
		entitydataprovider.EntityName = 'entitydataprovider';
		entitydataprovider.EntityCollectionName = 'entitydataproviders';
		entitydataprovider['@odata.etag'] = e['@odata.etag'];
		entitydataprovider.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		entitydataprovider.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return entitydataprovider;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EntityDataProvider = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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