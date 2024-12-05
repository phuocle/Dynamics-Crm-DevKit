'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_customerjourney_msdyncrm_marketingemailApi = function (e) {
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
		var _msdyncrm_customerjourney_msdyncrm_marketingemail = {
			msdyncrm_customerjourney_msdyncrm_marketingemailId: { a: 'msdyncrm_customerjourney_msdyncrm_marketingemailid', r: true },
			msdyncrm_customerjourneyid: { a: 'msdyncrm_customerjourneyid', r: true },
			msdyncrm_marketingemailid: { a: 'msdyncrm_marketingemailid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyncrm_customerjourney_msdyncrm_marketingemail = {};
		msdyncrm_customerjourney_msdyncrm_marketingemail.ODataEntity = e;
		msdyncrm_customerjourney_msdyncrm_marketingemail.FormattedValue = {};
		for (var field in _msdyncrm_customerjourney_msdyncrm_marketingemail) {
			var a = _msdyncrm_customerjourney_msdyncrm_marketingemail[field].a;
			var b = _msdyncrm_customerjourney_msdyncrm_marketingemail[field].b;
			var c = _msdyncrm_customerjourney_msdyncrm_marketingemail[field].c;
			var d = _msdyncrm_customerjourney_msdyncrm_marketingemail[field].d;
			var g = _msdyncrm_customerjourney_msdyncrm_marketingemail[field].g;
			var r = _msdyncrm_customerjourney_msdyncrm_marketingemail[field].r;
			webApiField(msdyncrm_customerjourney_msdyncrm_marketingemail, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_customerjourney_msdyncrm_marketingemail.Entity = u;
		msdyncrm_customerjourney_msdyncrm_marketingemail.EntityName = 'msdyncrm_customerjourney_msdyncrm_marketingemail';
		msdyncrm_customerjourney_msdyncrm_marketingemail.EntityCollectionName = '';
		msdyncrm_customerjourney_msdyncrm_marketingemail['@odata.etag'] = e['@odata.etag'];
		msdyncrm_customerjourney_msdyncrm_marketingemail.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_customerjourney_msdyncrm_marketingemail.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_customerjourney_msdyncrm_marketingemail;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_customerjourney_msdyncrm_marketingemail = {
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