'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_columnpermissionprofile_webroleApi = function (e) {
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
		var _mspp_columnpermissionprofile_webrole = {
			mspp_columnpermissionprofile_webroleId: { a: 'mspp_columnpermissionprofile_webroleid', r: true },
			mspp_columnpermissionprofileid: { a: 'mspp_columnpermissionprofileid', r: true },
			mspp_webroleid: { a: 'mspp_webroleid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_columnpermissionprofile_webrole = {};
		mspp_columnpermissionprofile_webrole.ODataEntity = e;
		mspp_columnpermissionprofile_webrole.FormattedValue = {};
		for (var field in _mspp_columnpermissionprofile_webrole) {
			var a = _mspp_columnpermissionprofile_webrole[field].a;
			var b = _mspp_columnpermissionprofile_webrole[field].b;
			var c = _mspp_columnpermissionprofile_webrole[field].c;
			var d = _mspp_columnpermissionprofile_webrole[field].d;
			var g = _mspp_columnpermissionprofile_webrole[field].g;
			var r = _mspp_columnpermissionprofile_webrole[field].r;
			webApiField(mspp_columnpermissionprofile_webrole, field, e, a, b, c, d, r, u, g);
		}
		mspp_columnpermissionprofile_webrole.Entity = u;
		mspp_columnpermissionprofile_webrole.EntityName = 'mspp_columnpermissionprofile_webrole';
		mspp_columnpermissionprofile_webrole.EntityCollectionName = '';
		mspp_columnpermissionprofile_webrole['@odata.etag'] = e['@odata.etag'];
		mspp_columnpermissionprofile_webrole.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_columnpermissionprofile_webrole.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_columnpermissionprofile_webrole;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_columnpermissionprofile_webrole = {
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