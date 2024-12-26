'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.EntityAnalyticsConfigApi = function (e) {
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
		var _entityanalyticsconfig = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			EntityAnalyticsConfigId: { a: 'entityanalyticsconfigid' },
			IsEnabledForADLS: { a: 'isenabledforadls' },
			IsEnabledForTimeSeries: { a: 'isenabledfortimeseries' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			ParentEntityId: { b: 'parententityid', a: '_parententityid_value', c: 'entities', d: 'entity' },
			ParentEntityLogicalName: { a: 'parententitylogicalname' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var entityanalyticsconfig = {};
		entityanalyticsconfig.ODataEntity = e;
		entityanalyticsconfig.FormattedValue = {};
		for (var field in _entityanalyticsconfig) {
			var a = _entityanalyticsconfig[field].a;
			var b = _entityanalyticsconfig[field].b;
			var c = _entityanalyticsconfig[field].c;
			var d = _entityanalyticsconfig[field].d;
			var g = _entityanalyticsconfig[field].g;
			var r = _entityanalyticsconfig[field].r;
			webApiField(entityanalyticsconfig, field, e, a, b, c, d, r, u, g);
		}
		entityanalyticsconfig.Entity = u;
		entityanalyticsconfig.EntityName = 'entityanalyticsconfig';
		entityanalyticsconfig.EntityCollectionName = 'entityanalyticsconfigs';
		entityanalyticsconfig['@odata.etag'] = e['@odata.etag'];
		entityanalyticsconfig.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		entityanalyticsconfig.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return entityanalyticsconfig;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EntityAnalyticsConfig = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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