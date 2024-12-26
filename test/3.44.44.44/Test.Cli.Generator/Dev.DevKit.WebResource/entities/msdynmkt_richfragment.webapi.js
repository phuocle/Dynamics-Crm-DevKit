'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_richfragmentApi = function (e) {
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
		var _msdynmkt_richfragment = {
			msdynmkt_checkedoutto: { a: 'msdynmkt_checkedoutto' },
			msdynmkt_createdon_UtcDateAndTime: { a: 'msdynmkt_createdon' },
			msdynmkt_fragmentcontent: { a: 'msdynmkt_fragmentcontent' },
			msdynmkt_ischeckedouttome: { a: 'msdynmkt_ischeckedouttome' },
			msdynmkt_modifiedon_UtcDateAndTime: { a: 'msdynmkt_modifiedon' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_placeholders: { a: 'msdynmkt_placeholders' },
			msdynmkt_richfragmentId: { a: 'msdynmkt_richfragmentid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_richfragment = {};
		msdynmkt_richfragment.ODataEntity = e;
		msdynmkt_richfragment.FormattedValue = {};
		for (var field in _msdynmkt_richfragment) {
			var a = _msdynmkt_richfragment[field].a;
			var b = _msdynmkt_richfragment[field].b;
			var c = _msdynmkt_richfragment[field].c;
			var d = _msdynmkt_richfragment[field].d;
			var g = _msdynmkt_richfragment[field].g;
			var r = _msdynmkt_richfragment[field].r;
			webApiField(msdynmkt_richfragment, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_richfragment.Entity = u;
		msdynmkt_richfragment.EntityName = 'msdynmkt_richfragment';
		msdynmkt_richfragment.EntityCollectionName = 'msdynmkt_richfragments';
		msdynmkt_richfragment['@odata.etag'] = e['@odata.etag'];
		msdynmkt_richfragment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_richfragment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_richfragment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_richfragment = {
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