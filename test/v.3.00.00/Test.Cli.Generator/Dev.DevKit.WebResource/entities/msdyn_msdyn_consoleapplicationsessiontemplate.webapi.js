﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_msdyn_consoleapplicationsessiontemplateApi = function (e) {
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
		var _msdyn_msdyn_consoleapplicationsessiontemplate = {
			msdyn_consoleapplicationsessiontemplateid: { a: 'msdyn_consoleapplicationsessiontemplateid', r: true },
			msdyn_consoleapplicationtemplateid: { a: 'msdyn_consoleapplicationtemplateid', r: true },
			msdyn_msdyn_consoleapplicationsessiontemplateId: { a: 'msdyn_msdyn_consoleapplicationsessiontemplateid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_msdyn_consoleapplicationsessiontemplate = {};
		msdyn_msdyn_consoleapplicationsessiontemplate.ODataEntity = e;
		msdyn_msdyn_consoleapplicationsessiontemplate.FormattedValue = {};
		for (var field in _msdyn_msdyn_consoleapplicationsessiontemplate) {
			var a = _msdyn_msdyn_consoleapplicationsessiontemplate[field].a;
			var b = _msdyn_msdyn_consoleapplicationsessiontemplate[field].b;
			var c = _msdyn_msdyn_consoleapplicationsessiontemplate[field].c;
			var d = _msdyn_msdyn_consoleapplicationsessiontemplate[field].d;
			var g = _msdyn_msdyn_consoleapplicationsessiontemplate[field].g;
			var r = _msdyn_msdyn_consoleapplicationsessiontemplate[field].r;
			webApiField(msdyn_msdyn_consoleapplicationsessiontemplate, field, e, a, b, c, d, r, u, g);
		}
		msdyn_msdyn_consoleapplicationsessiontemplate.Entity = u;
		msdyn_msdyn_consoleapplicationsessiontemplate.EntityName = 'msdyn_msdyn_consoleapplicationsessiontemplate';
		msdyn_msdyn_consoleapplicationsessiontemplate.EntityCollectionName = '';
		msdyn_msdyn_consoleapplicationsessiontemplate['@odata.etag'] = e['@odata.etag'];
		msdyn_msdyn_consoleapplicationsessiontemplate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_msdyn_consoleapplicationsessiontemplate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_msdyn_consoleapplicationsessiontemplate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_msdyn_consoleapplicationsessiontemplate = {
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