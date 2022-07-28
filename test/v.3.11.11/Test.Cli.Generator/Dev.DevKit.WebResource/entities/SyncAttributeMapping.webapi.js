'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SyncAttributeMappingApi = function (e) {
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
		var _syncattributemapping = {
			AllowedSyncDirection: { a: 'allowedsyncdirection' },
			AttributeCRMName: { a: 'attributecrmname' },
			AttributeExchangeName: { a: 'attributeexchangename' },
			ComponentState: { a: 'componentstate', r: true },
			ComputedProperties: { a: 'computedproperties' },
			DefaultSyncDirection: { a: 'defaultsyncdirection' },
			IsComputed: { a: 'iscomputed', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			MappingName: { a: 'mappingname' },
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
		var syncattributemapping = {};
		syncattributemapping.ODataEntity = e;
		syncattributemapping.FormattedValue = {};
		for (var field in _syncattributemapping) {
			var a = _syncattributemapping[field].a;
			var b = _syncattributemapping[field].b;
			var c = _syncattributemapping[field].c;
			var d = _syncattributemapping[field].d;
			var g = _syncattributemapping[field].g;
			var r = _syncattributemapping[field].r;
			webApiField(syncattributemapping, field, e, a, b, c, d, r, u, g);
		}
		syncattributemapping.Entity = u;
		syncattributemapping.EntityName = 'syncattributemapping';
		syncattributemapping.EntityCollectionName = 'syncattributemappings';
		syncattributemapping['@odata.etag'] = e['@odata.etag'];
		syncattributemapping.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		syncattributemapping.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return syncattributemapping;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SyncAttributeMapping = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
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