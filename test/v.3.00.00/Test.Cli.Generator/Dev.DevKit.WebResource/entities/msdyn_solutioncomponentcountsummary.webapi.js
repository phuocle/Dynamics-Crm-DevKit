'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_solutioncomponentcountsummaryApi = function (e) {
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
		var _msdyn_solutioncomponentcountsummary = {
			msdyn_componentlogicalname: { a: 'msdyn_componentlogicalname' },
			msdyn_componenttype: { a: 'msdyn_componenttype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_primaryentityname: { a: 'msdyn_primaryentityname' },
			msdyn_solutioncomponentcountsummaryId: { a: 'msdyn_solutioncomponentcountsummaryid' },
			msdyn_solutionid: { a: 'msdyn_solutionid' },
			msdyn_subtype: { a: 'msdyn_subtype' },
			msdyn_total: { a: 'msdyn_total' },
			msdyn_workflowcategory: { a: 'msdyn_workflowcategory' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_solutioncomponentcountsummary = {};
		msdyn_solutioncomponentcountsummary.ODataEntity = e;
		msdyn_solutioncomponentcountsummary.FormattedValue = {};
		for (var field in _msdyn_solutioncomponentcountsummary) {
			var a = _msdyn_solutioncomponentcountsummary[field].a;
			var b = _msdyn_solutioncomponentcountsummary[field].b;
			var c = _msdyn_solutioncomponentcountsummary[field].c;
			var d = _msdyn_solutioncomponentcountsummary[field].d;
			var g = _msdyn_solutioncomponentcountsummary[field].g;
			var r = _msdyn_solutioncomponentcountsummary[field].r;
			webApiField(msdyn_solutioncomponentcountsummary, field, e, a, b, c, d, r, u, g);
		}
		msdyn_solutioncomponentcountsummary.Entity = u;
		msdyn_solutioncomponentcountsummary.EntityName = 'msdyn_solutioncomponentcountsummary';
		msdyn_solutioncomponentcountsummary.EntityCollectionName = 'msdyn_solutioncomponentcountsummaries';
		msdyn_solutioncomponentcountsummary['@odata.etag'] = e['@odata.etag'];
		msdyn_solutioncomponentcountsummary.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_solutioncomponentcountsummary.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_solutioncomponentcountsummary;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_solutioncomponentcountsummary = {
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