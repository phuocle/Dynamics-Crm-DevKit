'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_worklistsuggestionApi = function (e) {
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
		var _msdyn_worklistsuggestion = {
			msdyn_accessrightsmask: { a: 'msdyn_accessrightsmask' },
			msdyn_customdata: { a: 'msdyn_customdata' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_potentialrevenue: { a: 'msdyn_potentialrevenue' },
			msdyn_relatedcustomdata: { a: 'msdyn_relatedcustomdata' },
			msdyn_relatedinsights: { a: 'msdyn_relatedinsights' },
			msdyn_relatedrecordid: { a: 'msdyn_relatedrecordid' },
			msdyn_relatedrecordname: { a: 'msdyn_relatedrecordname' },
			msdyn_relatedrecordtype: { a: 'msdyn_relatedrecordtype' },
			msdyn_salesmotion: { a: 'msdyn_salesmotion' },
			msdyn_salesplay: { a: 'msdyn_salesplay' },
			msdyn_solutionarea: { a: 'msdyn_solutionarea' },
			msdyn_suggesteddate_UtcDateOnly: { a: 'msdyn_suggesteddate' },
			msdyn_worklistsuggestionId: { a: 'msdyn_worklistsuggestionid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_worklistsuggestion = {};
		msdyn_worklistsuggestion.ODataEntity = e;
		msdyn_worklistsuggestion.FormattedValue = {};
		for (var field in _msdyn_worklistsuggestion) {
			var a = _msdyn_worklistsuggestion[field].a;
			var b = _msdyn_worklistsuggestion[field].b;
			var c = _msdyn_worklistsuggestion[field].c;
			var d = _msdyn_worklistsuggestion[field].d;
			var g = _msdyn_worklistsuggestion[field].g;
			var r = _msdyn_worklistsuggestion[field].r;
			webApiField(msdyn_worklistsuggestion, field, e, a, b, c, d, r, u, g);
		}
		msdyn_worklistsuggestion.Entity = u;
		msdyn_worklistsuggestion.EntityName = 'msdyn_worklistsuggestion';
		msdyn_worklistsuggestion.EntityCollectionName = 'msdyn_worklistsuggestions';
		msdyn_worklistsuggestion['@odata.etag'] = e['@odata.etag'];
		msdyn_worklistsuggestion.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_worklistsuggestion.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_worklistsuggestion;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_worklistsuggestion = {
		msdyn_salesmotion : {
			Default: 1
		},
		msdyn_salesplay : {
			Default: 1
		},
		msdyn_solutionarea : {
			Default: 1
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