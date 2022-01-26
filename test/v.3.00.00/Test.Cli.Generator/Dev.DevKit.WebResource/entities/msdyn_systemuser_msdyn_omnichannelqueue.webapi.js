'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_systemuser_msdyn_omnichannelqueueApi = function (e) {
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
		var msdyn_systemuser_msdyn_omnichannelqueue = {
			msdyn_omnichannelqueueid: { a: 'msdyn_omnichannelqueueid', r: true },
			msdyn_systemuser_msdyn_omnichannelqueueId: { a: 'msdyn_systemuser_msdyn_omnichannelqueueid', r: true },
			systemuserid: { a: 'systemuserid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_systemuser_msdyn_omnichannelqueue) {
			var a = msdyn_systemuser_msdyn_omnichannelqueue[field].a;
			var b = msdyn_systemuser_msdyn_omnichannelqueue[field].b;
			var c = msdyn_systemuser_msdyn_omnichannelqueue[field].c;
			var d = msdyn_systemuser_msdyn_omnichannelqueue[field].d;
			var g = msdyn_systemuser_msdyn_omnichannelqueue[field].g;
			var r = msdyn_systemuser_msdyn_omnichannelqueue[field].r;
			msdyn_systemuser_msdyn_omnichannelqueue[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_systemuser_msdyn_omnichannelqueue.Entity = u;
		msdyn_systemuser_msdyn_omnichannelqueue.EntityName = 'msdyn_systemuser_msdyn_omnichannelqueue';
		msdyn_systemuser_msdyn_omnichannelqueue.EntityCollectionName = '';
		msdyn_systemuser_msdyn_omnichannelqueue['@odata.etag'] = e['@odata.etag'];
		msdyn_systemuser_msdyn_omnichannelqueue.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_systemuser_msdyn_omnichannelqueue.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_systemuser_msdyn_omnichannelqueue;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_systemuser_msdyn_omnichannelqueue = {
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