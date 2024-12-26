'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_casesuggestionApi = function (e) {
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
		var _msdyn_casesuggestion = {
			msdyn_additionalcontext: { a: 'msdyn_additionalcontext' },
			msdyn_casesuggestionId: { a: 'msdyn_casesuggestionid' },
			msdyn_confidencescore: { a: 'msdyn_confidencescore' },
			msdyn_keyphrases: { a: 'msdyn_keyphrases' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_rank: { a: 'msdyn_rank' },
			msdyn_suggestedentity: { b: 'msdyn_suggestedentity', a: '_msdyn_suggestedentity_value', c: 'incidents', d: 'incident' },
			msdyn_suggestionforentitylogicalname: { a: 'msdyn_suggestionforentitylogicalname' },
			msdyn_suggestionforid: { a: 'msdyn_suggestionforid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_casesuggestion = {};
		msdyn_casesuggestion.ODataEntity = e;
		msdyn_casesuggestion.FormattedValue = {};
		for (var field in _msdyn_casesuggestion) {
			var a = _msdyn_casesuggestion[field].a;
			var b = _msdyn_casesuggestion[field].b;
			var c = _msdyn_casesuggestion[field].c;
			var d = _msdyn_casesuggestion[field].d;
			var g = _msdyn_casesuggestion[field].g;
			var r = _msdyn_casesuggestion[field].r;
			webApiField(msdyn_casesuggestion, field, e, a, b, c, d, r, u, g);
		}
		msdyn_casesuggestion.Entity = u;
		msdyn_casesuggestion.EntityName = 'msdyn_casesuggestion';
		msdyn_casesuggestion.EntityCollectionName = 'msdyn_casesuggestions';
		msdyn_casesuggestion['@odata.etag'] = e['@odata.etag'];
		msdyn_casesuggestion.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_casesuggestion.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_casesuggestion;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_casesuggestion = {
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