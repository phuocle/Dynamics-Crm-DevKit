'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_linkedinuserprofile_accountApi = function (e) {
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
		var _msdyncrm_linkedinuserprofile_account = {
			msdyncrm_linkedinaccountid: { a: 'msdyncrm_linkedinaccountid', r: true },
			msdyncrm_linkedinuserprofile_accountId: { a: 'msdyncrm_linkedinuserprofile_accountid', r: true },
			msdyncrm_linkedinuserprofileid: { a: 'msdyncrm_linkedinuserprofileid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyncrm_linkedinuserprofile_account = {};
		msdyncrm_linkedinuserprofile_account.ODataEntity = e;
		msdyncrm_linkedinuserprofile_account.FormattedValue = {};
		for (var field in _msdyncrm_linkedinuserprofile_account) {
			var a = _msdyncrm_linkedinuserprofile_account[field].a;
			var b = _msdyncrm_linkedinuserprofile_account[field].b;
			var c = _msdyncrm_linkedinuserprofile_account[field].c;
			var d = _msdyncrm_linkedinuserprofile_account[field].d;
			var g = _msdyncrm_linkedinuserprofile_account[field].g;
			var r = _msdyncrm_linkedinuserprofile_account[field].r;
			webApiField(msdyncrm_linkedinuserprofile_account, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_linkedinuserprofile_account.Entity = u;
		msdyncrm_linkedinuserprofile_account.EntityName = 'msdyncrm_linkedinuserprofile_account';
		msdyncrm_linkedinuserprofile_account.EntityCollectionName = '';
		msdyncrm_linkedinuserprofile_account['@odata.etag'] = e['@odata.etag'];
		msdyncrm_linkedinuserprofile_account.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_linkedinuserprofile_account.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_linkedinuserprofile_account;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_linkedinuserprofile_account = {
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