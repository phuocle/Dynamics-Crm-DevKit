﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_virtualsegmentdatasourceApi = function (e) {
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
		var _msdynmkt_virtualsegmentdatasource = {
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_virtualsegmentdatasourceId: { a: 'msdynmkt_virtualsegmentdatasourceid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_virtualsegmentdatasource = {};
		msdynmkt_virtualsegmentdatasource.ODataEntity = e;
		msdynmkt_virtualsegmentdatasource.FormattedValue = {};
		for (var field in _msdynmkt_virtualsegmentdatasource) {
			var a = _msdynmkt_virtualsegmentdatasource[field].a;
			var b = _msdynmkt_virtualsegmentdatasource[field].b;
			var c = _msdynmkt_virtualsegmentdatasource[field].c;
			var d = _msdynmkt_virtualsegmentdatasource[field].d;
			var g = _msdynmkt_virtualsegmentdatasource[field].g;
			var r = _msdynmkt_virtualsegmentdatasource[field].r;
			webApiField(msdynmkt_virtualsegmentdatasource, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_virtualsegmentdatasource.Entity = u;
		msdynmkt_virtualsegmentdatasource.EntityName = 'msdynmkt_virtualsegmentdatasource';
		msdynmkt_virtualsegmentdatasource.EntityCollectionName = 'msdynmkt_virtualsegmentdatasources';
		msdynmkt_virtualsegmentdatasource['@odata.etag'] = e['@odata.etag'];
		msdynmkt_virtualsegmentdatasource.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_virtualsegmentdatasource.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_virtualsegmentdatasource;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_virtualsegmentdatasource = {
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