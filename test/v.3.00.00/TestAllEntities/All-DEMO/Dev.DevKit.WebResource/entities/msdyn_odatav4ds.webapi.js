'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_odatav4dsApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyn_odatav4ds = {
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
		for (var field in msdyn_odatav4ds) {
			var a = msdyn_odatav4ds[field].a;
			var b = msdyn_odatav4ds[field].b;
			var c = msdyn_odatav4ds[field].c;
			var d = msdyn_odatav4ds[field].d;
			var g = msdyn_odatav4ds[field].g;
			var r = msdyn_odatav4ds[field].r;
			msdyn_odatav4ds[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_odatav4ds.Entity = u;
		msdyn_odatav4ds.EntityName = 'msdyn_odatav4ds';
		msdyn_odatav4ds.EntityCollectionName = 'msdyn_odatav4dses';
		msdyn_odatav4ds['@odata.etag'] = e['@odata.etag'];
		msdyn_odatav4ds.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_odatav4ds.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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
				Clientside_Paging: 0,
				Serverside_Paging: 1
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