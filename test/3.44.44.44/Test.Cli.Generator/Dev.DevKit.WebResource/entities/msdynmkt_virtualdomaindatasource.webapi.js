'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_virtualdomaindatasourceApi = function (e) {
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
		var _msdynmkt_virtualdomaindatasource = {
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_virtualdomaindatasourceId: { a: 'msdynmkt_virtualdomaindatasourceid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_virtualdomaindatasource = {};
		msdynmkt_virtualdomaindatasource.ODataEntity = e;
		msdynmkt_virtualdomaindatasource.FormattedValue = {};
		for (var field in _msdynmkt_virtualdomaindatasource) {
			var a = _msdynmkt_virtualdomaindatasource[field].a;
			var b = _msdynmkt_virtualdomaindatasource[field].b;
			var c = _msdynmkt_virtualdomaindatasource[field].c;
			var d = _msdynmkt_virtualdomaindatasource[field].d;
			var g = _msdynmkt_virtualdomaindatasource[field].g;
			var r = _msdynmkt_virtualdomaindatasource[field].r;
			webApiField(msdynmkt_virtualdomaindatasource, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_virtualdomaindatasource.Entity = u;
		msdynmkt_virtualdomaindatasource.EntityName = 'msdynmkt_virtualdomaindatasource';
		msdynmkt_virtualdomaindatasource.EntityCollectionName = 'msdynmkt_virtualdomaindatasources';
		msdynmkt_virtualdomaindatasource['@odata.etag'] = e['@odata.etag'];
		msdynmkt_virtualdomaindatasource.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_virtualdomaindatasource.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_virtualdomaindatasource;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_virtualdomaindatasource = {
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