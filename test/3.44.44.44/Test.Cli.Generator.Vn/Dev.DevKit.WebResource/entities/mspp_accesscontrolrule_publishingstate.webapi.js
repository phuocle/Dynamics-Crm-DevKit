'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_accesscontrolrule_publishingstateApi = function (e) {
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
		var _mspp_accesscontrolrule_publishingstate = {
			mspp_accesscontrolrule_publishingstateId: { a: 'mspp_accesscontrolrule_publishingstateid', r: true },
			mspp_publishingstateid: { a: 'mspp_publishingstateid', r: true },
			mspp_webpageaccesscontrolruleid: { a: 'mspp_webpageaccesscontrolruleid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_accesscontrolrule_publishingstate = {};
		mspp_accesscontrolrule_publishingstate.ODataEntity = e;
		mspp_accesscontrolrule_publishingstate.FormattedValue = {};
		for (var field in _mspp_accesscontrolrule_publishingstate) {
			var a = _mspp_accesscontrolrule_publishingstate[field].a;
			var b = _mspp_accesscontrolrule_publishingstate[field].b;
			var c = _mspp_accesscontrolrule_publishingstate[field].c;
			var d = _mspp_accesscontrolrule_publishingstate[field].d;
			var g = _mspp_accesscontrolrule_publishingstate[field].g;
			var r = _mspp_accesscontrolrule_publishingstate[field].r;
			webApiField(mspp_accesscontrolrule_publishingstate, field, e, a, b, c, d, r, u, g);
		}
		mspp_accesscontrolrule_publishingstate.Entity = u;
		mspp_accesscontrolrule_publishingstate.EntityName = 'mspp_accesscontrolrule_publishingstate';
		mspp_accesscontrolrule_publishingstate.EntityCollectionName = '';
		mspp_accesscontrolrule_publishingstate['@odata.etag'] = e['@odata.etag'];
		mspp_accesscontrolrule_publishingstate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_accesscontrolrule_publishingstate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_accesscontrolrule_publishingstate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_accesscontrolrule_publishingstate = {
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