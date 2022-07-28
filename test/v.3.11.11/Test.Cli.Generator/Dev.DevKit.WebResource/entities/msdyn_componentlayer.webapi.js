'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_componentlayerApi = function (e) {
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
		var _msdyn_componentlayer = {
			msdyn_changes: { a: 'msdyn_changes' },
			msdyn_children: { a: 'msdyn_children' },
			msdyn_componentid: { a: 'msdyn_componentid' },
			msdyn_componentjson: { a: 'msdyn_componentjson' },
			msdyn_componentlayerId: { a: 'msdyn_componentlayerid' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_overwritetime' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_order: { a: 'msdyn_order' },
			msdyn_publishername: { a: 'msdyn_publishername' },
			msdyn_solutioncomponentname: { a: 'msdyn_solutioncomponentname' },
			msdyn_solutionname: { a: 'msdyn_solutionname' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_componentlayer = {};
		msdyn_componentlayer.ODataEntity = e;
		msdyn_componentlayer.FormattedValue = {};
		for (var field in _msdyn_componentlayer) {
			var a = _msdyn_componentlayer[field].a;
			var b = _msdyn_componentlayer[field].b;
			var c = _msdyn_componentlayer[field].c;
			var d = _msdyn_componentlayer[field].d;
			var g = _msdyn_componentlayer[field].g;
			var r = _msdyn_componentlayer[field].r;
			webApiField(msdyn_componentlayer, field, e, a, b, c, d, r, u, g);
		}
		msdyn_componentlayer.Entity = u;
		msdyn_componentlayer.EntityName = 'msdyn_componentlayer';
		msdyn_componentlayer.EntityCollectionName = 'msdyn_componentlayers';
		msdyn_componentlayer['@odata.etag'] = e['@odata.etag'];
		msdyn_componentlayer.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_componentlayer.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_componentlayer;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_componentlayer = {
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