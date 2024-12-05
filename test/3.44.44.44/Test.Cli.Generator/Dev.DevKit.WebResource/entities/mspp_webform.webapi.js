'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_webformApi = function (e) {
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
		var _mspp_webform = {
			mspp_authenticationrequired: { a: 'mspp_authenticationrequired' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_editexistingrecordpermitted: { a: 'mspp_editexistingrecordpermitted' },
			mspp_editexpiredmessage: { a: 'mspp_editexpiredmessage' },
			mspp_editexpiredstatecode: { a: 'mspp_editexpiredstatecode' },
			mspp_editexpiredstatuscode: { a: 'mspp_editexpiredstatuscode' },
			mspp_editnotpermittedmessage: { a: 'mspp_editnotpermittedmessage' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_multiplerecordsperuserpermitted: { a: 'mspp_multiplerecordsperuserpermitted' },
			mspp_name: { a: 'mspp_name' },
			mspp_progressindicatorenabled: { a: 'mspp_progressindicatorenabled' },
			mspp_progressindicatorignorelaststep: { a: 'mspp_progressindicatorignorelaststep' },
			mspp_progressindicatorposition: { a: 'mspp_progressindicatorposition' },
			mspp_progressindicatorprependstepnum: { a: 'mspp_progressindicatorprependstepnum' },
			mspp_progressindicatortype: { a: 'mspp_progressindicatortype' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages' },
			mspp_savechangeswarningmessage: { a: 'mspp_savechangeswarningmessage' },
			mspp_savechangeswarningonclose: { a: 'mspp_savechangeswarningonclose' },
			mspp_startnewsessiononload: { a: 'mspp_startnewsessiononload' },
			mspp_startstep: { b: 'mspp_startstep', a: '_mspp_startstep_value', c: 'mspp_webformsteps', d: 'mspp_webformstep' },
			mspp_webformId: { a: 'mspp_webformid' },
			mspp_websiteid: { b: 'mspp_websiteid', a: '_mspp_websiteid_value', c: 'mspp_websites', d: 'mspp_website' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_webform = {};
		mspp_webform.ODataEntity = e;
		mspp_webform.FormattedValue = {};
		for (var field in _mspp_webform) {
			var a = _mspp_webform[field].a;
			var b = _mspp_webform[field].b;
			var c = _mspp_webform[field].c;
			var d = _mspp_webform[field].d;
			var g = _mspp_webform[field].g;
			var r = _mspp_webform[field].r;
			webApiField(mspp_webform, field, e, a, b, c, d, r, u, g);
		}
		mspp_webform.Entity = u;
		mspp_webform.EntityName = 'mspp_webform';
		mspp_webform.EntityCollectionName = 'mspp_webforms';
		mspp_webform['@odata.etag'] = e['@odata.etag'];
		mspp_webform.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_webform.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_webform;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webform = {
		mspp_progressindicatorposition : {
			Bottom: 756150001,
			Left: 756150002,
			Right: 756150003,
			Top: 756150000
		},
		mspp_progressindicatortype : {
			Numeric_Step_1_of_N: 756150001,
			Progress_Bar: 756150002,
			Title: 756150000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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