'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_smsphonenumberApi = function (e) {
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
		var _msdynmkt_smsphonenumber = {
			msdynmkt_number: { a: 'msdynmkt_number' },
			msdynmkt_smsphonenumberId: { a: 'msdynmkt_smsphonenumberid' },
			msdynmkt_status: { a: 'msdynmkt_status' },
			msdynmkt_type: { a: 'msdynmkt_type' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_smsphonenumber = {};
		msdynmkt_smsphonenumber.ODataEntity = e;
		msdynmkt_smsphonenumber.FormattedValue = {};
		for (var field in _msdynmkt_smsphonenumber) {
			var a = _msdynmkt_smsphonenumber[field].a;
			var b = _msdynmkt_smsphonenumber[field].b;
			var c = _msdynmkt_smsphonenumber[field].c;
			var d = _msdynmkt_smsphonenumber[field].d;
			var g = _msdynmkt_smsphonenumber[field].g;
			var r = _msdynmkt_smsphonenumber[field].r;
			webApiField(msdynmkt_smsphonenumber, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_smsphonenumber.Entity = u;
		msdynmkt_smsphonenumber.EntityName = 'msdynmkt_smsphonenumber';
		msdynmkt_smsphonenumber.EntityCollectionName = 'msdynmkt_smsphonenumbers';
		msdynmkt_smsphonenumber['@odata.etag'] = e['@odata.etag'];
		msdynmkt_smsphonenumber.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_smsphonenumber.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_smsphonenumber;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_smsphonenumber = {
		msdynmkt_status : {
			Active: 192350001,
			Pending: 192350000
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