'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.AppModuleMetadataDependencyApi = function (e) {
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
		var appmodulemetadatadependency = {
			AppModuleMetadataDependencyId: { a: 'appmodulemetadatadependencyid' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			DependentComponentId: { a: 'dependentcomponentid' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			RequiredComponentId: { a: 'requiredcomponentid' },
			RequiredComponentInternalId: { a: 'requiredcomponentinternalid' },
			RequiredComponentSubType: { a: 'requiredcomponentsubtype' },
			RequiredComponentType: { a: 'requiredcomponenttype' },
			RequiredComponentVersion: { a: 'requiredcomponentversion' },
			State: { a: 'state' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in appmodulemetadatadependency) {
			var a = appmodulemetadatadependency[field].a;
			var b = appmodulemetadatadependency[field].b;
			var c = appmodulemetadatadependency[field].c;
			var d = appmodulemetadatadependency[field].d;
			var g = appmodulemetadatadependency[field].g;
			var r = appmodulemetadatadependency[field].r;
			appmodulemetadatadependency[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		appmodulemetadatadependency.Entity = u;
		appmodulemetadatadependency.EntityName = 'appmodulemetadatadependency';
		appmodulemetadatadependency.EntityCollectionName = 'appmodulemetadatadependencycollection';
		appmodulemetadatadependency['@odata.etag'] = e['@odata.etag'];
		appmodulemetadatadependency.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appmodulemetadatadependency.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appmodulemetadatadependency;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AppModuleMetadataDependency = {
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