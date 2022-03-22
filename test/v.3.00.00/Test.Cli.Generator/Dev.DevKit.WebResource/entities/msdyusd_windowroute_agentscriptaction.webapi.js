'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyusd_windowroute_agentscriptactionApi = function (e) {
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
		var _msdyusd_windowroute_agentscriptaction = {
			msdyusd_agentscriptactionid: { a: 'msdyusd_agentscriptactionid', r: true },
			msdyusd_windowroute_agentscriptactionId: { a: 'msdyusd_windowroute_agentscriptactionid', r: true },
			msdyusd_windowrouteid: { a: 'msdyusd_windowrouteid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyusd_windowroute_agentscriptaction = {};
		msdyusd_windowroute_agentscriptaction.ODataEntity = e;
		msdyusd_windowroute_agentscriptaction.FormattedValue = {};
		for (var field in _msdyusd_windowroute_agentscriptaction) {
			var a = _msdyusd_windowroute_agentscriptaction[field].a;
			var b = _msdyusd_windowroute_agentscriptaction[field].b;
			var c = _msdyusd_windowroute_agentscriptaction[field].c;
			var d = _msdyusd_windowroute_agentscriptaction[field].d;
			var g = _msdyusd_windowroute_agentscriptaction[field].g;
			var r = _msdyusd_windowroute_agentscriptaction[field].r;
			webApiField(msdyusd_windowroute_agentscriptaction, field, e, a, b, c, d, r, u, g);
		}
		msdyusd_windowroute_agentscriptaction.Entity = u;
		msdyusd_windowroute_agentscriptaction.EntityName = 'msdyusd_windowroute_agentscriptaction';
		msdyusd_windowroute_agentscriptaction.EntityCollectionName = '';
		msdyusd_windowroute_agentscriptaction['@odata.etag'] = e['@odata.etag'];
		msdyusd_windowroute_agentscriptaction.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyusd_windowroute_agentscriptaction.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyusd_windowroute_agentscriptaction;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyusd_windowroute_agentscriptaction = {
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