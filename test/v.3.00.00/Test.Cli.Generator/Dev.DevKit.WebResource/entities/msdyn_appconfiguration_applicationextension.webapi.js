﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_appconfiguration_applicationextensionApi = function (e) {
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
		var _msdyn_appconfiguration_applicationextension = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			msdyn_appconfiguration_applicationextensionId: { a: 'msdyn_appconfiguration_applicationextensionid', r: true },
			msdyn_appconfigurationid: { a: 'msdyn_appconfigurationid', r: true },
			msdyn_applicationextensionid: { a: 'msdyn_applicationextensionid', r: true },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_appconfiguration_applicationextension = {};
		msdyn_appconfiguration_applicationextension.ODataEntity = e;
		msdyn_appconfiguration_applicationextension.FormattedValue = {};
		for (var field in _msdyn_appconfiguration_applicationextension) {
			var a = _msdyn_appconfiguration_applicationextension[field].a;
			var b = _msdyn_appconfiguration_applicationextension[field].b;
			var c = _msdyn_appconfiguration_applicationextension[field].c;
			var d = _msdyn_appconfiguration_applicationextension[field].d;
			var g = _msdyn_appconfiguration_applicationextension[field].g;
			var r = _msdyn_appconfiguration_applicationextension[field].r;
			webApiField(msdyn_appconfiguration_applicationextension, field, e, a, b, c, d, r, u, g);
		}
		msdyn_appconfiguration_applicationextension.Entity = u;
		msdyn_appconfiguration_applicationextension.EntityName = 'msdyn_appconfiguration_applicationextension';
		msdyn_appconfiguration_applicationextension.EntityCollectionName = '';
		msdyn_appconfiguration_applicationextension['@odata.etag'] = e['@odata.etag'];
		msdyn_appconfiguration_applicationextension.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_appconfiguration_applicationextension.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_appconfiguration_applicationextension;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_appconfiguration_applicationextension = {
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