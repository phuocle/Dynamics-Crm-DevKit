'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_odatav4dsApi = function (e) {
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
		var _msdyn_odatav4ds = {
			msdyn_description: { a: 'msdyn_description' },
			msdyn_isparameter10header: { a: 'msdyn_isparameter10header' },
			msdyn_isparameter1header: { a: 'msdyn_isparameter1header' },
			msdyn_isparameter2header: { a: 'msdyn_isparameter2header' },
			msdyn_isparameter3header: { a: 'msdyn_isparameter3header' },
			msdyn_isparameter4header: { a: 'msdyn_isparameter4header' },
			msdyn_isparameter5header: { a: 'msdyn_isparameter5header' },
			msdyn_isparameter6header: { a: 'msdyn_isparameter6header' },
			msdyn_isparameter7header: { a: 'msdyn_isparameter7header' },
			msdyn_isparameter8header: { a: 'msdyn_isparameter8header' },
			msdyn_isparameter9header: { a: 'msdyn_isparameter9header' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_odatav4dsId: { a: 'msdyn_odatav4dsid' },
			msdyn_paginationmode: { a: 'msdyn_paginationmode' },
			msdyn_paginationtype: { a: 'msdyn_paginationtype' },
			msdyn_parameter10name: { a: 'msdyn_parameter10name' },
			msdyn_parameter10value: { a: 'msdyn_parameter10value' },
			msdyn_parameter1name: { a: 'msdyn_parameter1name' },
			msdyn_parameter1value: { a: 'msdyn_parameter1value' },
			msdyn_parameter2name: { a: 'msdyn_parameter2name' },
			msdyn_parameter2value: { a: 'msdyn_parameter2value' },
			msdyn_parameter3name: { a: 'msdyn_parameter3name' },
			msdyn_parameter3value: { a: 'msdyn_parameter3value' },
			msdyn_parameter4name: { a: 'msdyn_parameter4name' },
			msdyn_parameter4value: { a: 'msdyn_parameter4value' },
			msdyn_parameter5name: { a: 'msdyn_parameter5name' },
			msdyn_parameter5value: { a: 'msdyn_parameter5value' },
			msdyn_parameter6name: { a: 'msdyn_parameter6name' },
			msdyn_parameter6value: { a: 'msdyn_parameter6value' },
			msdyn_parameter7name: { a: 'msdyn_parameter7name' },
			msdyn_parameter7value: { a: 'msdyn_parameter7value' },
			msdyn_parameter8name: { a: 'msdyn_parameter8name' },
			msdyn_parameter8value: { a: 'msdyn_parameter8value' },
			msdyn_parameter9name: { a: 'msdyn_parameter9name' },
			msdyn_parameter9value: { a: 'msdyn_parameter9value' },
			msdyn_returninlinecount: { a: 'msdyn_returninlinecount' },
			msdyn_timeout: { a: 'msdyn_timeout' },
			msdyn_uri: { a: 'msdyn_uri' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_odatav4ds = {};
		msdyn_odatav4ds.ODataEntity = e;
		msdyn_odatav4ds.FormattedValue = {};
		for (var field in _msdyn_odatav4ds) {
			var a = _msdyn_odatav4ds[field].a;
			var b = _msdyn_odatav4ds[field].b;
			var c = _msdyn_odatav4ds[field].c;
			var d = _msdyn_odatav4ds[field].d;
			var g = _msdyn_odatav4ds[field].g;
			var r = _msdyn_odatav4ds[field].r;
			webApiField(msdyn_odatav4ds, field, e, a, b, c, d, r, u, g);
		}
		msdyn_odatav4ds.Entity = u;
		msdyn_odatav4ds.EntityName = 'msdyn_odatav4ds';
		msdyn_odatav4ds.EntityCollectionName = 'msdyn_odatav4dses';
		msdyn_odatav4ds['@odata.etag'] = e['@odata.etag'];
		msdyn_odatav4ds.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_odatav4ds.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_odatav4ds;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_odatav4ds = {
		msdyn_paginationtype : {
			Phan_trang_phia_may_chu: 1,
			Phan_trang_phia_ung_dung_khach: 0
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