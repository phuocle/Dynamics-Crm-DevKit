﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PrincipalSyncAttributeMapApi = function (e) {
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
		var principalsyncattributemap = {
			AllowedSyncDirection: { a: 'allowedsyncdirection' },
			AttributeCRMDisplayName: { a: 'attributecrmdisplayname' },
			AttributeCRMName: { a: 'attributecrmname' },
			AttributeExchangeDisplayName: { a: 'attributeexchangedisplayname' },
			AttributeExchangeName: { a: 'attributeexchangename' },
			ComputedProperties: { a: 'computedproperties' },
			DefaultSyncDirection: { a: 'defaultsyncdirection' },
			IsComputed: { a: 'iscomputed', r: true },
			MappingName: { a: 'mappingname' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			ParentPrincipalSyncAttributeMappingId: { b: 'parentprincipalsyncattributemappingid', a: '_parentprincipalsyncattributemappingid_value', c: 'principalsyncattributemaps', d: 'principalsyncattributemap' },
			PrincipalId: { a: 'principalid' },
			PrincipalSyncAttributeMapId: { a: 'principalsyncattributemapid' },
			SyncDirection: { a: 'syncdirection' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in principalsyncattributemap) {
			var a = principalsyncattributemap[field].a;
			var b = principalsyncattributemap[field].b;
			var c = principalsyncattributemap[field].c;
			var d = principalsyncattributemap[field].d;
			var g = principalsyncattributemap[field].g;
			var r = principalsyncattributemap[field].r;
			principalsyncattributemap[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		principalsyncattributemap.Entity = u;
		principalsyncattributemap.EntityName = 'principalsyncattributemap';
		principalsyncattributemap.EntityCollectionName = 'principalsyncattributemaps';
		principalsyncattributemap['@odata.etag'] = e['@odata.etag'];
		principalsyncattributemap.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		principalsyncattributemap.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return principalsyncattributemap;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PrincipalSyncAttributeMap = {
		DefaultSyncDirection : {
			Bidirectional: 3,
			None: 0,
			ToCRM: 2,
			ToExchange: 1
		},
		SyncDirection : {
			Bidirectional: 3,
			None: 0,
			ToCRM: 2,
			ToExchange: 1
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