﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_publishingstatetransitionruleApi = function (e) {
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
		var _mspp_publishingstatetransitionrule = {
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_fromstate_publishingstateid: { b: 'mspp_fromstate_publishingstateid', a: '_mspp_fromstate_publishingstateid_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_name: { a: 'mspp_name' },
			mspp_publishingstatetransitionruleId: { a: 'mspp_publishingstatetransitionruleid' },
			mspp_tostate_publishingstateid: { b: 'mspp_tostate_publishingstateid', a: '_mspp_tostate_publishingstateid_value', c: 'mspp_publishingstates', d: 'mspp_publishingstate' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_publishingstatetransitionrule = {};
		mspp_publishingstatetransitionrule.ODataEntity = e;
		mspp_publishingstatetransitionrule.FormattedValue = {};
		for (var field in _mspp_publishingstatetransitionrule) {
			var a = _mspp_publishingstatetransitionrule[field].a;
			var b = _mspp_publishingstatetransitionrule[field].b;
			var c = _mspp_publishingstatetransitionrule[field].c;
			var d = _mspp_publishingstatetransitionrule[field].d;
			var g = _mspp_publishingstatetransitionrule[field].g;
			var r = _mspp_publishingstatetransitionrule[field].r;
			webApiField(mspp_publishingstatetransitionrule, field, e, a, b, c, d, r, u, g);
		}
		mspp_publishingstatetransitionrule.Entity = u;
		mspp_publishingstatetransitionrule.EntityName = 'mspp_publishingstatetransitionrule';
		mspp_publishingstatetransitionrule.EntityCollectionName = 'mspp_publishingstatetransitionrules';
		mspp_publishingstatetransitionrule['@odata.etag'] = e['@odata.etag'];
		mspp_publishingstatetransitionrule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_publishingstatetransitionrule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_publishingstatetransitionrule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_publishingstatetransitionrule = {
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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