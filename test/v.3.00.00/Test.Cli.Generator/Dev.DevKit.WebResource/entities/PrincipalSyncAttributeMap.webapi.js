'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PrincipalSyncAttributeMapApi = function (e) {
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
		var _principalsyncattributemap = {
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
		var principalsyncattributemap = {};
		principalsyncattributemap.ODataEntity = e;
		principalsyncattributemap.FormattedValue = {};
		for (var field in _principalsyncattributemap) {
			var a = _principalsyncattributemap[field].a;
			var b = _principalsyncattributemap[field].b;
			var c = _principalsyncattributemap[field].c;
			var d = _principalsyncattributemap[field].d;
			var g = _principalsyncattributemap[field].g;
			var r = _principalsyncattributemap[field].r;
			webApiField(principalsyncattributemap, field, e, a, b, c, d, r, u, g);
		}
		principalsyncattributemap.Entity = u;
		principalsyncattributemap.EntityName = 'principalsyncattributemap';
		principalsyncattributemap.EntityCollectionName = 'principalsyncattributemaps';
		principalsyncattributemap['@odata.etag'] = e['@odata.etag'];
		principalsyncattributemap.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		principalsyncattributemap.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
		EntityTypeCode : {
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