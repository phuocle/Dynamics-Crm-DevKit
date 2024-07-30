'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.DataPerformanceApi = function (e) {
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
		var _dataperformance = {
			AnyOptimizationApplied: { a: 'anyoptimizationapplied', r: true },
			AnyOptimizationAvailable: { a: 'anyoptimizationavailable', r: true },
			Component: { a: 'component', r: true },
			Count: { a: 'count', r: true },
			DataPerformanceId: { a: 'dataperformanceid' },
			Entity2: { a: 'entity', r: true },
			EstimatedOptimizationImpact: { a: 'estimatedoptimizationimpact', r: true },
			ExecutionPeriod: { a: 'executionperiod', r: true },
			LastActionResult: { a: 'lastactionresult', r: true },
			LastOptimizationDate_UtcDateAndTime: { a: 'lastoptimizationdate', r: true },
			MaxTime: { a: 'maxtime', r: true },
			MedianTime: { a: 'mediantime', r: true },
			MinTime: { a: 'mintime', r: true },
			Operation: { a: 'operation', r: true },
			OptimizationStatus: { a: 'optimizationstatus', r: true },
			OptimizationStorage: { a: 'optimizationstorage', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			RealizedOptimizationImpact: { a: 'realizedoptimizationimpact', r: true },
			Solution: { a: 'solution', r: true },
			Weight: { a: 'weight', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var dataperformance = {};
		dataperformance.ODataEntity = e;
		dataperformance.FormattedValue = {};
		for (var field in _dataperformance) {
			var a = _dataperformance[field].a;
			var b = _dataperformance[field].b;
			var c = _dataperformance[field].c;
			var d = _dataperformance[field].d;
			var g = _dataperformance[field].g;
			var r = _dataperformance[field].r;
			webApiField(dataperformance, field, e, a, b, c, d, r, u, g);
		}
		dataperformance.Entity = u;
		dataperformance.EntityName = 'dataperformance';
		dataperformance.EntityCollectionName = 'dataperformances';
		dataperformance['@odata.etag'] = e['@odata.etag'];
		dataperformance.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		dataperformance.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return dataperformance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.DataPerformance = {
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