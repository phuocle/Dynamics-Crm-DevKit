'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_iotdevicecommandparametersApi = function (e) {
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
		var _msdyn_iotdevicecommandparameters = {
			msdyn_iotdevicecommanddefinitionid: { a: 'msdyn_iotdevicecommanddefinitionid', r: true },
			msdyn_iotdevicecommandparametersId: { a: 'msdyn_iotdevicecommandparametersid', r: true },
			msdyn_iotpropertydefinitionid: { a: 'msdyn_iotpropertydefinitionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_iotdevicecommandparameters = {};
		msdyn_iotdevicecommandparameters.ODataEntity = e;
		msdyn_iotdevicecommandparameters.FormattedValue = {};
		for (var field in _msdyn_iotdevicecommandparameters) {
			var a = _msdyn_iotdevicecommandparameters[field].a;
			var b = _msdyn_iotdevicecommandparameters[field].b;
			var c = _msdyn_iotdevicecommandparameters[field].c;
			var d = _msdyn_iotdevicecommandparameters[field].d;
			var g = _msdyn_iotdevicecommandparameters[field].g;
			var r = _msdyn_iotdevicecommandparameters[field].r;
			webApiField(msdyn_iotdevicecommandparameters, field, e, a, b, c, d, r, u, g);
		}
		msdyn_iotdevicecommandparameters.Entity = u;
		msdyn_iotdevicecommandparameters.EntityName = 'msdyn_iotdevicecommandparameters';
		msdyn_iotdevicecommandparameters.EntityCollectionName = '';
		msdyn_iotdevicecommandparameters['@odata.etag'] = e['@odata.etag'];
		msdyn_iotdevicecommandparameters.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_iotdevicecommandparameters.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_iotdevicecommandparameters;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_iotdevicecommandparameters = {
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