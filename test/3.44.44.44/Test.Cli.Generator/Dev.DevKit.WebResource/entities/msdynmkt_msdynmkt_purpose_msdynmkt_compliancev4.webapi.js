'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4Api = function (e) {
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
		var _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4 = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			msdynmkt_compliancesettings4id: { a: 'msdynmkt_compliancesettings4id', r: true },
			msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4Id: { a: 'msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4id', r: true },
			msdynmkt_purposeid: { a: 'msdynmkt_purposeid', r: true },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4 = {};
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4.ODataEntity = e;
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4.FormattedValue = {};
		for (var field in _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4) {
			var a = _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4[field].a;
			var b = _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4[field].b;
			var c = _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4[field].c;
			var d = _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4[field].d;
			var g = _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4[field].g;
			var r = _msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4[field].r;
			webApiField(msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4.Entity = u;
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4.EntityName = 'msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4';
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4.EntityCollectionName = '';
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4['@odata.etag'] = e['@odata.etag'];
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_msdynmkt_purpose_msdynmkt_compliancev4 = {
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