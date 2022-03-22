'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RollupJobApi = function (e) {
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
		var _rollupjob = {
			DepthProcessed: { a: 'depthprocessed', r: true },
			PostponeUntil_UtcDateAndTime: { a: 'postponeuntil', r: true },
			RecordCreatedOn_UtcDateAndTime: { a: 'recordcreatedon', r: true },
			RetryCount: { a: 'retrycount', r: true },
			RollupJobId1: { a: 'rollupjobid', r: true },
			RollupPropertiesId: { b: 'rolluppropertiesid', a: '_rolluppropertiesid_value', c: 'rolluppropertiescollection', d: 'rollupproperties', r: true },
			SourceEntityTypeCode: { a: 'sourceentitytypecode', r: true },
			StateCode: { a: 'statecode', r: true },
			StatusCode: { a: 'statuscode', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var rollupjob = {};
		rollupjob.ODataEntity = e;
		rollupjob.FormattedValue = {};
		for (var field in _rollupjob) {
			var a = _rollupjob[field].a;
			var b = _rollupjob[field].b;
			var c = _rollupjob[field].c;
			var d = _rollupjob[field].d;
			var g = _rollupjob[field].g;
			var r = _rollupjob[field].r;
			webApiField(rollupjob, field, e, a, b, c, d, r, u, g);
		}
		rollupjob.Entity = u;
		rollupjob.EntityName = 'rollupjob';
		rollupjob.EntityCollectionName = 'rollupjobs';
		rollupjob['@odata.etag'] = e['@odata.etag'];
		rollupjob.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		rollupjob.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return rollupjob;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RollupJob = {
		StateCode : {
			Completed: 3,
			Locked: 2,
			Ready: 0,
			Suspended: 1
		},
		StatusCode : {
			Canceled: 32,
			Canceling: 22,
			Failed: 31,
			In_Progress: 20,
			Pausing: 21,
			Succeeded: 30,
			Waiting: 10,
			Waiting_For_Resources: 0
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