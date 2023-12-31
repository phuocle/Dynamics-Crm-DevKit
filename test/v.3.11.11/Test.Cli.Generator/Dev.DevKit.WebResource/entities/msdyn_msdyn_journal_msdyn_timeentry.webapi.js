'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_msdyn_journal_msdyn_timeentryApi = function (e) {
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
		var _msdyn_msdyn_journal_msdyn_timeentry = {
			msdyn_journalid: { a: 'msdyn_journalid', r: true },
			msdyn_msdyn_journal_msdyn_timeentryId: { a: 'msdyn_msdyn_journal_msdyn_timeentryid', r: true },
			msdyn_timeentryid: { a: 'msdyn_timeentryid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_msdyn_journal_msdyn_timeentry = {};
		msdyn_msdyn_journal_msdyn_timeentry.ODataEntity = e;
		msdyn_msdyn_journal_msdyn_timeentry.FormattedValue = {};
		for (var field in _msdyn_msdyn_journal_msdyn_timeentry) {
			var a = _msdyn_msdyn_journal_msdyn_timeentry[field].a;
			var b = _msdyn_msdyn_journal_msdyn_timeentry[field].b;
			var c = _msdyn_msdyn_journal_msdyn_timeentry[field].c;
			var d = _msdyn_msdyn_journal_msdyn_timeentry[field].d;
			var g = _msdyn_msdyn_journal_msdyn_timeentry[field].g;
			var r = _msdyn_msdyn_journal_msdyn_timeentry[field].r;
			webApiField(msdyn_msdyn_journal_msdyn_timeentry, field, e, a, b, c, d, r, u, g);
		}
		msdyn_msdyn_journal_msdyn_timeentry.Entity = u;
		msdyn_msdyn_journal_msdyn_timeentry.EntityName = 'msdyn_msdyn_journal_msdyn_timeentry';
		msdyn_msdyn_journal_msdyn_timeentry.EntityCollectionName = '';
		msdyn_msdyn_journal_msdyn_timeentry['@odata.etag'] = e['@odata.etag'];
		msdyn_msdyn_journal_msdyn_timeentry.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_msdyn_journal_msdyn_timeentry.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_msdyn_journal_msdyn_timeentry;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_msdyn_journal_msdyn_timeentry = {
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