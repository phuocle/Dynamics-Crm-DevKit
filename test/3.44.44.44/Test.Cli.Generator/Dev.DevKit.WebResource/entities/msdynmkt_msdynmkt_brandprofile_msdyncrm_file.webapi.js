'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_msdynmkt_brandprofile_msdyncrm_fileApi = function (e) {
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
		var _msdynmkt_msdynmkt_brandprofile_msdyncrm_file = {
			msdyncrm_fileid: { a: 'msdyncrm_fileid', r: true },
			msdynmkt_brandprofileid: { a: 'msdynmkt_brandprofileid', r: true },
			msdynmkt_msdynmkt_brandprofile_msdyncrm_fileId: { a: 'msdynmkt_msdynmkt_brandprofile_msdyncrm_fileid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_msdynmkt_brandprofile_msdyncrm_file = {};
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file.ODataEntity = e;
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file.FormattedValue = {};
		for (var field in _msdynmkt_msdynmkt_brandprofile_msdyncrm_file) {
			var a = _msdynmkt_msdynmkt_brandprofile_msdyncrm_file[field].a;
			var b = _msdynmkt_msdynmkt_brandprofile_msdyncrm_file[field].b;
			var c = _msdynmkt_msdynmkt_brandprofile_msdyncrm_file[field].c;
			var d = _msdynmkt_msdynmkt_brandprofile_msdyncrm_file[field].d;
			var g = _msdynmkt_msdynmkt_brandprofile_msdyncrm_file[field].g;
			var r = _msdynmkt_msdynmkt_brandprofile_msdyncrm_file[field].r;
			webApiField(msdynmkt_msdynmkt_brandprofile_msdyncrm_file, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file.Entity = u;
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file.EntityName = 'msdynmkt_msdynmkt_brandprofile_msdyncrm_file';
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file.EntityCollectionName = '';
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file['@odata.etag'] = e['@odata.etag'];
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_msdynmkt_brandprofile_msdyncrm_file.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_msdynmkt_brandprofile_msdyncrm_file;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_msdynmkt_brandprofile_msdyncrm_file = {
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