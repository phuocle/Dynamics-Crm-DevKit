'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.GlobalSearchConfigurationApi = function (e) {
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
		var globalsearchconfiguration = {
			ComponentState: { a: 'componentstate', r: true },
			GlobalSearchConfigurationId: { a: 'globalsearchconfigurationid' },
			GlobalSearchConfigurationidUnique: { a: 'globalsearchconfigurationidunique', r: true },
			IsEnabled: { a: 'isenabled' },
			IsLocalized: { a: 'islocalized' },
			IsManaged: { a: 'ismanaged', r: true },
			IsSearchBoxVisible: { a: 'issearchboxvisible' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			SearchProviderName: { a: 'searchprovidername' },
			SearchProviderResultsPage: { a: 'searchproviderresultspage' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in globalsearchconfiguration) {
			var a = globalsearchconfiguration[field].a;
			var b = globalsearchconfiguration[field].b;
			var c = globalsearchconfiguration[field].c;
			var d = globalsearchconfiguration[field].d;
			var g = globalsearchconfiguration[field].g;
			var r = globalsearchconfiguration[field].r;
			globalsearchconfiguration[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		globalsearchconfiguration.Entity = u;
		globalsearchconfiguration.EntityName = 'globalsearchconfiguration';
		globalsearchconfiguration.EntityCollectionName = 'globalsearchconfigurations';
		globalsearchconfiguration['@odata.etag'] = e['@odata.etag'];
		globalsearchconfiguration.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		globalsearchconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return globalsearchconfiguration;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.GlobalSearchConfiguration = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
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