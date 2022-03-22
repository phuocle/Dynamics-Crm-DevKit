'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RuntimeDependencyApi = function (e) {
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
		var _runtimedependency = {
			CreatedTime_UtcDateAndTime: { a: 'createdtime', r: true },
			DependencyId: { a: 'dependencyid', r: true },
			DependentComponentNodeId: { a: 'dependentcomponentnodeid' },
			DependentComponentType: { a: 'dependentcomponenttype' },
			IsPublished: { a: 'ispublished' },
			RequiredComponentModifiedTime_UtcDateAndTime: { a: 'requiredcomponentmodifiedtime', r: true },
			RequiredComponentNodeId: { a: 'requiredcomponentnodeid' },
			RequiredComponentType: { a: 'requiredcomponenttype' }
		};
		if (e === undefined) e = {};
		var u = {};
		var runtimedependency = {};
		runtimedependency.ODataEntity = e;
		runtimedependency.FormattedValue = {};
		for (var field in _runtimedependency) {
			var a = _runtimedependency[field].a;
			var b = _runtimedependency[field].b;
			var c = _runtimedependency[field].c;
			var d = _runtimedependency[field].d;
			var g = _runtimedependency[field].g;
			var r = _runtimedependency[field].r;
			webApiField(runtimedependency, field, e, a, b, c, d, r, u, g);
		}
		runtimedependency.Entity = u;
		runtimedependency.EntityName = 'runtimedependency';
		runtimedependency.EntityCollectionName = 'runtimedependencies';
		runtimedependency['@odata.etag'] = e['@odata.etag'];
		runtimedependency.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		runtimedependency.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return runtimedependency;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RuntimeDependency = {
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