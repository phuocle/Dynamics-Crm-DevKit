'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_connectordatasource_environmentvaApi = function (e) {
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
		var _msdyn_connectordatasource_environmentva = {
			environmentvariabledefinitionid: { a: 'environmentvariabledefinitionid', r: true },
			msdyn_connectordatasource_environmentvaId: { a: 'msdyn_connectordatasource_environmentvaid', r: true },
			msdyn_connectordatasourceid: { a: 'msdyn_connectordatasourceid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_connectordatasource_environmentva = {};
		msdyn_connectordatasource_environmentva.ODataEntity = e;
		msdyn_connectordatasource_environmentva.FormattedValue = {};
		for (var field in _msdyn_connectordatasource_environmentva) {
			var a = _msdyn_connectordatasource_environmentva[field].a;
			var b = _msdyn_connectordatasource_environmentva[field].b;
			var c = _msdyn_connectordatasource_environmentva[field].c;
			var d = _msdyn_connectordatasource_environmentva[field].d;
			var g = _msdyn_connectordatasource_environmentva[field].g;
			var r = _msdyn_connectordatasource_environmentva[field].r;
			webApiField(msdyn_connectordatasource_environmentva, field, e, a, b, c, d, r, u, g);
		}
		msdyn_connectordatasource_environmentva.Entity = u;
		msdyn_connectordatasource_environmentva.EntityName = 'msdyn_connectordatasource_environmentva';
		msdyn_connectordatasource_environmentva.EntityCollectionName = '';
		msdyn_connectordatasource_environmentva['@odata.etag'] = e['@odata.etag'];
		msdyn_connectordatasource_environmentva.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_connectordatasource_environmentva.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_connectordatasource_environmentva;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_connectordatasource_environmentva = {
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