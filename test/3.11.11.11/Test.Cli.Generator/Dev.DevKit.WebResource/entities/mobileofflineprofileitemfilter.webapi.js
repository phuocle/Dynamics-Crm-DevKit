﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mobileofflineprofileitemfilterApi = function (e) {
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
		var _mobileofflineprofileitemfilter = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			fetchxml: { a: 'fetchxml' },
			mobileofflineprofileid: { b: 'mobileofflineprofileid', a: '_mobileofflineprofileid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			mobileofflineprofileitemfilterId: { a: 'mobileofflineprofileitemfilterid' },
			mobileofflineprofileitemid: { a: 'mobileofflineprofileitemid' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			Name: { a: 'name' },
			offlinesql: { a: 'offlinesql' },
			subtype: { a: 'subtype' },
			type: { a: 'type' },
			versionnumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var mobileofflineprofileitemfilter = {};
		mobileofflineprofileitemfilter.ODataEntity = e;
		mobileofflineprofileitemfilter.FormattedValue = {};
		for (var field in _mobileofflineprofileitemfilter) {
			var a = _mobileofflineprofileitemfilter[field].a;
			var b = _mobileofflineprofileitemfilter[field].b;
			var c = _mobileofflineprofileitemfilter[field].c;
			var d = _mobileofflineprofileitemfilter[field].d;
			var g = _mobileofflineprofileitemfilter[field].g;
			var r = _mobileofflineprofileitemfilter[field].r;
			webApiField(mobileofflineprofileitemfilter, field, e, a, b, c, d, r, u, g);
		}
		mobileofflineprofileitemfilter.Entity = u;
		mobileofflineprofileitemfilter.EntityName = 'mobileofflineprofileitemfilter';
		mobileofflineprofileitemfilter.EntityCollectionName = 'mobileofflineprofileitemfilters';
		mobileofflineprofileitemfilter['@odata.etag'] = e['@odata.etag'];
		mobileofflineprofileitemfilter.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mobileofflineprofileitemfilter.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mobileofflineprofileitemfilter;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mobileofflineprofileitemfilter = {
		returnedtypecode : {
		},
		subtype : {
			CUD_IN: 0,
			CUD_OUT: 4,
			FULL_SYNC: 5,
			RELATED_CUD_IN: 1,
			RELATED_ENTITIES: 6,
			RELATED_SHARED_IN: 3,
			SHARED_IN: 2
		},
		type : {
			DELTA_IN: 0,
			DELTA_OUT: 1,
			FULL_SYNC: 2,
			RELATED_ENTITIES: 4,
			TOP_1: 3
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