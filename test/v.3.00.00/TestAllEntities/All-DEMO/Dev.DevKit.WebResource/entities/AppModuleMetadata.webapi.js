'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AppModuleMetadataApi = function (e) {
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
		var appmodulemetadata = {
			AppModuleId: { a: 'appmoduleid' },
			AppModuleMetadataId: { a: 'appmodulemetadataid' },
			ComponentId: { a: 'componentid' },
			ComponentIsDefault: { a: 'componentisdefault' },
			ComponentIsQuickFindQuery: { a: 'componentisquickfindquery' },
			ComponentIsTabletEnabled: { a: 'componentistabletenabled' },
			ComponentIsUserChart: { a: 'componentisuserchart' },
			ComponentIsUserForm: { a: 'componentisuserform' },
			ComponentIsUserView: { a: 'componentisuserview' },
			ComponentStateCode: { a: 'componentstatecode' },
			ComponentSubType: { a: 'componentsubtype' },
			ComponentType: { a: 'componenttype' },
			ComponentVersion: { a: 'componentversion' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ParentComponentId: { a: 'parentcomponentid' },
			State: { a: 'state' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in appmodulemetadata) {
			var a = appmodulemetadata[field].a;
			var b = appmodulemetadata[field].b;
			var c = appmodulemetadata[field].c;
			var d = appmodulemetadata[field].d;
			var g = appmodulemetadata[field].g;
			var r = appmodulemetadata[field].r;
			appmodulemetadata[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		appmodulemetadata.Entity = u;
		appmodulemetadata.EntityName = 'appmodulemetadata';
		appmodulemetadata.EntityCollectionName = 'appmodulemetadatacollection';
		appmodulemetadata['@odata.etag'] = e['@odata.etag'];
		appmodulemetadata.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appmodulemetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appmodulemetadata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AppModuleMetadata = {
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