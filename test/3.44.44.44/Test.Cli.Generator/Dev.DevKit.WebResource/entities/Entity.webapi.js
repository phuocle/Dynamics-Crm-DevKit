'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.EntityApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _entity = {
			AddressTableName: { a: 'addresstablename' },
			BaseTableName: { a: 'basetablename' },
			CollectionName: { a: 'collectionname' },
			ComponentState: { a: 'componentstate', r: true },
			EntityId: { a: 'entityid' },
			EntitySetName: { a: 'entitysetname' },
			ExtensionTableName: { a: 'extensiontablename' },
			ExternalCollectionName: { a: 'externalcollectionname' },
			ExternalName: { a: 'externalname' },
			IsActivity: { a: 'isactivity', r: true },
			LogicalCollectionName: { a: 'logicalcollectionname' },
			LogicalName: { a: 'logicalname' },
			Name: { a: 'name' },
			ObjectTypeCode: { a: 'objecttypecode', r: true },
			OriginalLocalizedCollectionName: { a: 'originallocalizedcollectionname' },
			OriginalLocalizedName: { a: 'originallocalizedname' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			ParentControllingAttributeName: { a: 'parentcontrollingattributename' },
			PhysicalName: { a: 'physicalname' },
			ReportViewName: { a: 'reportviewname' },
			SolutionId: { a: 'solutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var entity = {};
		entity.ODataEntity = e;
		entity.FormattedValue = {};
		for (var field in _entity) {
			var a = _entity[field].a;
			var b = _entity[field].b;
			var c = _entity[field].c;
			var d = _entity[field].d;
			var g = _entity[field].g;
			var r = _entity[field].r;
			webApiField(entity, field, e, a, b, c, d, r, u, g);
		}
		entity.Entity = u;
		entity.EntityName = 'entity';
		entity.EntityCollectionName = 'entities';
		entity['@odata.etag'] = e['@odata.etag'];
		entity.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		entity.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return entity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Entity = {
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