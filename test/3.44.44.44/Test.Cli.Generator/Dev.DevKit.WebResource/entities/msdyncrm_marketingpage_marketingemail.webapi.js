'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingpage_marketingemailApi = function (e) {
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
		var _msdyncrm_marketingpage_marketingemail = {
			msdyncrm_marketingemailid: { a: 'msdyncrm_marketingemailid', r: true },
			msdyncrm_marketingpage_marketingemailId: { a: 'msdyncrm_marketingpage_marketingemailid', r: true },
			msdyncrm_marketingpageid: { a: 'msdyncrm_marketingpageid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyncrm_marketingpage_marketingemail = {};
		msdyncrm_marketingpage_marketingemail.ODataEntity = e;
		msdyncrm_marketingpage_marketingemail.FormattedValue = {};
		for (var field in _msdyncrm_marketingpage_marketingemail) {
			var a = _msdyncrm_marketingpage_marketingemail[field].a;
			var b = _msdyncrm_marketingpage_marketingemail[field].b;
			var c = _msdyncrm_marketingpage_marketingemail[field].c;
			var d = _msdyncrm_marketingpage_marketingemail[field].d;
			var g = _msdyncrm_marketingpage_marketingemail[field].g;
			var r = _msdyncrm_marketingpage_marketingemail[field].r;
			webApiField(msdyncrm_marketingpage_marketingemail, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingpage_marketingemail.Entity = u;
		msdyncrm_marketingpage_marketingemail.EntityName = 'msdyncrm_marketingpage_marketingemail';
		msdyncrm_marketingpage_marketingemail.EntityCollectionName = '';
		msdyncrm_marketingpage_marketingemail['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingpage_marketingemail.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingpage_marketingemail.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingpage_marketingemail;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingpage_marketingemail = {
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